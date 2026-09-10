Supabase setup

1) Create a new Supabase project.
2) In SQL editor, run:

CREATE EXTENSION IF NOT EXISTS pgcrypto;

create table if not exists phone_numbers (
  id uuid primary key default gen_random_uuid(),
  phone_number text unique not null,
  source text default 'password_page',
  created_at timestamptz default now()
);

alter table phone_numbers enable row level security;
create policy service_insert on phone_numbers for insert to service_role using (true);
create policy service_select on phone_numbers for select to service_role using (true);
create policy service_update on phone_numbers for update to service_role using (true);

3) Create server/.env with:

SUPABASE_URL=your_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

4) From server directory: npm install && npm start
