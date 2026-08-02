// Global config: colors, fonts, sizes, image paths, partner list, etc.
export const siteConfig = {
  // Brand identity
  brand: "ConnecXia",
  motto: "The Power of Strategic Connection",
  description:
    "We connect companies with world-class universities and research labs to build high-impact collaborations, proposals, and measurable innovation outcomes.",

  // Navbar dropdown links
  nav: {
    dropdownLabel: "Menu",
    items: [
      { label: "About Us", path: "/about" },
      { label: "Our Aim", path: "/aim" },
      { label: "Contact", path: "/contact" },
    ],
  },

  // Hero section slider config
  hero: {
    slides: [
      "/src/assets/images/slide1.jpg",
      "/src/assets/images/slide2.jpg",
      "/src/assets/images/slide3.jpg",
    ],
    slideIntervalMs: 3500,
  },

  // Home focus card content
  focusCards: [
    {
      title: "Industry ↔ Academia Matching",
      text: "We align company needs with the right lab expertise and faculty.",
    },
    {
      title: "Proposal & Grant Support",
      text: "Structured, persuasive proposals with clear milestones and impact.",
    },
    {
      title: "Research Project Execution",
      text: "Scoping, planning, and coordination across global stakeholders.",
    },
    {
      title: "Tech & AI Innovation",
      text: "Fast validation, PoCs, and roadmap-to-product research strategies.",
    },
  ],

  // Partner marquee labels
  partners: [
    "University Partners",
    "Global Research Labs",
    "Innovation Centers",
    "Corporate R&D Teams",
    "Public Agencies",
    "Startup Incubators",
    "Funding Bodies",
    "Industry Associations",
  ],

  // Footer and contact page details
  contact: {
    email: "hello@connexia.io",
    location: "Seoul, South Korea (Global Remote)",
  },
};
