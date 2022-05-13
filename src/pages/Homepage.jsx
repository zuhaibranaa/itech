import React from "react";
import Footer from "../partials/Footer";
import Hero from "../partials/Hero";
import Locations from "../partials/Locations";
import Ourteam from "../partials/Ourteam";
import Pricing from "../partials/Pricing";
import Testimonials from "../partials/Testimonials";

function Homepage() {
  return (
    <div>
      <Hero />
      <Locations />
      <Pricing />
      <Testimonials />
      <Ourteam />
      <Footer />
    </div>
  );
}

export default Homepage;
