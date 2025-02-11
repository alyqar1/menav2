/*
  # Add FAQ table

  1. New Tables
    - `faq`
      - `id` (uuid, primary key)
      - `question` (text)
      - `answer` (text)
      - `order` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `faq` table
    - Add policy for public read access
    - Add policy for authenticated users to manage FAQs
*/

CREATE TABLE IF NOT EXISTS faq (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON faq
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage faq"
  ON faq
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample FAQs
INSERT INTO faq (question, answer, "order")
VALUES 
  (
    'هل يمكنني فتح شركة في المملكة المتحدة وأنا خارج البلاد؟',
    'نعم، مينا لونشر توفر لك جميع الخدمات التي تحتاجها لتأسيس شركتك في المملكة المتحدة من أي مكان في العالم.',
    1
  ),
  (
    'هل يمكنني استخدام بوابات الدفع مثل Stripe؟',
    'نعم، نحن نقدم لك الحلول اللازمة لربط حساباتك مع بوابات الدفع الدولية مثل Stripe بكل سهولة.',
    2
  ),
  (
    'هل يمكنني الحصول على دعم باللغة العربية؟',
    'نعم، نقدم لك جميع الخدمات والدعم الفني باللغة العربية.',
    3
  ),
  (
    'كم المدة المتوقعة لتأسيس الشركة؟',
    'عادةً ما تستغرق عملية تأسيس الشركة من 3 إلى 5 أيام عمل، وقد تختلف المدة حسب نوع الشركة والمتطلبات الخاصة.',
    4
  ),
  (
    'هل أحتاج إلى زيارة المملكة المتحدة لفتح حساب بنكي؟',
    'لا، نحن نساعدك في فتح حساب بنكي رقمي في المملكة المتحدة دون الحاجة إلى زيارة البلد شخصياً.',
    5
  ),
  (
    'ما هي المستندات المطلوبة لتأسيس الشركة؟',
    'المستندات الأساسية تشمل جواز السفر أو الهوية، إثبات العنوان، والمعلومات الأساسية للشركة. سنقوم بتوجيهك خلال العملية وتحديد المستندات المطلوبة بناءً على نوع شركتك.',
    6
  )
ON CONFLICT DO NOTHING;