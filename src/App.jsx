import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "lenis";
const AboutSection = lazy(() => import("./components/About"));
const Strips = lazy(() => import("./components/Strips"));
const ProcessAccordion = lazy(() => import("./components/Services"));
const OurProjects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  // useEffect(() => {
  //   const scrollEl = document.querySelector(".scroll-container");

  //   const scroll = new LocomotiveScroll({
  //     el: scrollEl,
  //     smooth: true,
  //   });

  //   return () => scroll.destroy();
  // }, []);

  return (
    <div className="w-full scroll-container flex flex-col items-center">
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection
          title={"About Us"}
          description={
            "Sain Agency is a creative powerhouse specializing in graphic design, website development, and video editing. We craft bold, impactful digital experiences that elevate brands and drive real engagement across all platforms."
          }
        />
        <Strips />
        <AboutSection
          title={"What We Offer"}
          description={
            "Sain Agency’s end-to-end services give us a full view of the consumer journey, helping us create bold, data-driven designs, websites, and videos that deliver real results."
          }
        />
        <ProcessAccordion />
        <AboutSection
          title={"Our Projects"}
          description={
            "From bold brand identities to high-performance websites and cinematic videos — every project at Sain Media & Developers is crafted with purpose. We blend creativity with strategy to deliver work that not only looks stunning but drives real-world results."
          }
        />
        <OurProjects />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
