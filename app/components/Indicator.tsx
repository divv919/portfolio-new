"use client";
import { MessageCircleCode } from "lucide-react";
import { motion } from "motion/react";
export default function Indicator() {
  return (
    <div className="h-13 w-45 md:w-60   absolute top-0 left-0 -translate-y-full overflow-hidden ">
      <motion.div
        animate={{ top: "50%" }}
        whileHover={{ top: 0 }}
        whileTap={{ top: 0 }}
        className="shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] h-13 w-30 rounded-md rounded-b-none  bg-neutral-900/60  border-t border-neutral-800  absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col gap-1 py-[6px]  text-xs select-none r "
      >
        <div className="flex gap-2 justify-center items-center text-neutral-500 tracking-tight ">
          <span className="size-1 rounded-full bg-green-500 animate-pulse shadow-2xl "></span>
          Open to work
        </div>
        <div className="flex gap-1  justify-center items-center text-neutral-500 tracking-tight ">
          {/* <span className="size-1 rounded-full bg-green-500"></span> */}
          Freelance | Full-time
        </div>
      </motion.div>
    </div>
  );
}
