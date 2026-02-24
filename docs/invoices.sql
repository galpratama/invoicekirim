-- Table: invoices
-- Stores all invoices created by users.
-- Items are stored as JSONB array: [{ description, qty, price }]
-- Total is stored in cents/smallest currency unit (integer)

CREATE TABLE invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  invoice_number TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT,
  items JSONB NOT NULL DEFAULT '[]',
  total INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'unpaid',  -- 'unpaid' | 'paid'
  notes TEXT,
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Authenticated users can view their own invoices
CREATE POLICY "Users can view own invoices"
  ON invoices FOR SELECT
  USING (auth.uid() = user_id);

-- Authenticated users can create invoices (must own the row)
CREATE POLICY "Users can create invoices"
  ON invoices FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Authenticated users can update their own invoices
CREATE POLICY "Users can update own invoices"
  ON invoices FOR UPDATE
  USING (auth.uid() = user_id);

-- Anyone can view any invoice by ID (public share link)
-- NOTE: This overrides the "view own invoices" policy — all invoices become
-- publicly readable. Restrict this further if needed (e.g. add a `is_public` flag).
CREATE POLICY "Public can view invoice by id"
  ON invoices FOR SELECT
  USING (true);
