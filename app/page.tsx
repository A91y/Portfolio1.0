import HashGlow from "@/components/hash-glow";
import JsonLd from "@/components/json-ld";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import Expertise from "@/components/sections/expertise";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Works from "@/components/sections/works";
import SiteShell from "@/components/site-shell";
import { profilePageJsonLd, websiteJsonLd } from "@/lib/structured-data";

// These hashes have their own HashGlow inside their section.
const DEDICATED_GLOW_IDS = ["work", "projects", "contact"];

export default function Home() {
  return (
    <SiteShell intro={<Hero />}>
      <JsonLd data={[websiteJsonLd, profilePageJsonLd]} />
      <HashGlow any skip={DEDICATED_GLOW_IDS} />
      <Expertise />
      <Projects />
      <Achievements />
      <Works />
      <Contact />
    </SiteShell>
  );
}
