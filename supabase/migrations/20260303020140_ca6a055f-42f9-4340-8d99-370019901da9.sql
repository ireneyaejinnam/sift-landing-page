
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  categories TEXT[] DEFAULT '{}',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public waitlist form)
CREATE POLICY "Allow public inserts" ON public.waitlist_signups
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read (admin access)
CREATE POLICY "Authenticated users can read" ON public.waitlist_signups
  FOR SELECT TO authenticated
  USING (true);
