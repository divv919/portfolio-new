"use client";
import { Laptop, NotebookPen, User } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../lib/util";
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

  return (
    <div className="absolute flex flex-col gap-5 right-0 top-20 translate-x-full">
      {sideButtonInfo.map((btn) => {
        return (
          <div
            key={btn}
            className={cn(
              "bg-neutral-950    border-neutral-800 border rounded-sm rounded-l-none text-neutral-50 tracking-tight px-2 py-2",
              currentSection === btn && "bg-neutral-50 text-neutral-700"
            )}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </div>
        );
      })}
    </div>
  );
}
