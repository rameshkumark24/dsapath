// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Retrieve keys securely from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Initiates the Google OAuth sign-in process.
 */
export const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            // Redirect back to the application after successful login
            redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`,
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
