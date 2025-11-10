"use client";
import { ArrowUpRight } from "lucide-react";
import { ReactElement } from "react";
import { motion } from "motion/react";
export default function ArrowOnHover({ children }: { children: ReactElement }) {
  return (
    <div className="relative w-fit group cursor-pointer">
      {children}
      <motion.div
        // initial={{ opacity: 1, translateX: -10 }}
        // whileHover={{ opacity: 1, translateX: 0 }}
        className="absolute right-0 top-0 mt-[2px]    opacity-0 transition-all duration-200 ease-in-out translate-x-4 group-hover:translate-x-6 group-hover:opacity-100 "
      >
        <ArrowUpRight className="text-neutral-300" size={20} />
      </motion.div>
    </div>
  );
}
