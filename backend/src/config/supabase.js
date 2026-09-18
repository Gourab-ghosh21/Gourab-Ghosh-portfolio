import { createClient } from '@supabase/supabase-js';

let supabaseInstance = null;

/**
 * Get or initialize the Supabase client using environment variables.
 * Uses SUPABASE_URL and SUPABASE_SECRET_KEY.
 * Never logs or exposes secret keys.
 */
export const getSupabaseClient = () => {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) {
    return null;
  }

  if (!supabaseInstance) {
    supabaseInstance = createClient(url, secretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return supabaseInstance;
};

export const isSupabaseConfigured = () => {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
};

export default getSupabaseClient;
