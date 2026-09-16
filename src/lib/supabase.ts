import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function getEnvVar(key: string): string {
  try {
    if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
      return String(import.meta.env[key]);
    }
  } catch {}
  try {
    if (typeof process !== "undefined" && process.env && process.env[key]) {
      return String(process.env[key]);
    }
  } catch {}
  return "";
}

const supabaseUrl =
  getEnvVar("VITE_SUPABASE_URL") ||
  getEnvVar("SUPABASE_URL") ||
  "";

const supabaseKey =
  getEnvVar("VITE_SUPABASE_ANON_KEY") ||
  getEnvVar("VITE_SUPABASE_PUBLISHABLE_KEY") ||
  getEnvVar("VITE_SUPABASE_KEY") ||
  getEnvVar("SUPABASE_ANON_KEY") ||
  "";

function initSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseKey) return null;
  try {
    return createClient(supabaseUrl, supabaseKey);
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
    return null;
  }
}

export const supabase = initSupabase();
export const isSupabaseConfigured = Boolean(supabase);
