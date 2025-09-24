// Migration script to move static data to Supabase
// Run this script to migrate your existing certificates and projects data to Supabase database
// Usage: npx tsx src/scripts/migrate-to-supabase.ts

import { createClient } from '@supabase/supabase-js';
import { certificates } from '../data/certificates';
import { projects } from '../data/projects';

// Make sure to set your environment variables before running this script
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role key for admin operations

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateCertificates() {
  console.log('🔄 Starting certificates migration...');
  
  try {
    // Clear existing data (optional - remove this if you want to keep existing data)
    console.log('🧹 Clearing existing certificates...');
    const { error: deleteError } = await supabase
      .from('certificates')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records

    if (deleteError) {
      console.warn('Warning clearing certificates:', deleteError.message);
    }

    // Insert new data
    console.log(`📥 Inserting ${certificates.length} certificates...`);
    const { data, error } = await supabase
      .from('certificates')
      .insert(
        certificates.map(cert => ({
          title: cert.title,
          issuer: cert.issuer,
          date: cert.date,
          image: cert.image,
          description: cert.description,
          link: cert.link,
        }))
      );

    if (error) {
      console.error('❌ Error inserting certificates:', error);
      return false;
    }

    console.log('✅ Certificates migrated successfully!');
    return true;
  } catch (error) {
    console.error('❌ Error in migrateCertificates:', error);
    return false;
  }
}

async function migrateProjects() {
  console.log('🔄 Starting projects migration...');
  
  try {
    // Clear existing data (optional - remove this if you want to keep existing data)
    console.log('🧹 Clearing existing projects...');
    const { error: deleteError } = await supabase
      .from('projects')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records

    if (deleteError) {
      console.warn('Warning clearing projects:', deleteError.message);
    }

    // Insert new data in batches (Supabase has limits on insert size)
    const batchSize = 10;
    let successCount = 0;

    for (let i = 0; i < projects.length; i += batchSize) {
      const batch = projects.slice(i, i + batchSize);
      console.log(`📥 Inserting projects batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(projects.length / batchSize)}...`);
      
      const { error } = await supabase
        .from('projects')
        .insert(
          batch.map(project => ({
            title: project.title,
            description: project.description,
            long_description: project.longDescription || project.description,
            tags: project.tags || [],
            type: project.type || 'Website',
            image: project.image || '',
            images: project.images || [],
            link: project.link || '',
            github: project.github || '',
            featured: project.featured || false,
          }))
        );

      if (error) {
        console.error(`❌ Error inserting projects batch ${Math.floor(i / batchSize) + 1}:`, error);
        continue;
      }

      successCount += batch.length;
    }

    console.log(`✅ Projects migrated successfully! (${successCount}/${projects.length})`);
    return successCount === projects.length;
  } catch (error) {
    console.error('❌ Error in migrateProjects:', error);
    return false;
  }
}

async function testConnection() {
  console.log('🔄 Testing Supabase connection...');
  
  try {
    const { data, error } = await supabase.from('certificates').select('count', { count: 'exact' });
    
    if (error) {
      console.error('❌ Connection test failed:', error);
      return false;
    }

    console.log('✅ Supabase connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Connection test error:', error);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting Supabase Migration');
  console.log('================================');

  // Test connection first
  const connectionOk = await testConnection();
  if (!connectionOk) {
    console.log('❌ Migration aborted due to connection issues.');
    process.exit(1);
  }

  // Run migrations
  console.log('\\n📊 Migration Summary:');
  console.log(`- Certificates to migrate: ${certificates.length}`);
  console.log(`- Projects to migrate: ${projects.length}`);
  console.log('\\n⚠️  This will replace existing data in your database!');

  // Ask for confirmation (in a real environment, you might want to add a prompt here)
  console.log('\\n🔄 Proceeding with migration...');

  const certSuccess = await migrateCertificates();
  console.log(''); // Empty line for spacing
  
  const projectSuccess = await migrateProjects();
  console.log(''); // Empty line for spacing

  // Final summary
  console.log('📋 Migration Summary:');
  console.log('====================');
  console.log(`Certificates: ${certSuccess ? '✅ Success' : '❌ Failed'}`);
  console.log(`Projects: ${projectSuccess ? '✅ Success' : '❌ Failed'}`);
  
  if (certSuccess && projectSuccess) {
    console.log('\\n🎉 All migrations completed successfully!');
    console.log('💡 You can now update your components to use the database functions.');
  } else {
    console.log('\\n⚠️  Some migrations failed. Please check the errors above and try again.');
  }
}

// Run the migration
main().catch(console.error);