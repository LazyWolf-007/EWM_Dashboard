import { Link } from "react-router-dom";
import Explorer from "../components/Explorer";
import { Icon } from "../components/Icons";
import { featuredDashboard, stats, student, submissions } from "../data";

const TILES = [
  { label: "Assignments", value: stats.assignments, hint: "Coursework records" },
  { label: "Submitted materials", value: stats.materials, hint: "Files ready to open" },
  { label: "External links", value: stats.links, hint: "Live dashboards" },
  { label: "Recorded points", value: stats.points, hint: "Where a mark is listed" },
];

export default function Dashboard() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">
            {student.college}
          </p>
          <h1>{student.name}</h1>
          <p className="hero-meta">
            Roll {student.roll}
            <span aria-hidden="true"> · </span>
            {student.className}
          </p>
          <p className="lede">
            {student.subject} portfolio for faculty review. Every submission lists its files. Open a material to view it, or download it from the card.
          </p>
        </div>
        <aside className="hero-dock">
          <p className="eyebrow">Featured dashboard</p>
          <h2>{featuredDashboard.name}</h2>
          <p>{featuredDashboard.note}</p>
          <a className="btn btn-solid" href={featuredDashboard.url} target="_blank" rel="noreferrer">
            Open dashboard
            <Icon name="external" className="icon icon-sm" />
          </a>
          <Link className="text-link" to="/online-dashboards">
            All online dashboards
          </Link>
        </aside>
      </section>

      <section className="stat-strip" aria-label="Portfolio summary">
        {TILES.map((tile) => (
          <article key={tile.label}>
            <p className="stat-value">{tile.value}</p>
            <p className="stat-label">{tile.label}</p>
            <p className="stat-hint">{tile.hint}</p>
          </article>
        ))}
      </section>

      <Explorer
        nested
        title="Recent submissions"
        subtitle="Search or filter to look through the full set from here. The latest due dates stay on top until you do."
        items={submissions}
        recentWhenIdle
      />
    </div>
  );
}
