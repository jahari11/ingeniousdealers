# Supabase Edge Functions Setup Guide

This guide will help you set up Supabase Edge Functions to handle phone number submissions directly from your frontend.

## Prerequisites

1. A Supabase project (create one at https://supabase.com)
2. Supabase CLI installed (`npm install -g supabase`)

## Setup Steps

### 1. Initialize Supabase in your project

```bash
cd /Users/jahariyoung/Desktop/ingeniousdealers/ingenious
supabase init
```

### 2. Link to your Supabase project

```bash
supabase link --project-ref your-project-ref
```

### 3. Set up environment variables

Create a `.env.local` file in your project root:

```env
REACT_APP_SUPABASE_URL=your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Deploy the Edge Function

```bash
supabase functions deploy phone-numbers
```

### 5. Set up your database

Make sure your Supabase database has the `phone_numbers` table. Run this SQL in your Supabase SQL editor:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

create table if not exists phone_numbers (
  id uuid primary key default gen_random_uuid(),
  phone_number text unique not null,
  source text default 'password_page',
  is_active boolean default true,
  created_at timestamptz default now()
);

alter table phone_numbers enable row level security;
create policy service_insert on phone_numbers for insert to service_role using (true);
create policy service_select on phone_numbers for select to service_role using (true);
create policy service_update on phone_numbers for update to service_role using (true);
create policy anon_insert on phone_numbers for insert to anon using (true);
create policy anon_select on phone_numbers for select to anon using (true);
create policy anon_update on phone_numbers for update to anon using (true);
```

### 6. Test the setup

1. Start your React app: `npm start`
2. Navigate to the password page
3. Enter a phone number and submit
4. Check your Supabase dashboard to see the data

## How it works

- Phone numbers are now submitted directly to your Supabase Edge Function
- The Edge Function handles all CRUD operations for phone numbers
- No Express server needed - everything runs on Supabase's infrastructure
- The frontend uses the Supabase client to communicate with Edge Functions

## Benefits

- **Serverless**: No server maintenance required
- **Global**: Edge Functions run close to your users
- **Scalable**: Automatically scales with demand
- **Secure**: Built-in authentication and authorization
- **Cost-effective**: Pay only for what you use

## Troubleshooting

1. **CORS errors**: Make sure your Supabase project allows your domain
2. **Authentication errors**: Verify your anon key is correct
3. **Function not found**: Ensure the Edge Function is deployed
4. **Database errors**: Check your RLS policies and table structure
