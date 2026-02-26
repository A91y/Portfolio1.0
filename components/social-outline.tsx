import { IconType } from "react-icons";

interface SocialOutlineProps {
  name: string;
  link: string;
  Icon: IconType;
}

export default function SocialOutline({ name, link, Icon }: SocialOutlineProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      title={name}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-border bg-accent hover:bg-accent/80 h-10 w-10"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
