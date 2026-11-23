import Link from "next/link";
import { logoText } from "@/lib/data";

export default function Logo() {
  return (
    <Link
      href="/"
      className="block max-w-fit no-underline px-3 py-1.5 rounded-md text-lg font-bold transition-colors hover:text-muted-foreground"
    >
      {logoText}
    </Link>
  );
}
