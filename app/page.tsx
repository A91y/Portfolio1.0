import JsonLd from "@/components/json-ld";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Works from "@/components/sections/works";
import SiteShell from "@/components/site-shell";
import { profilePageJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={profilePageJsonLd} />
      <Hero />
      <Projects />
      <Works />
      <Contact />
    </SiteShell>
  );
}
