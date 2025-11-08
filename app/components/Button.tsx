import { ButtonInfo } from "../lib/constants";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import X from "./icons/X";
import Discord from "./icons/Discord";

type ButtonName = keyof (typeof ButtonInfo)[number];

export default function Button({ name }: { name: ButtonName }) {
  switch (name) {
    case "Discord":
      return (
        <div className="relative  backdrop-blur-3xl bg-white/5 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/15 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center">
          <Discord />
        </div>
      );
    case "Github":
      return (
        <div className="relative  backdrop-blur-3xl bg-white/5 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/15 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center">
          <Github />
        </div>
      );
    case "X":
      return (
        <div className="relative  backdrop-blur-3xl bg-white/5 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/15 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center">
          <X />
        </div>
      );
    case "Linkedin":
      return (
        <div className="relative  backdrop-blur-3xl bg-white/5 duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5 shadow-inner shadow-white/15 hover:shadow-white/20 hover:bg-neutral-700/50 cursor-pointer text-neutral-400 rounded-sm rounded-b-none px-2 py-2 flex justify-center items-center">
          <Linkedin />
        </div>
      );
    default:
      return null;
  }
}
