import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import PropertiesPage from "./PropertiesPage";
import AboutMePage from "./AboutMePage";
import BlogsPage from "./BlogsPage";

export default function App() {
  return (
    <HashRouter>

      <div>
      <Routes>
          <Route path="/" element={<Navigate to="PropertiesPage" />} />
          <Route path="/PropertiesPage/*" element={<PropertiesPage />} />
          <Route path="/BlogsPage/*" element={<BlogsPage />} />
          <Route path="/AboutMePage/*" element={<AboutMePage />} />
        </Routes>
      </div>
    </HashRouter>
  );  
}
