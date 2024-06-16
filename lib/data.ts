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
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiTailwindcss,
  SiSolidity,
  SiRust,
  SiDjango,
  SiFlask,
  SiEthereum,
  SiApachecassandra,
  SiTwitter,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { text } from "stream/consumers";
import { Anchor } from "lucide-react";

export const skills = [
  {
    icon: SiEthereum,
    text: "Ethereum",
  },
  {
    icon: SiSolidity,
    text: "Solidity",
  },
  {
    icon: SiRust,
    text: "Rust",
  },
  {
    icon: Anchor,
    text: "Anchor"
  },
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
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiDjango,
    text: "Django",
  },
  {
    icon: SiFlask,
    text: "Flask",
  },
  {
    icon: SiApachecassandra,
    text: "Apache Cassandra",
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
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    text: "Tact"
  },
  {
    text: "Solana"
  },
  {
    text: "TON"
  },
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Arachnid",
    description: "An asynchronous web crawler with NLP capabilities, archiving data from Tor and I2P networks to enhance availability, using Python, HuggingFace Transformers, Async Programming, and Apache Cassandra.",
    link: "https://github.com/A91y/Arachnid",
    tags: ["Python", "NLP", "Async Programming", "Apache Cassandra"],
  },
  {
    title: "MintGovernance",
    description: "A robust governance system in Solidity on the Ethereum blockchain using OpenZeppelin contracts.",
    link: "https://github.com/A91y/MintGovernance",
    tags: ["Solidity", "Ethereum", "Blockchain", "OpenZeppelin"],
  },
  {
    title: "Ludic.fun (in progress)",
    description: "A decentralized gaming platform on the Solana blockchain, leveraging Rust, Solana, Next.js, and TypeScript technologies. Implementing self engineered NFTs, and tokenomics.",
    link: "https://ludic.fun/",
    tags: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript"],
  },
  {
    title: "Uniswap Liquidity Pools",
    description: "Liquidity pools using UniswapV2, leveraging Solidity, Ethereum, and JavaScript technologies. (Private Freelance Contibution)",
    tags: ["Solidity", "Ethereum", "UniswapV2", "JavaScript"],
  },
  {
    title: "Delaton (in progress)",
    description: "A blogging platform on the TON Blockchain featuring a reward system that drove a significant increase in user activity and content creation, employing TON, Tact, React.js, Django, and TMA.js technologies.",
    link: "https://github.com/A91y/Delaton",
    tags: ["TON Blockchain", "Tact", "React.js", "Django", "TMA.js"],
  },
  {
    title: "ResQConnect",
    description: "Robust API build using Django and Django Rest Framework for connecting rescue agencies and help seekers.",
    link: "https://github.com/TeamDRex/ResQConnect",
    tags: ["Django", "Django Rest Framework", "Python", "REST API"],
  },
  {
    title: "Vision Wave",
    description: "An award winning drowsiness detection system using OpenCV, Python, Pytorch, YoloV5, Streamlit and Deep Learning.",
    link: "https://github.com/A91y/VisionWave-BinaryBharat",
    tags: ["Python", "OpenCV", "Pytorch", "YoloV5", "Deep Learning", "Streamlit"],
  },
  {
    title: "ERC20 Indexer",
    description: "Indexer for ERC20 tokens for wallet address.",
    link: "https://github.com/A91y/erc20-indexer",
    tags: ["JavaScript", "React.js", "Ethers.js", "ERC20 Tokens", "Chakra UI", "Alchemy SDK"],
  },
  {
    title: "AyDictionary",
    description: "A Python package for fetching word meanings, synonyms, antonyms, and translations.",
    link: "https://pypi.org/project/AyDictionary/",
    tags: ["Python", "CLI", "PyPI", "Web Scraping", "Beautiful Soup", "Object Oriented Programming"],
  },
  {
    title: "SuperchatJs",
    description: "A chat application using React.js and Firebase Firestore for real-time messaging.",
    link: "https://github.com/A91y/superchatjs",
    tags: ["Javascript", "React.js", "Netlify", "Firebase", "Firestore"],
  },
  {
    title: "USASalesTaxAPI",
    description: "A REST API for fetching sales tax data for US states.",
    link: "https://github.com/A91y/USASalesTaxAPI",
    tags: ["Python", "REST API", "Flask", "Web Scraping", "Beautiful Soup", "Django Rest Framework", "Django", "Caching"],
  },
  {
    title: "AyImageBot",
    description: "A Telegram bot, to send free images.",
    link: "https://github.com/AysBots/AyImageBot",
    tags: ["Python", "Telegram Bot", "API", "Telegram Bot API"],
  },
];

export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    name: "Twitter",
    link: "https://twitter.com/ayushagr91",
    icon: SiTwitter,
  },
  {
    name: "GitHub",
    link: "https://github.com/A91y",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayushagr91",
    icon: SiLinkedin,
  }
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
    description:
      "Led the ML division to increase membership and participation, conducted numerous data science and machine learning training sessions, and fostered peer-to-peer learning among members.",
    years: "Dec, 2022 - Present",
  },
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Python Developer",
    description:
      "Engineered python based web scraper bypassing Cloudflare bot protection, while streamlining deployment with Docker and earning 5-star reviews.",
    years: "May, 2023 - June, 2024",
    link: "https://www.upwork.com/freelancers/~015e68d4915ac74f75?mp_source=share",
  },
  {
    company: "FOSSCU",
    logo: "/fosscu.png",
    position: "Core Member",
    description:
      "Contributing and Maintaining Open Source Projects under FOSSCU, a student-run community.",
    years: "Nov, 2023 - Present",
  },
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Blockchain Developer",
    description:
      "Worked on Liquidity Pool, DEX utilizing UniswapV2 on EVM based L2 blockchain.",
    years: "May, 2024 - June, 2024",
  },
  {
    company: "Superteam",
    logo: "/superteam.jpg",
    position: "Contributor",
    description:
      "Contributed to OSS Projects under Superteam. Helping me develop my web3 based startups.",
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
  yearsOfExperience: "5+ years",
  location: "Delhi, India",
  email: "ayush.agr254@gmail.com",
  twitter: "ayush_agr254",
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
