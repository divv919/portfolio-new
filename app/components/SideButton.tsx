"use client";
import { FolderGit, Laptop, NotebookPen, User } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../lib/util";
import { motion } from "motion/react";
type AvailableButtons = "About" | "Blogs" | "Projects";
export function SideButton() {
  const router = useRouter();
  const path = usePathname();
  const [currentSection, setCurrentPage] = useState<AvailableButtons>(
    pathToName(path)
  );
  const sideButtonInfo: AvailableButtons[] = ["About", "Projects", "Blogs"];
  function pathToName(path: string): AvailableButtons {
    if (path === "/") {
      return "About";
    } else if (path === "/projects") {
      return "Projects";
    } else {
      return "Blogs";
    }
  }

  const handleClick = (button: AvailableButtons) => {
    let href;
    if (button === "About") {
      href = "/";
    } else {
      href = button.toLowerCase();
    }
    setCurrentPage(button);
    router.push(href);
  };

  const [currentHover, setCurrentHover] = useState<string | null>(null);

  return (
    <div className="absolute flex flex-col gap-5 right-0 top-20 translate-x-full">
      {sideButtonInfo.map((btn) => {
        return (
          <motion.div
            // initial={{ translateX: -10 }}
            key={btn}
            className={cn(
              " w-fit bg-neutral-900/80 transition-all duration-150 ease-in-out flex gap-2 cursor-pointer items-center tracking-tight hover:bg-linear-60  hover:shadow-[inset_-2px_2px_3px_rgba(255,255,255,0.1)]  border-neutral-800 border rounded-sm rounded-l-none text-neutral-50  px-2 py-2"
              // currentSection === btn && " bg-neutral-50 text-neutral-700 "
              // currentHover === btn && "bg-bottom-left"
            )}
            onMouseEnter={() => setCurrentHover(btn)}
            onMouseLeave={() => setCurrentHover(null)}
            onClick={() => handleClick(btn)}
          >
            <motion.p>{btn}</motion.p>

            <div>
              {btn === "About" ? (
                <User height={20} width={20} />
              ) : btn === "Blogs" ? (
                <NotebookPen height={20} width={20} />
              ) : (
                <FolderGit height={20} width={20} />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
