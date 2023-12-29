// components/ProjectComponent.tsx
import Image from 'next/image';
import Link from 'next/link';
import SubHeading from '@/components/ui/SubHeading';
import { motion } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  live_url: string;
  github_url: string;
}

const ProjectComponent = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="card items-center border rounded-md bg-base-300 mx-5 flex flex-col"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-title p-4">
        <SubHeading title={project.title} iconClass="fas fa-project-diagram" />
      </div>
      <div className="card-body mx-auto border-y glass">
        <div className="card rounded border-1 border-gray-500 drop-shadow-md">
          <Link
            href={`/projects/${project.title
              .toLowerCase()
              .split(' ')
              .join('-')}`}
          >
            
              <Image
                src={project.image_url}
                alt={project.title}
                width={500}
                height={300}
              />
            
          </Link>
        </div>
        <div className="card-text">
          <p>{project.description}</p>
          <a href={project.live_url} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              aria-label="live version"
              className="btn btn-primary m-1"
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
              className="btn btn-secondary m-1"
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
