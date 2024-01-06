// src/components/ProjectComponent.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubHeading from '@/components/ui/SubHeading';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';

interface ProjectComponentProps {
  project: Project;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ project }) => {
  return (
    <motion.div
      className="card card-compact items-center border border-1rounded-lg bg-base-100 shadow-xl mx-5 my-4 flex flex-col font-sans"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-title text-2xl font-semibold p-5 ">
        <SubHeading title={project.title} iconClass="fas fa-project-diagram" />
      </div>
      <div className="card-body mx-auto  border-1 drop-shadow-lg border border-1">
        <div className="card rounded-lg overflow-hidden">
          <Link href={`/projects/${project.id}`}>
            {' '}
            <Image
              src={project.image_url}
              alt={project.title}
              width={500}
              height={300}
              className="hover:scale-105 transition-transform duration-300 ease-in-out rounded"
            />
          </Link>
        </div>
        <div className="border border-1 p-2 rounded bg-base-300 drop-shadow-md glass prose">
          <p className="text-lg">{project.description}</p>
          <a href={project.live_url} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              aria-label="live version"
              className="btn btn-primary m-1 hover:bg-blue-700"
            >
              Live Version
            </button>
          </a>
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              aria-label="github"
              className="btn btn-secondary m-1 hover:bg-gray-700"
            >
              GitHub
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
