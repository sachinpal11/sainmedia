import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Phone } from "lucide";
import { motion } from "motion/react";
import { FaPhoneAlt } from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const bookCall = () => {
    window.open("https://calendly.com/sachinraja709/new-meeting");
  };
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 5, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-neutral-800/40 shadow-sm backdrop-blur-2xl flex font-outfit text-lg sticky z-999 mt-5 rounded-lg top-10 items-center justify-between px-4 py-0 sm:py-1 w-[80%] md:w-[95%] xl:w-[85%] mx-auto"
    >
      {/* Logo */}
      <div className="font-medium flex items-center justify-center text-xl sm:text-2xl xl:text-3xl text-neutral-100 font-clash tracking-wider">
        <img src={Logo} width={60} className="md:scale-100 scale-80" alt="" />
        <span className="">SAIN</span>
      </div>
      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-center items-center w-8 h-8 md:hidden" // hide on desktop
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-[#FFFC00] rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-[#FFFC00] rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-[#FFFC00] rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Navigation Links */}
      <div
        className={`
          flex-col md:flex-row md:flex  transition-all ease-in-out  md:space-x-3 sm:space-x-2 text-white
          absolute md:static top-full left-0 w-full md:w-auto bg-neutral-700 md:bg-transparent shadow-lg md:shadow-none
          ${menuOpen ? "flex" : "hidden"} md:flex
          z-20
        `}
      >
        <a
          href="#Home"
          className="px-3 py-2 font-semibold text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#fffb05] after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </a>
        <a
          href="#About"
          className="px-3 py-2 relative text-neutral-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#fffb05] after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </a>
        <a
          href="#Services"
          className="px-3 py-2 relative text-neutral-300  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#fffb05] after:transition-all after:duration-300 hover:after:w-full"
        >
          Services
        </a>
        <a
          href="#Projects"
          className="px-3 py-2 relative text-neutral-300  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#fffb05] after:transition-all after:duration-300 hover:after:w-full"
        >
          Project
        </a>
        <a
          href="#"
          className="px-3 py-2 relative text-neutral-300  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#fffb05] after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </a>

        {/* Book a Call Button (mobile) */}
        <button
          className="bg-white flex items-center justify-center gap-2 text-neutral-800 font-semibold px-4 py-2 rounded hover:bg-neutral-200 mt-2 md:hidden"
          onClick={bookCall}
        >
          <FaPhoneAlt /> Book a Call
        </button>
      </div>
      {/* Book a Call Button (desktop) */}
      <button
        className="bg-white items-center gap-2 text-nowrap text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#FFFC00] hover:text-black  hidden md:flex"
        onClick={bookCall}
      >
        <FaPhoneAlt /> Book a Call
      </button>
    </motion.nav>
  );
}

export default Navbar;
