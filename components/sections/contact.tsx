import { ArrowUpRight } from "lucide-react";
import { aboutYou, socials } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import HashGlow from "@/components/hash-glow";
import SocialOutline from "@/components/social-outline";

export default function Contact() {
  return (
    <section id="contact" key="contact" className="space-y-6">
      <HashGlow hash="#contact" targetId="contact-section" />
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-muted-foreground">Let&apos;s connect and build something amazing</p>
      </div>
      <div
        id="contact-section"
        className="modern-card shadow-xs"
      >
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</h3>
            <a 
              href={`mailto:${aboutYou.email}`}
              className="text-base font-medium inline-flex items-center gap-1 transition-all"
            >
              {aboutYou.email}
              <ArrowUpRight className="h-4 w-4 shrink-0" />
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
