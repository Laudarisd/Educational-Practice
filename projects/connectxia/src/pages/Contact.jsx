import React, { useState } from "react";
import { siteConfig } from "../data/siteConfig.js";

export default function Contact() {
  // Local form state for the demo contact form.
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Keep controlled inputs in sync with state.
  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  // Demo submit handler.
  function onSubmit(e) {
    e.preventDefault();
    // For now, just a demo behavior
    alert("Thanks! (Demo) We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="section">
      <div className="container">
        {/* Contact details and form card */}
        <div className="card" style={{ padding: 22 }}>
          <h1 className="h1">Contact</h1>
          <p className="p">
            Email us at <strong>{siteConfig.contact.email}</strong> or send a message below.
          </p>

          {/* Contact form */}
          <form onSubmit={onSubmit} style={{ marginTop: 16, display: "grid", gap: 10, maxWidth: 520 }}>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Your email"
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your message"
              rows={5}
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button type="submit" style={btnStyle}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  // Shared input/textarea visual style.
  padding: "12px 12px",
  borderRadius: "12px",
  border: "1px solid rgba(15, 23, 42, 0.15)",
  outline: "none",
  background: "rgba(255,255,255,0.9)",
  fontSize: "16px",
};

const btnStyle = {
  // Primary submit button visual style.
  padding: "12px 14px",
  borderRadius: "12px",
  border: "0",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
  background: "linear-gradient(90deg, #0ea5a4, #3b82f6)",
};
