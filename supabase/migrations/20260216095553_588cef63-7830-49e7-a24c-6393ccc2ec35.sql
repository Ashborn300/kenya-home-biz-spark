
-- Create page_views table to track website visits
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL DEFAULT '/',
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  referrer TEXT
);

-- Enable RLS
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (track visits)
CREATE POLICY "Anyone can insert page views"
ON public.page_views
FOR INSERT
WITH CHECK (true);

-- Only admins can read
CREATE POLICY "Admins can read page views"
ON public.page_views
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- No updates or deletes
CREATE POLICY "No updates on page_views"
ON public.page_views
FOR UPDATE
USING (false);

CREATE POLICY "No deletes on page_views"
ON public.page_views
FOR DELETE
USING (false);
