// src/app/page.tsx
import ProblemList from "@/components/ProblemList";

export default function Home() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
          DSA Mastery{" "}
          <span className="text-emerald-500">Roadmap</span>
        </h1>
        <p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
          Track your progress through every essential pattern. Check off problems as you solve them.
        </p>
      </div>

      {/* Problem List — userId is undefined until auth is wired up */}
      <ProblemList />
    </div>
  );
}
