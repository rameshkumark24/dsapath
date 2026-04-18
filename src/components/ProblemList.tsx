// src/components/ProblemList.tsx
"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { roadmapData, Difficulty } from "@/data/roadmap";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Zap,
  ChevronDown,
  Trophy,
  ExternalLink,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface ProblemListProps {
  userId?: string;
  initialCompletedIds?: string[];
}

type StatusFilter = "All" | "Solved" | "Unsolved";
type DifficultyFilter = "All" | Difficulty;

// ── Constants ──────────────────────────────────────────────────────────────
const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Easy:   "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
  Medium: "text-amber-400  bg-amber-400/10  border border-amber-400/20",
  Hard:   "text-rose-400   bg-rose-400/10   border border-rose-400/20",
};

const ALL_TOPICS = ["All Topics", ...roadmapData.map((m) => m.title)];
const TOTAL_PROBLEMS = roadmapData.reduce((acc, m) => acc + m.problems.length, 0);

// ── Circular Progress Ring ─────────────────────────────────────────────────
function CircularProgress({ pct }: { pct: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className="rotate-[-90deg]">
      <circle cx="70" cy="70" r={r} fill="none" stroke="#27272a" strokeWidth="12" />
      <circle
        cx="70" cy="70" r={r} fill="none"
        stroke="url(#ring-gradient)" strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <defs>
        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Mini Topic Progress Bar ────────────────────────────────────────────────
function TopicBar({ title, solved, total }: { title: string; solved: number; total: number }) {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs text-zinc-400">
        <span className="truncate max-w-[120px]">{title}</span>
        <span className="font-mono text-zinc-300 flex-shrink-0 ml-2">{solved}/{total}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function ProblemList({ userId, initialCompletedIds = [] }: ProblemListProps) {
  const [completed, setCompleted] = useState<Set<string>>(new Set(initialCompletedIds));

  // Filter state
  const [statusFilter, setStatusFilter]     = useState<StatusFilter>("All");
  const [diffFilter, setDiffFilter]         = useState<DifficultyFilter>("All");
  const [topicFilter, setTopicFilter]       = useState("All Topics");

  // ── Derived stats (useMemo = no unnecessary recalculations) ───────────────
  const totalSolved = useMemo(() => completed.size, [completed]);

  const topicStats = useMemo(() =>
    roadmapData.map((m) => ({
      id:     m.id,
      title:  m.title,
      total:  m.problems.length,
      solved: m.problems.filter((p) => completed.has(p.id)).length,
    })),
    [completed]
  );

  // Flat filtered list — never mutates source data
  const filteredModules = useMemo(() => {
    return roadmapData
      .filter((m) => topicFilter === "All Topics" || m.title === topicFilter)
      .map((m) => ({
        ...m,
        problems: m.problems.filter((p) => {
          const solvedMatch =
            statusFilter === "All" ||
            (statusFilter === "Solved" && completed.has(p.id)) ||
            (statusFilter === "Unsolved" && !completed.has(p.id));
          const diffMatch =
            diffFilter === "All" || p.difficulty === diffFilter;
          return solvedMatch && diffMatch;
        }),
      }))
      .filter((m) => m.problems.length > 0);
  }, [statusFilter, diffFilter, topicFilter, completed]);

  // ── Toggle problem (optimistic UI + Supabase sync) ─────────────────────
  const toggleProblem = useCallback(
    async (problemId: string, isChecked: boolean) => {
      if (typeof problemId !== "string" || !problemId.trim()) return;

      if (!userId) {
        alert("Please log in to track your progress.");
        return;
      }

      // Optimistic update
      setCompleted((prev) => {
        const next = new Set(prev);
        isChecked ? next.add(problemId) : next.delete(problemId);
        return next;
      });

      try {
        const { data: existing } = await supabase
          .from("user_progress")
          .select("id")
          .eq("user_id", userId)
          .eq("problem_id", problemId)
          .single();

        const { error } = existing
          ? await supabase
              .from("user_progress")
              .update({ completed: isChecked, updated_at: new Date().toISOString() })
              .eq("id", existing.id)
          : await supabase
              .from("user_progress")
              .insert({ user_id: userId, problem_id: problemId, completed: isChecked });

        if (error) throw error;
      } catch (err) {
        console.error("Failed to sync progress:", err);
        // Revert on failure
        setCompleted((prev) => {
          const next = new Set(prev);
          isChecked ? next.delete(problemId) : next.add(problemId);
          return next;
        });
      }
    },
    [userId]
  );

  const overallPct = TOTAL_PROBLEMS > 0
    ? Math.round((totalSolved / TOTAL_PROBLEMS) * 100)
    : 0;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">

      {/* ── Day Before Interview Banner ─────────────────────────────────── */}
      <Link
        href="/day-before-interview"
        className="group flex items-center justify-between w-full rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/5 px-6 py-4 hover:border-amber-400/50 hover:from-amber-500/15 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/30">
            <Zap className="h-5 w-5 text-amber-400 fill-amber-400/30" />
          </div>
          <div>
            <p className="font-bold text-amber-300 text-sm tracking-wide">DAY BEFORE INTERVIEW PREP</p>
            <p className="text-xs text-zinc-500">The 20 problems you MUST review the night before</p>
          </div>
        </div>
        <ExternalLink className="h-4 w-4 text-amber-500/60 group-hover:text-amber-400 transition-colors flex-shrink-0" />
      </Link>

      {/* ── Overall Progress Dashboard ──────────────────────────────────── */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Circular ring + count */}
          <div className="flex flex-col items-center justify-center gap-2 lg:pr-8 lg:border-r lg:border-zinc-800">
            <div className="relative">
              <CircularProgress pct={overallPct} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-zinc-100">{overallPct}%</span>
                <span className="text-xs text-zinc-500 mt-0.5">complete</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-zinc-200">
                {totalSolved}
                <span className="text-zinc-500 font-normal"> / {TOTAL_PROBLEMS} solved</span>
              </span>
            </div>
          </div>

          {/* Per-topic mini bars */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-3">
            {topicStats.map((t) => (
              <TopicBar key={t.id} title={t.title} solved={t.solved} total={t.total} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter Controls ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 items-center">

        {/* Status filter */}
        <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 p-1 gap-1">
          {(["All", "Solved", "Unsolved"] as StatusFilter[]).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                statusFilter === s
                  ? "bg-emerald-600 text-white shadow"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Difficulty filter */}
        <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 p-1 gap-1">
          {(["All", "Easy", "Medium", "Hard"] as DifficultyFilter[]).map((d) => (
            <button
              key={d}
              onClick={() => setDiffFilter(d)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                diffFilter === d
                  ? d === "Easy"
                    ? "bg-emerald-700 text-white shadow"
                    : d === "Medium"
                    ? "bg-amber-600 text-white shadow"
                    : d === "Hard"
                    ? "bg-rose-700 text-white shadow"
                    : "bg-emerald-600 text-white shadow"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Topic dropdown */}
        <div className="relative">
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="appearance-none rounded-xl border border-zinc-800 bg-zinc-900 pl-4 pr-10 py-2.5 text-sm text-zinc-300 cursor-pointer hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors"
          >
            {ALL_TOPICS.map((t) => (
              <option key={t} value={t} className="bg-zinc-900">
                {t}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
        </div>

        {/* Active filter count badge */}
        {(statusFilter !== "All" || diffFilter !== "All" || topicFilter !== "All Topics") && (
          <button
            onClick={() => { setStatusFilter("All"); setDiffFilter("All"); setTopicFilter("All Topics"); }}
            className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* ── Problem List ────────────────────────────────────────────────── */}
      {filteredModules.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-zinc-600">
          <Trophy className="h-12 w-12 text-zinc-800" />
          <p className="text-lg font-semibold text-zinc-500">No problems match your filters</p>
          <p className="text-sm">Try adjusting the Status or Difficulty filter.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredModules.map((module) => {
            const moduleSolved = module.problems.filter((p) => completed.has(p.id)).length;
            const moduleTotal  = module.problems.length;
            const modulePct    = moduleTotal > 0 ? Math.round((moduleSolved / moduleTotal) * 100) : 0;

            return (
              <div key={module.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                {/* Module header */}
                <div className="px-5 py-4 border-b border-zinc-800/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-zinc-900/60">
                  <h2 className="text-base font-bold text-zinc-100">{module.title}</h2>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-mono text-zinc-500">{moduleSolved}/{moduleTotal}</span>
                    <div className="w-28 h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                        style={{ width: `${modulePct}%` }}
                      />
                    </div>
                    <span className="text-xs text-zinc-500 w-8 text-right">{modulePct}%</span>
                  </div>
                </div>

                {/* Problems rows */}
                <div className="divide-y divide-zinc-800/40">
                  {module.problems.map((problem) => {
                    const isSolved = completed.has(problem.id);
                    return (
                      <div
                        key={problem.id}
                        className={`flex items-center justify-between px-5 py-3.5 hover:bg-zinc-800/30 transition-colors gap-4 ${
                          isSolved ? "opacity-60" : ""
                        }`}
                      >
                        {/* Left: checkbox + name */}
                        <div className="flex items-center gap-4 min-w-0">
                          <Checkbox
                            id={`cb-${problem.id}`}
                            checked={isSolved}
                            onCheckedChange={(checked) => toggleProblem(problem.id, Boolean(checked))}
                            className="border-zinc-600 flex-shrink-0"
                          />
                          <label
                            htmlFor={`cb-${problem.id}`}
                            className={`text-sm font-medium cursor-pointer truncate transition-colors ${
                              isSolved ? "text-zinc-500 line-through" : "text-zinc-200 hover:text-zinc-100"
                            }`}
                          >
                            {problem.title}
                          </label>
                        </div>

                        {/* Right: difficulty + solve link */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold ${DIFFICULTY_STYLES[problem.difficulty]}`}>
                            {problem.difficulty}
                          </span>
                          <a
                            href={problem.leetcodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Solve on LeetCode / GFG"
                            className="flex items-center justify-center h-7 w-7 rounded-lg border border-zinc-700 text-zinc-500 hover:text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
