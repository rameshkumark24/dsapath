import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// During `next build`, NEXT_PUBLIC_* vars are available if set in Vercel dashboard.
// We guard with a placeholder so `createClient` never throws during static generation.
// At runtime in production, the real values are always present.
if (typeof window !== 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
    console.error('⚠️  Missing Supabase environment variables. Auth will not work.');
}

export const supabase = createClient(
    supabaseUrl   ?? 'https://placeholder.supabase.co',
    supabaseAnonKey ?? 'placeholder-anon-key'
);

/**
 * Initiates the Google OAuth sign-in process.
 * Redirects back to the home page (/) after a successful login.
 */
export const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/`,
        },
    });

    if (error) {
        console.error('Error signing in with Google:', error.message);
        throw error;
    }

    return data;
};

/**
 * Signs the user out of the application.
 */
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Error signing out:', error.message);
        throw error;
    }
};
