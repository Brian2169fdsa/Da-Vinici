-- Da Vinci Consulting Services — form storage.
-- Run in the Supabase SQL editor (or `supabase db push`).
-- Route handlers insert with the service-role key, so RLS stays on with no
-- public policies: the anon key cannot read or write these tables.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  service_type text,
  comment text,
  created_at timestamptz not null default now()
);

create table if not exists public.lead_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  facility text,
  need text,
  message text,
  source text default 'home',
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;
alter table public.lead_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;
