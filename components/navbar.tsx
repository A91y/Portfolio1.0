"use client";

import { Button } from "./ui/button";
import Logo from "./logo";
import { Home, Briefcase, Mail, Presentation } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);

    // Emit the hashchange event if the path contains a hash
    if (path.includes("#")) {
      window.location.hash = path.split("#")[1];
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border mb-8">
      <div className="flex justify-between items-center py-4">
        <Logo onClick={() => navigateTo("/")} />
        
        {/* Navigation Menus */}
        <div className="flex items-center gap-1">
          <Button
            onClick={() => navigateTo("/")}
            variant="ghost"
            size="sm"
            className="h-9"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:block ml-2">Home</span>
          </Button>
          <Button
            onClick={() => navigateTo("/#projects")}
            variant="ghost"
            size="sm"
            className="h-9"
          >
            <Presentation className="h-4 w-4" />
            <span className="hidden sm:block ml-2">Projects</span>
          </Button>
          <Button
            onClick={() => navigateTo("/#work")}
            variant="ghost"
            size="sm"
            className="h-9"
          >
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:block ml-2">Work</span>
          </Button>
          <Button
            onClick={() => navigateTo("/#contact")}
            variant="ghost"
            size="sm"
            className="h-9"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:block ml-2">Contact</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
