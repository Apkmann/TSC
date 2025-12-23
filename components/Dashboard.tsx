
import React, { useState, useEffect } from 'react';
import { ProgressState, ViewType } from '../types';
import { EXAM_DATE, SYLLABUS, STUDY_LINKS } from '../constants';

interface DashboardProps {
  progress: ProgressState;
  setView: (view: ViewType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ progress, setView }) => {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number }>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(EXAM_DATE).getTime() - now;
      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fix: Explicitly cast Object.values(progress) to number[] to resolve arithmetic type error
  const totalProgress = Object.values(progress).length > 0
    ? Math.round((Object.values(progress) as number[]).reduce((a: number, b: number) => a + b, 0) / SYLLABUS.length)
    : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header & Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome back, Aspirant!</h2>
          <p className="text-slate-500">Target Exam: <span className="font-semibold text-indigo-600">December 20, 2026</span></p>
        </div>
        <div className="flex gap-2">
          {['d', 'h', 'm', 's'].map((unit) => (
            <div key={unit} className="flex flex-col items-center justify-center bg-indigo-50 w-16 h-16 rounded-xl border border-indigo-100">
              <span className="text-xl font-bold text-indigo-900">{(timeLeft as any)[unit]}</span>
              <span className="text-[10px] uppercase font-bold text-indigo-400">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-1">Overall Progress</h3>
            <p className="text-sm text-slate-500">How close are you to being exam-ready?</p>
          </div>
          <div className="mt-6 flex flex-col items-center">
             <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={364} strokeDashoffset={364 - (364 * totalProgress) / 100} className="text-indigo-600 transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-black text-slate-800">{totalProgress}%</span>
                </div>
             </div>
             <button onClick={() => setView('syllabus')} className="mt-6 w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors">
               Detailed Breakdown
             </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <h3 className="text-lg font-bold text-slate-700 mb-4">Quick Study Tools</h3>
          <div className="grid grid-cols-2 gap-3">
            {STUDY_LINKS.filter(l => l.category === 'AI' || l.id === '1' || l.id === '2').map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 border border-transparent transition-all group text-center">
                <i className={`${link.icon} text-indigo-500 mb-2 block text-xl group-hover:scale-110 transition-transform`}></i>
                <span className="text-[10px] font-bold text-slate-700 uppercase">{link.name}</span>
              </a>
            ))}
          </div>
          <button onClick={() => setView('links')} className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
            View all links →
          </button>
        </div>

        {/* Study Tip Card */}
        <div className="bg-indigo-900 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden group">
           <div className="relative z-10">
              <i className="fa-solid fa-lightbulb text-indigo-300 text-2xl mb-4 group-hover:rotate-12 transition-transform"></i>
              <h3 className="text-lg font-bold mb-2">Today's Focus: Unit IV</h3>
              <p className="text-sm text-indigo-200 leading-relaxed mb-4">
                "Unit IV: Indian Polity carries high weightage (15 Qs). Focus on Fundamental Rights and Directive Principles today."
              </p>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <p className="text-xs font-medium text-indigo-300 mb-1">Upcoming Milestone</p>
                <p className="text-sm font-bold">2nd Revision: Jan 2025</p>
              </div>
           </div>
           <i className="fa-solid fa-shield-halved absolute -right-8 -bottom-8 text-white/5 text-9xl"></i>
        </div>
      </div>

      {/* Weightage Grid */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-700 mb-4">Syllabus Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SYLLABUS.slice(0, 4).map(unit => (
            <div key={unit.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400">{unit.unit}</span>
                <span className="text-xs font-bold px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">{unit.weightage} Qs</span>
              </div>
              <h4 className="text-sm font-bold text-slate-700 line-clamp-1">{unit.title}</h4>
              <div className="mt-3 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${progress[unit.id] || 0}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
