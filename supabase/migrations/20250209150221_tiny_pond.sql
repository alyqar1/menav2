/*
  # Add How It Works table and content

  1. New Tables
    - `how_it_works`
      - `id` (uuid, primary key)
      - `step_number` (integer)
      - `title` (text)
      - `description` (text)
      - `details` (text[])
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `how_it_works` table
    - Add policies for public read access
    - Add policies for authenticated users to manage content

  3. Initial Data
    - Insert three steps with their details
*/

-- Create how_it_works table if it doesn't exist
CREATE TABLE IF NOT EXISTS how_it_works (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  step_number integer NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  details text[] NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE how_it_works ENABLE ROW LEVEL SECURITY;

-- Create policies
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow public read access" ON how_it_works;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON how_it_works;
  
  -- Create new policies
  CREATE POLICY "Allow public read access"
    ON how_it_works
    FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Allow authenticated users to manage content"
    ON how_it_works
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
END $$;

-- Insert initial content if not exists
INSERT INTO how_it_works (step_number, title, description, details)
VALUES 
  (
    1,
    'ابدأ الآن',
    'اضغط على زر "ابدأ الآن" وقم بملء نموذج الاتصال بمعلوماتك.',
    ARRAY[
      'ستتصل فريقنا بك لجدولة موعد لاستشارة لمناقشة احتياجات عملك ومساعدتك في اختيار الباقة المناسبة (بداية العمل، رواد الأعمال، أو شاملة) التي تتناسب مع أهدافك.'
    ]
  ),
  (
    2,
    'نقوم بالباقي',
    'بمجرد اختيارك للباقة المناسبة، استرخِ ودعنا نقوم بالباقي.',
    ARRAY[
      'تقديم طلب تسجيل شركتك في المملكة المتحدة لدى Companies House.',
      'إعداد عنوان المكتب الرسمي في المملكة المتحدة.',
      'توفير عنوان خدمة المدير.',
      'تمكين إعادة توجيه البريد والخدمات الأساسية الأخرى.',
      'تستغرق هذه العملية عادة 4-7 أيام عمل، حسب الحمل العملي لدى Companies House.'
    ]
  ),
  (
    3,
    'استلم وثائقك واطلق عملك',
    'بمجرد تأسيس شركتك، ستستلم:',
    ARRAY[
      'شهادة التأسيس.',
      'النظام الأساسي والقوانين.',
      'شهادات الأسهم.',
      'الوثائق الرسمية الأخرى.',
      'ثم سنقوم بتوجيحك خلال:',
      'إعداد حسابات البنك التجارية بالجنيه الإسترليني، الدولار الأمريكي، أو عملات أخرى.',
      'دمج بوابات الدفع مثل Stripe، PayPal، أو Wise.',
      'تقديم الدعم المستمر لضمان امتثال عملك ونموه.'
    ]
  )
ON CONFLICT DO NOTHING;