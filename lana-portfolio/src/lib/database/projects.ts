import { supabase, TABLES, DatabaseProject } from '../supabase';
import { Project } from '@/lib/projects';

// Convert database project to app project format
export function convertDatabaseProject(dbProject: DatabaseProject): Project {
  return {
    id: dbProject.id,
    title: dbProject.title,
    description: dbProject.description,
    longDescription: dbProject.long_description || '',
    tags: dbProject.tags || [],
    type: dbProject.type || 'Website',
    image: dbProject.image || '',
    images: dbProject.images || [],
    link: dbProject.link || '',
    github: dbProject.github || '',
    featured: dbProject.featured || false,
  };
}

// Get all projects from database
export async function getAllProjectsFromDB(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }

    return data?.map(convertDatabaseProject) || [];
  } catch (error) {
    console.error('Error in getAllProjectsFromDB:', error);
    return [];
  }
}

// Get featured projects from database
export async function getFeaturedProjectsFromDB(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }

    return data?.map(convertDatabaseProject) || [];
  } catch (error) {
    console.error('Error in getFeaturedProjectsFromDB:', error);
    return [];
  }
}

// Get project by ID from database
export async function getProjectByIdFromDB(id: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching project by ID:', error);
      return null;
    }

    return data ? convertDatabaseProject(data) : null;
  } catch (error) {
    console.error('Error in getProjectByIdFromDB:', error);
    return null;
  }
}

// Get projects by tag from database
export async function getProjectsByTagFromDB(tag: string): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .select('*')
      .contains('tags', [tag])
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects by tag:', error);
      return [];
    }

    return data?.map(convertDatabaseProject) || [];
  } catch (error) {
    console.error('Error in getProjectsByTagFromDB:', error);
    return [];
  }
}

// Get projects by type from database
export async function getProjectsByTypeFromDB(type: string): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .select('*')
      .eq('type', type)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects by type:', error);
      return [];
    }

    return data?.map(convertDatabaseProject) || [];
  } catch (error) {
    console.error('Error in getProjectsByTypeFromDB:', error);
    return [];
  }
}

// Get unique project types from database
export async function getProjectTypesFromDB(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .select('type')
      .order('type');

    if (error) {
      console.error('Error fetching project types:', error);
      return [];
    }

    const types = [...new Set(data?.map(item => item.type).filter(Boolean))];
    return types.sort();
  } catch (error) {
    console.error('Error in getProjectTypesFromDB:', error);
    return [];
  }
}

// Add a new project
export async function addProject(project: Omit<Project, 'id'>): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROJECTS)
      .insert([{
        title: project.title,
        description: project.description,
        long_description: project.longDescription,
        tags: project.tags,
        type: project.type,
        image: project.image,
        images: project.images,
        link: project.link,
        github: project.github,
        featured: project.featured,
      }])
      .select()
      .single();

    if (error) {
      console.error('Error adding project:', error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (error) {
    console.error('Error in addProject:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Update a project
export async function updateProject(id: string, project: Partial<Project>): Promise<{ success: boolean; error?: string }> {
  try {
    const updateData: any = {};
    
    if (project.title !== undefined) updateData.title = project.title;
    if (project.description !== undefined) updateData.description = project.description;
    if (project.longDescription !== undefined) updateData.long_description = project.longDescription;
    if (project.tags !== undefined) updateData.tags = project.tags;
    if (project.type !== undefined) updateData.type = project.type;
    if (project.image !== undefined) updateData.image = project.image;
    if (project.images !== undefined) updateData.images = project.images;
    if (project.link !== undefined) updateData.link = project.link;
    if (project.github !== undefined) updateData.github = project.github;
    if (project.featured !== undefined) updateData.featured = project.featured;

    const { error } = await supabase
      .from(TABLES.PROJECTS)
      .update(updateData)
      .eq('id', id);

    if (error) {
      console.error('Error updating project:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updateProject:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Delete a project
export async function deleteProject(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from(TABLES.PROJECTS)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting project:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteProject:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}