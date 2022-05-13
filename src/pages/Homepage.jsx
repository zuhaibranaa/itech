import React from "react";
import Footer from "../partials/Footer";
import Hero from "../partials/Hero";
import Locations from "../partials/Locations";
import Ourteam from "../partials/Ourteam";
import Pricing from "../partials/Pricing";
import Testimonials from "../partials/Testimonials";
import ScrollToTop from "react-scroll-to-top";

function Homepage() {
  return (
    <div>
      <Hero />
      <Locations />
      <Pricing />
      <Testimonials />
      <Ourteam />
      <Footer />
      <ScrollToTop style={{ padding: "6px" }} />
    </div>
  );
}

export default Homepage;
