import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Load environment variables from .env.local
const envPath = join(process.cwd(), '.env.local');
try {
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      process.env[key] = value;
    }
  });
} catch (error) {
  console.error('❌ Error reading .env.local file');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function generateMockData() {
  console.log('📝 Generating mock data from database...\n');

  try {
    // Fetch all projects with demo links
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .neq('link', '')
      .order('featured', { ascending: false })
      .order('title');

    if (error) {
      console.error('❌ Error fetching projects:', error);
      process.exit(1);
    }

    if (!projects || projects.length === 0) {
      console.error('❌ No projects with demo links found');
      process.exit(1);
    }

    console.log(`✅ Found ${projects.length} projects with demo links\n`);

    // Generate TypeScript code for mock data
    const mockDataCode = `// Mock projects data for fallback - Only projects with demo links (${projects.length} projects)
// Auto-generated from database - DO NOT EDIT MANUALLY
const mockProjects: Project[] = [
${projects.map(p => `  {
    id: "${p.id}",
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    longDescription: ${JSON.stringify(p.long_description || '')},
    tags: ${JSON.stringify(p.tags || [])},
    type: ${JSON.stringify(p.type || 'Website')},
    image: ${JSON.stringify(p.image || '')},
    images: ${JSON.stringify(p.images || [])},
    link: ${JSON.stringify(p.link || '')},
    github: ${JSON.stringify(p.github || '')},
    featured: ${p.featured || false},
  }`).join(',\n')}
];`;

    // Read current projects.ts file
    const projectsFilePath = join(process.cwd(), 'src/lib/projects.ts');
    let fileContent = readFileSync(projectsFilePath, 'utf-8');

    // Find and replace mockProjects array
    const mockProjectsRegex = /\/\/ Mock projects data for fallback[\s\S]*?const mockProjects: Project\[\] = \[[\s\S]*?\];/;
    
    if (!mockProjectsRegex.test(fileContent)) {
      console.error('❌ Could not find mockProjects array in projects.ts');
      process.exit(1);
    }

    fileContent = fileContent.replace(mockProjectsRegex, mockDataCode);

    // Write back to file
    writeFileSync(projectsFilePath, fileContent, 'utf-8');

    console.log('✅ Mock data generated successfully!');
    console.log(`📄 Updated: src/lib/projects.ts`);
    console.log(`📊 Total mock projects: ${projects.length}`);
    
    // Show featured projects
    const featured = projects.filter(p => p.featured);
    console.log(`⭐ Featured: ${featured.length}`);
    
    console.log('\n🎉 Done!');

  } catch (error) {
    console.error('\n❌ Error generating mock data:', error);
    process.exit(1);
  }
}

generateMockData();
