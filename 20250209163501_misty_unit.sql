/*
  # Fix policy conflicts

  This migration:
  1. Safely drops and recreates policies
  2. Uses proper IF EXISTS and IF NOT EXISTS checks
  3. Ensures no duplicate policies
*/

DO $$ 
BEGIN
  -- Drop all existing policies first to avoid conflicts
  DROP POLICY IF EXISTS "Allow public read access" ON contact_info;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON contact_info;
  DROP POLICY IF EXISTS "Allow public read access" ON social_links;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON social_links;
  DROP POLICY IF EXISTS "Allow public read access" ON quick_links;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON quick_links;

  -- Recreate policies with proper checks
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'contact_info' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON contact_info
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'contact_info' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON contact_info
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'social_links' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON social_links
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'social_links' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON social_links
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'quick_links' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON quick_links
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'quick_links' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON quick_links
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;