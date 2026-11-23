import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface SiteShellProps {
  children: React.ReactNode;
  // Shown above the sidebar below lg; on wider screens it simply leads the main column.
  intro?: React.ReactNode;
  // False on pages that render their own h1.
  nameIsHeading?: boolean;
}

// Below lg, main uses display: contents so intro, sidebar and children order as siblings:
// intro first, then the sidebar, then the rest of the page.
export default function SiteShell({ children, intro, nameIsHeading = true }: SiteShellProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <aside className={`${intro ? "order-2" : "order-last"} lg:order-none lg:w-80 shrink-0`}>
            <Sidebar nameIsHeading={nameIsHeading} />
          </aside>
          <main className="max-lg:contents flex-1 min-w-0 lg:space-y-12">
            {intro && <div className="order-1">{intro}</div>}
            <div className="order-3 space-y-12">{children}</div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
