"use client";

// src/app/page.tsx
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase, signInWithGoogle } from "@/lib/supabaseClient";
import ProblemList from "@/components/ProblemList";
import Image from "next/image";
import {
  Terminal,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  LayoutList,
  LineChart,
  Code2,
  Heart,
  X,
  Copy,
  Check,
  Globe,
  Mail,
  Coffee,
  Briefcase,
  GraduationCap
} from "lucide-react";

// Inline brand SVGs (lucide-react does not ship Linkedin/Youtube in all versions)
const LinkedinIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Separate loading state for DB fetch — prevents ProblemList mounting early
  const [isFetchingProgress, setIsFetchingProgress] = useState(false);
  const [initialCompletedIds, setInitialCompletedIds] = useState<string[]>([]);

  // Support Modal State
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

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

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("kumar978777ram-1@okaxis");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  // ── Loading State (auth check) ─────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-zinc-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-emerald-500" />
        <p className="text-sm text-zinc-500 animate-pulse">Checking session…</p>
      </div>
    );
  }

  // ── Logged In: Show Roadmap ────────────────────────────────────────────────
  if (user) {
    // CRITICAL: Block render until Supabase progress data has returned.
    if (isFetchingProgress) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-zinc-950">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-emerald-500" />
          <p className="text-sm text-zinc-500 animate-pulse">Loading your progress…</p>
        </div>
      );
    }

    return (
      <div className="w-full bg-zinc-950 min-h-screen py-10 px-4">
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
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* Container to restrict width and center content */}
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-24 space-y-40">
        
        {/* === 1. HERO SECTION === */}
        <section className="relative flex flex-col items-center text-center">
          {/* Ambient Glow */}
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="h-[400px] w-[600px] rounded-full bg-emerald-500/10 blur-[150px]" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-400">
            <Terminal className="h-3.5 w-3.5" />
            100% Free · Community Driven
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.1] z-10">
            Master DSA. <br className="hidden sm:block" />
            Clear the Interview. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Cut the Noise.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl z-10 leading-relaxed">
            A curated, step-by-step roadmap to master Data Structures and Algorithms for product-based company placements. Don't waste time doing random problems.
          </p>

          <button
            onClick={handleSignIn}
            className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)] hover:-translate-y-1 z-10"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </section>

        {/* === 2. THE MISSION / PLACEMENT TIPS === */}
        <section className="relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 transition-transform duration-300 hover:-translate-y-2">
              <div className="h-14 w-14 mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <LayoutList className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Structured Learning</h3>
              <p className="text-zinc-400 leading-relaxed">
                Problems are carefully ordered from Easy to Hard. Build your intuition systematically without feeling overwhelmed.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 transition-transform duration-300 hover:-translate-y-2">
              <div className="h-14 w-14 mb-6 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <LineChart className="h-7 w-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Track Your Progress</h3>
              <p className="text-zinc-400 leading-relaxed">
                Database-backed checkmarks ensure your progress is saved securely. Visually see how far you've come.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 transition-transform duration-300 hover:-translate-y-2">
              <div className="h-14 w-14 mb-6 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Code2 className="h-7 w-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Interview Focused</h3>
              <p className="text-zinc-400 leading-relaxed">
                We only include the pivotal patterns that top tech companies actually test for in coding rounds.
              </p>
            </div>
          </div>
        </section>

        {/* === 3. CURRICULUM PREVIEW === */}
        <section className="w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Inside the Roadmap</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">Master these core concepts and you'll be ready to tackle any unseen variation in a real interview setting.</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {["Arrays & Hashing", "Two Pointers", "Sliding Window", "Stack", "Binary Search", "Linked List", "Trees", "Tries", "Heap / Priority Queue", "Backtracking", "Graphs", "Dynamic Programming"].map((cat) => (
              <div key={cat} className="py-4 px-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-medium text-sm text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 cursor-default transition-colors">
                {cat}
              </div>
            ))}
          </div>
        </section>

        {/* === 4. WALL OF LOVE (Testimonials) === */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Developers love it</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
              </div>
              <p className="text-zinc-300 italic mb-6 flex-grow">"This roadmap saved me 100 hours of random LeetCode grinding. The progression feels incredibly natural and checking off the boxes gives me so much dopamine."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">JD</div>
                <div>
                  <p className="font-semibold text-sm">Jay D.</p>
                  <p className="text-xs text-zinc-500">CS Student</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
              </div>
              <p className="text-zinc-300 italic mb-6 flex-grow">"Finally, a guide that just gets to the point. No fluff, just the exact patterns they asked me about in my recent FAANG loop."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-bold border border-rose-500/30">SK</div>
                <div>
                  <p className="font-semibold text-sm">Sarah K.</p>
                  <p className="text-xs text-zinc-500">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>{/* end of max-w-6xl container */}

      {/* === 5. CONTACT & ENTERPRISE FOOTER === */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-800/50 pt-12">
          
          {/* Card 1: For Institutions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="h-12 w-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0 mb-6 z-10">
              <GraduationCap className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 z-10">For Colleges & Placement Cells</h3>
            <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed z-10">
              Get a personalized Institutional Dashboard with real-time DSA progress tracking and placement analytics for your 2026 batch.
            </p>
            <div className="z-10">
              <a
                href="mailto:rameshkumaroff@gmail.com?subject=Inquiry%20regarding%20Institutional%20Dashboard%20for%20[College%20Name]"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                Request a Demo
              </a>
              <p className="text-zinc-500 text-[10px] mt-2">Or email: rameshkumaroff@gmail.com</p>
            </div>
          </div>

          {/* Card 2: Contact Developer */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex flex-col group hover:border-zinc-700 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mb-6">
              <Code2 className="h-6 w-6 text-zinc-400 group-hover:text-amber-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Contact the Developer</h3>
            <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">
              Have a feature request, found a bug, or want to discuss AI and software development? Let&apos;s connect.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/rameshkumark24/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2.5 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
              >
                <LinkedinIcon />
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </section>
      </div>

      {/* === 6. MAIN SITE FOOTER === */}
      <footer className="w-full bg-zinc-950/50 border-t border-zinc-800 py-12 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

          {/* Creator Profile */}
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src="https://i.ibb.co/jvVWGRTv/Whats-App-Image-2025-12-06-at-3-21-53-PM.jpg"
              alt="Rameshkumar Kannan - Creator of DSA Mastery"
              className="h-32 w-32 rounded-full border-4 border-zinc-700 shadow-2xl object-cover ring-2 ring-emerald-500/20"
            />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Created by{" "}
              <span className="font-semibold text-white">Rameshkumar Kannan</span>
              <br />
              My mission is to simplify placement preparation and help you clear top product-based company interviews without the noise.
            </p>
          </div>

          {/* Support Button */}
          <button
            onClick={() => setIsSupportModalOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all"
          >
            <Coffee className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            Buy me a coffee / Support this project
          </button>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-500">
            <a href="https://www.linkedin.com/in/rameshkumark24/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LinkedinIcon />
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@Simplifywithrk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <YoutubeIcon />
              YouTube
            </a>
            <a href="https://rameshkumark.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Briefcase className="h-4 w-4" />
              Portfolio
            </a>
            <a href="mailto:rameshkumaroff@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          <p className="text-xs text-zinc-700">© {new Date().getFullYear()} Rameshkumar Kannan · DSA Mastery</p>
        </div>
      </footer>

      {/* === 6. SUPPORT MODAL (QR CODE) === */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-zinc-900 border border-zinc-800 p-8 shadow-2xl animate-in zoom-in-95 duration-200 text-center">
            
            <button 
              onClick={() => setIsSupportModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 mb-4">
              <Heart className="h-6 w-6 text-emerald-500 fill-emerald-500/20" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-zinc-100">Support the Project</h3>
            <p className="text-sm text-zinc-400 mb-6">
              If this roadmap helped you land a job or ace an interview, consider supporting the development!
            </p>

            <div className="bg-white p-4 rounded-2xl mb-6 mx-auto w-fit">
              {/* Using standard img tag because next/image requires domain config for external APIs, and we prefer not to require more config changes for this */}
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=kumar978777ram-1@okaxis&pn=Ramesh" 
                alt="UPI QR Code"
                width={180}
                height={180}
                className="w-44 h-44"
              />
            </div>

            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-2">Scan or Copy UPI ID</p>
            
            <button 
              onClick={handleCopyUpi}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 py-3 px-4 transition-colors font-medium text-sm text-zinc-200"
            >
              <span className="truncate">kumar978777ram-1@okaxis</span>
              {hasCopied ? <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" /> : <Copy className="h-4 w-4 text-zinc-400 flex-shrink-0" />}
            </button>
            <p className="mt-2 text-xs text-emerald-400 h-4">
              {hasCopied ? "Copied to clipboard!" : ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
