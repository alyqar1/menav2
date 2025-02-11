/*
  # Add contact and footer content management tables

  1. New Tables
    - `contact_info`
      - `id` (uuid, primary key)
      - `phone` (text)
      - `email` (text)
      - `address` (text)
      - `working_hours` (jsonb)
      - `cta_text` (text)
    
    - `social_links`
      - `id` (uuid, primary key)
      - `platform` (text)
      - `url` (text)
      - `order` (integer)
    
    - `quick_links`
      - `id` (uuid, primary key)
      - `title` (text)
      - `url` (text)
      - `section` (text)
      - `order` (integer)

  2. Security
    - Enable RLS on all tables
    - Add public read access policies
    - Add authenticated user management policies
*/

-- Create contact_info table
CREATE TABLE IF NOT EXISTS contact_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text NOT NULL,
  email text NOT NULL,
  address text NOT NULL,
  working_hours jsonb NOT NULL,
  cta_text text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create social_links table
CREATE TABLE IF NOT EXISTS social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create quick_links table
CREATE TABLE IF NOT EXISTS quick_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL,
  section text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS and create policies for contact_info
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON contact_info
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content"
  ON contact_info
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS and create policies for social_links
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON social_links
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content"
  ON social_links
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS and create policies for quick_links
ALTER TABLE quick_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON quick_links
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content"
  ON quick_links
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial data for contact_info
INSERT INTO contact_info (phone, email, address, working_hours, cta_text)
VALUES (
  '+961 81 522 815',
  'info@menalauncher.com',
  'المملكة المتحدة - لندن',
  '{
    "weekdays": "الإثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً",
    "saturday": "السبت: 10:00 صباحاً - 2:00 مساءً",
    "sunday": "الأحد: مغلق"
  }',
  'نحن متحمسون للاستماع إلى أفكارك وتقديم المساعدة التي تحتاجها لبدء رحلة نجاحك في عالم الأعمال'
)
ON CONFLICT DO NOTHING;

-- Insert initial data for social_links
INSERT INTO social_links (platform, url, "order")
VALUES 
  ('facebook', 'https://facebook.com/menalauncher', 1),
  ('instagram', 'https://instagram.com/menalauncher', 2),
  ('linkedin', 'https://linkedin.com/company/menalauncher', 3),
  ('twitter', 'https://twitter.com/menalauncher', 4)
ON CONFLICT DO NOTHING;

-- Insert initial data for quick_links
INSERT INTO quick_links (title, url, section, "order")
VALUES 
  ('الرئيسية', '/', 'quick_links', 1),
  ('خدماتنا', '#services', 'quick_links', 2),
  ('عن الشركة', '#about', 'quick_links', 3),
  ('الأسعار', '#pricing', 'quick_links', 4),
  ('قصص النجاح', '/success-stories', 'quick_links', 5),
  ('سياسة الخصوصية', '/privacy-policy', 'legal', 1),
  ('الشروط والأحكام', '/terms-and-conditions', 'legal', 2),
  ('اتصل بنا', '#contact', 'legal', 3)
ON CONFLICT DO NOTHING;