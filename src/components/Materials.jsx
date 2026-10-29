import { downloadMaterial, openHref } from "../materialLinks";
import { Icon } from "./Icons";

const TYPE_LABEL = {
  pdf: "PDF",
  docx: "DOCX",
  xlsx: "XLSX",
  pptx: "PPTX",
  image: "IMAGE",
  video: "VIDEO",
  html: "HTML",
  link: "LINK",
};

export function typeLabel(type) {
  return TYPE_LABEL[type] || String(type || "").toUpperCase();
}

export function MaterialActions({ material }) {
  if (material.type === "link") {
    return (
      <div className="material-actions">
        <a className="btn btn-solid" href={material.url} target="_blank" rel="noopener noreferrer">
          Open dashboard
          <Icon name="external" className="icon icon-sm" />
        </a>
      </div>
    );
  }

  return (
    <div className="material-actions">
      <a className="btn btn-solid" href={openHref(material)} target="_blank" rel="noopener noreferrer">
        Open
        <Icon name="external" className="icon icon-sm" />
      </a>
      <a
        className="btn btn-ghost"
        href={material.url}
        download={material.name}
        onClick={(event) => {
          event.preventDefault();
          downloadMaterial(material);
        }}
      >
        <Icon name="download" className="icon icon-sm" />
        Download
      </a>
    </div>
  );
}

export function MaterialRow({ material }) {
  return (
    <li className="material">
      <div className="material-copy">
        <p className="material-name">{material.name}</p>
        <span className={`type-chip type-${material.type}`}>{typeLabel(material.type)}</span>
      </div>
      <MaterialActions material={material} />
    </li>
  );
}

export function SubmissionCard({ item, index = 0 }) {
  return (
    <article className="card" style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
      <header className="card-head">
        <div>
          <p className="eyebrow">{item.category}</p>
          <h2>{item.title}</h2>
        </div>
        <span className="status">{item.status}</span>
      </header>
      {item.blurb ? <p className="blurb">{item.blurb}</p> : null}
      <dl className="meta">
        <div>
          <dt>Due</dt>
          <dd>{item.dueLabel}</dd>
        </div>
        <div>
          <dt>Points</dt>
          <dd>{item.pointsLabel}</dd>
        </div>
      </dl>
      <div className="materials-block">
        <h3>Materials</h3>
        <ul>
          {item.materials.map((material) => (
            <MaterialRow key={`${item.id}-${material.name}`} material={material} />
          ))}
        </ul>
      </div>
    </article>
  );
}
