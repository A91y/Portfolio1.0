import Link from "next/link";
import {
  aboutYou,
  availability,
  marketingHeadlines,
  proofPoints,
} from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import ActionButton from "@/components/action-button";

export default function Hero() {
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
        <ul className="flex flex-wrap gap-2 pt-2">
          {proofPoints.map((point) => (
            <li key={point.href}>
              <Link
                href={point.href}
                className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium no-underline transition-colors hover:bg-accent"
              >
                {point.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <Separator />
      
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <ActionButton actionText="Get in Touch" />
        <dl className="flex gap-8">
          <div className="flex flex-col-reverse gap-1.5">
            <dt className="text-xs text-muted-foreground uppercase tracking-wider">Experience</dt>
            <dd className="text-2xl font-bold leading-none">
              {aboutYou.yearsOfExperience}
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-1.5">
            <dt className="text-xs text-muted-foreground uppercase tracking-wider">Location</dt>
            <dd className="text-2xl font-bold leading-none">{aboutYou.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
