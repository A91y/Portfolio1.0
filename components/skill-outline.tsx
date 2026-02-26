import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SkillOutlineProps {
  Icon?: IconType | LucideIcon;
  text: string;
}

export default function SkillOutline({ Icon, text }: SkillOutlineProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-border bg-accent hover:bg-accent/80 h-9 px-3 py-2">
      {(!!Icon) ? <Icon className="mr-2 h-3.5 w-3.5" />: null}
      {text}
    </div>
  );
}
