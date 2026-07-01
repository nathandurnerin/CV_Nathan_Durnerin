export interface ProjectLink {
  name: string;
  url: string;
}

export interface ProjectContentSection {
  title?: string;
  body?: string[];
  list?: string[];
  gallery?: string[];
  items?: {
    name: string;
    image?: string;
    description: string;
  }[];
  next?: string[];
  
}

export interface ProjectContent {
  intro?: ProjectContentSection;
  highlights?: ProjectContentSection;
  gallery?: ProjectContentSection;
  context?: ProjectContentSection;
  problem?: ProjectContentSection;
  approach?: ProjectContentSection;
  role?: ProjectContentSection;
  outcome?: ProjectContentSection;
  learnings?: ProjectContentSection;
  research?: ProjectContentSection;
  goals?: ProjectContentSection;
  process?: ProjectContentSection;
}

export interface Project {
  name: string;
  slug: string;
  title: string;
  type: string;
  stack: string[];
  description: string;
  image: string;

  links?: ProjectLink;

  content?: ProjectContent;
}

export interface Filter {
  id: string;
  label: string;
  title: string;
  description: string;
  projects: Project[];
}