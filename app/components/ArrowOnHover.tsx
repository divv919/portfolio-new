"use client";
import { ArrowUpRight } from "lucide-react";
import { ReactElement } from "react";
import { motion } from "motion/react";
import Link from "next/link";
export default function ArrowOnHover({
  children,
  href,
}: {
  children: ReactElement;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="relative w-fit group cursor-pointer"
    >
      {children}
      <motion.div className="absolute right-0 top-0 mt-[2px]    opacity-0 transition-all duration-200 ease-in-out translate-x-4 group-hover:translate-x-6 group-hover:opacity-100 ">
        <ArrowUpRight className="text-neutral-300" size={20} />
      </motion.div>
    </Link>
  );
}
