import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || supabaseUrl === 'your-supabase-url' || supabaseUrl.includes('your-project-ref')) {
  console.error('❌ REACT_APP_SUPABASE_URL is not set correctly!');
  console.error('Please create a .env.local file with your Supabase credentials.');
  console.error('See SUPABASE_EDGE_FUNCTIONS_SETUP.md for instructions.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-supabase-anon-key') {
  console.error('❌ REACT_APP_SUPABASE_ANON_KEY is not set correctly!');
  console.error('Please create a .env.local file with your Supabase credentials.');
  console.error('See SUPABASE_EDGE_FUNCTIONS_SETUP.md for instructions.');
}

// Create Supabase client with fallback values to prevent crashes
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// Edge Functions base URL
export const EDGE_FUNCTIONS_URL = supabaseUrl 
  ? `${supabaseUrl}/functions/v1`
  : 'https://placeholder.supabase.co/functions/v1'
