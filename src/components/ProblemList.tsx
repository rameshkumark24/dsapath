// src/components/ProblemList.tsx
"use client";

import { useState, useCallback } from "react";
import ProgressBar from "@/components/ProgressBar";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { roadmapData, Difficulty } from "@/data/roadmap";

interface ProblemListProps {
  userId?: string;
  initialCompletedIds?: string[];
}

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Hard: "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

export default function ProblemList({ userId, initialCompletedIds = [] }: ProblemListProps) {
  // Store completed problem IDs in a Set for O(1) lookups
  const [completed, setCompleted] = useState<Set<string>>(new Set(initialCompletedIds));

  const toggleProblem = useCallback(
    // @base-ui Checkbox onCheckedChange signature: (checked: boolean, event: Event) => void
    async (problemId: string, isChecked: boolean) => {
      // SECURITY: Strict type validation to prevent state injection
      if (typeof problemId !== "string" || problemId.trim() === "") {
        console.error("Security/Validation Error: Invalid problem ID type.");
        return;
      }

      if (!userId) {
        alert("Please log in to track your progress.");
        return;
      }

      // Optimistic UI Update: instantly update state for a snappy UX
      setCompleted((prev) => {
        const next = new Set(prev);
        if (isChecked) next.add(problemId);
        else next.delete(problemId);
        return next;
      });

      // Background Supabase Sync
      try {
        const { data: existingProgress } = await supabase
          .from("user_progress")
          .select("id")
          .eq("user_id", userId)
          .eq("problem_id", problemId)
          .single();

        let error;
        if (existingProgress) {
          const res = await supabase
            .from("user_progress")
            .update({ completed: isChecked, updated_at: new Date().toISOString() })
            .eq("id", existingProgress.id);
          error = res.error;
        } else {
          const res = await supabase
            .from("user_progress")
            .insert({ user_id: userId, problem_id: problemId, completed: isChecked });
          error = res.error;
        }

        if (error) throw error;
      } catch (err) {
        console.error("Failed to sync progress:", err);
        // Revert Optimistic Update on failure
        setCompleted((prev) => {
          const next = new Set(prev);
          if (!isChecked) next.add(problemId);
          else next.delete(problemId);
          return next;
        });
      }
    },
    [userId]
  );

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      {roadmapData.map((module) => (
        <div
          key={module.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
        >
          {/* Module Header with inline Progress */}
          <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl font-semibold text-zinc-100">{module.title}</h2>
            <ProgressBar
              totalProblems={module.problems.length}
              solvedProblems={module.problems.filter((p) => completed.has(p.id)).length}
            />
          </div>

          {/* Problems List */}
          <div className="divide-y divide-zinc-800/50">
            {module.problems.map((problem) => {
              const isCompleted = completed.has(problem.id);

              return (
                <div
                  key={problem.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:px-6 hover:bg-zinc-800/30 transition-colors gap-4"
                >
                  {/* Left: Checkbox + Problem Info */}
                  <div className="flex items-center space-x-4">
                    {/*
                      FIX: @base-ui Checkbox onCheckedChange fires with (checked: boolean, event)
                      NOT Radix's CheckedState pattern. We extract only the boolean here.
                    */}
                    <Checkbox
                      id={`checkbox-${problem.id}`}
                      checked={isCompleted}
                      onCheckedChange={(checked) =>
                        toggleProblem(problem.id, checked)
                      }
                      className="border-zinc-500"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0 text-sm">
                      <label
                        htmlFor={`checkbox-${problem.id}`}
                        className={`font-medium cursor-pointer transition-colors ${
                          isCompleted ? "text-zinc-500 line-through" : "text-zinc-200"
                        }`}
                      >
                        {problem.title}
                      </label>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${difficultyStyles[problem.difficulty]}`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Right: Action Buttons */}
                  {/* NOTE: @base-ui Button has no asChild prop (Radix-only).
                      We use plain <a> tags with button-like Tailwind classes instead. */}
                  <div className="flex items-center space-x-2 w-full sm:w-auto ml-8 sm:ml-0">
                    <a
                      href={problem.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-8 px-2.5 text-[0.8rem] font-medium rounded-lg border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 transition-colors whitespace-nowrap"
                    >
                      <span>Solve</span>
                      <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70" />
                    </a>

                    {problem.affiliateLink && (
                      <a
                        href={problem.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Recommended Resource"
                        className="inline-flex items-center justify-center h-8 px-2.5 text-[0.8rem] font-medium rounded-lg border-transparent bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors whitespace-nowrap"
                      >
                        <span>Resource</span>
                        <BookOpen className="ml-2 h-3.5 w-3.5 opacity-70" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
