-- ─── ByteKwanza Admin Supabase Schema ─────────────────────────────────────────
-- Run this SQL in your Supabase SQL Editor (https://app.supabase.com)

-- 1. Services table
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  icon TEXT NOT NULL,
  name TEXT NOT NULL,
  tag TEXT NOT NULL,
  price TEXT NOT NULL,
  annual_price TEXT DEFAULT '',
  annual_discount TEXT DEFAULT '',
  "desc" TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  deadline TEXT NOT NULL,
  ideal TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  position INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Portfolio table
CREATE TABLE IF NOT EXISTS public.portfolio (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  display TEXT NOT NULL,
  screenshot TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  tags JSONB NOT NULL DEFAULT '[]'::jsonb,
  accent TEXT NOT NULL,
  position INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Site Settings table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id TEXT PRIMARY KEY DEFAULT 'default',
  whatsapp TEXT NOT NULL DEFAULT '957455005',
  email TEXT NOT NULL DEFAULT 'servicos.ivanlima@gmail.com',
  nif TEXT NOT NULL DEFAULT '5003198294',
  hero_title TEXT NOT NULL DEFAULT 'Soluções digitais que transformam o seu negócio.',
  hero_subtitle TEXT NOT NULL DEFAULT 'Desenvolvimento web, e-commerce, portais e sistemas personalizados.',
  catalog_year TEXT NOT NULL DEFAULT '2026',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Row Level Security) and allow public read/write access for simplicity
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public write services" ON public.services FOR ALL USING (true);

CREATE POLICY "Allow public read portfolio" ON public.portfolio FOR SELECT USING (true);
CREATE POLICY "Allow public write portfolio" ON public.portfolio FOR ALL USING (true);

CREATE POLICY "Allow public read settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Allow public write settings" ON public.site_settings FOR ALL USING (true);
