export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  imageClass: string;
  colorClass: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  field: string;
  period: string;
  description: string;
  position: 'left' | 'right';
}

export interface Skill {
  name: string;
  icon?: string;
  iconClass?: string;
  image?: string;
  color?: string;
}

export interface JSProject {
  title: string;
  link: string;
  description: string;
  icon: string;
}

export interface MarqueeProject {
  title: string;
  link: string;
  image: string;
}
