import { Navigate, Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import About from "./pages/About";
import AllSubmissions from "./pages/AllSubmissions";
import Assignments from "./pages/Assignments";
import CaseStudies from "./pages/CaseStudies";
import Dashboard from "./pages/Dashboard";
import Files from "./pages/Files";
import OnlineDashboards from "./pages/OnlineDashboards";
import OfficePreview from "./pages/OfficePreview";

export default function App() {
  return (
    <Routes>
      <Route path="/preview" element={<OfficePreview />} />
      <Route element={<Shell />}>
        <Route index element={<Dashboard />} />
        <Route path="submissions" element={<AllSubmissions />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="online-dashboards" element={<OnlineDashboards />} />
        <Route path="files" element={<Files />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
