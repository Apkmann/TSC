
export interface StudyLink {
  id: string;
  name: string;
  url: string;
  category: 'Preparation' | 'Search' | 'Official' | 'AI';
  icon: string;
}

export interface SyllabusItem {
  id: string;
  unit: string;
  title: string;
  weightage: number;
  topics: string[];
}

export interface LocalPath {
  id: string;
  name: string;
  path: string;
}

export type ViewType = 'dashboard' | 'syllabus' | 'links' | 'library' | 'assistant';

export interface ProgressState {
  [key: string]: number; // id: percentage
}
