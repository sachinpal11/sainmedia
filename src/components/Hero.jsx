import { Phone, ArrowBigLeftDashIcon } from "lucide-react";
import { PiStarFourFill } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import AnimatedButton from "./HoverButton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 35, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-[95%] -z-1 h-fit pt-5 pb-15 sm:mt-15 mt-15 flex-col rounded-t-3xl from-75% bg-gradient-to-b from-[#fffb00ee] to-transparent flex items-center gap-5 md:gap-10"
    >
      <span className="uppercase items-center gap-2 font-outfit text-sm md:text-sm font-medium mt-5 md:mt-10 px-5 py-3 bg-neutral-900 flex h-fit text-neutral-100 rounded-xl">
        <PiStarFourFill className="motion-safe:animate-spin" />
        Avaliable for new projects
      </span>
      <h1 className="font-clash p-4 z-10 tracking-wide text-center md:scale-100 scale-105 text-3xl sm:text-5xl md:text-7xl xl:text-8xl text-black font-medium">
        Ignite Your Brand with
        <br className="md:flex hidden" /> Lightning Speed
      </h1>
      <p className="w-[90%] md:w-[70%] text-lg leading-6 sm:text-xl text-center font-medium font-outfit">
        At Sain Media and Developers, your vision fuels our creativity. From
        bold branding to powerful Webflow websites — we craft a complete digital
        presence that feels unforgettable. Your brand, our innovation.
      </p>
      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-10">
        <AnimatedButton />
        <button className="flex items py-4 text-xl font-medium font-outfit justify-center">
          View Work <GoArrowUpRight />
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;
