/*
  # Fix duplicate policies

  1. Changes
    - Drop and recreate policies with IF NOT EXISTS checks
    - Use DO blocks to safely handle policy management
    - Maintain existing functionality while avoiding duplicates

  2. Security
    - Preserves all existing RLS policies
    - Maintains same security model
*/

DO $$ 
BEGIN
  -- Handle about_features policies
  DROP POLICY IF EXISTS "Allow public read access" ON about_features;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON about_features;
  
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'about_features' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON about_features
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'about_features' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON about_features
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;

  -- Handle services policies
  DROP POLICY IF EXISTS "Allow public read access" ON services;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON services;
  
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'services' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON services
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'services' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON services
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;

  -- Handle audience_segments policies
  DROP POLICY IF EXISTS "Allow public read access" ON audience_segments;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON audience_segments;
  
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'audience_segments' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON audience_segments
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'audience_segments' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON audience_segments
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;