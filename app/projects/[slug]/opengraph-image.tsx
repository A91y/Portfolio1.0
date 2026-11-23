import { ImageResponse } from "next/og";
import { aboutYou, projects, websiteMetadata } from "@/lib/data";
import { loadProjectPage } from "@/lib/project-pages";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Project preview";

export function generateStaticParams() {
  return projects.filter((project) => project.slug).map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const page = await loadProjectPage(slug);
  const tags = (project?.tags ?? []).slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0f",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>{project?.title}</div>
          <div style={{ fontSize: 40, color: "#a1a1aa", lineHeight: 1.25 }}>{page?.headline}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 26,
                  padding: "8px 18px",
                  borderRadius: 10,
                  border: "2px solid #27272a",
                  background: "#18181b",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#a1a1aa" }}>
          <div>{aboutYou.name}</div>
          <div>{websiteMetadata.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
