"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase, signInWithGoogle } from "@/lib/supabaseClient";
import ProblemList from "@/components/ProblemList";
import Link from "next/link";
import {
  Terminal,
  ArrowRight,
  Zap,
  LayoutList,
  LineChart,
  Code2,
  Heart,
  X,
  Copy,
  Check,
  Mail,
  Coffee,
  Briefcase,
  GraduationCap,
  PlayCircle
} from "lucide-react";

// ── Brand Icons ─────────────────────────────────────────────────────────────
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
  const [isFetchingProgress, setIsFetchingProgress] = useState(false);
  const [initialCompletedIds, setInitialCompletedIds] = useState<string[]>([]);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  // ── Auth & Progress Fetching ───────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        setInitialCompletedIds([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

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
        setInitialCompletedIds([]);
      } finally {
        setIsFetchingProgress(false);
      }
    };

    fetchUserProgress();
  }, [user]);

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

  const handleDemo = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=rameshkumaroff@gmail.com&su=Demo%20Request";
    const mailtoUrl = "mailto:rameshkumaroff@gmail.com?subject=Demo%20Request";
    window.location.href = mailtoUrl;
    setTimeout(() => { window.open(gmailUrl, "_blank", "noopener,noreferrer"); }, 500);
  };

  // ── Loading State ──────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-zinc-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-emerald-500" />
        <p className="text-sm text-zinc-500 animate-pulse">Checking session…</p>
      </div>
    );
  }

  // ── Logged In: Show Dashboard ──────────────────────────────────────────────
  if (user) {
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
        <div className="max-w-7xl mx-auto">
          
          {/* === LOGGED IN: DAY BEFORE INTERVIEW BANNER === */}
          <Link 
            href="/day-before-interview" 
            className="group mb-10 block w-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4 sm:p-6 transition-all hover:border-amber-500/40 hover:bg-amber-500/15 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Zap className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-zinc-100 font-bold text-lg">Day Before Interview Crash Course</h3>
                  <p className="text-zinc-400 text-sm">Review OOPs, high-yield patterns, and perfect your self-intro.</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm group-hover:translate-x-1 transition-transform bg-amber-500/10 px-4 py-2 rounded-lg">
                <PlayCircle className="h-4 w-4" /> Watch Now <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
              DSA Mastery <span className="text-emerald-500">Roadmap</span>
            </h1>
            <p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
              Track your progress through every essential pattern. Check off problems as you solve them.
            </p>
          </div>
          
          <ProblemList userId={user.id} initialCompletedIds={initialCompletedIds} />
        </div>
      </div>
    );
  }

  // ── Logged Out: Show Hero Landing Page ─────────────────────────────────────
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center overflow-x-hidden selection:bg-emerald-500/30">
      
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* === 1. HERO SECTION === */}
        <section className="relative flex flex-col items-center text-center">
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
            Start Tracking Progress
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </section>

        {/* === 2. LEAD MAGNET: DAY BEFORE INTERVIEW TEASER === */}
        <section className="relative z-10 w-full max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-b from-amber-500/20 to-transparent p-[1px] overflow-hidden">
            <div className="bg-zinc-950 border border-zinc-800/50 rounded-[23px] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
              
              <div className="flex-1 space-y-5 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-widest">
                  <Zap className="h-3.5 w-3.5 fill-amber-400/30" />
                  Premium Series
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-100 leading-tight">
                  Interview Tomorrow? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Don't Panic.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Unlock our exclusive <strong>"Day Before Interview"</strong> crash course. Consolidate your knowledge, review high-yield OOPs, and master the perfect self-introduction.
                </p>
                <button 
                  onClick={handleSignIn}
                  className="mt-2 inline-flex items-center gap-2 bg-amber-500 text-amber-950 hover:bg-amber-400 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                >
                  <PlayCircle className="h-5 w-5" />
                  Sign In to Unlock Free Series
                </button>
              </div>
              
              {/* Mockup / Image side */}
              <div className="w-full md:w-2/5 aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer" onClick={handleSignIn}>
                 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
                 <YoutubeIcon />
                 <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur border border-zinc-800 p-4 rounded-xl space-y-2 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                   <div className="h-2 w-1/3 bg-amber-500/40 rounded" />
                   <div className="h-2 w-2/3 bg-zinc-700 rounded" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* === 3. THE MISSION / PLACEMENT TIPS === */}
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

        {/* === 4. WALL OF LOVE === */}
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

      </div>

      {/* === 5. CONTACT & ENTERPRISE FOOTER === */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-800/50 pt-12">
          
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
              <button
                onClick={handleDemo}
                className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                Request a Demo
              </button>
              <p className="text-zinc-500 text-[10px] mt-2">Or email: rameshkumaroff@gmail.com</p>
            </div>
          </div>

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
      <footer className="w-full bg-zinc-950/50 border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
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

          <button
            onClick={() => setIsSupportModalOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all"
          >
            <Coffee className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            Buy me a coffee / Support this project
          </button>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-500">
            <a href="https://www.linkedin.com/in/rameshkumark24/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="https://www.youtube.com/@Simplifywithrk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <YoutubeIcon /> YouTube
            </a>
            <a href="https://rameshkumark.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Briefcase className="h-4 w-4" /> Portfolio
            </a>
            <a href="mailto:rameshkumaroff@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
          <p className="text-xs text-zinc-700">© {new Date().getFullYear()} Rameshkumar Kannan · DSA Mastery</p>
        </div>
      </footer>

      {/* === 7. SUPPORT MODAL === */}
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
