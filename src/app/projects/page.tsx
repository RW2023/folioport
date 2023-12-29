'use client';
// pages/projects.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient'; // Update the path to your Supabase client
import ProjectComponent from '@/components/ProjectComponent'; // Update the path to your ProjectComponent
import { Project } from '@/types/project'; // Update the path to your types if necessary

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data: projects, error } = await supabase
                .from('projects')
                .select('*');

            if (!error && projects) {
                setProjects(projects as Project[]);
            } else {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className='min-h-screen'>
            {projects.map((project) => (
                <ProjectComponent key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsPage;
