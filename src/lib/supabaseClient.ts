import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// --- DEBUGGING BLOCK ---
console.log("🔍 CHECKING ENV VARIABLES:");
console.log("URL exists?", supabaseUrl.length > 0 ? "YES" : "NO");
console.log("Key exists?", supabaseAnonKey.length > 0 ? "YES" : "NO");
// -----------------------

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables! Check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
