"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const tags: string[] = [
  // "Systems Thinker",
  "Fast Learner",
  "Loves Building",
  "Self-Driven",
];
export default function NameTags() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<null | NodeJS.Timeout>(null);
  useEffect(() => {
    ref.current = setInterval(
      () => setCurrentIndex((p) => (p === 2 ? 0 : p + 1)),
      4000
    );
    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  });
  return (
    // <AnimatePresence>
    <motion.div
      key={currentIndex}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        color: "#737373",
      }}
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(16px)",
        mixBlendMode: "16px",
        color: "white",
      }}
      exit={{
        opacity: 1,
        y: 20,
        filter: "blur(10px)",

        color: "white",
      }}
      transition={{
        duration: 0.8, // Increased from 0.8 to make blur animation slower
        type: "spring",
        filter: {
          duration: 0.5, // Specific duration for blur effect
        },
      }}
      className="text-md text-neutral-500"
    >
      {tags[currentIndex]}
    </motion.div>
    // </AnimatePresence>
  );
}
