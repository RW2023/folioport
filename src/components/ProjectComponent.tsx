// components/ProjectComponent.js
import Image from 'next/image';
import SubHeading from '@/components/ui/SubHeading'; 

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
        
        <div className="project-card">
            <SubHeading title={project.title} iconClass="fas fa-project-diagram" />{' '}
            {/* Choose an icon that suits your project */}
            <Image
                src={project.image_url}
                alt={project.title}
                width={500}
                height={300}
            />
            <p>{project.description}</p>
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                Live Version
            </a>
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        </div>
    );
};

export default ProjectComponent;
