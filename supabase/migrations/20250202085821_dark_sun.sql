/*
  # Create pricing plans table

  1. New Tables
    - `pricing_plans`
      - `id` (uuid, primary key)
      - `title` (text)
      - `price` (numeric)
      - `description` (text)
      - `features` (text array)
      - `cta` (text)
      - `popular` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `pricing_plans` table
    - Add policy for public read access
    - Add policy for authenticated users to update
*/

CREATE TABLE IF NOT EXISTS pricing_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL,
  features text[] NOT NULL,
  cta text NOT NULL,
  popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON pricing_plans
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to update"
  ON pricing_plans
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert default pricing plans
INSERT INTO pricing_plans (title, price, description, features, cta, popular)
VALUES 
  (
    'باقة البداية',
    800,
    'مناسبة ل: رواد الأعمال الجدد والمستقلين الذين يرغبون في إنشاء وجود مهني في المملكة المتحدة.',
    ARRAY[
      'تأسيس شركة في المملكة المتحدة',
      'شهادة التأسيس',
      'النظام الأساسي والقوانين',
      'أول اجتماع لمجلس الإدارة',
      'عنوان المكتب الرسمي',
      'المسح والإرسال الإلكتروني مجاني',
      'شهادة الأسهم',
      'رمز UTR من HMRC',
      'دليل ودعم إعداد حساب بنك تجاري',
      'دليل ودعم إعداد بوابة الدفع',
      'عنوان خدمة المدير',
      'مجموعة بداية الأعمال (بقيمة 100 جنيه إسترليني)'
    ],
    'قم بإعداد شركتك في المملكة المتحدة بسرعة واحترافية مع باقتنا للبداية. مثالية للذين يبدأون مسيرتهم التجارية للتو.',
    false
  ),
  (
    'باقة رواد الأعمال',
    1150,
    'مناسبة ل: الأعمال النامية والمستقلين الذين يحتاجون إلى دعم إضافي وخدمات الالتزام.',
    ARRAY[
      'جميع ميزات باقة البداية',
      'الفحوصات قبل الإرسال',
      'عنوان أعمال افتراضي (بقيمة 120 جنيه إسترليني)',
      'تسجيل ضريبة القيمة المضافة مجاني (يمكن المطالبة به في أي وقت)'
    ],
    'قم برفع مستوى عملك إلى المستوى التالي مع باقتنا لرواد الأعمال. استمتع بالدعم الإضافي وخدمات الالتزام لمساعدتك على النمو بثقة.',
    true
  ),
  (
    'باقة شاملة',
    2100,
    'مناسبة ل: الأعمال المؤسسة ورواد الأعمال الذين يبحثون عن دعم شامل وميزات متقدمة.',
    ARRAY[
      'جميع ميزات باقة رواد الأعمال',
      'بناء موقع إلكتروني مهني',
      'مجموعة أدوات الرسوم البيانية التجارية (بقيمة 150 جنيه إسترليني)'
    ],
    'احصل على كل ما تحتاجه لإطلاق وإدارة ونمو عملك مع باقتنا الشاملة. استمتع بالدعم الشامل والميزات المتقدمة لرفع عملك إلى مستويات جديدة.',
    false
  )
ON CONFLICT DO NOTHING;