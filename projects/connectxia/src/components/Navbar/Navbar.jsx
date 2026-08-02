import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import { siteConfig } from "../../data/siteConfig.js";
import "./Navbar.css";

export default function Navbar() {
  // Dropdown open state.
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Navigation links from central config.
  const items = useMemo(() => siteConfig.nav.items, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="cx-nav">
      <div className="container cx-nav__inner">
        {/* Left: brand logo + name */}
        <Link className="cx-brand" to="/">
          <Logo size={50} />
          <div className="cx-brand__text">
            <div className="cx-brand__name">{siteConfig.brand}</div>
            {/* <div className="cx-brand__sub">Strategic collaboratio</div> */}
          </div>
        </Link>

        {/* Right: dropdown menu trigger + panel */}
        <div className="cx-nav__right" ref={menuRef}>
          <button
            className="cx-dd-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {/* Accessible label for screen readers */}
            <span className="sr-only">Toggle menu</span>
            {/* Visual hamburger icon */}
            <span className={`cx-menu-icon ${open ? "open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          {open && (
            <div className="cx-dd">
              {items.map((it) => (
                <NavLink
                  key={it.path}
                  to={it.path}
                  className={({ isActive }) => `cx-dd__item ${isActive ? "active" : ""}`}
                >
                  {it.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
