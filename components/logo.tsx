import { logoText } from "@/lib/data";

interface LogoProps {
  onClick: Function;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <div
      onClick={() => onClick()}
      className="cursor-pointer max-w-fit px-3 py-1.5 rounded-md text-lg font-bold transition-colors hover:text-muted-foreground"
    >
      {logoText}
    </div>
  );
}
