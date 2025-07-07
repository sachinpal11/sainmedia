import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import clsx from "clsx";

const projects = [
  {
    name: "Brand Identity for Auro",
    image: "/images/auro.jpg",
  },
  {
    name: "SaaS Landing Page",
    image: "/images/saas.jpg",
  },
  {
    name: "Reel Series - AI Campaign",
    image: "/images/reels.jpg",
  },
  {
    name: "E-Commerce UI/UX",
    image: "/images/ecommerce.jpg",
  },
];
export default function OurProjects() {
  const [hovered, setHovered] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ Always call hooks - even if not needed on mobile
  const x = useTransform(mouseX, (x) => x - 150);
  const y = useTransform(mouseY, (y) => y - 100);

  // 🎯 Apply "heavy" spring effect to the image position
  const springX = useSpring(mouseX, {
    stiffness: 30, // Low = slower follow
    damping: 20, // High = smoother stop
  });
  const springY = useSpring(mouseY, {
    stiffness: 30,
    damping: 20,
  });
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - 100);
    mouseY.set(e.clientY - 150);
  };

  return (
    <div className="relative w-full -mt-60 text-white py-20 px-6 overflow-hidden">
      <div className="flex flex-col relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={clsx(
              "w-full px-4 py-5 rounded-xl font-clash border border-neutral-800 transition-colors duration-300 cursor-pointer relative",
              hovered === index ? "bg-[#FFFC00] text-black" : "bg-transparent"
            )}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={handleMouseMove}
            transition={{ duration: 0.3 }}
          >
            <span className="text-4xl md:text-7xl font-medium tracking-wide">
              {project.name}
            </span>

            {/* For small screens: always show image inside the div */}
            <div className="mt-4 md:hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full bg-black h-88 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image preview for desktop */}
      <motion.img
        src={hovered !== null ? projects[hovered].image : ""}
        alt="Preview"
        className={clsx(
          "hidden md:block pointer-events-none fixed top-0 bg-black border-black border-3 left-0 w-120 h-76 object-cover rounded-lg shadow-xl z-40",
          hovered !== null ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
        style={{ x: springX, y: springY }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </div>
  );
}
