import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Focus from "../components/Focus/Focus.jsx";
import PartnerMarquee from "../components/PartnerMarquee/PartnerMarquee.jsx";
import OurWord from "../components/OurWord/OurWord.jsx";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Focus cards section */}
      <Focus />

      {/* Partner marquee section */}
      <PartnerMarquee />

      {/* Brand statement section */}
      <OurWord />
    </>
  );
}
