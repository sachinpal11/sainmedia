import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative px-3 font-outfit text-xl py-3 bg-black text-white font-medium rounded-xl overflow-hidden flex items-center justify-center min-w-[220px]"
    >
      {/* Text that moves slightly left on hover */}
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: -16 }, // move left to make space for icon
        }}
        transition={{ duration: 0.3 }}
        className="z-10"
      >
        Get started today
      </motion.span>

      {/* Icon that fades and slides in from right */}
      <motion.span
        variants={{
          rest: { opacity: 0, x: 20 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute right-4 bg-white text-black p-1 rounded-full z-10"
      >
        <ArrowRight size={16} />
      </motion.span>
    </motion.button>
  );
}
