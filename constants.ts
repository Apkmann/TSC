
import { StudyLink, SyllabusItem, LocalPath } from './types';

export const STUDY_LINKS: StudyLink[] = [
  { id: '1', name: 'NotebookLM', url: 'https://notebooklm.google.com', category: 'Preparation', icon: 'fa-solid fa-book-bookmark' },
  { id: '2', name: 'Google Colab (Vector)', url: 'https://colab.research.google.com/drive/1A-lZlqKvEU_zxy-f3OVXI4LqPHkVpFwz#scrollTo=58daca26', category: 'Preparation', icon: 'fa-solid fa-terminal' },
  { id: '3', name: 'YouTube', url: 'https://youtube.com', category: 'Preparation', icon: 'fa-brands fa-youtube' },
  { id: '4', name: 'Google Drive', url: 'https://drive.google.com', category: 'Preparation', icon: 'fa-brands fa-google-drive' },
  { id: '5', name: 'Gemini AI', url: 'https://gemini.google.com', category: 'AI', icon: 'fa-solid fa-bolt' },
  { id: '6', name: 'Brainkart', url: 'https://brainkart.in', category: 'Preparation', icon: 'fa-solid fa-graduation-cap' },
  { id: '7', name: 'Wikipedia', url: 'https://wikipedia.org', category: 'Search', icon: 'fa-brands fa-wikipedia-w' },
  { id: '8', name: 'Grokipedia', url: 'https://grokipedia.com', category: 'Search', icon: 'fa-solid fa-magnifying-glass' },
  { id: '9', name: 'TNPSC OTR', url: 'https://apply.tnpscexams.in', category: 'Official', icon: 'fa-solid fa-id-card' },
  { id: '10', name: 'TNPSC Official', url: 'http://www.tnpsc.gov.in', category: 'Official', icon: 'fa-solid fa-building-columns' },
];

export const SYLLABUS: SyllabusItem[] = [
  {
    id: 'gs-u1',
    unit: 'Unit I',
    title: 'General Science',
    weightage: 5,
    topics: ['Nature of Universe', 'General Scientific Laws', 'Force, Pressure, Energy', 'Mechanics, Electricity, Magnetism', 'Elements, Compounds, Acids', 'Life Science Concepts', 'Human Diseases', 'Environmental Science']
  },
  {
    id: 'gs-u2',
    unit: 'Unit II',
    title: 'Geography',
    weightage: 5,
    topics: ['Earth Location', 'Physical Features', 'Monsoon & Climate', 'Water Resources', 'Soil & Minerals', 'Population Distribution', 'Disaster Management']
  },
  {
    id: 'gs-u3',
    unit: 'Unit III',
    title: 'History & Indian National Movement',
    weightage: 10,
    topics: ['Indus Valley Civilization', 'Guptas, Delhi Sultans, Mughals', 'South Indian History', 'British Rule Uprising', 'Indian National Congress', 'Emergence of Leaders', 'Unity in Diversity']
  },
  {
    id: 'gs-u4',
    unit: 'Unit IV',
    title: 'Indian Polity',
    weightage: 15,
    topics: ['Constitution of India', 'Citizenship, Fundamental Rights', 'Directive Principles', 'Union Executive & Legislature', 'Panchayat Raj', 'Rule of Law', 'Human Rights Charter']
  },
  {
    id: 'gs-u5',
    unit: 'Unit V',
    title: 'Indian Economy & TN Admin',
    weightage: 20,
    topics: ['Nature of Economy', 'Five-Year Plans', 'RBI & Finance Commission', 'GST', 'Economic Trends', 'Education & Health in TN', 'Social Justice']
  },
  {
    id: 'gs-u6',
    unit: 'Unit VI',
    title: 'TN Culture & Heritage',
    weightage: 20,
    topics: ['History of Tamil Society', 'Thirukkural', 'Role of TN in Freedom Struggle', 'Social Reform Movements', 'Social Transformation']
  },
  {
    id: 'aptitude',
    unit: 'Part B',
    title: 'Aptitude & Reasoning',
    weightage: 25,
    topics: ['Simplification', 'Percentage', 'HCF & LCM', 'Ratio & Proportion', 'Simple & Compound Interest', 'Time & Work', 'Reasoning & Puzzles']
  },
  {
    id: 'tamil',
    unit: 'Part C',
    title: 'Tamil Eligibility-cum-Scoring',
    weightage: 100,
    topics: ['Ilakkanam (Grammar)', 'Sollagaradhi (Vocabulary)', 'Literature (Illakiyam)', 'Authors and Contributions']
  }
];

export const LOCAL_PATHS: LocalPath[] = [
  { id: 'lp1', name: 'General Studies PDF Folder', path: 'C:\\Users\\aswath\\Downloads\\GENERAL STUDIES BOOK PDF' },
  { id: 'lp2', name: 'School Books Folder', path: 'C:\\Users\\aswath\\Downloads\\school books' }
];

export const EXAM_DATE = '2026-12-20T00:00:00';
