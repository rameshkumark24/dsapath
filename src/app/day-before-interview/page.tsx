"use client";

// src/app/day-before-interview/page.tsx
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Youtube,
  Brain,
  CheckCircle2,
  Code2,
  GitBranch,
  Search,
  Layers,
  Repeat,
} from "lucide-react";

// ── High-Yield Recall Topics ──────────────────────────────────────────────
const recallTopics = [
  {
    icon: Layers,
    label: "Standard DP States",
    detail:
      "Review 1D/2D DP table setups: LIS, LCS, 0-1 Knapsack, and Coin Change. Trace one example each mentally.",
  },
  {
    icon: GitBranch,
    label: "Graph Traversals (BFS / DFS)",
    detail:
      "Recall the standard queue-based BFS template and recursive/stack DFS. Know when each is preferred.",
  },
  {
    icon: Repeat,
    label: "Two Pointer Templates",
    detail:
      "Left + right inward collapse for sorted arrays. Fast + slow pointer for linked lists. Solidify the template.",
  },
  {
    icon: Search,
    label: "Binary Search on Answers",
    detail:
      "The lo/hi/mid pattern for search spaces. Practice identifying when the answer is monotonic — that's your trigger.",
  },
  {
    icon: Code2,
    label: "Sliding Window Identification",
    detail:
      "Fixed-size vs. variable-size. Expand right / shrink left. Know the 'when to shrink' condition cold.",
  },
  {
    icon: Brain,
    label: "Recursion → Memoization to Tabulation",
    detail:
      "Walk through the 3-step DP conversion mentally. If you can write the recursion, you can write the DP.",
  },
];

export default function DayBeforeInterview() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* ── Back link ──────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Roadmap
        </Link>

        {/* ── Page Header ─────────────────────────────────────────────────── */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400 tracking-widest uppercase">
            <Zap className="h-3.5 w-3.5 fill-amber-400/30" />
            Last-Minute Revision
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-100 leading-tight">
            Day Before Interview{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Crash Course
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Don't grind new problems tonight. Instead, consolidate your pattern
            recognition, rerun mental templates, and walk in confident tomorrow.
          </p>
        </div>

        {/* ── Video Section ────────────────────────────────────────────────── */}
        <section className="space-y-5">
          {/* 16:9 Responsive container */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl"
               style={{ paddingTop: "56.25%" /* 16:9 */ }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
              title="Day Before Interview Prep — Simplify with RK"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* YouTube CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-zinc-200">Want more placement tips & walkthroughs?</p>
              <p className="text-xs text-zinc-500 mt-0.5">New videos every week on DSA, interviews, and tech careers.</p>
            </div>
            <a
              href="https://www.youtube.com/@Simplifywithrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-500 px-5 py-2.5 text-sm font-bold text-white transition-colors shadow-lg shadow-rose-900/30 flex-shrink-0"
            >
              <Youtube className="h-4 w-4" />
              Subscribe for more Placement Tips
            </a>
          </div>
        </section>

        {/* ── High-Yield Recall Checklist ──────────────────────────────────── */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight">High-Yield SDE Topics</h2>
          </div>
          <p className="text-zinc-400 text-sm">
            Don't look these up. Read each one and mentally trace through the pattern. If you blank on one, that's your 5-minute review target.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recallTopics.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-zinc-100 text-sm">{label}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Motivational footer ───────────────────────────────────────────── */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center space-y-2">
          <p className="text-lg font-bold text-emerald-400">You've done the work. Trust it.</p>
          <p className="text-sm text-zinc-400">
            Sleep well, eat breakfast, and walk in knowing you've prepared correctly. Good luck tomorrow. 🚀
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-500 hover:text-emerald-400 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to your Roadmap progress
          </Link>
        </div>

      </div>
    </div>
  );
}
