/*
  # Create hero video table

  1. New Tables
    - `hero_video`
      - `id` (uuid, primary key)
      - `video_url` (text, not null)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `hero_video` table
    - Add policy for public read access
    - Add policy for authenticated users to update
*/

CREATE TABLE IF NOT EXISTS hero_video (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE hero_video ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON hero_video
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to update"
  ON hero_video
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert default video
INSERT INTO hero_video (video_url)
VALUES ('https://www.youtube.com/embed/A3AsVAZ7wIs?si=5AIvDc4JMpit4bLg')
ON CONFLICT DO NOTHING;