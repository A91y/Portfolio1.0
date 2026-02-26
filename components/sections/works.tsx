"use client";

import { useEffect } from "react";
import { WorkExperience, workExperiences } from "@/lib/data";
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

// Add event listener for hash changes
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", handleHashChange);
  // Check if the current hash is #work on initial load
  handleHashChange();
}

export default function Works() {
  return (
    <section id="work" key="work" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
        <p className="text-muted-foreground">My professional journey and contributions</p>
      </div>
      <div id="work-section" className="modern-card shadow-sm">
        <div className="p-6 space-y-6">
          {workExperiences.map((experience: WorkExperience, index: number) => (
            <WorkShowcase
              key={experience.company}
              experience={experience}
              whetherlast={workExperiences.length == index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
