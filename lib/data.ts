import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { Project } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Discord & Spigot",
    location: "Paris, FR",
    description:
      "I started coding with Java at 13 years old. I made Minecraft plugins and Discord bots. I also learned HTML, CSS and JavaScript after.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developement",
    location: "Paris, FR",
    description: "Early 2020, I started learning Vue.js to start real Front-End development.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "More Front-End and Back-End Development",
    location: "Paris, FR",
    description: "At the beginning of 2021, I started learning Java and Angular to create Full-Stack apps.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Full-Stack and Mobile Development",
    location: "Paris, FR",
    description:
      "I started learning TypeScript, React, Next.JS, Docker and more. I also started learning Swift to create iOS apps.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "More langages and technologies",
    location: "Paris, FR",
    description: "",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "IDE",
    description: "🚀 A personal CLI for me...",
    link: [
      {
        name: "GitHub",
        hash: "https://github.com/Piarre/TSMoji",
      },
      {
        name: "Docs",
        hash: "https://ide.piarre.app",
      },
    ],
    tags: ["TypeScript", "CLI"],
  },
  {
    title: "TSMoji",
    description: "🔥 Print ✨ emojis ✨ in TypeScript...",
    link: [
      {
        name: "GitHub",
        hash: "https://github.com/Piarre/TSMoji",
      },
      {
        name: "Docs",
        hash: "https://TSMoji.piarre.app",
      },
    ],
    tags: ["TypeScript", "TSUP", "CLI"],
  },
];

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Go",
  "PowerShell",
  "Swift",
  "Java",
  "Python",
  "Bash",
  "Spring",
  "Vite",
  "React",
  "Next.js",
  "Angular",
  "Tailwind",
  "Node.js",
  "GitHub",
  "Git",
  "Docker",
  "Electron",
  "Express",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Postman",
] as const;

export const skillIconsData =
  "ts,js,go,powershell,swift,java,py,bash,spring,vite,react,nextjs,tailwind,nodejs,vscode,visualstudio,idea,androidstudio,github,git,docker,electron,express,linux,prisma,mongodb,mysql,firebase,postman";
