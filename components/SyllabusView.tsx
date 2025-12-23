
import React from 'react';
import { ProgressState, SyllabusItem } from '../types';
import { SYLLABUS } from '../constants';

interface SyllabusViewProps {
  progress: ProgressState;
  updateProgress: (id: string, val: number) => void;
}

const SyllabusView: React.FC<SyllabusViewProps> = ({ progress, updateProgress }) => {
  return (
    <div className="space-y-6 pb-20 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Syllabus Tracker</h2>
          <p className="text-slate-500 font-medium">Mark your completion as you master each unit.</p>
        </div>
        <div className="bg-indigo-600 text-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-lg">
          <i className="fa-solid fa-award text-2xl"></i>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">Completion</p>
            <p className="text-lg font-bold">
              {/* Fix: Explicitly cast Object.values(progress) to number[] to resolve arithmetic type error */}
              {Math.round((Object.values(progress) as number[]).reduce((a: number, b: number) => a + b, 0) / SYLLABUS.length)}% Finished
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SYLLABUS.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">{item.unit}</span>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-900">{item.title}</h3>
                <p className="text-xs text-slate-400 font-medium">Weightage: {item.weightage} Questions</p>
              </div>
              <div className="bg-indigo-50 px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                {progress[item.id] || 0}% Done
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-1000"
                  style={{ width: `${progress[item.id] || 0}%` }}
                ></div>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.topics.map((topic, idx) => (
                  <span key={idx} className="px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-500 rounded border border-slate-100">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress[item.id] || 0}
                  onChange={(e) => updateProgress(item.id, parseInt(e.target.value))}
                  className="flex-1 accent-indigo-600"
                />
                <span className="text-xs font-black text-slate-600 w-8">{progress[item.id] || 0}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusView;
