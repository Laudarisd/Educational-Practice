import React from "react";
import { siteConfig } from "../../data/siteConfig.js";
import "./Focus.css";

export default function Focus() {
  return (
    <section className="section">
      <div className="container">
        {/* Section heading */}
        <div className="focus__head">
          <h2 className="focus__title">We Focus</h2>
          <p className="p-sm">High-leverage collaboration services that make research partnerships work.</p>
        </div>

        {/* Service focus cards */}
        <div className="focus__grid">
          {siteConfig.focusCards.map((c) => (
            <div key={c.title} className="card focus__card">
              <div className="focus__cardTitle">{c.title}</div>
              <div className="p-sm">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
