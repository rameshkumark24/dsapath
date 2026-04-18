"use client";

// src/components/Navbar.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, LogOut, LogIn, Briefcase } from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { supabase, signInWithGoogle, signOut } from '@/lib/supabaseClient';

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Check for an existing session on mount
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setIsLoading(false);
        });

        // 2. Listen for any future auth changes (login / logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );

        // 3. Cleanup the listener when the component unmounts
        return () => subscription.unsubscribe();
    }, []);

    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error('Sign in failed:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };

    const avatarUrl = user?.user_metadata?.avatar_url as string | undefined;
    const displayEmail = user?.email;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                    <Terminal className="h-6 w-6 text-emerald-500" />
                    <span className="font-bold text-zinc-100 tracking-tight">DSA Mastery</span>
                </Link>

                {/* Auth Section */}
                <div className="flex items-center space-x-3">
                    {isLoading ? (
                        // Skeleton placeholder while session is being fetched
                        <div className="h-8 w-24 animate-pulse rounded-md bg-zinc-800" />
                    ) : user ? (
                        // --- Logged In State ---
                        <>
                            <Link href="/job-tracker" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-zinc-700 bg-transparent px-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
                                <Briefcase className="h-4 w-4" />
                                <span className="hidden sm:block">Tracker</span>
                            </Link>

                            {/* User Avatar or Email */}
                            <div className="flex items-center space-x-2">
                                {avatarUrl ? (
                                    <Image
                                        src={avatarUrl}
                                        alt={displayEmail ?? 'User avatar'}
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 rounded-full ring-2 ring-emerald-500/50 object-cover"
                                    />
                                ) : (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 ring-2 ring-emerald-500/50">
                                        <span className="text-xs font-semibold text-white">
                                            {displayEmail?.[0]?.toUpperCase() ?? '?'}
                                        </span>
                                    </div>
                                )}
                                <span className="hidden text-sm text-zinc-400 sm:block max-w-[140px] truncate">
                                    {displayEmail}
                                </span>
                            </div>

                            {/* Sign Out Button */}
                            <button
                                onClick={handleSignOut}
                                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3 text-sm font-medium text-zinc-300 shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="hidden sm:block">Sign Out</span>
                            </button>
                        </>
                    ) : (
                        // --- Logged Out State ---
                        <button
                            onClick={handleSignIn}
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 disabled:opacity-50"
                        >
                            <LogIn className="h-4 w-4" />
                            Sign in with Google
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}
