import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface DatabaseCertificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface DatabaseProject {
  id: string;
  title: string;
  description: string;
  long_description: string;
  tags: string[];
  type: string;
  image: string;
  images: string[];
  link: string;
  github: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// Database table names
export const TABLES = {
  CERTIFICATES: 'certificates',
  PROJECTS: 'projects',
} as const;