"use client";
import { GithubIcon, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  imageLink: string;
}

import { easeIn, easeInOut, easeOut, motion, spring } from "motion/react";
export default function ProjectCard({ project }: { project: Project }) {
  const containerVariant = {
    hover: {
      scale: [1, 1.035, 1.05],
      transition: {
        duration: 0.4,
        times: [0, 0.15, 1],
        ease: [easeOut, easeOut],

        // type: spring,
        // stiffness: 100,
        // damping: 10,
        // mass: 1,
      },
    },
    rest: {
      scale: [1.05, 1.02, 1],
      transition: {
        duration: 0.4,
        times: [0, 0.2, 1],
        ease: [easeOut, easeOut],
      },
    },
  };
  const parentVariant = {
    hover: {
      opacity: 1,
    },
    rest: {
      opacity: 0,
    },
  };

  const titleVariant = {
    hover: {
      opacity: [0, 0.6, 1],
      translateY: [8, 3, 0],

      transition: {
        // delay: 0.2,
        times: [0, 0.15, 1],
      },
    },
    rest: {
      opacity: [1, 0.4, 0],
      translateY: [0, 5, 8],
      transition: {
        // delay: 0.2,
        times: [0, 0.15, 1],
      },
    },
  };

  const descriptionVariant = {
    hover: {
      opacity: [0, 0.6, 1],
      translateY: [8, 4, 0],

      transition: {
        // delay: 0.3,
        times: [0, 0.15, 1],
      },
    },
    rest: {
      translateY: [0, 5, 8],

      opacity: [1, 0.4, 0],
      transition: {
        // delay: 0.2,
        times: [0, 0.15, 1],
      },
    },
  };
  return (
    <div className="flex flex-col gap-3">
      <motion.div
        variants={containerVariant}
        whileHover={"hover"}
        animate={"rest"}
        initial={"rest"}
        className="w-full aspect-2/1 relative overflow-hidden rounded-2xl "
      >
        <motion.div
          variants={parentVariant}
          className=" w-full h-full bg-linear-to-b from-neutral-transparent via-neutral-950/70   to-neutral-950 z-1 bottom-0 absolute flex flex-col justify-end p-5 gap-0"
        >
          <motion.div
            variants={titleVariant}
            className="flex text-neutral-200  tracking-tight text-[17px] font-inter gap-4 items-center"
          >
            <motion.div className="flex gap-2 items-center">
              {project.title === "Beautiful Components" && (
                <div className="rounded-full px-2 text-xs bg-red-500/20 py-1">
                  Ongoing
                </div>
              )}
              {project.title}
            </motion.div>
            <motion.div className="gap-2 flex items-center">
              {project.githubLink && (
                <Link target="_blank" href={project?.githubLink}>
                  <GithubIcon size={18} />
                </Link>
              )}
              {project.liveLink.length > 0 && (
                <Link target="_blank" href={project.liveLink}>
                  <LinkIcon size={18} />
                </Link>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            variants={descriptionVariant}
            className="text-neutral-400 text-[12px] max-w-[70%]"
          >
            <DescriptionWithTags description={project.description} />
          </motion.div>
        </motion.div>

        <Image
          className=""
          alt={"excali"}
          src={project.imageLink}
          objectFit="cover"
          fill
        />
      </motion.div>
      <div className="block md:hidden text-neutral-200">
        <div className="flex gap-2">
          <motion.div className="flex gap-2 items-center">
            {project.title === "Beautiful Components" && (
              <div className="rounded-full px-2 text-xs bg-red-500/20 py-1">
                Ongoing
              </div>
            )}
            {project.title}
          </motion.div>
          <div className="flex items-center gap-2">
            {project.githubLink && (
              <Link target="_blank" href={project.githubLink}>
                <GithubIcon size={18} />
              </Link>
            )}
            <Link target="_blank" href={project.liveLink}>
              <LinkIcon size={18} />
            </Link>
          </div>
        </div>
        <DescriptionWithTags description={project.description} />
      </div>
    </div>
  );
}

const wordsToTag = [
  "Typescript",
  "Tailwind",
  "PostgreSQL",
  "Express",
  "React",
  "Sequelize",
  "Next",
  "Next.js",
  "Websockets",
  "MongoDB",
];
function DescriptionWithTags({ description }: { description: string }) {
  return (
    <div className="text-[12px] text-neutral-400 md:text-[14px]  tracking-tight flex gap-x-1 flex-wrap">
      {description.split(" ").map((word, index) => {
        if (wordsToTag.includes(word)) {
          return (
            <div
              key={index}
              className="text-[12px] border border-neutral-800 rounded-md w-fit px-[4px] py-[2px] bg-neutral-900"
            >
              {word}
            </div>
          );
        }
        return (
          <div key={index} className="p">
            {word}
          </div>
        );
      })}
    </div>
  );
}
