import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { downloadMaterial, isOfficeFile, isPrivateHost, officeViewerUrl } from "../materialLinks";

async function loadXlsx() {
  const mod = await import("xlsx");
  return mod.read ? mod : mod.default;
}

export default function OfficePreview() {
  const [params] = useSearchParams();
  const src = params.get("src") || "";
  const name = params.get("name") || "Document";
  const type = params.get("type") || "";
  const allowed = src.startsWith("/materials/") && !src.includes("..") && isOfficeFile(type);
  const stageRef = useRef(null);
  const bookRef = useRef(null);
  const [sheetNames, setSheetNames] = useState([]);
  const [activeSheet, setActiveSheet] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    if (!allowed) {
      setLoading(false);
      setError("This file cannot be opened from here.");
      return undefined;
    }

    if (!isPrivateHost(window.location.hostname)) {
      window.location.replace(officeViewerUrl(src));
      return undefined;
    }

    let cancelled = false;
    const stage = stageRef.current;

    async function load() {
      setLoading(true);
      setError("");
      const response = await fetch(src);
      if (!response.ok) throw new Error(String(response.status));
      const buffer = await response.arrayBuffer();
      if (cancelled || !stage) return;
      stage.innerHTML = "";

      if (type === "docx") {
        const { renderAsync } = await import("docx-preview");
        await renderAsync(buffer, stage, stage, { inWrapper: true, breakPages: true });
      } else if (type === "xlsx") {
        const XLSX = await loadXlsx();
        const book = XLSX.read(buffer, { type: "array" });
        bookRef.current = book;
        setSheetNames(book.SheetNames);
        setActiveSheet(book.SheetNames[0] || "");
      } else {
        const { init } = await import("pptx-preview");
        const width = Math.min(1000, Math.max(320, stage.clientWidth || window.innerWidth - 48));
        const viewer = init(stage, { width, mode: "list" });
        await viewer.preview(buffer);
      }
      if (!cancelled) setLoading(false);
    }

    load().catch(() => {
      if (!cancelled) {
        setLoading(false);
        setError("This file could not be opened in the viewer. Use Download to save a copy.");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [allowed, src, type]);

  useEffect(() => {
    if (type !== "xlsx" || !activeSheet || !bookRef.current || !stageRef.current) return undefined;
    let cancelled = false;
    loadXlsx().then((XLSX) => {
      if (cancelled || !stageRef.current || !bookRef.current) return;
      const html = XLSX.utils.sheet_to_html(bookRef.current.Sheets[activeSheet]);
      const table = html.match(/<table[\s\S]*<\/table>/i);
      stageRef.current.innerHTML = table ? table[0] : html;
    });
    return () => {
      cancelled = true;
    };
  }, [activeSheet, type]);

  const material = { url: src, name, type };

  return (
    <main className="viewer-page">
      <header className="viewer-bar">
        <div>
          <p className="kicker">Document viewer</p>
          <h1 className="viewer-title">{name}</h1>
        </div>
        {allowed ? (
          <a
            className="btn btn-ghost"
            href={src}
            download={name}
            onClick={(event) => {
              event.preventDefault();
              downloadMaterial(material);
            }}
          >
            Download
          </a>
        ) : null}
      </header>

      {type === "xlsx" && sheetNames.length > 1 ? (
        <div className="sheet-tabs" role="tablist" aria-label="Worksheets">
          {sheetNames.map((sheet) => (
            <button
              key={sheet}
              type="button"
              className={sheet === activeSheet ? "btn btn-solid" : "btn btn-ghost"}
              onClick={() => setActiveSheet(sheet)}
            >
              {sheet}
            </button>
          ))}
        </div>
      ) : null}

      {loading && !error ? <p className="lede viewer-status">Opening file…</p> : null}
      {error ? <p className="empty">{error}</p> : null}
      <div ref={stageRef} className={`viewer-stage viewer-${type}`} />
    </main>
  );
}
