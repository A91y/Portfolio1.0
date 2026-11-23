import { aboutYou } from "@/lib/data";

// The name is the page's h1 only on pages without one of their own.
export default function Sidebar({ nameIsHeading = true }: { nameIsHeading?: boolean }) {
  const Name = nameIsHeading ? "h1" : "p";
  return (
    <div id="about" className="modern-card hover-lift rounded-xl shadow-xs flex flex-col space-y-4 p-6 h-fit static md:sticky top-24 md:min-w-[280px] md:max-w-[320px]">
      {/* Title/Name */}
      <div className="space-y-2">
        <Name className="text-2xl font-bold tracking-tight">
          {aboutYou.name}
        </Name>
        <div className="h-0.5 w-12 bg-foreground/20 rounded-full" />
      </div>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {aboutYou.description}
      </p>
      
      {/* GitHub Link */}
      <a 
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/A91y"
        className="group inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all duration-200"
      >
        <span>View My GitHub</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
}
