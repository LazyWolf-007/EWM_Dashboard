export function Icon({ name, className = "icon" }) {
  const paths = {
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="4.5" rx="1.5" />
        <rect x="14" y="11" width="7" height="10" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    library: (
      <>
        <path d="M4 5h4v14H4zM10 7h4v12h-4zM16 4h4v15h-4z" />
      </>
    ),
    clipboard: (
      <>
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4.5h6v2H9zM9 10h6M9 14h4" />
      </>
    ),
    book: (
      <>
        <path d="M5 5.5c2.2-.8 4-.4 5.5.6V19c-1.6-1-3.5-1.3-5.5-.6V5.5zM19 5.5c-2.2-.8-4-.4-5.5.6V19c1.6-1 3.5-1.3 5.5-.6V5.5z" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m14.8 9.2-1.3 4.3-4.3 1.3 1.3-4.3 4.3-1.3z" />
      </>
    ),
    folder: (
      <>
        <path d="M3.5 8.5V7A1.5 1.5 0 0 1 5 5.5h4l1.6 1.8H19A1.5 1.5 0 0 1 20.5 8.8v8.2A1.5 1.5 0 0 1 19 18.5H5A1.5 1.5 0 0 1 3.5 17V8.5z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8.5" r="3" />
        <path d="M5.5 19c1.2-3 3.4-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </>
    ),
    external: (
      <>
        <path d="M10 6H6.5A1.5 1.5 0 0 0 5 7.5v10A1.5 1.5 0 0 0 6.5 19h10a1.5 1.5 0 0 0 1.5-1.5V14" />
        <path d="M13 5h6v6M19 5l-8 8" />
      </>
    ),
    download: (
      <>
        <path d="M12 4v10" />
        <path d="m8 10 4 4 4-4" />
        <path d="M5 19h14" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h12" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
