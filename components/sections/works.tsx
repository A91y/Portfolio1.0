import {
  Experience,
  workExperiences,
  communityExperiences,
  educationExperiences,
} from "@/lib/data";
import WorkShowcase from "@/components/work-showcase";
import HashGlow from "@/components/hash-glow";

// "Freelance" names separate clients, not one company, so it never groups.
const UNGROUPED_COMPANY = "Freelance";

// Adjacent entries with the same company render as one card with several roles.
function groupByCompany(experiences: Experience[]) {
  const groups: Experience[][] = [];
  for (const experience of experiences) {
    const last = groups[groups.length - 1];
    if (
      last &&
      experience.company !== UNGROUPED_COMPANY &&
      last[0].company === experience.company
    ) {
      last.push(experience);
    } else {
      groups.push([experience]);
    }
  }
  return groups;
}

function ExperienceGroup({
  experiences,
  sectionId,
  headingLevel = "h3",
}: {
  experiences: Experience[];
  sectionId?: string;
  headingLevel?: "h3" | "h4";
}) {
  const groups = groupByCompany(experiences);
  return (
    <div id={sectionId} className="modern-card shadow-xs">
      <div className="p-6 space-y-6">
        {groups.map((roles, index) => (
          <WorkShowcase
            key={`${roles[0].company}-${roles[0].years}`}
            roles={roles}
            whetherlast={groups.length == index + 1}
            headingLevel={headingLevel}
          />
        ))}
      </div>
    </div>
  );
}

function SubGroup({
  label,
  note,
  experiences,
  sectionId,
}: {
  label: string;
  note?: string;
  experiences: Experience[];
  sectionId?: string;
}) {
  if (experiences.length === 0) return null;
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold uppercase tracking-wider">{label}</h3>
        {note && <p className="text-sm text-muted-foreground">{note}</p>}
      </div>
      <ExperienceGroup experiences={experiences} sectionId={sectionId} headingLevel="h4" />
    </div>
  );
}

const inSection = (section: Experience["section"]) =>
  workExperiences.filter((experience) => experience.section === section);

export default function Works() {
  return (
    <section id="work" key="work" className="space-y-12">
      <HashGlow hash="#work" targetId="work-section" />
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">Work</h2>
          <p className="text-muted-foreground">
            My professional journey and contributions
          </p>
        </div>
        <SubGroup label="Current" experiences={inSection("current")} sectionId="work-section" />
        <SubGroup
          label="Web3 engineering practice"
          note="Client work delivered through my agency."
          experiences={inSection("agency")}
        />
        <SubGroup label="Earlier" experiences={inSection("earlier")} />
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">Community</h2>
        <ExperienceGroup experiences={communityExperiences} />
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">Programs & Education</h2>
        <SubGroup label="Programs" experiences={inSection("program")} />
        <SubGroup label="Education" experiences={educationExperiences} />
      </div>
    </section>
  );
}
