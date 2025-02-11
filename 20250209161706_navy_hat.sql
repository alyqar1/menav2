/*
  # Add content management tables

  1. New Tables
    - `about_features`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `icon_name` (text)
      - `order` (integer)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `icon_name` (text)
      - `order` (integer)
    
    - `audience_segments`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `icon_name` (text)
      - `order` (integer)

  2. Security
    - Enable RLS on all tables
    - Add public read access policies
    - Add authenticated user management policies
*/

-- Create about_features table
CREATE TABLE IF NOT EXISTS about_features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create audience_segments table
CREATE TABLE IF NOT EXISTS audience_segments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS and create policies for about_features
ALTER TABLE about_features ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON about_features
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content"
  ON about_features
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS and create policies for services
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON services
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content"
  ON services
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS and create policies for audience_segments
ALTER TABLE audience_segments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON audience_segments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content"
  ON audience_segments
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial data for about_features
INSERT INTO about_features (title, description, icon_name, "order")
VALUES 
  (
    'تأسيس سهل وموثوق',
    'خدمات تأسيس شركات بريطانية مع دعم كامل باللغة العربية',
    'Building2',
    1
  ),
  (
    'وصول عالمي',
    'افتح آفاقاً جديدة لأعمالك من خلال التواجد في السوق البريطاني',
    'Globe2',
    2
  ),
  (
    'دعم محلي',
    'فريق متخصص يتحدث العربية لمساعدتك في كل خطوة',
    'Users2',
    3
  )
ON CONFLICT DO NOTHING;

-- Insert initial data for services
INSERT INTO services (title, description, icon_name, "order")
VALUES 
  (
    'تأسيس الشركات',
    'نساعدك في تأسيس شركتك بسهولة وسرعة مع كافة المتطلبات القانونية',
    'Building2',
    1
  ),
  (
    'الخدمات القانونية',
    'نقدم استشارات قانونية شاملة لحماية مصالح شركتك',
    'Scale',
    2
  ),
  (
    'خدمات الضرائب',
    'نساعدك في إدارة الضرائب والامتثال للمتطلبات المالية',
    'Calculator',
    3
  ),
  (
    'خدمات الموارد البشرية',
    'نوفر حلول متكاملة لإدارة الموظفين والتوظيف',
    'Users',
    4
  ),
  (
    'خدمات التوسع الدولي',
    'نساعدك في التوسع إلى أسواق جديدة في المنطقة',
    'Globe',
    5
  ),
  (
    'خدمات التراخيص',
    'نساعدك في الحصول على التراخيص اللازمة لعملك',
    'FileText',
    6
  )
ON CONFLICT DO NOTHING;

-- Insert initial data for audience_segments
INSERT INTO audience_segments (title, description, icon_name, "order")
VALUES 
  (
    'المستقلين',
    'إذا كنت تعمل كفريلانسر في السعودية أو دول أخرى في المنطقة، نحن نقدم لك الحلول المثالية لتأسيس عملك بشكل قانوني وآمن مع الوصول إلى بوابات الدفع الدولية مثل Stripe.',
    'Briefcase',
    1
  ),
  (
    'التجارة الإلكترونية',
    'أنت صاحب متجر إلكتروني وتحتاج إلى تأسيس شركة في المملكة المتحدة؟ نحن نقدم لك خدمات مخصصة لتساعدك على توسيع نطاق أعمالك عبر الإنترنت بسهولة مع دعم متكامل ودفع آمن.',
    'ShoppingCart',
    2
  ),
  (
    'المبدعين في المحتوى',
    'إذا كنت مديرًا لوسائل الإعلام أو منتج محتوى، نحن نقدم لك الحلول القانونية المناسبة وتسهيلات الدفع لمساعدتك على النمو في السوق الدولي، مع دعم قوي ودائم.',
    'Video',
    3
  ),
  (
    'المسوقين الرقميين',
    'سواء كنت تعمل كمسوق رقمي أو تدير وكالة تسويق، نحن هنا لدعمك من خلال تأسيس شركتك وتحقيق جميع احتياجاتك في السوق الدولية بكل سهولة.',
    'BarChart',
    4
  )
ON CONFLICT DO NOTHING;