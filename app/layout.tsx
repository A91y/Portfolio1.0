import { ThemeProvider } from "@/components/theme-provider";
import {
  aboutYou,
  blog,
  cratesProfile,
  educationExperiences,
  siteUpdated,
  skills,
  socials,
  websiteMetadata,
  workExperiences,
} from "@/lib/data";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(websiteMetadata.url),
  title: websiteMetadata.title,
  description: websiteMetadata.description,
  // <meta content="text/html; charset=UTF-8" name="Content-Type" />
  // <meta content="width=device-width, initial-scale=1" name="viewport" />

  openGraph: {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    url: websiteMetadata.url,
    type: "website",
    siteName: websiteMetadata.title,
    images: [
      {
        url: websiteMetadata.image_url,
        width: 1200,
        height: 630,
        alt: websiteMetadata.title,
      },
    ],
  },
  twitter: {
    site: websiteMetadata.twitterSite,
    card: "summary_large_image",
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    images: websiteMetadata.image_url,
  },
  alternates: {
    canonical: websiteMetadata.url,
    types: { "text/markdown": "/llms.txt" },
  },
  keywords: websiteMetadata.keywords,
};

const currentRole = workExperiences.find((experience) =>
  experience.years.endsWith("Present"),
);

const person = {
  "@type": "Person",
  "@id": `${websiteMetadata.url}/#person`,
  name: aboutYou.name,
  alternateName: websiteMetadata.alternateName,
  url: websiteMetadata.url,
  image: websiteMetadata.logo_url,
  email: `mailto:${aboutYou.email}`,
  jobTitle: websiteMetadata.jobTitle,
  description: aboutYou.description,
  address: { "@type": "PostalAddress", addressLocality: aboutYou.location },
  ...(currentRole && {
    worksFor: {
      "@type": "Organization",
      name: currentRole.company,
      ...(currentRole.link && { url: currentRole.link }),
    },
  }),
  alumniOf: educationExperiences.map((education) => ({
    "@type": "EducationalOrganization",
    name: education.company,
    ...(education.link && { url: education.link }),
  })),
  knowsAbout: skills.map((skill) => skill.text),
  sameAs: [...socials.map((social) => social.link), blog.href, cratesProfile],
};

// schema.org ProfilePage data for search engines and LLM crawlers.
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: websiteMetadata.url,
  name: websiteMetadata.title,
  dateModified: siteUpdated,
  mainEntity: person,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        {/* Analytics for tracking user interactions */}
        <Analytics />
      </body>
    </html>
  );
}
