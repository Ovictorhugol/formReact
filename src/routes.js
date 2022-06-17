import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
