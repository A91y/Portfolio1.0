"use client";

import { aboutYou, socials } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import SocialOutline from "@/components/social-outline";

// Function to handle hash change
const handleHashChange = () => {
  if (window.location.hash === "#contact") {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.classList.add("glow-border");
      setTimeout(() => {
        contactSection.classList.remove("glow-border");
      }, 3000); // Remove the glow effect after 3 seconds
    }
  }
};

// Add event listener for hash changes
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", handleHashChange);
  // Check if the current hash is #contact on initial load
  handleHashChange();
}

export default function Contact() {
  return (
    <section id="contact" key="contact" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-muted-foreground">Let's connect and build something amazing</p>
      </div>
      <div
        id="contact-section"
        className="modern-card shadow-sm"
      >
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</h3>
            <a 
              href={`mailto:${aboutYou.email}`}
              className="text-base font-medium hover:underline underline-offset-4 inline-block transition-all"
            >
              {aboutYou.email}
            </a>
          </div>
          <Separator />
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Social Links</h3>
            <div className="flex gap-3 flex-wrap">
              {socials.map((social) => (
                <SocialOutline
                  key={social.name}
                  Icon={social.icon}
                  name={social.name}
                  link={social.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
