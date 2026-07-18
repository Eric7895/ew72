import "./App.css";
import { HashRouter, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<HomePage />} />

        {/* Dynamic route: the slug identifies the selected project */}
        <Route path="/projects/:slug" element={<ProjectPage />} />

        {/* Any URL that does not match a route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;