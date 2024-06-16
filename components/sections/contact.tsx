import { aboutYou, socials } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import SocialOutline from "@/components/social-outline";

export default function Contact() {
  return (
    <section id="contact" key="contact">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
        <p className="p-6 text-sm text-muted-foreground">
          Best way to reach me is through:{" "}
          <a href={`mailto:${aboutYou.email}`}>{aboutYou.email}</a>
        </p>
        <Separator />
        <div className="p-4 space-y-4">
          <div className="flex justify-between">
            <div className="space-x-3">
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
