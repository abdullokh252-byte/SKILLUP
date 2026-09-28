-- SKILLUP: cloud data + Row Level Security
-- Run this once in Supabase SQL Editor.

create table if not exists public.user_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_data enable row level security;

revoke all on table public.user_data from anon;
grant select, insert, update, delete on table public.user_data to authenticated;

drop policy if exists "Users can read their own SKILLUP data" on public.user_data;
drop policy if exists "Users can insert their own SKILLUP data" on public.user_data;
drop policy if exists "Users can update their own SKILLUP data" on public.user_data;
drop policy if exists "Users can delete their own SKILLUP data" on public.user_data;

create policy "Users can read their own SKILLUP data"
on public.user_data
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own SKILLUP data"
on public.user_data
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own SKILLUP data"
on public.user_data
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own SKILLUP data"
on public.user_data
for delete
to authenticated
using ((select auth.uid()) = user_id);
