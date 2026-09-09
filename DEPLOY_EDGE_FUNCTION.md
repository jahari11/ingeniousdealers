# Deploy Supabase Edge Function

Since you want to use only Supabase (no Express server), you need to deploy the Edge Function to your Supabase project.

## Option 1: Deploy via Supabase Dashboard (Easiest)

1. **Go to your Supabase Dashboard**
   - Visit https://supabase.com/dashboard
   - Select your project

2. **Go to Edge Functions**
   - In the left sidebar, click "Edge Functions"
   - Click "Create a new function"

3. **Create the function**
   - Function name: `phone-numbers`
   - Copy the contents of `supabase/functions/phone-numbers/index.ts` into the editor
   - Click "Deploy"

## Option 2: Deploy via CLI

1. **Login to Supabase CLI**
   ```bash
   npx supabase login
   ```
   - This will open a browser window for authentication

2. **Link to your project**
   ```bash
   npx supabase link --project-ref YOUR_PROJECT_REF
   ```
   - Find your project ref in your Supabase dashboard URL

3. **Deploy the function**
   ```bash
   npx supabase functions deploy phone-numbers
   ```

## Option 3: Manual Upload

1. **Create the function in Supabase Dashboard**
   - Go to Edge Functions in your dashboard
   - Create new function named `phone-numbers`

2. **Copy the code**
   - Copy everything from `supabase/functions/phone-numbers/index.ts`
   - Paste it into the Supabase editor
   - Deploy

## Set up your database

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

## Test the deployment

Once deployed, test with:
```bash
node test-edge-function.js
```

Your phone number submissions will now go directly to Supabase Edge Functions!
