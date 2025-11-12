import Image from "next/image";
import ArrowOnHover from "./components/ArrowOnHover";
import { motion } from "motion/react";
import NameTags from "./components/NameTags";

type Skill = {
  title: string;
  link: string;
};

const skills = {
  frontend: [
    { title: "React", link: "https://react.dev" },
    { title: "React Native", link: "https://reactnative.dev" },
    { title: "Next.js", link: "https://nextjs.org" },
    { title: "TypeScript", link: "https://www.typescriptlang.org" },
    {
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { title: "Tailwind CSS", link: "https://tailwindcss.com" },
    {
      title: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "Jest", link: "https://jestjs.io" },
    { title: "Motion", link: "https://motion.dev" },
    // { title: "Tailwind", link: "https://tailwindcss.com" },
  ] as Skill[],
  backend: [
    { title: "Node.js", link: "https://nodejs.org" },
    { title: "Express", link: "https://expressjs.com" },
    { title: "REST API", link: "https://restfulapi.net" },
    { title: "AWS", link: "https://aws.amazon.com" },
    { title: "Docker", link: "https://www.docker.com" },
    { title: "Linux", link: "https://www.linux.org" },
    {
      title: "CI/CD",
      link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
    },
    { title: "Git", link: "https://git-scm.com" },
  ] as Skill[],
  databases: [
    { title: "MongoDB", link: "https://www.mongodb.com" },
    { title: "PostgreSQL", link: "https://www.postgresql.org" },
    { title: "SQL", link: "https://www.w3schools.com/sql/" },
    { title: "Redis", link: "https://redis.io" },
  ] as Skill[],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-10 text-neutral-50">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <div className="text-neutral-100 font-medium text-2xl tracking-tight font-inter flex gap-2">
          Divyansh Swarnkar,
          <NameTags />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-neutral-400 text-md tracking-tight font-inter">
            Passionate builder, creating frontends, scalable backends and
            services. Interested in UI/UX, GenAI and Agent development,
            Full-stack and Devops.
          </p>
          <p className="text-neutral-400 text-md tracking-tight font-inter">
            My main priorities align with performance, deliverance and
            perfection.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-5">
        <h2 className="w-fit text-neutral-300 font-tasa-orbiter tracking-tight font-medium text-md border-b-2 border-dashed border-neutral-700 hover:border-neutral-600 duration-200 ease-out">
          Skills
        </h2>

        {/* Frontend Skills */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-neutral-400 font-inter tracking-tight title">
            Frontend
          </h3>
          <div className="flex gap-2 flex-wrap">
            {skills.frontend.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                title={skill.title}
                className="text-xs cursor-pointer ease-in-out text-neutral-300 w-fit px-3 py-1.5 border border-neutral-700 rounded-full tracking-tight bg-linear-60 from-transparent via-white/10  to-transparent bg-size-[200%_100%] bg-top-left hover:bg-bottom-right transition-all duration-200"
              >
                {skill.title}
              </a>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-neutral-400 font-inter tracking-tight title">
            Backend
          </h3>
          <div className="flex gap-2 flex-wrap">
            {skills.backend.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                title={skill.title}
                className="text-xs cursor-pointer ease-in-out text-neutral-300 w-fit px-3 py-1.5 border border-neutral-700 rounded-full tracking-tight bg-linear-60 from-transparent via-white/10  to-transparent bg-size-[200%_100%] bg-top-left hover:bg-bottom-right transition-all duration-200"
              >
                {skill.title}
              </a>
            ))}
          </div>
        </div>

        {/* Databases Skills */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-neutral-400 font-inter tracking-tight title">
            Databases
          </h3>
          <div className="flex gap-2 flex-wrap">
            {skills.databases.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                title={skill.title}
                className="text-xs cursor-pointer ease-in-out text-neutral-300 w-fit px-3 py-1.5 border border-neutral-700 rounded-full tracking-tight bg-linear-60 from-transparent via-white/10  to-transparent bg-size-[200%_100%] bg-top-left hover:bg-bottom-right transition-all duration-200"
              >
                {skill.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-5">
        <h2 className="w-fit text-neutral-300 font-tasa-orbiter tracking-tight font-medium text-md border-b-2 border-dashed border-neutral-700 hover:border-neutral-600 duration-200 ease-out">
          Experience
        </h2>
        <div className="flex flex-col gap-1">
          <ArrowOnHover href="https://oddlyai.tech/">
            <div className="flex gap-2 items-center">
              <Image
                alt="oddly-ai-logo"
                width={20}
                height={20}
                className="size-5"
                src={"/oddly-ai-logo.avif"}
              />
              <p className="text-md text-neutral-300 tracking-tight font-inter">
                Oddly AI
              </p>
            </div>
          </ArrowOnHover>

          <p className="text-sm text-neutral-400 tracking-tight font-inter">
            AI Engineer Intern (Present)
          </p>
        </div>
      </div>

      {/* Other Section */}
      <div className="flex flex-col gap-4">
        <h2 className="w-fit text-neutral-300 font-tasa-orbiter tracking-tight font-medium text-md border-b-2 border-dashed border-neutral-700 hover:border-neutral-600 duration-200 ease-out">
          Other
        </h2>
        <div className="flex flex-col gap-2">
          <div className="text-md text-neutral-300 tracking-tight  font-inter flex gap-1">
            <span className="text-neutral-400">Mail me here </span>
            <ArrowOnHover href="mailto:divyanshsoni919@gmail.com">
              <span className="border-dotted border-neutral-600 cursor-pointer border-b hover:border-neutral-500 transition-colors duration-200">
                divyanshsoni919@gmail.com
              </span>
            </ArrowOnHover>
          </div>
          <div className="text-md text-neutral-300 tracking-tight font-inter flex gap-1">
            <span className="text-neutral-400">Download my </span>
            <ArrowOnHover href="https://drive.google.com/file/d/1WauLDwLvvN83qLMuJ-UTR4bGYp1cSy8y/view?usp=sharing">
              <span className="border-dotted border-neutral-600 cursor-pointer border-b hover:border-neutral-500 transition-colors duration-200">
                resume
              </span>
            </ArrowOnHover>
          </div>
        </div>
      </div>
    </div>
  );
}
