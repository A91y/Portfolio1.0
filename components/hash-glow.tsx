"use client";

import { useEffect } from "react";

const GLOW_MS = 3000;

interface HashGlowProps {
  // Hash that triggers the glow, such as "#work".
  hash: string;
  // Id of the element that glows.
  targetId: string;
}

// Renders nothing; runs after hydration so the glow class never differs from the server HTML.
export default function HashGlow({ hash, targetId }: HashGlowProps) {
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash !== hash) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      target.classList.add("glow-border");
      setTimeout(() => target.classList.remove("glow-border"), GLOW_MS);
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [hash, targetId]);

  return null;
}
