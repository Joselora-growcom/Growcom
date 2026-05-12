create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null,
  source_detail text not null default 'N/D',
  name text not null,
  email text not null,
  phone text not null,
  company text not null,
  company_activity text not null,
  role text not null default 'No especificado',
  reason text not null,
  message text not null,
  status text not null default 'Nuevo',
  internal_notes text not null default ''
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
