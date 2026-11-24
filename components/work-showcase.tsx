import Image from "next/image";
import { Experience } from "@/lib/data";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";
import { ExternalLink } from "lucide-react";

interface WorkShowcaseProps {
  // Roles at one company, newest first.
  roles: Experience[];
  whetherlast: boolean;
  // h4 when the card sits under a sub-group's h3.
  headingLevel?: "h3" | "h4";
  // Anchor target, such as "work-credible".
  id?: string;
}

function VisitLink({ href }: { href: string }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="inline-flex items-center gap-1 ml-2 text-primary font-medium"
    >
      Visit <ExternalLink className="h-3 w-3" />
    </a>
  );
}

function overallSpan(roles: Experience[]) {
  const start = roles[roles.length - 1].years.split(" - ")[0];
  const end = roles[0].years.split(" - ")[1] ?? roles[0].years;
  return `${start} - ${end}`;
}

export default function WorkShowcase({
  roles,
  whetherlast,
  headingLevel = "h3",
  id,
}: WorkShowcaseProps) {
  const Heading = headingLevel;
  const first = roles[0];
  const grouped = roles.length > 1;
  const link = roles.find((role) => role.link)?.link;

  return (
    <div id={id} className="group">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Image
              src={first.logo}
              alt={`${first.company} logo`}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full border-2 border-border object-cover"
            />
            <div className="min-w-0 flex-1">
              <Heading className="font-semibold text-base leading-tight tracking-tight group-hover:text-primary transition-colors">
                {first.company}
              </Heading>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                {grouped ? `${roles.length} roles` : first.position}
                {grouped && !!link && <VisitLink href={link} />}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <DateRange date={grouped ? overallSpan(roles) : first.years} />
          </div>
        </div>

        {grouped ? (
          <ol className="ml-6 border-l-2 border-border space-y-5">
            {roles.map((role) => (
              <li key={role.years} className="pl-5 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-sm font-semibold">{role.position}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{role.years}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {first.description}
            {!!link && <VisitLink href={link} />}
          </p>
        )}

        {!whetherlast && <Separator className="mt-4" />}
      </div>
    </div>
  );
}
