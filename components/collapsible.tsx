"use client";

import { useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollapsibleProps {
  showLabel: string;
  hideLabel: string;
  children: React.ReactNode;
}

// Children stay in the server HTML while collapsed, so crawlers still read them.
export default function Collapsible({ showLabel, hideLabel, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="space-y-4">
      <div id={id} hidden={!open}>
        {children}
      </div>
      <Button
        onClick={() => setOpen((previous) => !previous)}
        variant="outline"
        size="sm"
        aria-expanded={open}
        aria-controls={id}
      >
        {open ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
        {open ? hideLabel : showLabel}
      </Button>
    </div>
  );
}
