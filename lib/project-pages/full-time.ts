import type { ProjectPage } from "./types";

const page: ProjectPage = {
  headline: "proof-based settlement on Solana",
  problem:
    "Prediction and parametric markets usually settle through an admin, an oracle key or a dispute committee, so users have to trust whoever reports the result. TxODDS anchors a daily Merkle root of match data on Solana; Full-Time settles markets against that root, so a result counts only if its proof checks out on-chain.",
  howItWorks: [
    "Users lock USDC into a market on a real fixture with a parametric condition, such as total goals over 2.5.",
    "settle has no authority signer: anyone submits TxODDS's game_finalised proof, and the program checks it by CPI to txoracle::validate_stat, which recomputes the Merkle root.",
    "A fixed contest window lets a strictly newer proof correct an earlier settlement, and a market not resolved by its deadline plus a grace window is refundable by anyone, so funds are never locked.",
    "@fulltime/settle packages the flow as a Node-first TypeScript SDK: create a market, place, settle by proof, claim.",
    "An autonomous keeper watches the TxLINE API for finalised matches and submits the proof; the Next.js reference dApp is built on the same SDK.",
  ],
  results: [
    "3rd place in the TxODDS World Cup India Buildathon (Superteam India), 200 USDC prize.",
    "7/7 keeper checks passing.",
    "Full lifecycle run on devnet with Circle devnet USDC: the keeper settled a real finalised fixture with no human involved, and the winner claimed.",
  ],
  stack: ["Rust", "Anchor", "TypeScript", "Next.js", "Codama", "LiteSVM"],
  links: [
    { label: "Live demo (devnet)", href: "https://fulltime.ayushagr.me" },
    { label: "GitHub repository", href: "https://github.com/A91y/full-time" },
    { label: "TxLINE by TxODDS", href: "https://txline.txodds.com/" },
    {
      label: "Buildathon result (3rd place)",
      href: "https://superteam.fun/earn/listing/txodds-world-cup-buildathon-india",
    },
  ],
};

export default page;
