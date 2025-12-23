
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems: { id: ViewType; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-pie' },
    { id: 'syllabus', label: 'Syllabus', icon: 'fa-solid fa-list-check' },
    { id: 'links', label: 'Study Links', icon: 'fa-solid fa-link' },
    { id: 'library', label: 'My Library', icon: 'fa-solid fa-folder-open' },
    { id: 'assistant', label: 'AI Assistant', icon: 'fa-solid fa-microchip' },
  ];

  return (
    <aside className="w-20 md:w-64 bg-indigo-900 text-white flex flex-col shrink-0">
      <div className="p-6 text-center border-b border-indigo-800">
        <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-2">
          <i className="fa-solid fa-graduation-cap text-2xl md:text-3xl text-indigo-300"></i>
        </div>
        <h1 className="hidden md:block font-bold text-xl tracking-tight">TNPSC Group IV</h1>
        <p className="hidden md:block text-xs text-indigo-300 font-medium">Study Hub 2026</p>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeView === item.id
                ? 'bg-white text-indigo-900 shadow-lg'
                : 'text-indigo-100 hover:bg-white/10'
            }`}
          >
            <i className={`${item.icon} text-lg shrink-0`}></i>
            <span className="hidden md:block font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-indigo-800 text-center text-[10px] text-indigo-400">
        <p className="hidden md:block">Developed for Aswath</p>
        <p className="hidden md:block">© 2024 Study Tracker</p>
      </div>
    </aside>
  );
};

export default Sidebar;
