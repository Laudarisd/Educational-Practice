import React from "react";
import "./OurWord.css";

export default function OurWord() {
  return (
    <section className="section">
      <div className="container">
        {/* Statement card */}
        <div className="card ourWord">
          <div className="ourWord__badge">Our Word</div>
          <h2 className="ourWord__title">Connecting the research world—strategically.</h2>
          <p className="p">
            We act as a trusted middle layer between companies and global research teams.
            From finding the right partners to shaping project scopes and proposals, Connexia makes collaboration clear, fast, and outcome-driven.
          </p>

          {/* Key outcome points */}
          <div className="ourWord__points">
            <div className="ourWord__point">• Clear communication and alignment</div>
            <div className="ourWord__point">• Strong proposals with measurable outcomes</div>
            <div className="ourWord__point">• End-to-end coordination across teams</div>
          </div>
        </div>
      </div>
    </section>
  );
}
