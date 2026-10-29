import { useMemo, useState } from "react";
import { SubmissionCard } from "../components/Materials";
import { caseStudies, formatDue, formatPoints, matchesQuery } from "../data";
import { Icon } from "../components/Icons";

export default function CaseStudies() {
  const [query, setQuery] = useState("");
  const items = useMemo(
    () =>
      caseStudies
        .filter((item) => matchesQuery(item, query))
        .map((item) => ({
          ...item,
          dueLabel: formatDue(item.dueDate),
          pointsLabel: formatPoints(item.points),
        })),
    [query],
  );

  return (
    <section className="page">
      <header className="page-head">
        <div>
          <p className="kicker">Research writing</p>
          <h1>Case Studies</h1>
          <p className="lede">Analytical reports kept apart from the graded assignment list.</p>
        </div>
      </header>
      <label className="search">
        <span className="sr-only">Search case studies</span>
        <Icon name="search" />
        <input type="search" value={query} placeholder="Search case studies" onChange={(event) => setQuery(event.target.value)} />
      </label>
      {items.length === 0 ? (
        <p className="empty">No case studies match this search.</p>
      ) : (
        <div className="card-grid">
          {items.map((item, index) => (
            <SubmissionCard key={item.id} item={item} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
