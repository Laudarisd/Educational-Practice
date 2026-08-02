import React from "react";
import { siteConfig } from "../data/siteConfig.js";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        {/* About summary card */}
        <div className="card" style={{ padding: 22 }}>
          <h1 className="h1">About Us</h1>
          <p className="p">
            {siteConfig.brand} is a strategic connector between companies and global research teams.
            We build collaboration pathways that are structured, efficient, and aligned with real outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
