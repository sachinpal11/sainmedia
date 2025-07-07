import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "lenis";
import { Analytics } from "@vercel/analytics/react";
const BookNow = lazy(() => import("./components/BookNow"));
const AboutSection = lazy(() => import("./components/About"));
const Strips = lazy(() => import("./components/Strips"));
const ProcessAccordion = lazy(() => import("./components/Services"));
const OurProjects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  useEffect(() => {
    const scrollEl = document.querySelector(".scroll-container");

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div className="w-full scroll-container flex flex-col items-center">
      <Analytics />
      <Navbar />
      <Hero />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div id="About"></div>
      <AboutSection
        title={"About Us"}
        description={
          "Sain Agency is a creative powerhouse specializing in graphic design, website development, and video editing. We craft bold, impactful digital experiences that elevate brands and drive real engagement across all platforms."
        }
      />
      <Strips />
      <div id="Services"></div>
      <AboutSection title={"What We Offer"} description={""} />
      <ProcessAccordion />
      <div id="Projects"></div>
      <AboutSection title={"Our Projects"} description={""} />
      <OurProjects />
      <div id="contact"></div>
      <BookNow />
      <Footer />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
