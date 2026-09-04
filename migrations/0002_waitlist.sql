-- Unowned waitlist rows (auth off). Insert-only from the public form.
-- Emails are unique and never listed by a server function.
create table if not exists waitlist (
  id         serial primary key,
  email      text not null unique,
  name       text not null default '',
  wallet     text not null default '',
  role       text not null,
  market     text not null,
  holds      boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on waitlist (created_at desc);
