"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { Button } from "./ui/button";
import Logo from "./logo";
import {
  Home,
  Briefcase,
  Mail,
  Presentation,
  FileText,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import { blog, resume } from "@/lib/data";

// Plain anchors, so the browser fires the `hashchange` event the section glow listens for.
const SECTIONS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "/#projects", label: "Projects", Icon: Presentation },
  { href: "/#work", label: "Work", Icon: Briefcase },
  { href: "/#contact", label: "Contact", Icon: Mail },
];

const EXTERNAL: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: blog.href, label: blog.label, Icon: PenLine },
  { href: resume.href, label: resume.label, Icon: FileText },
];

// Browsers skip `hashchange` when the hash is already current, so repeat clicks announce it.
function announceRepeatClick(event: MouseEvent<HTMLAnchorElement>) {
  const target = new URL(event.currentTarget.href);
  if (target.pathname === window.location.pathname && target.hash === window.location.hash) {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xs bg-background/80 border-b border-border mb-8">
      <div className="flex justify-between items-center py-4">
        <Logo />

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm" className="h-9 no-underline">
            <Link href="/" aria-label="Home">
              <Home className="h-4 w-4" />
              <span className="hidden sm:block ml-2">Home</span>
            </Link>
          </Button>
          {SECTIONS.map(({ href, label, Icon }) => (
            <Button key={href} asChild variant="ghost" size="sm" className="h-9 no-underline">
              <a href={href} onClick={announceRepeatClick} aria-label={label}>
                <Icon className="h-4 w-4" />
                <span className="hidden sm:block ml-2">{label}</span>
              </a>
            </Button>
          ))}
          {EXTERNAL.map(({ href, label, Icon }) => (
            <Button key={href} asChild variant="ghost" size="sm" className="h-9 no-underline">
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="h-4 w-4" />
                <span className="hidden sm:block ml-2">{label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
