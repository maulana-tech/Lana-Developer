import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
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

// Map of project titles/keywords to their demo links
const projectLinks: Record<string, string> = {
  'Nutrition AI App': 'https://nutrition-ai-app-six.vercel.app',
  'Web Template Collection': 'https://web-template-kappa.vercel.app',
  'Portal Lomba': 'https://portal-lomba-utdi.vercel.app',
  'Maulana Linktree': 'https://maulana-linktree.vercel.app',
  'Maulana Developer': 'https://maulana-developer.vercel.app',
  'ForYou Tech': 'https://foryou-tech.vercel.app',
  'Desa Web': 'https://desa-wotawati.vercel.app',
  'Valentine Maze Game': 'https://maze-valentine-delta.vercel.app',
  'Social Web Platform': 'https://social-web-lake.vercel.app',
  'Flower Main': 'https://flower-main-iota.vercel.app',
  'Birthday Card Project': 'https://birthday-card-self.vercel.app',
  "Valentine's Day Project": 'https://valentine-mu-pearl.vercel.app',
  'Love Website': 'https://love-1-pi.vercel.app',
  'Flappy Bird Game': 'https://flappy1.vercel.app',
  'Birthday Gift Website': 'https://birthday-gf.vercel.app',
  'Web Project PWC': 'https://web-project-pwc.vercel.app',
  'Coffee Website': 'https://coffee-01.vercel.app',
  'MyNetflix Clone': 'https://my-netflix-clone-fawn.vercel.app',
};

async function updateProjectLinks() {
  console.log('🔗 Starting project links update...\n');

  let successCount = 0;
  let notFoundCount = 0;

  for (const [projectTitle, demoLink] of Object.entries(projectLinks)) {
    try {
      // Find project by title
      const { data: projects, error: searchError } = await supabase
        .from('projects')
        .select('id, title, link')
        .ilike('title', `%${projectTitle}%`)
        .limit(1);

      if (searchError) {
        console.error(`❌ Error searching for "${projectTitle}":`, searchError.message);
        continue;
      }

      if (!projects || projects.length === 0) {
        console.log(`⚠️  Project not found: "${projectTitle}"`);
        notFoundCount++;
        continue;
      }

      const project = projects[0];
      
      // Update link if different or empty
      if (project.link !== demoLink) {
        const { error: updateError } = await supabase
          .from('projects')
          .update({ link: demoLink })
          .eq('id', project.id);

        if (updateError) {
          console.error(`❌ Error updating "${projectTitle}":`, updateError.message);
          continue;
        }

        console.log(`✅ Updated: "${project.title}"`);
        console.log(`   Link: ${demoLink}`);
        successCount++;
      } else {
        console.log(`⏭️  Skipped: "${project.title}" (link already set)`);
      }
    } catch (error) {
      console.error(`❌ Error processing "${projectTitle}":`, error);
    }
  }

  console.log('\n📊 Update Summary:');
  console.log(`   ✅ Successfully updated: ${successCount} projects`);
  console.log(`   ⚠️  Not found: ${notFoundCount} projects`);
  console.log(`   📝 Total processed: ${Object.keys(projectLinks).length} projects`);

  // Verify updates
  console.log('\n🔍 Verifying updates...');
  const { data: projectsWithLinks, error } = await supabase
    .from('projects')
    .select('title, link')
    .neq('link', '')
    .order('title');

  if (!error && projectsWithLinks) {
    console.log(`\n✅ Total projects with demo links: ${projectsWithLinks.length}`);
    console.log('\nProjects with links:');
    projectsWithLinks.forEach((p, i) => {
      console.log(`   ${i + 1}. ${p.title}`);
      console.log(`      ${p.link}`);
    });
  }

  console.log('\n🎉 Link update completed!');
}

updateProjectLinks();
