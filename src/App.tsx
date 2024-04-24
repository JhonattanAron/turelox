import "./css/App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Dashboard from "./containers/pages/Dashboard";

function App() {
  // Mueve la declaración de useLocation dentro del componente App
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/board" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
