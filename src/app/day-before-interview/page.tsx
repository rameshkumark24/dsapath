"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  PlayCircle,
  User,
  Box,
  Database,
  Coffee,
  Code2,
  CheckCircle2,
} from "lucide-react";

// ── YouTube brand icon ─────────────────────────────────────────────────────
const YoutubeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

// ── Ultra-compact checklist data ──────────────────────────────────────────
const checklistSections = [
  {
    icon: User,
    number: "01",
    title: "The Perfect Self-Introduction",
    color: "emerald",
    videoId: "O6RqAzIQXSE", // Added the YouTube video ID here
    bullets: [
      "Keep it under 60 seconds — any longer and you've lost them.",
      "State your primary stack (Java / React) confidently, not apologetically.",
      "Highlight one major project and its real-world impact in one sentence.",
      "Align your skills to the company's domain (product vs service).",
      "Close with enthusiasm: 'I'm excited to contribute to your team.'",
    ],
  },
  {
    icon: Box,
    number: "02",
    title: "OOPs Principles",
    color: "indigo",
    bullets: [
      "Abstraction: Hide complexity (e.g., ATM — you use it, not build it).",
      "Encapsulation: Bundle data & methods (e.g., Bank Account with private balance).",
      "Polymorphism: Overloading = compile-time. Overriding = run-time.",
      "Inheritance: IS-A relationship for code reuse (Dog extends Animal).",
      "Tip: Give one real-world analogy per principle — interviewers love it.",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Java Collections Framework",
    color: "teal",
    bullets: [
      "HashMap: O(1) ops, not thread-safe, allows one null key.",
      "ConcurrentHashMap: Thread-safe, no null keys/values.",
      "ArrayList: Fast random access O(1). LinkedList: Fast insert/delete at ends.",
      "HashSet / LinkedHashSet / TreeSet: Unique → ordered → sorted.",
      "PriorityQueue: Min-heap default. Reverse for max-heap.",
    ],
  },
  {
    icon: Coffee,
    number: "04",
    title: "Core Java Must-Knows",
    color: "amber",
    bullets: [
      "String is immutable. Use StringBuilder in loops.",
      "Thread lifecycle: New → Runnable → Running → Blocked → Dead.",
      "GC is automatic. Objects eligible when no live references remain.",
      "== compares references. equals() compares content (if overridden).",
      "final (immutability) / finally (always runs) / finalize (deprecated).",
    ],
  },
  {
    icon: Code2,
    number: "05",
    title: "High-Yield DSA Patterns",
    color: "rose",
    bullets: [
      "Two Pointers: Converging on sorted arrays; fast+slow for cycle detection.",
      "Sliding Window: Expand right, shrink left on constraint violation.",
      "BFS: Level-order traversal & shortest path (unweighted). Queue-based.",
      "DFS: Deep traversal for connected components & paths. Stack/recursion.",
      "Binary Search on Answers: Monotonic space + feasibility check = binary search.",
    ],
  },
];

// ── Color map ──────────────────────────────────────────────────────────────
const colorMap: Record<string, { border: string; icon: string; badge: string; headerBg: string }> = {
  emerald: { border: "border-emerald-500/20", icon: "text-emerald-400", badge: "text-emerald-500/50", headerBg: "bg-emerald-500/5" },
  indigo:  { border: "border-indigo-500/20",  icon: "text-indigo-400",  badge: "text-indigo-500/50",  headerBg: "bg-indigo-500/5"  },
  teal:    { border: "border-teal-500/20",    icon: "text-teal-400",    badge: "text-teal-500/50",    headerBg: "bg-teal-500/5"    },
  amber:   { border: "border-amber-500/20",   icon: "text-amber-400",   badge: "text-amber-500/50",   headerBg: "bg-amber-500/5"   },
  rose:    { border: "border-rose-500/20",    icon: "text-rose-400",    badge: "text-rose-500/50",    headerBg: "bg-rose-500/5"    },
};

// ── In-card video placeholder ──────────────────────────────────────────────
function VideoPlaceholder() {
  return (
    <div className="w-full aspect-video bg-zinc-950 rounded-lg border border-zinc-800/50 flex flex-col items-center justify-center text-center p-4 mb-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 to-transparent pointer-events-none" />
      <PlayCircle className="h-9 w-9 text-zinc-600 opacity-50 mb-2" />
      <p className="text-xs font-medium text-zinc-600">Topic Video Dropping Soon</p>
    </div>
  );
}

export default function DayBeforeInterview() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 py-12 w-full">

        {/* ── Back link ────────────────────────────────────────────────── */}
        <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Roadmap
        </Link>
        </div>

        {/* ── Page Header ──────────────────────────────────────────────── */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400 tracking-widest uppercase">
            <Zap className="h-3.5 w-3.5 fill-amber-400/30" />
            Last-Minute Revision
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-100 leading-tight text-balance">
            Day Before Interview{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Crash Course
            </span>
          </h1>
          <p className="text-zinc-400 text-base max-w-2xl leading-relaxed mt-4 mb-8">
            Don&apos;t learn anything new tonight. Consolidate patterns, recall OOPs, and walk in confident.
          </p>
        </div>

        {/* ── Solid Red Subscribe CTA ─────────────────────────────────── */}
        <div className="mb-16">
          <a
            href="https://www.youtube.com/@Simplifywithrk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            <YoutubeIcon />
            Subscribe to Simplifywithrk
          </a>
        </div>

        {/* ── SDE Revision Checklist ───────────────────────────────────── */}
        <section className="space-y-4 mt-12">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight">SDE Revision Checklist</h2>
          </div>
          <p className="text-sm text-zinc-500">
            A dedicated video is coming for every topic. Skim the bullets — if you blank on one, spend 5 minutes on it.
          </p>

          <div className="space-y-4">
            {checklistSections.map(({ icon: Icon, number, title, color, bullets, videoId }) => {
              const c = colorMap[color];
              return (
                <div
                  key={number}
                  className={`rounded-2xl border ${c.border} bg-zinc-900/50 overflow-hidden`}
                >
                  {/* Card header */}
                  <div className={`flex items-center gap-4 px-5 py-3.5 border-b ${c.border} ${c.headerBg}`}>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-800/80 border ${c.border} flex-shrink-0`}>
                      <Icon className={`h-4.5 w-4.5 ${c.icon}`} />
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-black tracking-widest ${c.badge} flex-shrink-0`}>{number}</span>
                      <h3 className="font-bold text-zinc-100 text-sm sm:text-base">{title}</h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-5 pt-4 pb-5">
                    {/* Render embedded YouTube video if ID is provided, else fallback to Placeholder */}
                    {videoId ? (
                      <div className="w-full aspect-video bg-zinc-950 rounded-lg border border-zinc-800/50 mb-4 relative overflow-hidden">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <VideoPlaceholder />
                    )}

                    {/* Ultra-compact bullets */}
                    <ul className="flex flex-col gap-2">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${c.icon}`}
                                style={{ background: "currentColor" }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Motivational close ───────────────────────────────────────── */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7 text-center space-y-2 mt-12">
          <p className="text-xl font-black text-amber-500">You&apos;ve done the work. Trust it.</p>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Sleep well, eat breakfast, and walk in knowing your prep was structured and intentional.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to your Roadmap progress
          </Link>
        </div>

      </div>
    </div>
  );
}
