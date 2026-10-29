import { stats, student } from "../data";

const DETAILS = [
  ["Name", student.name],
  ["Roll number", student.roll],
  ["Class", student.className],
  ["College", student.college],
  ["Subject", `${student.subject} (${student.subjectShort})`],
  ["Semester", student.semester],
  ["Curriculum bucket", student.bucket],
  ["Course credits", student.credits],
  ["Evaluation", student.evaluation],
];

export default function About() {
  return (
    <section className="page about">
      <header className="page-head">
        <div>
          <p className="kicker">Student record</p>
          <h1>About</h1>
          <p className="lede">A single place for faculty to open every EWEM submission without leaving the site.</p>
        </div>
      </header>

      <div className="about-grid">
        <article className="card static-card">
          <h2>Student</h2>
          <dl className="about-list">
            {DETAILS.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article className="card static-card">
          <h2>How to review</h2>
          <ol className="review-steps">
            <li>Use the sidebar to move between assignments, case studies, dashboards, and files.</li>
            <li>Every submission lists its materials. Select View or Open to read a file in a new tab.</li>
            <li>Select Download when you want a local copy. Office files download from the same link.</li>
            <li>
              Andhra Pradesh E-Waste Insights is the live dashboard. It always opens in a new tab.
            </li>
          </ol>
          <p className="blurb">
            {stats.records} records · {stats.materials} files · {stats.links} external link
            {stats.links === 1 ? "" : "s"}. File paths point at /materials/ so the originals can be dropped in later.
          </p>
        </article>
      </div>
    </section>
  );
}
