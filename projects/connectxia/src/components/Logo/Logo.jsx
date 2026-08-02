import React from "react";
import "./Logo.css";

export default function Logo({ size = 36 }) {
  return (
    <div className="cx-logo" style={{ width: size, height: size }} aria-label="Connexia logo">
      {/* Connection-inspired SVG mark */}
      <svg viewBox="0 0 64 64" role="img">
        {/* Gradient definition */}
        <defs>
          <linearGradient id="cxg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--primary-2)" />
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle cx="32" cy="32" r="28" fill="rgba(255,255,255,.9)" stroke="rgba(15,23,42,.10)" strokeWidth="2" />
        {/* Connecting path + node points */}
        <path
          d="M18 34 C24 20, 40 20, 46 34 C41 44, 23 46, 18 34 Z"
          fill="none"
          stroke="url(#cxg)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="18" cy="34" r="4" fill="url(#cxg)" />
        <circle cx="32" cy="22" r="4" fill="url(#cxg)" />
        <circle cx="46" cy="34" r="4" fill="url(#cxg)" />
        <circle cx="32" cy="44" r="4" fill="url(#cxg)" />
      </svg>
    </div>
  );
}
