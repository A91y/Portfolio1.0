import { Button } from "./ui/button";
import { Mail } from "lucide-react";

interface ActionButtonProps {
  actionText: string;
}

export default function ActionButton({ actionText }: ActionButtonProps) {
  return (
    <Button asChild className="h-10 px-6 no-underline max-[388px]:hidden" size="default">
      <a href="#contact">
        <Mail className="mr-2 h-4 w-4" />
        {actionText}
      </a>
    </Button>
  );
}
