import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SkillOutlineProps {
  Icon?: IconType | LucideIcon;
  text: string;
  small?: boolean;
}

export default function SkillOutline({ Icon, text, small = false }: SkillOutlineProps) {
  const size = small ? "h-7 px-2 py-1 text-xs" : "h-9 px-3 py-2 text-sm";
  return (
    <div className={`inline-flex items-center justify-center rounded-md font-medium transition-colors border border-border bg-accent hover:bg-accent/80 ${size}`}>
      {(!!Icon) ? <Icon className={small ? "mr-1.5 h-3 w-3" : "mr-2 h-3.5 w-3.5"} />: null}
      {text}
    </div>
  );
}
