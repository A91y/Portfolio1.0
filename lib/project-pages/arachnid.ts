import type { ProjectPage } from "./types";

const page: ProjectPage = {
  headline: "an async crawler for Tor and I2P sites",
  problem:
    "Sites on Tor (.onion) and I2P (.i2p) appear and vanish without notice, so monitoring them means keeping copies of their pages and finding harmful content among thousands of them. Arachnid crawls both networks concurrently, archives what it finds and classifies the text.",
  howItWorks: [
    "Concurrent crawlers built on asyncio and aiohttp, one for Tor through a SOCKS5 proxy and one for I2P, following links recursively up to a set depth.",
    "Each page is saved as HTML in an archive, with URLs and timestamps logged to CSV and already-seen URLs skipped.",
    "Requests rotate random user agents.",
    "Extracted text is classified for hate speech with the pretrained Hate-speech-CNERG/dehatebert-mono-english transformer, and pages are tagged with keyword categories such as marketplace.",
    "A menu-driven CLI starts Tor, I2P or combined crawls, and a Flask and Socket.IO dashboard lists flagged pages as they are found.",
  ],
  credit: "Built with a team of three.",
  stack: ["Python", "asyncio", "aiohttp", "Hugging Face Transformers", "PyTorch", "Flask"],
  links: [{ label: "GitHub repository", href: "https://github.com/A91y/Arachnid" }],
};

export default page;
