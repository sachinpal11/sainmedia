import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: " Graphic Design",
    content:
      "We transform ideas into stunning visuals — from logos and brand identities to posters, flyers, and scroll-stopping social media creatives. Every design is crafted to resonate with your audience and elevate your brand’s visual appeal.",
  },
  {
    id: 2,
    title: "Website Development",
    content:
      "We build clean, high-performing, and responsive websites tailored to your business goals — whether it’s a landing page, portfolio, or a complete digital storefront. Optimized for speed, UX, and mobile-first performance.",
  },
  {
    id: 3,
    title: "Video Editing",
    content:
      "From Instagram reels to high-end promotional films, we produce cinematic and engaging videos that tell your story, highlight your brand, and connect with your audience emotionally and visually.",
  },
  {
    id: 4,
    title: "Brand Strategy",
    content:
      "We help shape your brand's voice and identity through strategic planning, storytelling, and cohesive visuals. From positioning to messaging, we make sure your brand stands out in a crowded market.",
  },
];

export default function ProcessAccordion() {
  const [activeId, setActiveId] = useState(1);

  const toggleCard = (id) => {
    setActiveId(id === activeId ? null : id);
  };

  return (
    <div className="flex flex-col md:flex-row -mt-50 xl:-mt-70 items-center md:items-stretch justify-center gap-2 w-full py-4">
      {cards.map((card) => {
        const isActive = card.id === activeId;

        return (
          // Motion applied only on md and above
          <motion.div
            key={card.id}
            layout={typeof window !== "undefined" && window.innerWidth >= 768}
            transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
            onClick={() => toggleCard(card.id)}
            className={`
              relative cursor-pointer rounded-xl overflow-hidden flex flex-col justify-between items-start
              h-[40vh]
              ${
                isActive
                  ? "bg-[#FFFC00] text-black"
                  : "bg-black text-white hover:bg-neutral-800"
              }
              w-[90%] md:p-8 p-4
              ${isActive ? "md:w-[40%]" : "md:w-[18%]"}
              transition-all duration-300 ease-in-out md:h-[60vh]
            `}
          >
            {/* Title */}
            <motion.div
              layout={typeof window !== "undefined" && window.innerWidth >= 768}
              className="md:text-2xl text-3xl font-clash tracking-wider font-semibold"
            >
              {card.title}
            </motion.div>

            {/* Animate content only on large screens */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-base md:text-xl font-outfit leading-relaxed text-left"
                >
                  {card.content}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Plus icon for inactive */}
            {!isActive && (
              <motion.div
                layout
                className="absolute bottom-4 left-4 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                +
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
