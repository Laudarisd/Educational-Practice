import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Aim from "./pages/Aim.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      {/* Persistent top navigation */}
      <Navbar />

      {/* Route-switched page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aim" element={<Aim />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Persistent footer */}
      <Footer />
    </>
  );
}
