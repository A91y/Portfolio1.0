import {
  aboutYou,
  availability,
  marketingHeadlines,
  Skill,
  skills,
} from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import ActionButton from "@/components/action-button";
import SkillOutline from "@/components/skill-outline";

// Groups skills by their `group` field while preserving source order, both
// within each group and across groups (on-chain first).
function groupSkills(list: Skill[]): Skill[][] {
  const groups: Skill[][] = [];
  const indexByGroup = new Map<Skill["group"], number>();

  for (const skill of list) {
    const existing = indexByGroup.get(skill.group);
    if (existing === undefined) {
      indexByGroup.set(skill.group, groups.length);
      groups.push([skill]);
    } else {
      groups[existing].push(skill);
    }
  }

  return groups;
}

export default function Hero() {
  const skillGroups = groupSkills(skills);

  return (
    <section id="home" key="home" className="space-y-8">
      <div className="space-y-4">
        {availability.open && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
            </span>
            <span>{availability.headline}</span>
          </div>
        )}
        <div className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {marketingHeadlines.mainHeadline}
        </div>
        <div className="text-xl text-muted-foreground">
          {marketingHeadlines.subHeadline}
        </div>
      </div>
      
      <Separator />
      
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <ActionButton actionText="Get in Touch" />
        <div className="flex gap-8">
          <div className="space-y-1.5">
            <h3 className="text-2xl font-bold leading-none">
              {aboutYou.yearsOfExperience}
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-2xl font-bold leading-none">{aboutYou.location}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider">Tech Stack</h3>
        <div className="space-y-3">
          {skillGroups.map((group) => (
            <div key={group[0].group} className="flex flex-wrap gap-2">
              {group.map((skill) => (
                <SkillOutline
                  key={skill.text}
                  Icon={skill.icon}
                  text={skill.text}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
