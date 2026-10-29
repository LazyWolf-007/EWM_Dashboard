import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { student } from "../data";
import { Icon } from "./Icons";

const NAV = [
  { to: "/", label: "Dashboard", icon: "dashboard", end: true },
  { to: "/submissions", label: "All Submissions", icon: "library" },
  { to: "/assignments", label: "Assignments", icon: "clipboard" },
  { to: "/case-studies", label: "Case Studies", icon: "book" },
  { to: "/online-dashboards", label: "Online Dashboards", icon: "compass" },
  { to: "/files", label: "Files", icon: "folder" },
  { to: "/about", label: "About", icon: "user" },
];

export default function Shell() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="app-shell">
      <div className="atmosphere" aria-hidden="true">
        <span className="orb orb-cyan" />
        <span className="orb orb-gold" />
      </div>

      <button className="menu-button" type="button" aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen((value) => !value)}>
        <Icon name={open ? "close" : "menu"} />
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      {open ? <button className="scrim" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} /> : null}

      <aside id="sidebar" className={open ? "sidebar is-open" : "sidebar"}>
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M7 23c5-1.4 7.4-6.2 8.2-10.6.7 4.2 3 8.6 8.2 10.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="16" cy="10.2" r="2" fill="#e7c98a" stroke="none" />
            </svg>
          </span>
          <div>
            <p className="brand-title">EWEM Submission Hub</p>
            <p className="brand-sub">Academic portfolio</p>
          </div>
        </div>

        <nav className="side-nav" aria-label="Main navigation">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="side-foot">
          <p>{student.college}</p>
          <p className="side-foot-strong">
            {student.className} · {student.subjectShort}
          </p>
        </div>
      </aside>

      <div className="workspace">
        <Outlet />
      </div>
    </div>
  );
}
