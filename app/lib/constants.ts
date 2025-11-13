export const ButtonInfo = [
  { name: "Discord", link: "http://discordapp.com/users/539384227012280341" },
  { name: "Github", link: "https://github.com/divv919" },
  { name: "X", link: "https://x.com/divv919" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/divyansh-swarnkar-87746a323/",
  },
];

export const projects = [
  {
    title: "Excalidraw",
    description:
      "Real time and collaborative drawing board as well as shapes functionalities, built using Typescript , Websockets , Next.js and Express",
    githubLink: "https://github.com/divv919/excalidraw",
    liveLink: "https://github.com/divv919/excalidraw",
    imageLink: "/excalidraw2.png",
  },
  {
    title: "Second Brain",
    description:
      "Link storage and sharing platform built using the MongoDB , Express , React , Tailwind for responsiveness  ",
    githubLink: "https://github.com/divv919/second-brain",
    liveLink: "https://second-brain-alpha-ebon.vercel.app/",
    imageLink: "/secondBrain2.png",
  },
  {
    title: "Jewellery Ecommerce",
    description:
      "Designed and built this ecommerce website using React , Express , PostgreSQL and Sequelize as ORM",
    githubLink: "https://github.com/divv919/jewellery-ecom",
    liveLink: "https://github.com/divv919/jewellery-ecom",
    imageLink: "/jewellery2.webp",
  },
];

export type Skill = {
  title: string;
  link: string;
};

export const skills = {
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
