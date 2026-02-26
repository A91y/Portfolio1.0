import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";
import { ExternalLink } from "lucide-react";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean;
}

export default function WorkShowcase({
  experience,
  whetherlast,
}: WorkShowcaseProps) {
  return (
    <div className="group">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Avatar className="h-12 w-12 border-2 border-border">
              <AvatarImage src={experience.logo} alt={experience.company} />
              <AvatarFallback className="text-xs">{experience.company.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-base leading-tight tracking-tight group-hover:text-primary transition-colors">
                {experience.company}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                {experience.position}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <DateRange date={experience.years} />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {experience.description}
          {!!experience.link && (
            <a 
              target="_blank" 
              href={experience.link}
              className="inline-flex items-center gap-1 ml-2 text-primary hover:underline font-medium"
            >
              Visit <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </p>
        
        {!whetherlast && <Separator className="mt-4" />}
      </div>
    </div>
  );
}
