"use client";

// src/app/page.tsx
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase, signInWithGoogle } from "@/lib/supabaseClient";
import ProblemList from "@/components/ProblemList";
import { Terminal, ArrowRight, CheckCircle, Zap, Target } from "lucide-react";

// Feature bullets shown on the landing page hero
const features = [
  { icon: Target, text: "Curated problem sets for every core DSA pattern" },
  { icon: CheckCircle, text: "Persistent progress synced to your account" },
  { icon: Zap, text: "Optimistic UI — instant feedback as you solve" },
];

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Separate loading state for DB fetch — prevents ProblemList mounting early
  const [isFetchingProgress, setIsFetchingProgress] = useState(false);
  const [initialCompletedIds, setInitialCompletedIds] = useState<string[]>([]);

  // ── Auth session management ────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      // Reset progress cache when user logs out so next login re-fetches cleanly
      if (!session?.user) {
        setInitialCompletedIds([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // ── Fetch user progress once user is known ─────────────────────────────────
  useEffect(() => {
    if (!user) return; // SECURITY: never query without a verified user

    const fetchUserProgress = async () => {
      setIsFetchingProgress(true);
      try {
        const { data, error } = await supabase
          .from("user_progress")
          .select("problem_id")
          .eq("user_id", user.id)
          .eq("completed", true);

        if (error) throw error;

        const ids = (data ?? []).map((row: { problem_id: string }) => row.problem_id);
        setInitialCompletedIds(ids);
      } catch (err) {
        console.error("Failed to fetch user progress:", err);
        // On error, fall back to empty so the roadmap still renders
        setInitialCompletedIds([]);
      } finally {
        setIsFetchingProgress(false);
      }
    };

    fetchUserProgress();
  }, [user]); // Re-runs anytime user changes (login / account switch)

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  // ── Loading State (auth check) ─────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-emerald-500" />
        <p className="text-sm text-zinc-500 animate-pulse">Checking session…</p>
      </div>
    );
  }

  // ── Logged In: Show Roadmap ────────────────────────────────────────────────
  if (user) {
    // CRITICAL: Block render until Supabase progress data has returned.
    // Rendering ProblemList with 0 completed IDs first would overwrite real data
    // via the optimistic state initializer inside ProblemList.
    if (isFetchingProgress) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-emerald-500" />
          <p className="text-sm text-zinc-500 animate-pulse">Loading your progress…</p>
        </div>
      );
    }

    return (
      <div className="w-full">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            DSA Mastery{" "}
            <span className="text-emerald-500">Roadmap</span>
          </h1>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Track your progress through every essential pattern. Check off
            problems as you solve them.
          </p>
        </div>
        {/* initialCompletedIds is now fully hydrated from Supabase before mount */}
        <ProblemList userId={user.id} initialCompletedIds={initialCompletedIds} />
      </div>
    );
  }

  // ── Logged Out: Show Hero Landing Page ─────────────────────────────────────
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[88vh] overflow-hidden px-4 py-20">

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
      />

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
        <Terminal className="h-3.5 w-3.5" />
        Free · Open Roadmap · No Ads
      </div>

      {/* Headline */}
      <h1 className="text-center text-5xl font-extrabold leading-tight tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl max-w-3xl">
        Master{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Data Structures
        </span>{" "}
        &{" "}
        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Algorithms
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 max-w-xl text-center text-base sm:text-lg text-zinc-400 leading-relaxed">
        A structured, interview-focused roadmap that takes you from Arrays to
        Dynamic Programming — with persistent progress tracking so you never
        lose your place.
      </p>

      {/* Feature bullets */}
      <ul className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        {features.map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-2 text-sm text-zinc-400"
          >
            <Icon className="h-4 w-4 flex-shrink-0 text-emerald-500" />
            {text}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={handleSignIn}
        className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all duration-200 hover:bg-emerald-500 hover:shadow-emerald-800/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Sign in with Google
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Trust line */}
      <p className="mt-5 text-xs text-zinc-600">
        No credit card required. Your progress is saved automatically.
      </p>
    </div>
  );
}
