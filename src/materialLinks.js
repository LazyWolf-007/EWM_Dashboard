const OFFICE = new Set(["docx", "xlsx", "pptx"]);

export function isOfficeFile(type) {
  return OFFICE.has(type);
}

export function isPrivateHost(hostname = "") {
  const host = hostname.toLowerCase();
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host === "[::1]" ||
    host.endsWith(".local") ||
    host.endsWith(".localhost")
  );
}

export function officeViewerUrl(fileUrl) {
  const absolute = new URL(fileUrl, window.location.origin).href;
  return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(absolute)}`;
}

export function openHref(material) {
  if (!isOfficeFile(material.type)) return material.url;
  if (typeof window !== "undefined" && !isPrivateHost(window.location.hostname)) {
    return officeViewerUrl(material.url);
  }
  const params = new URLSearchParams({
    src: material.url,
    name: material.name,
    type: material.type,
  });
  return `/preview?${params.toString()}`;
}

export async function downloadMaterial(material) {
  try {
    const response = await fetch(material.url);
    if (!response.ok) throw new Error(String(response.status));
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = material.name;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
  } catch {
    const anchor = document.createElement("a");
    anchor.href = material.url;
    anchor.download = material.name;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }
}
