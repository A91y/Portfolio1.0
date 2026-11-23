import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface SiteShellProps {
  children: React.ReactNode;
  // False on pages that render their own h1.
  nameIsHeading?: boolean;
}

export default function SiteShell({ children, nameIsHeading = true }: SiteShellProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <aside className="lg:w-80 shrink-0">
            <Sidebar nameIsHeading={nameIsHeading} />
          </aside>
          <main className="flex-1 min-w-0 space-y-12">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
