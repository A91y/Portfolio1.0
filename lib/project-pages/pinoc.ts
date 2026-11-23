import type { ProjectPage } from "./types";

const page: ProjectPage = {
  headline: "a Rust CLI for Solana Pinocchio programs",
  problem:
    "Pinocchio is a deliberately minimal library for Solana programs: it ships no build orchestration, project layout or tooling, so each team rebuilds the same scripts for building, testing, deploying and keeping program IDs in sync. A plain cargo clean also deletes the program keypair with the build output, which loses the program ID.",
  howItWorks: [
    "pinoc init scaffolds a project, with --with-example for a worked PDA program. Pinoc.toml is optional and records only what differs from the defaults.",
    "pinoc build and pinoc test build the SBF program and run the tests on mollusk-svm; pinoc deploy deploys at the address the program declares, and pinoc verify compares the deployed bytes with the local artifact.",
    "pinoc idl regenerates the IDL, and pinoc client generate renders a Rust or TypeScript client from it, both with a --check mode for CI.",
    "pinoc check lints for Solana-specific safety issues and reports as text, JSON, GitHub annotations or SARIF.",
    "Per-cluster builds: [clusters] in Pinoc.toml records each cluster's features, and pinoc deploy refuses an artifact built for a different cluster.",
    "pinoc clean removes build artifacts but keeps program keypairs, so the program ID survives.",
  ],
  results: [
    "Published on crates.io as pinoc (v0.4.1): cargo install pinoc, or cargo binstall pinoc for a prebuilt binary.",
    "Ships a GitHub Action that installs a pinned pinoc in CI.",
  ],
  stack: ["Rust", "Pinocchio", "Solana", "mollusk-svm", "Codama"],
  links: [
    { label: "GitHub repository", href: "https://github.com/A91y/pinoc" },
    { label: "crates.io", href: "https://crates.io/crates/pinoc" },
    { label: "GitHub Action", href: "https://github.com/marketplace/actions/setup-pinoc" },
  ],
  sourceCode: { repository: "https://github.com/A91y/pinoc", language: "Rust" },
};

export default page;
