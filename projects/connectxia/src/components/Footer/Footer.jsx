import React from "react";
import { siteConfig } from "../../data/siteConfig.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cx-footer">
      <div className="container cx-footer__inner">
        {/* Brand identity block */}
        <div className="cx-footer__brand">
          <div className="cx-footer__name">{siteConfig.brand}</div>
          <div className="cx-footer__motto">{siteConfig.motto}</div>
        </div>

        {/* Contact metadata columns */}
        <div className="cx-footer__cols">
          <div className="cx-footer__col">
            <div className="cx-footer__label">Contact</div>
            <div className="cx-footer__value">{siteConfig.contact.email}</div>
          </div>
          <div className="cx-footer__col">
            <div className="cx-footer__label">Location</div>
            <div className="cx-footer__value">{siteConfig.contact.location}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
