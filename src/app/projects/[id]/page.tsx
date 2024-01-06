'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/components/ui/Loading'; 
import Pending from '@/components/ui/Pending'; 

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  // Add other relevant fields
}

interface Params {
  id: string;
}

interface ProjectPageProps {
  params: Params;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${params.id}`);
        setProject(response.data);
      } catch (err) {
        setError('Failed to fetch project details');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [params]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <Pending />;

  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.image_url}
        alt={project.title}
        width={500}
        height={300}
      />
      <p>{project.description}</p>
      {/* Additional project details */}
    </div>
  );
}
