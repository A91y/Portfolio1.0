"use client";

import { useEffect } from "react";

const GLOW_MS = 3000;

type HashGlowProps =
  | {
      // Hash that triggers the glow, such as "#work".
      hash: string;
      // Id of the element that glows.
      targetId: string;
      any?: never;
    }
  | {
      // Glows whatever element the current hash names.
      any: true;
      // Ids that have their own fixed-hash HashGlow.
      skip?: string[];
      hash?: never;
      targetId?: never;
    };

function glow(target: HTMLElement) {
  target.classList.add("glow-border");
  setTimeout(() => target.classList.remove("glow-border"), GLOW_MS);
}

// A wrapper glows its first card, since the glow animates a card's border.
function cardFor(element: HTMLElement) {
  if (element.classList.contains("modern-card")) return element;
  return element.querySelector<HTMLElement>(".modern-card") ?? element;
}

// Renders nothing; runs after hydration so the glow class never differs from the server HTML.
export default function HashGlow(props: HashGlowProps) {
  const { hash, targetId, any } = props;
  const skip = props.any ? (props.skip ?? []).join(",") : "";

  useEffect(() => {
    const onHashChange = () => {
      if (any) {
        const id = window.location.hash.slice(1);
        if (!id || skip.split(",").includes(id)) return;
        const element = document.getElementById(id);
        if (element) glow(cardFor(element));
        return;
      }
      if (window.location.hash !== hash) return;
      const target = document.getElementById(targetId!);
      if (target) glow(target);
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [hash, targetId, any, skip]);

  return null;
}
