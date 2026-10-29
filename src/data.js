const file = (name, type) => ({
  name,
  type,
  url: `/materials/${encodeURIComponent(name)}`,
});

const link = (name, url) => ({
  name,
  type: "link",
  url,
});

export const student = {
  name: "Tejas Pawar",
  roll: "24102B0033",
  className: "TE – CMPN B",
  college: "Vidyalankar Institute of Technology",
  subject: "E-Waste & Environmental Management",
  subjectShort: "EWEM",
  semester: "V",
  bucket: "HSSM · Value Education",
  credits: "2",
  evaluation: "ISA-based",
};

export const featuredDashboard = {
  name: "Andhra Pradesh E-Waste Insights",
  url: "https://ap-eco-insight.lovable.app/",
  note: "Live state dashboard for the Andhra Pradesh e-waste tracker. Opens in a new tab.",
};

export const submissions = [
  {
    id: "assignment-zero",
    title: "Assignment Zero — Course Insights",
    category: "Assignment",
    group: "assignment",
    dueDate: "2026-07-31T23:59:00+05:30",
    points: null,
    status: "Submitted",
    blurb: "Course insights for EWEM: curriculum buckets, outcomes, and evaluation.",
    materials: [file("TE_EWM_Assignment_0.pdf", "pdf")],
  },
  {
    id: "ecosystem-contamination",
    title: "The Anatomy of Ecosystem Contamination",
    category: "Assignment",
    group: "assignment",
    dueDate: "2026-07-24T13:30:00+05:30",
    points: 5,
    status: "Submitted",
    blurb: "How lead, mercury, and e-waste residues move through soil, rivers, and groundwater.",
    materials: [file("TE_EWM_writteup.docx", "docx")],
  },
  {
    id: "ap-ewaste-tracker",
    title: "Assignment 1 — Andhra Pradesh E-Waste Tracker",
    category: "Assignment / Dashboard",
    group: "assignment",
    dueDate: "2026-08-02T23:59:00+05:30",
    points: 10,
    status: "Submitted",
    blurb: "State tracker workbook, SDG report, recycler study, and the live insights dashboard.",
    materials: [
      file("AP_EWaste_Tracker.xlsx", "xlsx"),
      file("AP_EWaste_SDG_Report.docx", "docx"),
      file("Tejas_Pawar_AP_EWaste_Recyclers_Final_Submission.docx", "docx"),
      file("Dashboard_link.docx", "docx"),
      link(featuredDashboard.name, featuredDashboard.url),
    ],
  },
  {
    id: "classwork",
    title: "Classwork Submission",
    category: "Class Activity",
    group: "assignment",
    dueDate: "2026-08-04T11:00:00+05:30",
    points: 5,
    status: "Submitted",
    blurb: "Class activity file. The linked PDF is TE_EWM_Classwork.pdf.",
    materials: [file("TE_EWM_Classwork.pdf", "pdf")],
  },
  {
    id: "carbon-footprint",
    title: "Carbon Footprint Tracker",
    category: "Assignment",
    group: "assignment",
    dueDate: "2026-08-11T22:00:00+05:30",
    points: 10,
    status: "Submitted",
    blurb: "Carbon footprint tracker submission.",
    materials: [file("TE_EWM_Assignment_CarbonFoot_Print_Tracker_Final.pdf", "pdf")],
  },
  {
    id: "state-tracker-deck",
    title: "State Tracker Presentation — Andhra Pradesh",
    category: "Presentation",
    group: "assignment",
    dueDate: "2026-08-12T23:59:00+05:30",
    points: 10,
    status: "Submitted",
    blurb: "TE CMPN B deck, signature slides, and the signature chart.",
    materials: [
      file("TE_EWM_AP_PPT.pptx", "pptx"),
      file("AP_EWaste_Signature.pptx", "pptx"),
      file("AP_E_waste_signature_dashboard.png", "image"),
    ],
  },
  {
    id: "companies-compliance",
    title: "Indian Companies Following E-waste Rules",
    category: "Comparative Study",
    group: "assignment",
    dueDate: "2026-09-02T22:00:00+05:30",
    points: 15,
    status: "Submitted",
    blurb: "Compliance report and the company rules page.",
    materials: [
      file("TE_EWM_Companies_compliencePDF.pdf", "pdf"),
      file("TE_EWM_Company_Rule_Regulation_HTML 1.html", "html"),
    ],
  },
  {
    id: "novel-idea",
    title: "Novel Idea — E-waste Pitch Deck",
    category: "Pitch Deck",
    group: "assignment",
    dueDate: "2026-09-06T22:00:00+05:30",
    points: 10,
    status: "Submitted",
    blurb: "Final pitch deck for the novel e-waste idea.",
    materials: [file("TE_EWM_IDEA_Final_PPT.pdf", "pdf")],
  },
  {
    id: "campus-campaign",
    title: "Campaign for E-Waste on Campus",
    category: "Campaign",
    group: "assignment",
    dueDate: "2026-09-09T22:00:00+05:30",
    points: 10,
    status: "Submitted",
    blurb: "Campus posters, campaign stills, and the collection-drive video.",
    materials: [
      file("anime_ewaste_poster_with_text.png", "image"),
      file("cyberpunk_ewaste_poster_with_text.png", "image"),
      file("ewaste_campaign_image_1.jpeg", "image"),
      file("ewaste_campaign_image_2.jpeg", "image"),
      file("ewaste_campaign_image_3.jpeg", "image"),
      file("ewaste_campaign_video.mp4", "video"),
    ],
  },
  {
    id: "hydrometallurgy",
    title: "E-Waste Recovery Process — Hydrometallurgy",
    category: "Assignment",
    group: "assignment",
    dueDate: null,
    points: null,
    status: "Submitted",
    blurb: "Recovery-process poster and the hydrometallurgy reduction analysis.",
    materials: [
      file("Hydrometallurgy_Enhanced_High_Quality_Poster.pdf", "pdf"),
      file("Hydrometallurgy_Process_Reduction_Analysis.docx", "docx"),
    ],
  },
  {
    id: "leed",
    title: "LEED Certification of Green Buildings in India",
    category: "Green Building",
    group: "assignment",
    dueDate: "2026-09-28T23:59:00+05:30",
    points: 10,
    status: "Submitted",
    blurb: "India green-building LEED scorecards.",
    materials: [file("TE_EWM_Tejas_India_Green_Buildings_LEED_Scorecards_Restyled.xlsx", "xlsx")],
  },
  {
    id: "north-america-rules",
    title: "E-waste Rules Compared Across Countries",
    category: "Case Study",
    group: "case-study",
    dueDate: null,
    points: null,
    status: "Submitted",
    blurb: "Legislation and management systems in the United States, Canada, Mexico, Guatemala, and Panama.",
    materials: [file("E_Waste_Management_North_America-v2.docx", "docx")],
  },
  {
    id: "global-waste-cases",
    title: "Global Waste Management and Recycling Case Studies",
    category: "Case Study",
    group: "case-study",
    dueDate: null,
    points: null,
    status: "Submitted",
    blurb: "Ten international and national waste-management cases with exam revision sheets.",
    materials: [file("TE_EWM_Case_Study.docx", "docx")],
  },
];

export const categories = ["All categories", ...new Set(submissions.map((item) => item.category))];

export function matchesQuery(item, query) {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return true;
  const haystack = [
    item.title,
    item.category,
    item.blurb,
    item.status,
    ...item.materials.flatMap((material) => [material.name, material.type]),
  ];
  return haystack.some((part) => String(part).toLocaleLowerCase().includes(needle));
}

export function filterSubmissions(items, query, category) {
  return items.filter(
    (item) => (category === "All categories" || item.category === category) && matchesQuery(item, query),
  );
}

export const assignments = submissions.filter((item) => item.group === "assignment");
export const caseStudies = submissions.filter((item) => item.group === "case-study");

export const fileMaterials = submissions.flatMap((item) =>
  item.materials
    .filter((material) => material.type !== "link")
    .map((material) => ({ ...material, submissionTitle: item.title, submissionId: item.id })),
);

export const externalLinks = submissions.flatMap((item) =>
  item.materials
    .filter((material) => material.type === "link")
    .map((material) => ({ ...material, submissionTitle: item.title, submissionId: item.id })),
);

export const stats = {
  assignments: assignments.length,
  caseStudies: caseStudies.length,
  records: submissions.length,
  materials: fileMaterials.length,
  links: externalLinks.length,
  points: submissions.reduce((sum, item) => sum + (typeof item.points === "number" ? item.points : 0), 0),
};

export function formatDue(value) {
  if (!value) return "Not listed";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  }).format(new Date(value));
}

export function formatPoints(points) {
  if (points === null || points === undefined) return "—";
  return `${points} pts`;
}
