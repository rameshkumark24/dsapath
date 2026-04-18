// src/components/Navbar.tsx
import Link from 'next/link';
import { Terminal } from 'lucide-react'; // Developer-focused icon

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                    <Terminal className="h-6 w-6 text-emerald-500" />
                    <span className="font-bold text-zinc-100 tracking-tight">DSA Mastery</span>
                </Link>

                {/* Auth Placeholder */}
                <div className="flex items-center space-x-4">
                    <button className="inline-flex h-9 items-center justify-center rounded-md bg-emerald-600 px-4 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 disabled:opacity-50">
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    );
}
