/*
  # Fix duplicate policy for payment_options table

  1. Changes
    - Drop existing policy if it exists
    - Recreate policy with IF NOT EXISTS clause
*/

DO $$ 
BEGIN
  -- Drop the existing policy if it exists
  DROP POLICY IF EXISTS "Allow public read access" ON payment_options;
  
  -- Recreate the policy with IF NOT EXISTS
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'payment_options' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON payment_options
      FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;