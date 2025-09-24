import { supabase, TABLES, DatabaseCertificate } from '../supabase';
import { Certificate } from '@/data/certificates';

// Convert database certificate to app certificate format
export function convertDatabaseCertificate(dbCert: DatabaseCertificate): Certificate {
  return {
    title: dbCert.title,
    issuer: dbCert.issuer,
    date: dbCert.date,
    image: dbCert.image || '',
    description: dbCert.description || '',
    link: dbCert.link || '',
  };
}

// Get all certificates from database
export async function getAllCertificatesFromDB(): Promise<Certificate[]> {
  try {
    const { data, error } = await supabase
      .from(TABLES.CERTIFICATES)
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching certificates:', error);
      return [];
    }

    return data?.map(convertDatabaseCertificate) || [];
  } catch (error) {
    console.error('Error in getAllCertificatesFromDB:', error);
    return [];
  }
}

// Add a new certificate
export async function addCertificate(certificate: Omit<Certificate, 'id'>): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from(TABLES.CERTIFICATES)
      .insert([{
        title: certificate.title,
        issuer: certificate.issuer,
        date: certificate.date,
        image: certificate.image,
        description: certificate.description,
        link: certificate.link,
      }]);

    if (error) {
      console.error('Error adding certificate:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in addCertificate:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Update a certificate
export async function updateCertificate(id: string, certificate: Partial<Certificate>): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from(TABLES.CERTIFICATES)
      .update({
        ...(certificate.title && { title: certificate.title }),
        ...(certificate.issuer && { issuer: certificate.issuer }),
        ...(certificate.date && { date: certificate.date }),
        ...(certificate.image !== undefined && { image: certificate.image }),
        ...(certificate.description !== undefined && { description: certificate.description }),
        ...(certificate.link !== undefined && { link: certificate.link }),
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating certificate:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updateCertificate:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Delete a certificate
export async function deleteCertificate(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from(TABLES.CERTIFICATES)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting certificate:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteCertificate:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Get a single certificate by ID
export async function getCertificateById(id: string): Promise<Certificate | null> {
  try {
    const { data, error } = await supabase
      .from(TABLES.CERTIFICATES)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching certificate by ID:', error);
      return null;
    }

    return data ? convertDatabaseCertificate(data) : null;
  } catch (error) {
    console.error('Error in getCertificateById:', error);
    return null;
  }
}