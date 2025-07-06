import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Define",
    content:
      "We begin by understanding your brand, goals, and audience to craft a tailored strategy that aligns with your vision.",
  },
  {
    id: 2,
    title: "Design",
    content:
      "Our creative team brings your ideas to life through bold, user-centered designs that captivate and communicate.",
  },
  {
    id: 3,
    title: "Digital",
    content:
      "From interactive websites to social campaigns, we engineer digital solutions that drive engagement and results.",
  },
  {
    id: 4,
    title: "Develop",
    content:
      "We turn designs into powerful experiences through clean code, responsive layouts, and seamless performance.",
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
              h-[30vh]
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
