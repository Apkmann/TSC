
import React, { useState } from 'react';
import { STUDY_LINKS } from '../constants';

const LinksView: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Preparation', 'Official', 'Search', 'AI'];

  const filteredLinks = filter === 'All'
    ? STUDY_LINKS
    : STUDY_LINKS.filter(l => l.category === filter);

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Study Links</h2>
          <p className="text-slate-500 font-medium">Fast lanes to your preparation material.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
              <i className={`fa-solid ${link.icon} text-2xl text-slate-400 group-hover:text-indigo-600 transition-colors`}></i>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{link.name}</h4>
            <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest mb-4">{link.category}</span>
            <div className="mt-auto w-full py-2 bg-slate-50 rounded-lg text-indigo-600 text-xs font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              Visit Resource
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksView;
