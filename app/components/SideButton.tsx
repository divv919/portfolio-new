// "use client";
// import {
//   ArrowUpRight,
//   ChevronRight,
//   FolderGit,
//   Laptop,
//   NotebookPen,
//   User,
// } from "lucide-react";
// import { useEffect, useMemo, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { cn } from "../lib/util";
// import { AnimatePresence, easeInOut, motion } from "motion/react";
// import ArrowOnHover from "./ArrowOnHover";
// type AvailableButtons = "About" | "Blogs" | "Projects";
// export function SideButton() {
//   const router = useRouter();
//   const path = usePathname();
//   const [currentPage, setCurrentPage] = useState<AvailableButtons>(
//     pathToName(path)
//   );
//   const sideButtonInfo: AvailableButtons[] = ["About", "Projects", "Blogs"];
//   function pathToName(path: string): AvailableButtons {
//     if (path === "/") {
//       return "About";
//     } else if (path === "/projects") {
//       return "Projects";
//     } else {
//       return "Blogs";
//     }
//   }

//   const handleClick = (button: AvailableButtons) => {
//     let href;
//     if (button === "About") {
//       href = "/";
//     } else {
//       href = button.toLowerCase();
//     }
//     setCurrentPage(button);
//     router.push(href);
//   };

//   const [currentHover, setCurrentHover] = useState<string | null>(null);

//   // Memoize hover variants to prevent recalculation on every render
//   const hoverVariants = useMemo(
//     () => ({
//       active: {
//         paddingRight: "12px",
//         transition: { duration: 0.2, ease: easeInOut },
//       },
//       inactive: {
//         paddingRight: "28px",
//         transition: { duration: 0.2, ease: easeInOut },
//       },
//     }),
//     []
//   );

//   return (
//     <div className="absolute flex flex-col gap-5 right-0 top-20 translate-x-full">
//       {sideButtonInfo.map((btn) => {
//         const isActive = currentPage === btn;
//         const isHovered = currentHover === btn;

//         return (
//           <div
//             key={btn}
//             // whileHover={
//             //   isActive ? hoverVariants.active : hoverVariants.inactive
//             // }
//             // variants={hoverVariants}
//             // animate={
//             //   currentHover === btn && currentPage !== btn
//             //     ? "inactive"
//             //     : "active"
//             // }
//             className={cn(
//               "w-fit bg-neutral-900/80 relative  transition-all duration-200 ease-in-out  overflow-hidden backdrop-blur-3xl flex gap-2 cursor-pointer items-center tracking-tight border-neutral-800 border rounded-sm rounded-l-none text-neutral-50 px-3 py-2",
//               isActive &&
//                 "bg-neutral-700/40 border border-neutral-700 border-l-0",
//               !isActive && "hover:pr-8"
//             )}
//             // transition={{ duration: 0.3, ease: "easeInOut" }}
//             onMouseEnter={() => setCurrentHover(btn)}
//             onMouseLeave={() => setCurrentHover(null)}
//             onClick={() => handleClick(btn)}
//           >
//             {isActive && (
//               <motion.div
//                 layout
//                 layoutId="new"
//                 className="absolute opacity-70 left-0 -translate-x-1/2 w-[6px] h-6 bg-linear-to-b from-neutral-300 to-neutral-500 rounded-sm"
//               />
//             )}
//             <motion.p>{btn}</motion.p>
//             <motion.div className="relative w-5 h-5 flex items-center justify-center">
//               {btn === "About" ? (
//                 <User height={20} width={20} />
//               ) : btn === "Blogs" ? (
//                 <NotebookPen height={20} width={20} />
//               ) : (
//                 <FolderGit height={20} width={20} />
//               )}
//               <AnimatePresence>
//                 {isHovered && !isActive && (
//                   <motion.div
//                     className="absolute left-5 text-neutral-500"
//                     initial={{ x: -10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -10, opacity: 0 }}
//                     transition={{ duration: 0.2, ease: "easeInOut" }}
//                   >
//                     <ChevronRight />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";
import {
  ArrowUpRight,
  ChevronRight,
  FolderGit,
  Laptop,
  NotebookPen,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../lib/util";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import ArrowOnHover from "./ArrowOnHover";
import GlassUser from "./icons/glass/GlassUser";
import GlassFeather from "./icons/glass/GlassFeather";
import GlassFolder from "./icons/glass/GlassFolder";
type AvailableButtons = "About" | "Blogs" | "Projects";
export function SideButton() {
  const router = useRouter();
  const path = usePathname();
  const [currentPage, setCurrentPage] = useState<AvailableButtons>(
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

  // Memoize hover variants to prevent recalculation on every render

  const pathVariants = {
    active: {},
    inactive: {},
  };
  const hoverVariants = {
    active: {
      x: 13,
      opacity: 1,
      transition: { duration: 0.2, ease: easeInOut },
    },
    inactive: {
      x: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: easeInOut },
    },
  };

  return (
    <div className="absolute flex flex-col gap-5 right-0 top-20 translate-x-full">
      {sideButtonInfo.map((btn) => {
        const isActive = currentPage === btn;
        // const isHovered = currentHover === btn;

        return (
          <motion.div
            variants={pathVariants}
            whileHover={"active"}
            animate={"inactive"}
            initial={"inactive"}
            key={btn}
            className={cn(
              "w-fit bg-neutral-900/80 relative  transition-all duration-200 ease-in-out  overflow-hidden backdrop-blur-3xl flex gap-2 cursor-pointer items-center tracking-tight border-neutral-800 border rounded-sm rounded-l-none text-neutral-50 px-3 py-2",
              isActive &&
                "bg-neutral-700/40 border border-neutral-700 border-l-0",
              !isActive && "hover:pr-8"
            )}
            // transition={{ duration: 0.3, ease: "easeInOut" }}

            onClick={() => handleClick(btn)}
          >
            {isActive && (
              <motion.div
                layout
                layoutId="new"
                className="absolute opacity-70 left-0 -translate-x-1/2 w-[6px] h-6 bg-linear-to-b from-neutral-300 to-neutral-500 rounded-sm"
              />
            )}
            <motion.p>{btn}</motion.p>
            <motion.div className="relative w-5 h-5 flex items-center justify-center ">
              {btn === "About" ? (
                // <User height={20} width={20} />
                <GlassUser />
              ) : btn === "Blogs" ? (
                // <NotebookPen height={20} width={20} />
                <GlassFeather />
              ) : (
                // <FolderGit height={20} width={20} />
                <GlassFolder />
              )}
              {/* <AnimatePresence> */}

              {/* </AnimatePresence> */}
            </motion.div>
            {!isActive && (
              <motion.div
                variants={hoverVariants}
                className="absolute right-5   text-neutral-500"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronRight />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
