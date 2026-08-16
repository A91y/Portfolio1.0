import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiSolidity,
  SiRust,
  SiDjango,
  SiEthereum,
  SiApachecassandra,
  SiNestjs,
  SiRedis,
  SiRabbitmq,
  SiOpentelemetry,
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiTelegram,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { Anchor, type LucideIcon } from "lucide-react";
import SolanaIcon from "@/components/icons/solana";

export interface Skill {
  icon?: IconType | LucideIcon;
  text: string;
  group: "onchain" | "chains" | "backend" | "frontend" | "tooling";
}

export const skills: Skill[] = [
  // On-chain: lead with this. It is the differentiator.
  { icon: SolanaIcon, text: "Solana", group: "onchain" },
  { icon: SiRust, text: "Rust", group: "onchain" },
  { icon: Anchor, text: "Anchor", group: "onchain" },
  { text: "Pinocchio", group: "onchain" },
  { text: "MagicBlock", group: "onchain" },
  { text: "x402", group: "onchain" },

  // Other chains
  { text: "Base", group: "chains" },
  { icon: SiEthereum, text: "Ethereum", group: "chains" },
  { icon: SiSolidity, text: "Solidity", group: "chains" },
  { text: "Wagmi", group: "chains" },
  { text: "Viem", group: "chains" },
  { text: "TON", group: "chains" },
  { text: "Tact", group: "chains" },

  // Backend
  { icon: SiTypescript, text: "TypeScript", group: "backend" },
  { icon: SiNestjs, text: "NestJS", group: "backend" },
  { icon: SiNodedotjs, text: "Node", group: "backend" },
  { icon: SiExpress, text: "Express", group: "backend" },
  { icon: SiPython, text: "Python", group: "backend" },
  { icon: SiDjango, text: "Django", group: "backend" },
  { icon: BiLogoPostgresql, text: "PostgreSQL", group: "backend" },
  { icon: SiRedis, text: "Redis", group: "backend" },
  { icon: SiRabbitmq, text: "RabbitMQ", group: "backend" },
  { icon: SiMongodb, text: "MongoDB", group: "backend" },
  { icon: SiApachecassandra, text: "Apache Cassandra", group: "backend" },
  { icon: SiOpentelemetry, text: "OpenTelemetry", group: "backend" },

  // Frontend
  { icon: SiReact, text: "React", group: "frontend" },
  { icon: SiNextdotjs, text: "Next.js", group: "frontend" },
  { text: "TanStack Router", group: "frontend" },
  { icon: SiTailwindcss, text: "Tailwind", group: "frontend" },
  { icon: SiJavascript, text: "JavaScript", group: "frontend" },

  // Tooling
  { icon: SiGit, text: "Git", group: "tooling" },
  { icon: SiDocker, text: "Docker", group: "tooling" },
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "StealthX",
    description:
      "A private-payments protocol on Solana, built with a team as our Turbin3 accelerator capstone. Pinocchio for compute efficiency, hand-written MagicBlock delegation and undelegation CPIs, and x402 machine-payment integration with scoped, compliance-aware disclosure.",
    link: "https://github.com/Turbin3/accel-StealthX",
    tags: [
      "Solana",
      "Rust",
      "Pinocchio",
      "MagicBlock",
      "x402",
      "Privacy",
      "Payments",
    ],
    featured: true,
  },
  {
    title: "Full-Time",
    description:
      "A trust-minimized settlement rail for parametric sports markets on Solana. Settlement is permissionless and proof-based: anyone can submit a TxODDS Merkle proof and the program recomputes the root on-chain via CPI, so there is no admin, oracle key, or dispute committee. Shipped as an installable SDK (@fulltime/settle), an autonomous keeper, and a Next.js reference dApp.",
    link: "https://fulltime.ayushagr.me",
    tags: [
      "Solana",
      "Rust",
      "Anchor",
      "TypeScript",
      "Next.js",
      "Oracles",
      "Merkle Proofs",
      "SDK",
    ],
    featured: true,
  },
  {
    title: "Octasol",
    description:
      "An open-source trustless bounty platform on Solana. Escrow, developer profiles, and GitHub authentication, built with Rust, Anchor, Next.js, and TypeScript.",
    link: "https://github.com/octasol/octasol",
    tags: [
      "Solana",
      "Rust",
      "Anchor",
      "Next.js",
      "TypeScript",
      "Escrow",
      "GitHub",
    ],
    featured: true,
  },
  {
    title: "Arachnid",
    description:
      "An asynchronous web crawler with NLP capabilities, archiving data from Tor and I2P networks to improve availability. Built with Python, HuggingFace Transformers, async programming, and Apache Cassandra.",
    link: "https://github.com/A91y/Arachnid",
    tags: ["Python", "NLP", "Async", "Apache Cassandra"],
    featured: true,
  },
  {
    title: "CollectiveX",
    description: "Contributed to a multisig and DAO platform on the SOON SVM.",
    link: "https://github.com/CollectiveX-Org",
    tags: ["Solana", "Rust", "Anchor", "TypeScript", "MultiSig", "DAO"],
    featured: true,
  },
  {
    title: "Blinks By Ayush",
    description:
      "A directory of Solana Blinks, covering transfers, swaps, and on-chain actions surfaced as shareable links.",
    link: "https://blinks.ayushagr.me/",
    tags: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript", "Blinks"],
    featured: true,
  },

  // Below the fold
  {
    title: "MintGovernance",
    description:
      "A governance system in Solidity on Ethereum, built with OpenZeppelin contracts.",
    link: "https://github.com/A91y/MintGovernance",
    tags: ["Solidity", "Ethereum", "OpenZeppelin"],
  },
  {
    title: "Uniswap Liquidity Pools",
    description:
      "Liquidity pools using Uniswap V2, built with Solidity, Ethereum, and JavaScript. Private freelance engagement.",
    tags: ["Solidity", "Ethereum", "Uniswap V2", "JavaScript"],
  },
  {
    title: "ResQConnect",
    description:
      "An API built with Django and Django REST Framework connecting rescue agencies and help seekers.",
    link: "https://github.com/TeamDRex/ResQConnect",
    tags: ["Django", "Django REST Framework", "Python", "REST API"],
  },
  {
    title: "Vision Wave",
    description:
      "An award-winning drowsiness detection system using OpenCV, PyTorch, YOLOv5, Streamlit, and deep learning.",
    link: "https://github.com/A91y/VisionWave-BinaryBharat",
    tags: ["Python", "OpenCV", "PyTorch", "YOLOv5", "Deep Learning"],
  },
  {
    title: "ERC20 Indexer",
    description: "An indexer for ERC-20 token balances by wallet address.",
    link: "https://github.com/A91y/erc20-indexer",
    tags: ["JavaScript", "React", "Ethers.js", "ERC-20", "Alchemy SDK"],
  },
  {
    title: "AyDictionary",
    description:
      "A Python package for fetching word meanings, synonyms, antonyms, and translations.",
    link: "https://pypi.org/project/AyDictionary/",
    tags: ["Python", "CLI", "PyPI", "Web Scraping"],
  },
  {
    title: "USASalesTaxAPI",
    description: "A REST API for fetching sales tax data for US states.",
    link: "https://github.com/A91y/USASalesTaxAPI",
    tags: ["Python", "REST API", "Web Scraping", "Caching"],
  },
  {
    title: "SuperchatJs",
    description:
      "A chat application using React and Firebase Firestore for real-time messaging.",
    link: "https://github.com/A91y/superchatjs",
    tags: ["JavaScript", "React", "Firebase", "Firestore"],
  },
  {
    title: "AyImageBot",
    description: "A Telegram bot for sending free images.",
    link: "https://github.com/AysBots/AyImageBot",
    tags: ["Python", "Telegram Bot API"],
  },
  {
    title: "Ludic.fun",
    description:
      "A decentralized gaming platform on Solana with self-engineered NFTs and tokenomics, built with Rust, Anchor, Next.js, and TypeScript.",
    tags: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript"],
  },
];

export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export const socials: Social[] = [
  { name: "Twitter", link: "https://twitter.com/ayushagr91", icon: SiTwitter },
  { name: "GitHub", link: "https://github.com/A91y", icon: SiGithub },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayushagr91",
    icon: SiLinkedin,
  },
  { name: "Telegram", link: "https://t.me/AyushAgr91", icon: SiTelegram },
];

export interface Experience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
  link?: string;
}

export const workExperiences: Experience[] = [
  {
    company: "Credible",
    logo: "/crediblefin.jpeg",
    position: "Full-Stack Fintech Engineer, Freelance",
    description:
      "Freelance engagement delivered through my web3 agency. Full-stack engineering for a B2B fintech company: KYC/KYB compliance pipelines, third-party financial integrations, async messaging, and Solana/EVM wallet auth and transaction logic.",
    years: "Oct, 2025 - July, 2026",
  },
  {
    company: "Turbin3",
    logo: "/turbin3.jpeg",
    position: "Solana Developer, Accelerated Cohort (Q2 2026)",
    description:
      "Selected for Turbin3's accelerated Solana developer cohort. Built multiple on-chain programs across Anchor and Pinocchio, including measured compute-unit optimization (init ~19.5k to ~1.8k CU; account checks ~17.8k to ~1.5k CU). Hand-wrote MagicBlock delegation and Ephemeral Rollup CPIs, integrated x402 machine payments, and shipped StealthX as the team capstone.",
    years: "Apr, 2026 - Jun, 2026",
  },
  {
    company: "DeCharge",
    logo: "/decharge.png",
    position: "Full-Stack & Blockchain Engineer, Freelance",
    description:
      "Freelance engagement delivered through my web3 agency. Full-stack and on-chain work for a DePIN EV-charging network: built a Solana investment product client, extended it to a second EVM chain, and built the wallet-signature auth layer for the dApp.",
    years: "Apr, 2025 - Apr, 2026",
  },
  {
    company: "Lince Finance",
    logo: "/lince.png",
    position: "Solana Smart Contract & SDK Engineer, Full-Time",
    description:
      "Built yield-aggregation infrastructure on Solana: vault logic, strategy integrations, composition-based rebalancing, and TypeScript SDK development.",
    years: "Aug, 2025 - Feb, 2026",
  },
  {
    company: "Merkle Labs",
    logo: "/merklelabs.png",
    position: "Solana Backend & Smart Contract Engineer, Freelance",
    description:
      "Contributed to on-chain subsystems for a token launchpad (Rust/Anchor) within a multi-engineer team: staking, reward distribution across AMM/DLMM pools, whitelist allocation, Merkle-proof authorization, and pool-migration flows, plus the TypeScript automation driving them. Built an automated DLMM liquidity-management bot end to end (rebalancing cron and Express API).",
    years: "Jan, 2025 - Mar, 2025",
  },
  {
    company: "Catoff Gaming",
    logo: "/catoff.png",
    position: "Backend Intern",
    description:
      "Built backend services for a gaming platform using NestJS, TypeScript, cron jobs, Redis, queues, Solana Actions, and Next.js.",
    years: "Oct, 2024 - Mar, 2025",
  },
  {
    company: "TimeOnSolana",
    logo: "/timeonsolana.jpg",
    position: "Backend Developer",
    description:
      "Fixed Twitter authentication and authorization issues, and resolved other platform bugs.",
    years: "June, 2024 - July, 2024",
  },
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Blockchain Developer",
    description:
      "Built a liquidity pool and DEX using Uniswap V2 on an EVM-based L2.",
    years: "May, 2024 - June, 2024",
  },
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Python Developer",
    description:
      "Engineered a Python web scraper that bypassed Cloudflare bot protection, containerized deployment with Docker, and earned 5-star client reviews.",
    years: "May, 2023 - June, 2024",
    link: "https://www.upwork.com/freelancers/~015e68d4915ac74f75?mp_source=share",
  },
];

export const communityExperiences: Experience[] = [
  {
    company: "Superteam",
    logo: "/superteam.jpg",
    position: "Member",
    description:
      "Building web3 startups and contributing to the Solana ecosystem.",
    years: "Oct, 2024 - Present",
  },
  {
    company: "FOSSCU",
    logo: "/fosscu.png",
    position: "Core Member",
    description:
      "Contributing to and maintaining open-source projects under FOSSCU, a student-run community.",
    years: "Nov, 2023 - Present",
  },
  {
    company: "Innogeeks",
    logo: "/innogeeks.jpg",
    position: "Core Team, Blockchain Lead",
    description:
      "Led the blockchain division, organizing workshops and hackathons to promote blockchain technology.",
    years: "Oct, 2024 - July, 2026",
  },
  {
    company: "Innogeeks",
    logo: "/innogeeks.jpg",
    position: "ML Coordinator",
    description:
      "Led the ML division, ran data science and machine learning training sessions, and grew membership and participation.",
    years: "Dec, 2022 - Oct, 2024",
  },
];

export const educationExperiences: Experience[] = [
  {
    company: "KIET Group of Institutions, Ghaziabad",
    logo: "/kiet.png",
    position: "B.Tech, Computer Science & Engineering",
    description:
      "Graduated July 2026. Blockchain lead and ML coordinator at Innogeeks, core member at FOSSCU.",
    years: "Nov, 2022 - July, 2026",
  },
];

export const aboutYou = {
  name: "Ayush Agrawal",
  description:
    "Hi, I'm Ayush, a Solana and full-stack web3 developer. I go deep on-chain with Pinocchio, Anchor, and MagicBlock, and ship the full product around it: backends, third-party integrations, and multi-chain frontends. I've built production systems across fintech payments, DePIN, and DeFi, from KYC/KYB compliance pipelines to cross-chain investment products. Started out deep in Python, picked up Ethereum and TON along the way, but Solana is home. Alongside my own work, I run a small web3 engineering agency delivering the same kind of work for clients.",
  yearsOfExperience: "4+ years",
  location: "Delhi, India",
  email: "ayush.agr254@gmail.com",
  twitter: "ayushagr91",
};

export const availability = {
  open: true,
  headline: "Available for work",
  detail:
    "Open to remote contract or full-time roles, worldwide. Solana programs, backend, and full-stack.",
};

export const resume = {
  label: "Resume",
  href: "https://drive.google.com/file/d/1G-mAvy-nOnWR4VrvJzuNToN5Ka_unvjI/view?usp=sharing",
};

export const logoText = "@a91y";

export const marketingHeadlines = {
  mainHeadline: "Hi There👋",
  subHeadline: "Solana programs, and the systems around them.",
};

export const websiteMetadata = {
  title: "Ayush Agrawal | Solana & Full-Stack Web3 Developer",
  description:
    "Ayush Agrawal, a Solana and full-stack web3 developer building on-chain programs (Rust, Pinocchio, Anchor, MagicBlock) and the backends and frontends around them, across fintech, DePIN, and DeFi.",
  url: "https://ayushagr.me",
  image_url: "https://ayushagr.me/og_image_ayushagr.png",
  logo_url: "https://ayushagr.me/logo.jpg",
  twitterSite: "@ayushagr91",
  keywords: [
    "Ayush Agrawal",
    "Solana Developer",
    "Solana",
    "Rust",
    "Pinocchio",
    "Anchor",
    "MagicBlock",
    "x402",
    "Base",
    "Blockchain",
    "Full-Stack Web3",
    "NestJS",
    "Python",
    "Backend Engineer",
    "DePIN",
    "Turbin3",
    "StealthX",
    "Superteam",
    "FOSSCU",
    "Innogeeks",
    "KIET",
    "A91y",
    "Ayush Agr",
  ],
};
