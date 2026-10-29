import { Icon } from "../components/Icons";
import { MaterialActions } from "../components/Materials";
import { externalLinks, featuredDashboard, fileMaterials } from "../data";

export default function OnlineDashboards() {
  const localDashboards = fileMaterials.filter((item) => item.type === "html");
  const otherLinks = externalLinks.filter((item) => item.url !== featuredDashboard.url);

  return (
    <section className="page">
      <header className="page-head">
        <div>
          <p className="kicker">Review in the browser</p>
          <h1>Online Dashboards</h1>
          <p className="lede">External dashboards open in a new tab. Local HTML pages open from the materials folder.</p>
        </div>
      </header>

      <article className="feature-panel">
        <p className="eyebrow">Primary link</p>
        <h2>{featuredDashboard.name}</h2>
        <p>{featuredDashboard.note}</p>
        <p className="url-line">{featuredDashboard.url}</p>
        <a className="btn btn-solid" href={featuredDashboard.url} target="_blank" rel="noopener noreferrer">
          Open dashboard
          <Icon name="external" className="icon icon-sm" />
        </a>
      </article>

      <div className="card-grid">
        {otherLinks.map((item) => (
          <article className="card dash-card" key={item.url}>
            <p className="eyebrow">External link</p>
            <h2>{item.name}</h2>
            <p className="blurb">Linked from {item.submissionTitle}</p>
            <a className="btn btn-solid" href={item.url} target="_blank" rel="noopener noreferrer">
              Open dashboard
              <Icon name="external" className="icon icon-sm" />
            </a>
          </article>
        ))}
        {localDashboards.map((item) => (
          <article className="card dash-card" key={item.url}>
            <p className="eyebrow">Local HTML</p>
            <h2>{item.name}</h2>
            <p className="blurb">From {item.submissionTitle}.</p>
            <MaterialActions material={item} />
          </article>
        ))}
      </div>
    </section>
  );
}
