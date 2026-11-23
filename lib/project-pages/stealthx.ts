import type { ProjectPage } from "./types";

const page: ProjectPage = {
  headline: "private x402 payments for AI agents on Solana",
  problem:
    "AI agents that pay for APIs over x402 settle on a public ledger, so every payer, merchant and amount is visible to anyone. StealthX (Private MPP, the Private Machine Payment Protocol) moves the payment itself through a private rollup and keeps only a settlement record on Solana, which the merchant can disclose to a chosen reader.",
  howItWorks: [
    "One on-chain program written with Pinocchio, holding Merchant, Settlement, AccessGrant and PaymentNonce PDAs.",
    "Hand-written MagicBlock CPIs for delegate, commit and undelegate, replacing the Anchor-macro ephemeral-rollups-sdk, which stays as a dev-dependency to cross-check the CPI bytes.",
    "A settlement is delegated to MagicBlock's ephemeral rollup, where record_payment runs; the private value transfer happens inside the PER/TEE validator, and commit_settlement anchors the result back on Solana.",
    "Each settlement is bound to an x402 PAYMENT-SIGNATURE through a 32-byte payment nonce, which also rejects replays.",
    "grant_access creates an AccessGrant PDA, giving one reader scoped, optionally expiring access to a settlement.",
    "Off-chain agent and merchant SDKs, plus an x402 facilitator that co-signs as fee payer so agents pay gaslessly.",
  ],
  results: [
    "33 LiteSVM integration tests passing, covering each handler's happy path and failure modes.",
    "Full lifecycle (init, delegate, grant access, record, commit, undelegate) run on devnet against the deployed program.",
    "A private ephemeral-to-ephemeral transfer verified on devnet through the PER/TEE validator.",
    "Alongside StealthX in the same cohort, my Pinocchio compute-unit work cut an init instruction from ~19.5k to ~1.8k CU and account checks from ~17.8k to ~1.5k CU.",
  ],
  credit:
    "Team capstone from the Turbin3 accelerated Solana cohort (Q2 2026), built with four other developers.",
  stack: ["Rust", "Pinocchio", "MagicBlock", "x402", "TypeScript", "LiteSVM"],
  links: [
    { label: "GitHub repository", href: "https://github.com/Turbin3/accel-StealthX" },
  ],
};

export default page;
