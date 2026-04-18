// src/components/ProblemList.tsx
"use client";

import { useState, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
    async (problemId: string, isChecked: boolean) => {
      // SECURITY PROTOCOL: Strict typing and validation of problem_id
      // Prevents prototype pollution or object injection attacks if someone 
      // tampers with the DOM/State to pass an object instead of a string.
      if (typeof problemId !== "string" || problemId.trim() === "") {
        console.error("Security/Validation Error: Invalid problem ID type.");
        return;
      }

      if (!userId) {
        alert("Please log in to track your progress.");
        return;
      }

      // Optimistic UI Update: instantly update state to make UI feel blazing fast
      setCompleted((prev) => {
        const next = new Set(prev);
        if (isChecked) next.add(problemId);
        else next.delete(problemId);
        return next;
      });

      // Background Supabase Sync
      try {
        // Since we didn't create a UNIQUE constraint on (user_id, problem_id) earlier, 
        // we first check if the record exists to avoid duplicates.
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
          if (!isChecked) next.add(problemId); // Revert to checked
          else next.delete(problemId); // Revert to unchecked
          return next;
        });
      }
    },
    [userId]
  );

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      {roadmapData.map((module) => (
        <div key={module.id} className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
          {/* Module Header */}
          <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-100">{module.title}</h2>
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
                  {/* Left Side: Checkbox & Info */}
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      id={`checkbox-${problem.id}`}
                      checked={isCompleted}
                      onCheckedChange={(checked) => toggleProblem(problem.id, checked === true)}
                      className="border-zinc-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-zinc-950"
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
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${
                          difficultyStyles[problem.difficulty]
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Action Buttons */}
                  <div className="flex items-center space-x-2 w-full sm:w-auto ml-8 sm:ml-0">
                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto h-8 border-zinc-700 hover:bg-zinc-800 text-zinc-300">
                      <a href={problem.leetcodeUrl} target="_blank" rel="noopener noreferrer">
                        <span>Solve</span>
                        <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70" />
                      </a>
                    </Button>

                    {problem.affiliateLink && (
                      <Button variant="secondary" size="sm" asChild className="w-full sm:w-auto h-8 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border-transparent">
                        <a href={problem.affiliateLink} target="_blank" rel="noopener noreferrer" title="Recommended Resource">
                          <span>Resource</span>
                          <BookOpen className="ml-2 h-3.5 w-3.5 opacity-70" />
                        </a>
                      </Button>
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
