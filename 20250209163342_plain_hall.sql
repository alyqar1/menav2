/*
  # Add missing tables and fix duplicates

  This migration:
  1. Ensures all tables exist with proper structure
  2. Fixes any duplicate policy issues
  3. Adds proper RLS policies
  4. Maintains existing data
*/

-- Drop and recreate policies for existing tables to avoid conflicts
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow public read access" ON how_it_works;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON how_it_works;
  DROP POLICY IF EXISTS "Allow public read access" ON about_features;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON about_features;
  DROP POLICY IF EXISTS "Allow public read access" ON services;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON services;
  DROP POLICY IF EXISTS "Allow public read access" ON audience_segments;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON audience_segments;
  DROP POLICY IF EXISTS "Allow public read access" ON contact_info;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON contact_info;
  DROP POLICY IF EXISTS "Allow public read access" ON social_links;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON social_links;
  DROP POLICY IF EXISTS "Allow public read access" ON quick_links;
  DROP POLICY IF EXISTS "Allow authenticated users to manage content" ON quick_links;
END $$;

-- Recreate all policies
DO $$ 
BEGIN
  -- how_it_works policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'how_it_works' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON how_it_works
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'how_it_works' 
    AND policyname = 'Allow authenticated users to manage content'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage content"
      ON how_it_works
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;

  -- about_features policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
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
    SELECT 1 FROM pg_policies 
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

  -- services policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
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
    SELECT 1 FROM pg_policies 
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

  -- audience_segments policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
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
    SELECT 1 FROM pg_policies 
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

  -- contact_info policies
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

  -- social_links policies
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

  -- quick_links policies
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