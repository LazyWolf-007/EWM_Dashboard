import { useEffect, useMemo, useRef, useState } from "react";
import { categories, filterSubmissions, formatDue, formatPoints } from "../data";
import { Icon } from "./Icons";
import { SubmissionCard } from "./Materials";

export default function Explorer({
  title,
  subtitle,
  items,
  recentWhenIdle = false,
  emptyLabel = "No records match this search.",
  nested = false,
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const searchRef = useRef(null);
  const available = useMemo(() => {
    const present = new Set(items.map((item) => item.category));
    return categories.filter((name) => name === "All categories" || present.has(name));
  }, [items]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "SELECT") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const decorated = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        dueLabel: formatDue(item.dueDate),
        pointsLabel: formatPoints(item.points),
      })),
    [items],
  );

  const filtered = useMemo(() => filterSubmissions(decorated, query, category), [decorated, query, category]);
  const filtering = query.trim().length > 0 || category !== "All categories";
  const visible = recentWhenIdle && !filtering ? [...decorated].sort(byDue).slice(0, 4) : filtered;

  const Title = nested ? "h2" : "h1";

  return (
    <section className={nested ? "explorer" : "page"}>
      <header className="page-head">
        <div>
          {nested ? null : <p className="kicker">EWEM Submission Hub</p>}
          <Title>{title}</Title>
          <p className="lede">{subtitle}</p>
        </div>
      </header>

      <div className="toolbar">
        <label className="search">
          <span className="sr-only">Search submissions</span>
          <Icon name="search" />
          <input
            ref={searchRef}
            type="search"
            value={query}
            placeholder="Search titles, files, categories"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label className="filter">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {available.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="result-count">
        {recentWhenIdle && !filtering
          ? "Recent submissions"
          : `Showing ${visible.length} of ${items.length}`}
      </p>

      {visible.length === 0 ? (
        <p className="empty">{emptyLabel}</p>
      ) : (
        <div className="card-grid">
          {visible.map((item, index) => (
            <SubmissionCard key={item.id} item={item} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

function byDue(a, b) {
  const left = a.dueDate ? new Date(a.dueDate).getTime() : 0;
  const right = b.dueDate ? new Date(b.dueDate).getTime() : 0;
  return right - left;
}
