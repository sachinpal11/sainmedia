import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import AboutSection from "./components/About";
import Strips from "./components/Strips";
import ProcessAccordion from "./components/Services";

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

      <div className="w-full h-screen"></div>
    </div>
  );
}

export default App;
