"use client";
import { ButtonInfo } from "../lib/constants";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import X from "./icons/X";
import Discord from "./icons/Discord";
import { motion } from "motion/react";
type ButtonName = string;

export default function Button({ name }: { name: ButtonName }) {
  const buttonVariant = {
    // enter: { scale: 1.1 },
  };
  const textVarient = {
    enter: { scale: 1, translateY: 0 },
  };
  const barVarient = {
    enter: { height: 30 },
  };
  switch (name) {
    case "Discord":
      return (
        <motion.div
          variants={buttonVariant}
          whileHover={"enter"}
          whileTap={"enter"}
          className="relative backdrop-blur-2xl bg-neutral-900/70 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/20 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <Discord />
          <motion.div
            variants={barVarient}
            initial={{ height: 0 }}
            className="absolute w-fit  overflow-hidden  bottom-0 translate-y-full"
          >
            <motion.div
              initial={{ translateY: -16 }}
              variants={textVarient}
              className=" text-sm  tracking-tight "
            >
              Discord
            </motion.div>
          </motion.div>
        </motion.div>
      );
    case "Github":
      return (
        <motion.div
          variants={buttonVariant}
          whileHover={"enter"}
          className="relative backdrop-blur-3xl bg-neutral-900/70 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/20 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center"
          style={{
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          <Github size={24} />
          <motion.div
            variants={barVarient}
            initial={{ height: 0 }}
            className="absolute w-fit  overflow-hidden  bottom-0 translate-y-full"
          >
            <motion.div
              initial={{ translateY: -16 }}
              variants={textVarient}
              className=" text-sm  tracking-tight "
            >
              Github
            </motion.div>
          </motion.div>
        </motion.div>
      );
    case "X":
      return (
        <motion.div
          variants={buttonVariant}
          whileHover={"enter"}
          className="relative backdrop-blur-3xl bg-neutral-900/70 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/20 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center"
          style={{
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          <X />
          <motion.div
            variants={barVarient}
            initial={{ height: 0 }}
            className="absolute w-fit  overflow-hidden  bottom-0 translate-y-full"
          >
            <motion.div
              initial={{ translateY: -16 }}
              variants={textVarient}
              className=" text-sm  tracking-tight "
            >
              x.com
            </motion.div>
          </motion.div>
        </motion.div>
      );
    case "Linkedin":
      return (
        <motion.div
          variants={buttonVariant}
          whileHover={"enter"}
          className="relative backdrop-blur-3xl bg-neutral-900/70 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/20 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center"
          style={{
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          <Linkedin />
          <motion.div
            variants={barVarient}
            initial={{ height: 0 }}
            className="absolute w-fit  overflow-hidden  bottom-0 translate-y-full"
          >
            <motion.div
              initial={{ translateY: -16 }}
              variants={textVarient}
              className=" text-sm  tracking-tight "
            >
              Linkedin
            </motion.div>
          </motion.div>
        </motion.div>
      );
    default:
      return null;
  }
}
