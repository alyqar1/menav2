import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nmsxflngvnohhrkevocl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tc3hmbG5ndm5vaGhya2V2b2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0ODYyMzgsImV4cCI6MjA1NDA2MjIzOH0.0tvtwUpw_kVifhe3WmHMrEKzsi5_SkmsNNA7q6t2G2g';

export const supabase = createClient(supabaseUrl, supabaseKey);