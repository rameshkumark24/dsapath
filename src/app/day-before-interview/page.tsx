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

// ── YouTube brand icon (inline SVG) ───────────────────────────────────────
const YoutubeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

// ── Checklist data ─────────────────────────────────────────────────────────
const checklistSections = [
  {
    icon: User,
    number: "01",
    title: "The Perfect Self-Introduction",
    color: "emerald",
    points: [
      { concept: "Who you are", explanation: "Name, college, degree, and graduation year — keep it under 15 seconds." },
      { concept: "Your tech stack", explanation: "Java (primary), React, SQL — frame it with confidence, not hesitation." },
      { concept: "Your best project", explanation: 'One-liner impact: "Built X that does Y, resulting in Z." Memorise this cold.' },
      { concept: "Why this role", explanation: "Align your skills with the company's domain — product vs service mindset matters." },
      { concept: "Strong close", explanation: "'I'm excited to contribute my skills to your team.' — End with energy, not a question mark." },
    ],
  },
  {
    icon: Box,
    number: "02",
    title: "OOPs Principles — Real-World Examples",
    color: "indigo",
    points: [
      { concept: "Abstraction", explanation: "Hide complexity. ATM machine — you use it without knowing the internals." },
      { concept: "Encapsulation", explanation: "Bundle data + methods. Bank account — balance is private, accessed only via methods." },
      { concept: "Polymorphism", explanation: "Overloading = same name, different params (compile-time). Overriding = subclass redefines parent method (run-time)." },
      { concept: "Inheritance", explanation: "IS-A relationship. Dog extends Animal — reuse and extend parent behaviour." },
      { concept: "Interview tip", explanation: "Always give ONE crisp real-world analogy per principle. Interviewers love concrete examples." },
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Java Collections Framework",
    color: "teal",
    points: [
      { concept: "HashMap", explanation: "O(1) average get/put. Not thread-safe. Allows one null key." },
      { concept: "ConcurrentHashMap", explanation: "Thread-safe with segment-level locking. No null keys or values allowed." },
      { concept: "ArrayList vs LinkedList", explanation: "ArrayList = contiguous memory, fast random access O(1). LinkedList = fast insert/delete at ends, slow traversal." },
      { concept: "Set implementations", explanation: "HashSet: unique, O(1). LinkedHashSet: insertion order. TreeSet: sorted, O(log n)." },
      { concept: "PriorityQueue", explanation: "Min-heap by default. Use Collections.reverseOrder() for max-heap." },
    ],
  },
  {
    icon: Coffee,
    number: "04",
    title: "Core Java Must-Knows",
    color: "amber",
    points: [
      { concept: "String vs StringBuilder", explanation: "String is immutable — creates a new object on every change. Use StringBuilder in loops." },
      { concept: "Multithreading basics", explanation: "Thread lifecycle: New → Runnable → Running → Blocked → Dead. synchronized prevents race conditions." },
      { concept: "Garbage Collection", explanation: "JVM manages it automatically. Objects become eligible when no live references exist." },
      { concept: "equals() vs ==", explanation: "== compares references. equals() compares content (only if overridden)." },
      { concept: "final / finally / finalize", explanation: "Keyword (immutability) vs exception block (always runs) vs GC method (deprecated). Know the difference cold." },
    ],
  },
  {
    icon: Code2,
    number: "05",
    title: "High-Yield DSA Patterns",
    color: "rose",
    points: [
      { concept: "Two Pointers", explanation: "Left + right converging on a sorted array. Fast + slow pointer for cycle detection in linked lists." },
      { concept: "Sliding Window", explanation: "Expand right, shrink left. Your trigger to shrink = the constraint violation condition." },
      { concept: "BFS", explanation: "Level-order traversal and shortest path in unweighted graphs. Always queue-based." },
      { concept: "DFS", explanation: "Explore deep first. Use recursion or an explicit stack. Best for connected components and path finding." },
      { concept: "Binary Search on Answers", explanation: "If the search space is monotonic and you can write a feasibility check — binary search is the answer." },
    ],
  },
];

// ── Color map ─────────────────────────────────────────────────────────────
const colorMap: Record<string, { border: string; icon: string; badge: string; headerBg: string }> = {
  emerald: { border: "border-emerald-500/20", icon: "text-emerald-400", badge: "text-emerald-500/50", headerBg: "bg-emerald-500/5"  },
  indigo:  { border: "border-indigo-500/20",  icon: "text-indigo-400",  badge: "text-indigo-500/50",  headerBg: "bg-indigo-500/5"   },
  teal:    { border: "border-teal-500/20",    icon: "text-teal-400",    badge: "text-teal-500/50",    headerBg: "bg-teal-500/5"     },
  amber:   { border: "border-amber-500/20",   icon: "text-amber-400",   badge: "text-amber-500/50",   headerBg: "bg-amber-500/5"    },
  rose:    { border: "border-rose-500/20",    icon: "text-rose-400",    badge: "text-rose-500/50",    headerBg: "bg-rose-500/5"     },
};

// ── In-card Video Placeholder ──────────────────────────────────────────────
function VideoPlaceholder() {
  return (
    <div className="w-full aspect-video bg-zinc-950 rounded-lg border border-zinc-800/50 flex flex-col items-center justify-center text-center p-4 mb-6 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 to-transparent pointer-events-none" />
      <PlayCircle className="h-10 w-10 text-zinc-600 opacity-50 mb-3" />
      <p className="text-sm font-medium text-zinc-500">Topic Video Dropping Soon</p>
    </div>
  );
}

export default function DayBeforeInterview() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* ── Back link ────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Roadmap
        </Link>

        {/* ── Page Header ──────────────────────────────────────────────── */}
        <div className="space-y-4">
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
            Master your intro, nail OOPs, and conquer Java Collections.
            Don&apos;t learn anything new tonight — consolidate and walk in confident.
          </p>

          {/* ── Sleek Subscribe button ──────────────────────────────────── */}
          <a
            href="https://www.youtube.com/@Simplifywithrk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200"
          >
            <span className="text-red-500">
              <YoutubeIcon />
            </span>
            Subscribe to Simplifywithrk
          </a>
        </div>

        {/* ── SDE Revision Checklist ───────────────────────────────────── */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight">SDE Revision Checklist</h2>
          </div>
          <p className="text-sm text-zinc-500">
            A dedicated video is coming for every topic below. Read each concept and mentally trace through it before you sleep.
          </p>

          <div className="space-y-4">
            {checklistSections.map(({ icon: Icon, number, title, color, points }) => {
              const c = colorMap[color];
              return (
                <div
                  key={number}
                  className={`rounded-2xl border ${c.border} bg-zinc-900/50 overflow-hidden`}
                >
                  {/* Card header */}
                  <div className={`flex items-center gap-4 px-6 py-4 border-b ${c.border} ${c.headerBg}`}>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/80 border ${c.border} flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${c.icon}`} />
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-black tracking-widest ${c.badge} flex-shrink-0`}>{number}</span>
                      <h3 className="font-bold text-zinc-100 text-sm sm:text-base">{title}</h3>
                    </div>
                  </div>

                  {/* Card body: video placeholder → concept list */}
                  <div className="px-6 pt-5 pb-6">

                    {/* In-card video placeholder */}
                    <VideoPlaceholder />

                    {/* Concept + explanation pairs */}
                    <div className="flex flex-col gap-5">
                      {points.map(({ concept, explanation }, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <p className="text-white font-medium text-sm">{concept}</p>
                          <p className="text-zinc-400 text-sm leading-relaxed">{explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Motivational close ───────────────────────────────────────── */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-3">
          <p className="text-2xl font-black text-emerald-400">You&apos;ve done the work. Trust it. 🚀</p>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Sleep well, eat a proper breakfast, and walk into that drive knowing
            your preparation was intentional and structured. You&apos;ve got this.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to your Roadmap progress
          </Link>
        </div>

      </div>
    </div>
  );
}
