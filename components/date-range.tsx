import { Calendar } from "lucide-react";

interface DateRangeProps {
  date: string;
}

export default function DateRange({ date }: DateRangeProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-lg text-xs font-medium border border-border bg-card/50 shadow-sm h-9 px-3 py-2 whitespace-nowrap">
      <Calendar className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
      <span className="text-muted-foreground">{date}</span>
    </div>
  );
}
