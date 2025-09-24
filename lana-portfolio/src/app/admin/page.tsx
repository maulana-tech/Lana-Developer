'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Certificate } from '@/types/certificates';
import { Project } from '@/lib/projects';
import {
  getAllCertificatesFromDB,
  addCertificate,
  updateCertificate,
  deleteCertificate,
} from '@/lib/database/certificates';
import {
  getAllProjectsFromDB,
  addProject,
  updateProject,
  deleteProject,
} from '@/lib/database/projects';
import { IconPlus, IconEdit, IconTrash, IconX, IconDeviceFloppy } from '@tabler/icons-react';

interface CertificateWithId extends Certificate {
  id: string;
}

export default function AdminPage() {
  const [certificates, setCertificates] = useState<CertificateWithId[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingCert, setEditingCert] = useState<CertificateWithId | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showAddCert, setShowAddCert] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [certsData, projectsData] = await Promise.all([
        getAllCertificatesFromDB(),
        getAllProjectsFromDB(),
      ]);
      
      // Add IDs to certificates (since database should have them)
      const certsWithIds = certsData.map((cert, index) => ({
        ...cert,
        id: `cert-${index}`, // This should be actual database ID in real implementation
      }));
      
      setCertificates(certsWithIds);
      setProjects(projectsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Certificate handlers
  const handleAddCertificate = async (cert: Omit<Certificate, 'id'>) => {
    const result = await addCertificate(cert);
    if (result.success) {
      loadData(); // Reload data
      setShowAddCert(false);
    } else {
      alert('Error adding certificate: ' + result.error);
    }
  };

  const handleUpdateCertificate = async (id: string, cert: Partial<Certificate>) => {
    const result = await updateCertificate(id, cert);
    if (result.success) {
      loadData(); // Reload data
      setEditingCert(null);
    } else {
      alert('Error updating certificate: ' + result.error);
    }
  };

  const handleDeleteCertificate = async (id: string) => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      const result = await deleteCertificate(id);
      if (result.success) {
        loadData(); // Reload data
      } else {
        alert('Error deleting certificate: ' + result.error);
      }
    }
  };

  // Project handlers
  const handleAddProject = async (project: Omit<Project, 'id'>) => {
    const result = await addProject(project);
    if (result.success) {
      loadData(); // Reload data
      setShowAddProject(false);
    } else {
      alert('Error adding project: ' + result.error);
    }
  };

  const handleUpdateProject = async (id: string, project: Partial<Project>) => {
    const result = await updateProject(id, project);
    if (result.success) {
      loadData(); // Reload data
      setEditingProject(null);
    } else {
      alert('Error updating project: ' + result.error);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const result = await deleteProject(id);
      if (result.success) {
        loadData(); // Reload data
      } else {
        alert('Error deleting project: ' + result.error);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
        <p className="text-muted-foreground">Manage your certificates and projects</p>
      </div>

      <Tabs defaultValue="certificates" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="certificates" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Certificates ({certificates.length})</h2>
            <Button onClick={() => setShowAddCert(true)}>
              <IconPlus className="w-4 h-4 mr-2" />
              Add Certificate
            </Button>
          </div>

          {showAddCert && (
            <CertificateForm
              onSubmit={handleAddCertificate}
              onCancel={() => setShowAddCert(false)}
            />
          )}

          <div className="grid gap-4">
            {certificates.map((cert) => (
              <Card key={cert.id}>
                <CardContent className="pt-6">
                  {editingCert?.id === cert.id ? (
                    <CertificateForm
                      certificate={cert}
                      onSubmit={(data) => handleUpdateCertificate(cert.id, data)}
                      onCancel={() => setEditingCert(null)}
                    />
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                        <p className="text-sm mt-2">{cert.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingCert(cert)}
                        >
                          <IconEdit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteCertificate(cert.id)}
                        >
                          <IconTrash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Projects ({projects.length})</h2>
            <Button onClick={() => setShowAddProject(true)}>
              <IconPlus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>

          {showAddProject && (
            <ProjectForm
              onSubmit={handleAddProject}
              onCancel={() => setShowAddProject(false)}
            />
          )}

          <div className="grid gap-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent className="pt-6">
                  {editingProject?.id === project.id ? (
                    <ProjectForm
                      project={project}
                      onSubmit={(data) => handleUpdateProject(project.id, data)}
                      onCancel={() => setEditingProject(null)}
                    />
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.type} {project.featured && '• Featured'}</p>
                        <p className="text-sm mt-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-sm text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingProject(project)}
                        >
                          <IconEdit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <IconTrash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Certificate Form Component
function CertificateForm({
  certificate,
  onSubmit,
  onCancel,
}: {
  certificate?: CertificateWithId;
  onSubmit: (data: Omit<Certificate, 'id'>) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: certificate?.title || '',
    issuer: certificate?.issuer || '',
    date: certificate?.date || '',
    image: certificate?.image || '',
    description: certificate?.description || '',
    link: certificate?.link || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{certificate ? 'Edit Certificate' : 'Add New Certificate'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="issuer">Issuer</Label>
            <Input
              id="issuer"
              value={formData.issuer}
              onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="link">Link</Label>
            <Input
              id="link"
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            />
          </div>
          <div className="flex space-x-2">
            <Button type="submit">
              <IconDeviceFloppy className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              <IconX className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// Project Form Component
function ProjectForm({
  project,
  onSubmit,
  onCancel,
}: {
  project?: Project;
  onSubmit: (data: Omit<Project, 'id'>) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    longDescription: project?.longDescription || '',
    tags: project?.tags?.join(', ') || '',
    type: project?.type || 'Website',
    image: project?.image || '',
    images: project?.images?.join(', ') || '',
    link: project?.link || '',
    github: project?.github || '',
    featured: project?.featured || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      images: formData.images.split(',').map(img => img.trim()).filter(Boolean),
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project ? 'Edit Project' : 'Add New Project'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Short Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              required
            />
          </div>
          <div>
            <Label htmlFor="longDescription">Long Description</Label>
            <Textarea
              id="longDescription"
              value={formData.longDescription}
              onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="React, Next.js, TypeScript"
            />
          </div>
          <div>
            <Label htmlFor="type">Type</Label>
            <Input
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="image">Main Image URL</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="images">Additional Images (comma separated URLs)</Label>
            <Input
              id="images"
              value={formData.images}
              onChange={(e) => setFormData({ ...formData, images: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="link">Live Link</Label>
            <Input
              id="link"
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="github">GitHub Link</Label>
            <Input
              id="github"
              type="url"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            />
            <Label htmlFor="featured">Featured Project</Label>
          </div>
          <div className="flex space-x-2">
            <Button type="submit">
              <IconDeviceFloppy className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              <IconX className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}