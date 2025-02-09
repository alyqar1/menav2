/*
  # Add payment options table

  1. New Tables
    - `payment_options`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `url` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `payment_options` table
    - Add policy for public read access
    - Add policy for authenticated users to manage payment options
*/

CREATE TABLE IF NOT EXISTS payment_options (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE payment_options ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON payment_options
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage payment options"
  ON payment_options
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert default payment options
INSERT INTO payment_options (title, description, url, "order")
VALUES 
  (
    'بطاقة ائتمان / مدين',
    'ادفع مباشرة باستخدام بطاقتك',
    'https://checkout.stripe.com',
    1
  ),
  (
    'PayPal',
    'ادفع باستخدام حسابك على PayPal',
    'https://paypal.me/menalauncher',
    2
  ),
  (
    'تحويل بنكي',
    'ادفع عن طريق التحويل المصرفي المباشر',
    'https://wise.com/pay',
    3
  )
ON CONFLICT DO NOTHING;