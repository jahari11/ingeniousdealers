import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Edge Functions base URL
export const EDGE_FUNCTIONS_URL = process.env.REACT_APP_SUPABASE_URL 
  ? `${process.env.REACT_APP_SUPABASE_URL}/functions/v1`
  : 'https://your-project-ref.supabase.co/functions/v1'
