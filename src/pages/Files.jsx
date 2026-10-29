import { useMemo, useState } from "react";
import { Icon } from "../components/Icons";
import { MaterialActions, typeLabel } from "../components/Materials";
import { fileMaterials, stats } from "../data";

export default function Files() {
  const [query, setQuery] = useState("all");
  const [text, setText] = useState("");
  const types = useMemo(() => ["all", ...new Set(fileMaterials.map((item) => item.type))], []);
  const visible = fileMaterials.filter((item) => {
    const typeOk = query === "all" || item.type === query;
    const needle = text.trim().toLocaleLowerCase();
    const textOk = !needle || `${item.name} ${item.submissionTitle}`.toLocaleLowerCase().includes(needle);
    return typeOk && textOk;
  });

  return (
    <section className="page">
      <header className="page-head">
        <div>
          <p className="kicker">Direct review</p>
          <h1>Files</h1>
          <p className="lede">
            {stats.materials} submitted files. Open reads a file in a new tab. Download saves a copy.
          </p>
        </div>
      </header>

      <div className="toolbar">
        <label className="search">
          <span className="sr-only">Search files</span>
          <Icon name="search" />
          <input type="search" value={text} placeholder="Search file or submission" onChange={(event) => setText(event.target.value)} />
        </label>
        <label className="filter">
          <span>Type</span>
          <select value={query} onChange={(event) => setQuery(event.target.value)}>
            {types.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All types" : typeLabel(type)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="result-count">
        {visible.length} of {fileMaterials.length} files
      </p>

      {visible.length === 0 ? (
        <p className="empty">No files match this search.</p>
      ) : (
        <ul className="file-list">
          {visible.map((item) => (
            <li key={`${item.submissionId}-${item.name}`}>
              <div>
                <p className="material-name">{item.name}</p>
                <p className="file-meta">
                  <span className={`type-chip type-${item.type}`}>{typeLabel(item.type)}</span>
                  {item.submissionTitle}
                </p>
              </div>
              <MaterialActions material={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
