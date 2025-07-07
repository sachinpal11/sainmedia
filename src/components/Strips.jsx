import React from "react";
import { motion } from "framer-motion";

function Strips() {
  const text =
    "SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN ";

  return (
    <div className="relative w-full -mt-[100px] md:-mb-[50px] -mb-[70px] h-[30vh] md:h-[60vh] overflow-hidden font-clash font-medium flex flex-col justify-center space-y-4">
      {/* First Strip - Moving Left */}
      <motion.div
        className="whitespace-nowrap bg-[#FFFC00] text-black font-bold tracking-widest text-3xl md:text-7xl"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ rotate: "6deg" }}
      >
        <span className="bg-[#FFFC00]">{text.repeat(10)}</span>
      </motion.div>

      {/* Second Strip - Moving Right */}
      <motion.div
        className="whitespace-nowrap bg-[#FFFC00] text-white font-bold tracking-widest text-3xl md:text-7xl"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ rotate: "-6deg" }}
      >
        <span className="bg-[#FFFC00] text-black">{text.repeat(10)}</span>
      </motion.div>
    </div>
  );
}

export default Strips;
