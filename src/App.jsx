import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import AboutSection from "./components/About";
import Strips from "./components/Strips";
import ProcessAccordion from "./components/Services";
import OurProjects from "./components/Projects";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <Hero />
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
      <div className="w-full h-screen"></div>
    </div>
  );
}

export default App;
