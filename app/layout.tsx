import { ThemeProvider } from "@/components/theme-provider";
import { websiteMetadata } from "@/lib/data";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: websiteMetadata.title,
  description: websiteMetadata.description,
  openGraph: {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    url: websiteMetadata.url,
    type: "website",
    images: [
      {
        url: websiteMetadata.image_url,
        width: 800,
        height: 600,
        alt: websiteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    images: websiteMetadata.image_url,
  },
  alternates: {
    canonical: websiteMetadata.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        {/* Analytics for tracking user interactions */}
        <Analytics />
      </body>
    </html>
  );
}
