// Supabase Edge Functions configuration
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key';

// Edge Functions URLs
const API_BASE_URL = `${SUPABASE_URL}/functions/v1`;

export default API_BASE_URL;
export { SUPABASE_URL, SUPABASE_ANON_KEY };
