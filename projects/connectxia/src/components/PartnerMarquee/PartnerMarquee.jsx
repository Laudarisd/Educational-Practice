import React, { useMemo } from "react";
import { siteConfig } from "../../data/siteConfig.js";
import "./PartnerMarquee.css";

export default function PartnerMarquee() {
  // Partner names from config.
  const items = useMemo(() => siteConfig.partners, []);
  // Duplicate list for seamless infinite marquee.
  const loop = [...items, ...items];

  return (
    <section className="partnerBar">
      <div className="container partnerBar__inner">
        {/* Static label */}
        <div className="partnerBar__label">Partners</div>
        {/* Scrolling partner pills */}
        <div className="partnerBar__marquee" aria-label="Partner list marquee">
          <div className="partnerBar__track">
            {loop.map((p, i) => (
              <div className="partnerBar__pill" key={`${p}-${i}`}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
