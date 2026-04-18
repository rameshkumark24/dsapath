"use client";

// src/app/day-before-interview/page.tsx
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  User,
  Box,
  Database,
  Coffee,
  Code2,
  CheckCircle2,
} from "lucide-react";

// ── YouTube brand icon (inline SVG — not in all lucide versions) ──────────
const YoutubeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
      "Who you are: Name, college, degree, and graduation year.",
      "Your tech stack: Java (primary), React, SQL — frame it confidently.",
      'Your best project: One-liner impact statement. "Built X that does Y, resulting in Z."',
      "Why this role: Align your skills with the company's domain (product vs service).",
      "Close strong: End with enthusiasm — 'I'm excited to bring my skills to your team.'",
    ],
  },
  {
    icon: Box,
    number: "02",
    title: "OOPs Principles — Real-World Examples",
    color: "indigo",
    points: [
      "Abstraction: Hide complexity. ATM machine — you use it without knowing internals.",
      "Encapsulation: Bundle data + methods. Bank account — balance is private, accessed via methods.",
      "Polymorphism: One interface, many forms. Overloading = same name, diff params (compile-time). Overriding = subclass redefines parent method (run-time).",
      "Inheritance: IS-A relationship. Dog extends Animal — reuse + extend parent behavior.",
      "Pro tip: Always give ONE crisp real-world analogy per principle.",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Java Collections Framework",
    color: "teal",
    points: [
      "HashMap: O(1) average get/put. Not thread-safe. Allows one null key.",
      "ConcurrentHashMap: Thread-safe. Segment-level locking. No null keys/values.",
      "ArrayList vs LinkedList: ArrayList = contiguous memory, fast random access (O(1)). LinkedList = fast insert/delete at ends (O(1)), slow traversal.",
      "HashSet: Unique elements, O(1) ops. LinkedHashSet keeps insertion order. TreeSet is sorted O(log n).",
      "PriorityQueue: Min-heap by default. Use Collections.reverseOrder() for max-heap.",
    ],
  },
  {
    icon: Coffee,
    number: "04",
    title: "Core Java Must-Knows",
    color: "amber",
    points: [
      "String vs StringBuilder: String is immutable (new object on change). StringBuilder is mutable — use in loops.",
      "Multithreading basics: Thread lifecycle (New → Runnable → Running → Blocked → Dead). synchronized keyword prevents race conditions.",
      "Garbage Collection: JVM handles it. Objects eligible when no live references. finalize() is deprecated — rely on try-with-resources.",
      "equals() vs ==: == compares references. equals() compares content (if overridden).",
      "final / finally / finalize: Keyword vs exception block vs GC method — know the difference cold.",
    ],
  },
  {
    icon: Code2,
    number: "05",
    title: "High-Yield DSA Patterns",
    color: "rose",
    points: [
      "Two Pointers: Left + right converging on sorted array. Fast + slow for cycle detection.",
      "Sliding Window: Expand right, shrink left. Trigger to shrink = your constraint violation.",
      "BFS: Level-order traversal, shortest path in unweighted graph. Queue-based.",
      "DFS: Explore deep first. Recursion or explicit stack. Good for connected components, paths.",
      "Binary Search on Answers: If search space is monotonic and you can write a feasibility check — use binary search.",
    ],
  },
];

// ── Color map ─────────────────────────────────────────────────────────────
const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", badge: "text-emerald-500" },
  indigo:  { bg: "bg-indigo-500/10",  border: "border-indigo-500/20",  icon: "text-indigo-400",  badge: "text-indigo-500"  },
  teal:    { bg: "bg-teal-500/10",    border: "border-teal-500/20",    icon: "text-teal-400",    badge: "text-teal-500"    },
  amber:   { bg: "bg-amber-500/10",   border: "border-amber-500/20",   icon: "text-amber-400",   badge: "text-amber-500"   },
  rose:    { bg: "bg-rose-500/10",    border: "border-rose-500/20",    icon: "text-rose-400",    badge: "text-rose-500"    },
};

export default function DayBeforeInterview() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

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
            Don't learn anything new tonight — consolidate and walk in confident.
          </p>
        </div>

        {/* ── Video Section ────────────────────────────────────────────── */}
        <section className="space-y-5">
          <h2 className="text-xl font-bold text-zinc-200 flex items-center gap-2">
            <span className="h-1 w-5 rounded-full bg-amber-500 inline-block" />
            Watch Before You Sleep
          </h2>

          {/* 16:9 responsive embed container */}
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-zinc-700 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)] bg-zinc-900"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Day Before Interview Prep — Simplify with RK"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Subscribe CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-4">
            <div>
              <p className="font-semibold text-zinc-200 text-sm">More placement walkthroughs every week</p>
              <p className="text-xs text-zinc-500 mt-0.5">Java, DSA, system design, and HR tips — all free.</p>
            </div>
            <a
              href="https://www.youtube.com/@Simplifywithrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 hover:bg-red-500 px-6 py-3 text-sm font-bold text-white transition-all shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-px flex-shrink-0"
            >
              <YoutubeIcon />
              Subscribe to Simplifywithrk
            </a>
          </div>
        </section>

        {/* ── SDE Revision Checklist ───────────────────────────────────── */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight">SDE Revision Checklist</h2>
          </div>
          <p className="text-sm text-zinc-500">
            Read each point and mentally trace through it. If you blank on one — that's your 5-minute review target.
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
                  <div className={`flex items-center gap-4 px-6 py-4 border-b ${c.border} ${c.bg}`}>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} border ${c.border} flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${c.icon}`} />
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-black tracking-widest opacity-60 ${c.badge} flex-shrink-0`}>{number}</span>
                      <h3 className="font-bold text-zinc-100 text-sm sm:text-base">{title}</h3>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="px-6 py-4 space-y-2.5">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${c.icon} opacity-70`}
                              style={{ background: "currentColor" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Motivational close ───────────────────────────────────────── */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-3">
          <p className="text-2xl font-black text-emerald-400">You've done the work. Trust it. 🚀</p>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Sleep well, eat a proper breakfast, and walk into that drive knowing
            your preparation was intentional and structured. You've got this.
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
