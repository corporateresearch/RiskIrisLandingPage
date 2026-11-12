-- Demo requests submitted from /book-a-demo.
-- Run once in the Supabase SQL editor. The website uses the anon key and can
-- only insert; nobody can read, update or delete rows with that key.

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  company text not null check (char_length(company) between 1 and 150),
  role text not null check (char_length(role) between 1 and 100),
  team_size text not null check (char_length(team_size) between 1 and 20),
  note text check (note is null or char_length(note) <= 1000)
);

alter table public.demo_requests enable row level security;

revoke all on public.demo_requests from anon, authenticated;
grant insert on public.demo_requests to anon;

drop policy if exists "Anyone can submit a demo request" on public.demo_requests;
create policy "Anyone can submit a demo request"
  on public.demo_requests
  for insert
  to anon
  with check (true);

-- No select, update or delete policy: with row level security enabled,
-- those operations are denied for the anon and authenticated roles.

create index if not exists demo_requests_created_at_idx on public.demo_requests (created_at desc);
