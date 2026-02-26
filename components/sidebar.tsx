import { aboutYou } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="modern-card hover-lift rounded-xl shadow-sm flex flex-col space-y-4 p-6 h-fit static md:sticky top-24 md:min-w-[280px] md:max-w-[320px]">
      {/* Title/Name */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">
          {aboutYou.name}
        </h1>
        <div className="h-0.5 w-12 bg-foreground/20 rounded-full" />
      </div>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {aboutYou.description}
      </p>
      
      {/* GitHub Link */}
      <a 
        target="_blank" 
        href="https://github.com/A91y"
        className="group inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all duration-200"
      >
        <span>View My GitHub</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
}
