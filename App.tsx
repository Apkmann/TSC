
import React, { useState, useEffect } from 'react';
import { ViewType, ProgressState } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SyllabusView from './components/SyllabusView';
import LinksView from './components/LinksView';
import LibraryView from './components/LibraryView';
import AssistantView from './components/AssistantView';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('tnpsc_progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('tnpsc_progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (id: string, val: number) => {
    setProgress(prev => ({ ...prev, [id]: val }));
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard progress={progress} setView={setActiveView} />;
      case 'syllabus':
        return <SyllabusView progress={progress} updateProgress={updateProgress} />;
      case 'links':
        return <LinksView />;
      case 'library':
        return <LibraryView />;
      case 'assistant':
        return <AssistantView />;
      default:
        return <Dashboard progress={progress} setView={setActiveView} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto h-full">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
