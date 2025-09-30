# Supabase Setup Guide for Launch Updates

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and service role key

## 2. Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS phone_numbers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,
  source text DEFAULT 'password_page',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  launch_updates_opted_in boolean DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE phone_numbers ENABLE ROW LEVEL SECURITY;

-- Create policies for service role
CREATE POLICY service_insert ON phone_numbers FOR INSERT TO service_role USING (true);
CREATE POLICY service_select ON phone_numbers FOR SELECT TO service_role USING (true);
CREATE POLICY service_update ON phone_numbers FOR UPDATE TO service_role USING (true);
CREATE POLICY service_delete ON phone_numbers FOR DELETE TO service_role USING (true);
```

## 3. Environment Configuration

Create a `.env` file in the server directory with:

```
SUPABASE_URL=your_project_url_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
PORT=4000
NODE_ENV=development
```

## 4. Install Dependencies and Start Server

```bash
cd server
npm install
npm start
```

## 5. Test the Setup

Your password page should now collect phone numbers and store them in Supabase!

## 6. View Collected Numbers

You can view collected phone numbers by:
- Going to your Supabase dashboard > Table Editor > phone_numbers
- Or using the API endpoint: `GET http://localhost:4000/api/phone-numbers`
