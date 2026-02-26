import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Works from "@/components/sections/works";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <Sidebar />
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-12">
            <Hero />
            <Projects />
            <Works />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
