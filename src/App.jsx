import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import AboutSection from "./components/About";
import Strips from "./components/Strips";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <Hero />
      <AboutSection />
      <Strips />
      <div className="w-full h-screen"></div>
    </div>
  );
}

export default App;
