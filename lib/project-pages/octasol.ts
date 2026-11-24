import type { ProjectPage } from "./types";

const page: ProjectPage = {
  headline: "trustless GitHub bounties on Solana",
  problem:
    "A maintainer who pays for an issue has to trust the contributor, and the contributor has to trust that they'll be paid. Octasol escrows the bounty on Solana, so the money moves only when the pull request merges.",
  howItWorks: [
    "Maintainers post issues from their GitHub repositories and attach bounties; contributors signal interest with a pull request and negotiate the amount.",
    "The bounty sits in escrow and goes to the contributor's Solana wallet when the pull request merges; if it is closed or canceled, the funds return to the maintainer.",
    "Sign-in is GitHub OAuth. A Dev ID profile links GitHub, LeetCode, GeeksforGeeks, HackerRank, CodeChef and Superteam Earn accounts, verified with the Reclaim Protocol.",
    "A Next.js and TypeScript app over Prisma and PostgreSQL, with the escrow program in Rust and Anchor.",
  ],
  results: [
    "600+ users in its first month, with no paid marketing.",
    "Backed by a Superteam grant.",
    "32 stars and 19 forks on GitHub (Nov 2026).",
  ],
  credit: "Founded and led by me, built with a team of 3 along with more open-source contributors.",
  stack: ["Rust", "Anchor", "Solana", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  links: [
    { label: "GitHub repository", href: "https://github.com/octasol/octasol" },
  ],
};

export default page;
