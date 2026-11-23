import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { expertise, ExpertiseArea, ExpertiseProof, Skill, skills } from "@/lib/data";
import SkillOutline from "@/components/skill-outline";

const featured = expertise.filter((area) => area.featured);
const compact = expertise.filter((area) => !area.featured);

const toolNames = new Set(expertise.flatMap((area) => area.tools));
const alsoUsed = skills.filter((skill) => !toolNames.has(skill.text));

function iconFor(tool: string) {
  return skills.find((skill) => skill.text === tool)?.icon;
}

// Groups skills by their `group` field, keeping source order within and across groups.
function groupSkills(list: Skill[]): Skill[][] {
  const groups = new Map<Skill["group"], Skill[]>();
  for (const skill of list) groups.set(skill.group, [...(groups.get(skill.group) ?? []), skill]);
  return Array.from(groups.values());
}

function ProofLink({ proof }: { proof: ExpertiseProof }) {
  if (!proof.href) return <span>{proof.label}</span>;
  if (proof.href.startsWith("/")) {
    return (
      <Link href={proof.href} className="font-medium">
        {proof.label}
      </Link>
    );
  }
  return (
    <a href={proof.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium">
      {proof.label}
      <ExternalLink className="h-3 w-3 shrink-0" />
    </a>
  );
}

function Tools({ area, small = false }: { area: ExpertiseArea; small?: boolean }) {
  if (area.tools.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {area.tools.map((tool) => (
        <SkillOutline key={tool} Icon={iconFor(tool)} text={tool} small={small} />
      ))}
    </div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Expertise</h2>
        <p className="text-muted-foreground">What I build, with links to proof.</p>
      </div>

      {/* Cards are not links themselves: they contain links, and nested anchors are invalid. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {featured.map((area) => (
          <article key={area.id} id={area.id} className="modern-card shadow-xs p-6 space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold leading-tight tracking-tight">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.claim}</p>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed marker:text-foreground/40">
              {area.proofs.map((proof) => (
                <li key={proof.label}>
                  <ProofLink proof={proof} />
                </li>
              ))}
            </ul>
            <Tools area={area} />
          </article>
        ))}
      </div>

      <div className="modern-card shadow-xs divide-y divide-border">
        {compact.map((area) => (
          <div key={area.id} id={area.id} className="p-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1">
              <h3 className="font-semibold leading-tight tracking-tight">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.claim}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {area.proofs.map((proof, index) => (
                <span key={proof.label}>
                  {index > 0 && " · "}
                  <ProofLink proof={proof} />
                </span>
              ))}
            </p>
            <Tools area={area} small />
          </div>
        ))}
      </div>

      {alsoUsed.length > 0 && (
        <details>
          <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
            Also used ({alsoUsed.length})
          </summary>
          <div className="space-y-3 pt-3">
            {groupSkills(alsoUsed).map((group) => (
              <div key={group[0].group} className="flex flex-wrap gap-2">
                {group.map((skill) => (
                  <SkillOutline key={skill.text} Icon={skill.icon} text={skill.text} small />
                ))}
              </div>
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
