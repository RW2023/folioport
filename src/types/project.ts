// types/project.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  live_url: string;
  github_url: string;
}

// This interface is for the props of the SubHeading component
export interface SubHeadingProps {
  title: string;
  iconClass: string;
}
