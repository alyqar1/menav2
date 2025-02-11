/*
  # Create success stories table

  1. New Tables
    - `success_stories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `job_title` (text)
      - `nationality` (text)
      - `video_url` (text)
      - `thumbnail_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `success_stories` table
    - Add policy for public read access
    - Add policy for authenticated users to manage stories
*/

CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  job_title text NOT NULL,
  nationality text NOT NULL,
  video_url text NOT NULL,
  thumbnail_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON success_stories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage stories"
  ON success_stories
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample success stories
INSERT INTO success_stories (name, job_title, nationality, video_url)
VALUES 
  (
    'محمد السيد',
    'مؤسس شركة تقنية',
    'مصر',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  (
    'سارة العتيبي',
    'مستشارة تسويق رقمي',
    'السعودية',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  (
    'أحمد الهاشمي',
    'رائد أعمال',
    'الإمارات',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  )
ON CONFLICT DO NOTHING;