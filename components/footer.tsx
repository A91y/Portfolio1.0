import { ArrowUpRight } from "lucide-react";
import { blog } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-border">
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Built with <span className="font-medium">TypeScript</span>, <span className="font-medium">Next.js</span> & <span className="font-medium">Tailwind CSS</span>
        </p>
        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <a
            href={blog.href}
            className="inline-flex items-center gap-0.5 hover:text-foreground transition-colors font-medium"
          >
            {blog.label}
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <span>•</span>
          <a
            href="https://github.com/A91y/Portfolio1.0"
            className="inline-flex items-center gap-0.5 hover:text-foreground transition-colors font-medium"
          >
            View Source
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <span>•</span>
          <a
            href="https://github.com/A91y/Portfolio1.0/blob/main/LICENSE"
            className="inline-flex items-center gap-0.5 hover:text-foreground transition-colors"
          >
            MIT License
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <span>•</span>
          <span>Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
