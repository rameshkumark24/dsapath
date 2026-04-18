// src/components/ProgressBar.tsx
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  totalProblems: number;
  solvedProblems: number;
}

export default function ProgressBar({ totalProblems, solvedProblems }: ProgressBarProps) {
  // SECURITY PROTOCOL: Prevent division by zero runtime error
  // If totalProblems is 0, progress defaults to 0% rather than Infinity/NaN
  const percentage = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  return (
    <div className="flex items-center space-x-4 w-full sm:max-w-xs mt-3 sm:mt-0">
      <Progress value={percentage} className="h-2 w-full bg-zinc-800" />
      <span className="text-sm font-medium text-emerald-500 min-w-10 text-right">
        {percentage}%
      </span>
    </div>
  );
}
