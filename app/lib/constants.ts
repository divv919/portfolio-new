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
    title: "Beautiful Components",
    description:
      "A collection (showcase) of all the animated components I have built so far (Ongoing)",
    liveLink: "http://beautiful-components.divyanshh.tech/",
    // githubLink: "https://github.com/divv919/components-practice",
    imageLink: "/BeautifulComponents.png",
  },
  {
    title: "DrawSpace",
    description:
      "Real time and collaborative drawing board as well as shapes functionalities, built using Typescript , Websockets , Next.js and Express",
    githubLink: "https://github.com/divv919/DrawSpace",
    liveLink: "https://drawspace.divyanshh.tech/",
    imageLink: "/drawspace6.png",
  },
  {
    title: "Second Brain",
    description:
      "Link storage and sharing platform built using the MongoDB , Express , React , Tailwind for responsiveness  ",
    githubLink: "https://github.com/divv919/second-brain",
    liveLink: "https://second-brain-alpha-ebon.vercel.app/",
    imageLink: "/secondBrain3.png",
  },
  {
    title: "Jewellery Ecommerce",
    description:
      "Designed and built this ecommerce website using React , Express , PostgreSQL and Sequelize as ORM",
    githubLink: "https://github.com/divv919/jewellery-ecom",
    liveLink: "",
    imageLink: "/jewellery3.png",
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

    { title: "Tailwind CSS", link: "https://tailwindcss.com" },

    { title: "Jest", link: "https://jestjs.io" },
    { title: "Motion", link: "https://motion.dev" },
    // { title: "Tailwind", link: "https://tailwindcss.com" },
  ] as Skill[],
  backend: [
    { title: "Node.js", link: "https://nodejs.org" },
    { title: "Express", link: "https://expressjs.com" },
    { title: "FastAPI", link: "https://restfulapi.net" },
    { title: "AWS & Azure", link: "https://aws.amazon.com" },
    { title: "Docker", link: "https://www.docker.com" },
    {
      title: "CI/CD",
      link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
    },
  ] as Skill[],
  databases: [
    { title: "MongoDB", link: "https://www.mongodb.com" },
    { title: "PostgreSQL", link: "https://www.postgresql.org" },
    { title: "MySQL", link: "https://www.w3schools.com/sql/" },
    { title: "Redis", link: "https://redis.io" },
  ] as Skill[],
};
