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
  SiX,
  SiGithub,
  SiTelegram,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { Anchor, type LucideIcon } from "lucide-react";
import SolanaIcon from "@/components/icons/solana";

export interface Skill {
  icon?: IconType | LucideIcon;
  text: string;
  group: "onchain" | "chains" | "backend" | "frontend" | "tooling";
  // Shown up front in the hero; the rest sit under "Also used".
  core?: boolean;
}

export const skills: Skill[] = [
  // On-chain: lead with this. It is the differentiator.
  { icon: SolanaIcon, text: "Solana", group: "onchain" },
  { icon: SiRust, text: "Rust", group: "onchain", core: true },
  { icon: Anchor, text: "Anchor", group: "onchain", core: true },
  { text: "Pinocchio", group: "onchain", core: true },
  { text: "MagicBlock", group: "onchain", core: true },
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
  { icon: SiTypescript, text: "TypeScript", group: "backend", core: true },
  { icon: SiNestjs, text: "NestJS", group: "backend", core: true },
  { icon: SiNodedotjs, text: "Node", group: "backend", core: true },
  { icon: SiExpress, text: "Express", group: "backend" },
  { icon: SiPython, text: "Python", group: "backend" },
  { icon: SiDjango, text: "Django", group: "backend" },
  { icon: BiLogoPostgresql, text: "PostgreSQL", group: "backend", core: true },
  { icon: SiRedis, text: "Redis", group: "backend", core: true },
  { icon: SiRabbitmq, text: "RabbitMQ", group: "backend", core: true },
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
  // URL segment of the project's own page under /projects.
  slug?: string;
  // One line under 110 characters; the base of the page's meta description.
  tagline?: string;
}

export const projects: Project[] = [
  {
    title: "StealthX",
    description:
      "A private, gasless payments protocol for AI agents on Solana, built with a team as our Turbin3 accelerator capstone. Pinocchio for compute efficiency, hand-written MagicBlock delegation and undelegation CPIs, and x402 machine-payment integration with scoped, compliance-aware disclosure.",
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
    slug: "stealthx",
    tagline:
      "Private machine payments on Solana: a Pinocchio program, MagicBlock rollups and x402.",
  },
  {
    title: "Pinoc",
    description:
      "A CLI for scaffolding, building, and deploying Solana programs written with Pinocchio, with IDL and client generation. Pinocchio is deliberately minimal, with no build orchestration or project conventions, so Pinoc supplies the workflow around it, including a `clean` that preserves the program keypair so you don't lose your program ID the way a plain `cargo clean` does.",
    link: "https://github.com/A91y/pinoc",
    tags: ["Rust", "CLI", "Solana", "Pinocchio", "Developer Tooling"],
    featured: true,
    slug: "pinoc",
    tagline:
      "A Rust CLI that scaffolds, builds, tests, lints and deploys Solana programs written with Pinocchio.",
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
    slug: "full-time",
    tagline:
      "Permissionless, proof-based settlement for parametric sports markets on Solana.",
  },
  {
    title: "Octasol",
    description:
      "An open-source trustless bounty platform on Solana, backed by a Superteam grant. Escrow, developer profiles, and GitHub authentication, built with Rust, Anchor, Next.js, and TypeScript.",
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
    slug: "octasol",
    tagline:
      "An open-source bounty platform on Solana: escrowed rewards for GitHub issues, paid when the PR merges.",
  },
  {
    title: "Arachnid",
    description:
      "An asynchronous web crawler with NLP capabilities, archiving data from Tor and I2P networks to improve availability. Built with Python, HuggingFace Transformers, async programming, and Apache Cassandra.",
    link: "https://github.com/A91y/Arachnid",
    tags: ["Python", "NLP", "Async", "Apache Cassandra"],
    featured: true,
    slug: "arachnid",
    tagline:
      "An async Python crawler that archives Tor and I2P sites and flags hate speech with a transformer model.",
  },
  {
    title: "CollectiveX",
    description: "Contributed to a multisig and DAO platform on the SOON SVM.",
    link: "https://github.com/CollectiveX-Org",
    tags: ["Solana", "Rust", "Anchor", "TypeScript", "MultiSig", "DAO"],
  },
  {
    title: "Blinks By Ayush",
    description:
      "A directory of Solana Blinks, covering transfers, swaps, and on-chain actions surfaced as shareable links.",
    link: "https://blinks.ayushagr.me/",
    tags: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript", "Blinks"],
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
  { name: "Twitter", link: "https://twitter.com/ayushagr91", icon: SiX },
  { name: "GitHub", link: "https://github.com/A91y", icon: SiGithub },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayushagr91",
    icon: FaLinkedin,
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
  // Work entries only: which sub-group of the Work section they render in.
  section?: "current" | "agency" | "founded" | "earlier" | "program";
}

export const workExperiences: Experience[] = [
  {
    company: "Backroll",
    section: "current",
    link: "https://backroll.fi",
    logo: "/backroll.png",
    position: "Protocol Engineer",
    description:
      "Writing an on-chain lending protocol on Solana in no_std Rust on Pinocchio, without Anchor: vault accounting with Token-2022 share tokens, collateral tiers, leverage limits, liquidation thresholds, and trade execution into Raydium pools by CPI. Built the off-chain TypeScript keeper that indexes chain state, simulates, co-signs and sends transactions, and runs liquidations, with positions and share accounting in Postgres so clients read one consistent view.",
    years: "Sep, 2026 - Present",
  },
  {
    company: "Credible",
    section: "agency",
    link: "https://credible.finance",
    logo: "/crediblefin.jpeg",
    position: "Full-Stack Fintech Engineer, Contract",
    description:
      "Full-stack engineering for a B2B and B2C fintech company: KYC/KYB compliance pipelines, third-party financial integrations, async messaging, Solana/EVM wallet auth and transaction logic, user-facing and internal portals, and a stablecoin yield portal.",
    years: "Oct, 2025 - Jul, 2026",
  },
  {
    company: "Turbin3",
    section: "program",
    link: "https://turbin3.org",
    logo: "/turbin3.jpeg",
    position: "Solana Developer, Accelerated Cohort (Q2 2026)",
    description:
      "Selected for Turbin3's accelerated Solana developer cohort. Built multiple on-chain programs across Anchor and Pinocchio, including measured compute-unit optimization (init ~19.5k to ~1.8k CU; account checks ~17.8k to ~1.5k CU). Hand-wrote MagicBlock delegation and Ephemeral Rollup CPIs, integrated x402 machine payments, and shipped StealthX as the team capstone.",
    years: "Apr, 2026 - Jun, 2026",
  },
  {
    company: "DeCharge",
    section: "agency",
    link: "https://www.decharge.network",
    logo: "/decharge.png",
    position: "Full-Stack & Blockchain Engineer, Freelance",
    description:
      "Full-stack and on-chain work for a DePIN EV-charging network: built a Solana investment product client, extended it to a second EVM chain, and built the wallet-signature auth layer for the dApp.",
    years: "Apr, 2025 - Apr, 2026",
  },
  {
    company: "Octasol",
    section: "founded",
    link: "https://github.com/octasol",
    logo: "/octasol.jpeg",
    position: "Founder & Lead",
    description:
      "Led Octasol, an open-source trustless bounty platform on Solana backed by a Superteam grant: product ideation, feature development, integration strategy, and backend development.",
    years: "Oct, 2024 - Apr, 2026",
  },
  {
    company: "Lince Finance",
    section: "earlier",
    link: "https://lince.finance",
    logo: "/lince.png",
    position: "Solana Smart Contract & SDK Engineer, Full-Time",
    description:
      "Built yield-aggregation infrastructure on Solana: vault logic, strategy integrations, composition-based rebalancing, and TypeScript SDK development.",
    years: "Aug, 2025 - Feb, 2026",
  },
  {
    company: "dokreativ",
    section: "agency",
    link: "https://www.dokreativ.com",
    logo: "/dokreativ.jpeg",
    position: "Full Stack Engineer, Freelance",
    description:
      "Freelance full-stack engineering with a small team: browser extension development, payment gateway integration, webhooks, Prisma and PostgreSQL with database optimization, and web scraping.",
    years: "Mar, 2025 - Dec, 2025",
  },
  {
    company: "Aydilooks",
    section: "founded",
    logo: "/aydilooks.jpeg",
    position: "Co-Founder & Backend Lead",
    description: "Co-founded Aydilooks and led its backend development.",
    years: "Aug, 2024 - Dec, 2025",
    link: "https://www.linkedin.com/company/aydilooks/",
  },
  {
    company: "Merkle Labs",
    section: "agency",
    link: "https://merklelabs.xyz",
    logo: "/merklelabs.png",
    position: "Solana Backend & Smart Contract Engineer, Freelance",
    description:
      "Contributed to on-chain subsystems for a token launchpad (Rust/Anchor) within a multi-engineer team: staking, reward distribution across AMM/DLMM pools, whitelist allocation, Merkle-proof authorization, and pool-migration flows, plus the TypeScript automation driving them. Built an automated DLMM liquidity-management bot end to end (rebalancing cron and Express API).",
    years: "Jan, 2025 - Mar, 2025",
  },
  {
    company: "Catoff Gaming",
    section: "earlier",
    logo: "/catoff.png",
    position: "Backend Intern",
    description:
      "Built backend services for a gaming platform using NestJS, TypeScript, cron jobs, Redis, queues, Solana Actions, and Next.js.",
    years: "Oct, 2024 - Mar, 2025",
  },
  {
    company: "TimeOnSolana",
    section: "earlier",
    logo: "/timeonsolana.jpg",
    position: "Backend Developer",
    description:
      "Fixed Twitter authentication and authorization issues, and resolved other platform bugs.",
    years: "Jun, 2024 - Jul, 2024",
  },
  {
    company: "Freelance",
    section: "earlier",
    logo: "/skeleton.jpg",
    position: "Blockchain Developer",
    description:
      "Built a liquidity pool and DEX using Uniswap V2 on an EVM-based L2.",
    years: "May, 2024 - Jun, 2024",
  },
  {
    company: "Freelance",
    section: "earlier",
    logo: "/skeleton.jpg",
    position: "Python Developer",
    description:
      "Engineered a Python web scraper that bypassed Cloudflare bot protection, containerized deployment with Docker, and earned 5-star client reviews.",
    years: "May, 2023 - Jun, 2024",
    link: "https://www.upwork.com/freelancers/~015e68d4915ac74f75?mp_source=share",
  },
];

export const communityExperiences: Experience[] = [
  {
    company: "Superteam",
    link: "https://superteam.fun",
    logo: "/superteam.jpg",
    position: "Member",
    description:
      "Building web3 startups and contributing to the Solana ecosystem.",
    years: "Oct, 2024 - Present",
  },
  {
    company: "Superteam",
    link: "https://superteam.fun",
    logo: "/superteam.jpg",
    position: "DAO Contributor",
    description: "Contributed to Superteam DAO before joining as a member.",
    years: "May, 2024 - Oct, 2024",
  },
  {
    company: "FOSSCU",
    link: "https://fosscu.org",
    logo: "/fosscu.png",
    position: "Member",
    description:
      "Contributing to and maintaining open-source projects under FOSSCU, a student-run community.",
    years: "Dec, 2023 - Present",
  },
  {
    company: "Innogeeks",
    link: "https://www.innogeeks.in",
    logo: "/innogeeks.jpg",
    position: "Core Team, Blockchain Lead",
    description:
      "Led the blockchain division, organizing workshops and hackathons to promote blockchain technology.",
    years: "Sep, 2024 - May, 2026",
  },
  {
    company: "Innogeeks",
    link: "https://www.innogeeks.in",
    logo: "/innogeeks.jpg",
    position: "ML Coordinator",
    description:
      "Led the ML division, ran data science and machine learning training sessions, and grew membership and participation.",
    years: "Sep, 2023 - Oct, 2024",
  },
  {
    company: "Innogeeks",
    link: "https://www.innogeeks.in",
    logo: "/innogeeks.jpg",
    position: "Member",
    description: "Joined the Innogeeks technical society as a member.",
    years: "Dec, 2022 - Sep, 2023",
  },
];

export const educationExperiences: Experience[] = [
  {
    company: "KIET Group of Institutions, Ghaziabad",
    link: "https://www.kiet.edu",
    logo: "/kiet.png",
    position: "B.Tech, Computer Science & Engineering",
    description:
      "Graduated May 2026. Blockchain lead and ML coordinator at Innogeeks, member of FOSSCU.",
    years: "Nov, 2022 - May, 2026",
  },
];

export const aboutYou = {
  name: "Ayush Agrawal",
  description:
    "Hi, I'm Ayush, a Solana and full-stack web3 developer. I build Solana programs with Pinocchio, Anchor and MagicBlock, and the payment systems around them: backends, integrations and frontends across fintech, DePIN and DeFi. Solana is home. I also run a small web3 engineering agency doing the same work for clients.",
  yearsOfExperience: "3+ years",
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
  href: "https://drive.google.com/file/d/1z0_2Vm_N4bpTQ1TKbjnQ6fYR2eHIBfQM/view?usp=sharing",
};

export const blog = {
  label: "Blog",
  href: "https://blog.ayushagr.me/",
};

export const cratesProfile = "https://crates.io/users/A91y";

// Date of the last content change; feeds the sitemap and structured data.
export const siteUpdated = "2026-11-24";

export const logoText = "@a91y";

export const marketingHeadlines = {
  mainHeadline: "Solana programs and the payment systems around them.",
  subHeadline: "I work with Solana protocols and with fintech and payments teams.",
};

// Short claims under the hero headline, each linking to the page that backs it.
export const proofPoints = [
  { label: "pinoc on crates.io", href: "/projects/pinoc" },
  { label: "#3 India track: Full-Time", href: "/projects/full-time" },
  { label: "Superteam grant: Octasol", href: "/projects/octasol" },
];

export const websiteMetadata = {
  title: "Ayush Agrawal (A91y) | Solana & Full-Stack Web3 Developer",
  jobTitle: "Solana & Full-Stack Web3 Developer",
  alternateName: "A91y",
  description:
    "Ayush Agrawal (A91y), Solana and full-stack web3 developer. Pinocchio and Anchor programs, MagicBlock rollups, x402 machine payments, fintech payment systems.",
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
    "Protocol Engineer",
    "DeFi",
    "Backroll",
    "DePIN",
    "Turbin3",
    "StealthX",
    "Superteam",
    "FOSSCU",
    "Innogeeks",
    "KIET",
    "A91y",
  ],
};
