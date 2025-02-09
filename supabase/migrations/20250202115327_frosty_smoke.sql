/*
  # Add testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `content` (text)
      - `author` (text)
      - `role` (text)
      - `rating` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access
    - Add policy for authenticated users to manage testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  author text NOT NULL,
  role text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample testimonials
INSERT INTO testimonials (content, author, role, rating)
VALUES 
  (
    'لقد كانت تجربتي مع مينا لونشر رائعة. ساعدوني في تأسيس شركتي في المملكة المتحدة بكل سهولة وشفافية. الدعم باللغة العربية كان ممتازاً وساعدني في فهم كل التفاصيل.',
    'محمد الأحمد',
    'مؤسس شركة تقنية',
    5
  ),
  (
    'كمستقلة في مجال التسويق الرقمي، كنت أبحث عن حل موثوق لقبول المدفوعات العالمية. مينا لونشر قدموا لي الحل المثالي مع دعم استثنائي.',
    'سارة المهندي',
    'مستشارة تسويق رقمي',
    5
  ),
  (
    'الخدمة احترافية والفريق متعاون جداً. ساعدوني في إعداد شركتي وفتح الحساب البنكي بسلاسة. أنصح بشدة بخدماتهم لكل رائد أعمال.',
    'أحمد العلي',
    'رائد أعمال',
    5
  ),
  (
    'تجربة ممتازة مع مينا لونشر. الفريق محترف وسريع في الاستجابة. ساعدوني في تأسيس شركتي وإعداد كل ما أحتاجه للعمل في السوق العالمي.',
    'فاطمة الهاشمي',
    'مصممة جرافيك',
    5
  )
ON CONFLICT DO NOTHING;