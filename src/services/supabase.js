import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pgvftvqbxiomguaxhnvj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndmZ0dnFieGlvbWd1YXhobnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDYxMDQsImV4cCI6MjAyNjAyMjEwNH0.YIJGQmCAwE0UfzCCgHLhmJWxCAct252AMWr30kN-GVA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
