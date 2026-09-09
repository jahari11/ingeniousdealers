# Troubleshooting Guide

## Common Issues and Solutions

### ❌ "Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL"

**Problem:** The Supabase URL in your environment variables is not set correctly.

**Solution:**
1. Make sure you have a `.env.local` file in your project root
2. Run: `node create-env.js` to create the file automatically
3. Update `.env.local` with your actual Supabase credentials:
   ```env
   REACT_APP_SUPABASE_URL=https://your-actual-project-ref.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=your-actual-anon-key
   ```
4. Restart your React app: `npm start`

**To get your Supabase credentials:**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings → API
4. Copy the Project URL and anon/public key

### ❌ "Failed to fetch" or Network errors

**Problem:** The Edge Function is not deployed or the URL is incorrect.

**Solution:**
1. Deploy the Edge Function: `supabase functions deploy phone-numbers`
2. Check that your Supabase URL is correct
3. Verify the Edge Function is deployed in your Supabase dashboard

### ❌ "Authentication failed" or 401 errors

**Problem:** The anon key is incorrect or missing.

**Solution:**
1. Check your `.env.local` file has the correct `REACT_APP_SUPABASE_ANON_KEY`
2. Make sure you're using the anon/public key, not the service role key
3. Restart your React app after updating environment variables

### ❌ Database errors or "relation does not exist"

**Problem:** The database table is not set up correctly.

**Solution:**
1. Run the SQL from `SUPABASE_EDGE_FUNCTIONS_SETUP.md` in your Supabase SQL editor
2. Make sure the table name is exactly `phone_numbers`
3. Check that Row Level Security policies are set up correctly

### ❌ CORS errors

**Problem:** Your domain is not allowed in Supabase CORS settings.

**Solution:**
1. Go to your Supabase dashboard
2. Go to Settings → API
3. Add your domain to the allowed origins
4. For local development, add `http://localhost:3000`

## Quick Test

Run this to test your setup:
```bash
node test-edge-function.js
```

This will test both the environment variables and the Edge Function connection.
