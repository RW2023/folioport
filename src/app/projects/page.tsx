// pages/projects.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import ProjectComponent from '@/components/ProjectComponent';
import { Project } from '@/types/project';
import LoadingComponent from '@/components/ui/Loading';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const { data: projects, error } = await supabase
        .from('projects')
        .select('*');

      if (error) {
        console.error('Error fetching projects:', error);
      } else if (projects) {
        setProjects(projects);
      }
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
