import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiFlutter,
    text: "Flutter",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Give a short description about project 1",
    link: "https://github.com/",
  },
  {
    title: "Project 2",
    description: "Give a short description about project 2",
    link: "https://github.com/",
  },
  {
    title: "Project 3",
    description: "Give a short description about project 3",
    link: "https://github.com/",
  },
  {
    title: "Project 4",
    description: "Give a short description about project 4",
    link: "https://github.com/",
  },
  {
    title: "Project 5",
    description: "Give a short description about project 5",
    link: "https://github.com/",
  },
  {
    title: "Project 6",
    description: "Give a short description about project 6",
    link: "https://github.com/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
  link?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Innogeeks",
    logo: "/innogeeks.jpg",
    position: "ML Coordinator",
    description: "Led the ML division to increase membership and participation, conducted numerous data science and machine learning training sessions, and fostered peer-to-peer learning among members.",
    years: "Dec, 2022 - Present",
  },
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Python Developer",
    description: "Engineered python based web scraper bypassing Cloudflare bot protection, while streamlining deployment with Docker and earning 5-star reviews.",
    years: "May, 2023 - June, 2024",
    link: "https://www.upwork.com/freelancers/~015e68d4915ac74f75?mp_source=share",
  },
  {
    company: "FOSSCU",
    logo: "/fosscu.png",
    position: "Core Member",
    description: "Contributing and Maintaining Open Source Projects under FOSSCU, a student-run community.",
    years: "Nov, 2023 - Present",
  },
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Blockchain Developer",
    description: "Worked on Liquidity Pool, DEX utilizing UniswapV2 on EVM based L2 blockchain.",
    years: "May, 2024 - June, 2024",
  },
  {
    company: "Superteam",
    logo: "/superteam.jpg",
    position: "Contributor",
    description: "Contributed to OSS Projects under Superteam. Helping me develop my web3 based startups.",
    years: "June, 2024- Present",
  },
  {
    company: "KIET",
    logo: "/kiet.png",
    position: "Student",
    description:
      "Pursuing Computer Science Engineering degree from KIET Group of Institutions, Ghaziabad.",
    years: "Nov, 2022 - July, 2026",
  },
];

export const aboutYou = {
  name: "Ayush Agrawal",
  description:
    "👋 Hi, I'm Ayush. Backend & Blockchain Developer. I've massive experience in Full Stack development. Blockchains like Ethereum, Solana, TON. For a long time I've been a Python guy. But now list is just endless! ",
  yearsOfExperience: "5 years",
  location: "Delhi, India",
  email: "ayush.agr254@gmail.com",
};

export const logoText = "@a91y";

export const marketingHeadlines = {
  mainHeadline: "Hi There 👋",
  subHeadline: "Let's Code it! 🚀",
};

export const websiteMetadata = {
  title: "Ayush Agrawal | Developer",
  description: "👋 Hey, Ayush Agrawal here. Welcome to my portflio/blog.",
};
