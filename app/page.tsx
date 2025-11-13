import Image from "next/image";
import ArrowOnHover from "./components/ArrowOnHover";
import NameTags from "./components/NameTags";
import { skills } from "./lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 text-neutral-50">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:gap-6">
        <div className="text-neutral-100 font-medium text-xl md:text-2xl tracking-tight font-tasa-orbiter flex gap-2">
          Divyansh Swarnkar,
          <NameTags />
          {/* <GlassUser /> */}
        </div>
        <div className="text-neutral-400/90 md:text-neutral-400   md:tracking-tight font-inter flex flex-col gap-2 md:gap-3 text-[15px] md:text-md  leading-[1.3]">
          <p>
            Passionate builder, creating frontends, scalable backends and
            services. Interested in UI/UX, GenAI and Agent development,
            Full-stack and Devops.
          </p>
          <p>
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
