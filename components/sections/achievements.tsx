import { ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Achievements</h2>
        <p className="text-muted-foreground">Hackathon placings and bounty wins</p>
      </div>
      <ul className="modern-card shadow-xs divide-y divide-border">
        {achievements.map((achievement) => (
          <li
            key={achievement.title}
            className={`p-6 space-y-1.5 ${achievement.highlight ? "bg-accent/40 border-l-4 border-l-foreground/60" : ""}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold leading-tight tracking-tight">
                {achievement.title}
              </h3>
              <p className="text-xs text-muted-foreground whitespace-nowrap">{achievement.date}</p>
            </div>
            <p className="text-sm font-medium text-muted-foreground">{achievement.event}</p>
            {(achievement.detail || achievement.href) && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.detail}
                {achievement.href && (
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 ml-2 font-medium"
                  >
                    Source <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
