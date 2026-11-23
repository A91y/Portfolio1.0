"use client";

import { useEffect } from "react";
import {
  Experience,
  workExperiences,
  communityExperiences,
  educationExperiences,
} from "@/lib/data";
import WorkShowcase from "@/components/work-showcase";

// Function to handle hash change
const handleHashChange = () => {
  if (window.location.hash === "#work") {
    const workSection = document.getElementById("work-section");
    if (workSection) {
      workSection.classList.add("glow-border");
      setTimeout(() => {
        workSection.classList.remove("glow-border");
      }, 3000); // Remove the glow effect after 3 seconds
    }
  }
};

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
}: {
  experiences: Experience[];
  sectionId?: string;
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
          />
        ))}
      </div>
    </div>
  );
}

export default function Works() {
  // Runs after hydration so the glow class never differs from the server HTML.
  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="work" key="work" className="space-y-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">Work</h2>
          <p className="text-muted-foreground">
            My professional journey and contributions
          </p>
        </div>
        <ExperienceGroup
          experiences={workExperiences}
          sectionId="work-section"
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">Community</h2>
        <ExperienceGroup experiences={communityExperiences} />
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">Education</h2>
        <ExperienceGroup experiences={educationExperiences} />
      </div>
    </section>
  );
}
