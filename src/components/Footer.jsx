import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Logo from "../assets/sain logo in png.png";

function Footer() {
  return (
    <footer className="w-[95%] overflow-hidden relative -z-1 h-fit pt-10 pb-40 md:pb-50 mt-20 flex flex-col items-center from-40% rounded-t-3xl bg-gradient-to-b from-[#fffc00] to-black text-white">
      {/* Section 1: Logo & Tagline */}
      <span className="font-clash text-9xl md:text-[180px] text-nowrap absolute -z-1 font-bold opacity-50 text-black bottom-0 ">
        SAIN MEDIA
      </span>
      <div className="text-center  mb-8">
        <h1 className="text-4xl flex flex-col md:flex-row items-center sm:text-5xl text-black font-medium font-clash tracking-wide">
          <img
            src={Logo}
            width={60}
            className="md:scale-100 scale-150"
            alt=""
          />
          Sain Media & Developers
        </h1>
        <p className="text-sm sm:text-base font-outfit mt-2 font-bold text-black">
          We build brands that speak.
        </p>
      </div>

      {/* Section 2: Navigation Links */}

      {/* Section 3: Contact Info */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left font-outfit text-sm sm:text-base text-black font-medium ">
        <div className="flex items-center  gap-2">
          <FiPhone className="text-lg" />
          <span>+91 72103 97258</span>
        </div>
        <div className="flex items-center gap-2">
          <FiPhone className="text-lg" />
          <span>+91 93109 61517</span>
        </div>
        <div className="flex items-center gap-2">
          <FaInstagram className="text-lg" />
          <span>@sain.developers</span>
        </div>
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-lg" />
          <span>Studio Address Coming Soon</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
