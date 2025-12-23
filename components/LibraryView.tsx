
import React, { useState, useRef } from 'react';
import { LOCAL_PATHS } from '../constants';

const LibraryView: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const closeViewer = () => {
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(null);
    setSelectedFile(null);
  };

  const formatPathForHref = (path: string) => {
    // Replace backslashes with forward slashes
    const normalized = path.replace(/\\/g, '/');
    // encodeURI handles spaces (converting to %20) while keeping / and :
    return `file:///${encodeURI(normalized)}/`;
  };

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  if (fileUrl) {
    return (
      <div className="flex flex-col h-[calc(100vh-6rem)] animate-in fade-in duration-300">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-4">
            <button 
              onClick={closeViewer}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <i className="fa-solid fa-arrow-left text-slate-600"></i>
            </button>
            <div>
              <h3 className="font-bold text-slate-800 line-clamp-1">{selectedFile?.name}</h3>
              <p className="text-xs text-slate-500">PDF Reader Mode</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded uppercase">Reading Now</span>
          </div>
        </div>
        <div className="flex-1 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-slate-200">
          <embed
            src={fileUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded-2xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800">My Study Library</h2>
          <p className="text-slate-500 font-medium max-w-2xl">
            Access your local study materials. Open folders in browser tabs (requires permission) or select PDFs to read here.
          </p>
        </div>
        <input 
          type="file" 
          accept="application/pdf" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:-translate-y-1 active:scale-95"
        >
          <i className="fa-solid fa-file-circle-plus text-xl"></i>
          Pick a PDF to Read
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LOCAL_PATHS.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:border-indigo-300 transition-all flex flex-col">
            <div className="p-8 flex-1">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-folder-open text-2xl text-indigo-500"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.name}</h3>
              <div className="relative group/path">
                <p className="text-xs text-slate-400 mb-6 font-mono break-all bg-slate-50 p-3 rounded-lg border border-slate-100 pr-10">
                  {item.path}
                </p>
                <button 
                  onClick={() => handleCopyPath(item.path)}
                  className="absolute right-2 top-2 p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                  title="Copy path"
                >
                  <i className={`fa-solid ${copiedPath === item.path ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
                </button>
              </div>
              
              <div className="flex flex-col gap-3">
                <a
                  href={formatPathForHref(item.path)}
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 rounded-2xl font-bold text-xs bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Open Folder in Browser
                </a>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="py-4 rounded-2xl font-bold text-xs bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  Select Specific PDF
                </button>
              </div>
            </div>
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-indigo-300"></i>
                Local Access Required
              </span>
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
               <i className="fa-solid fa-circle-info text-indigo-300"></i>
               Troubleshooting
            </h3>
            <ul className="space-y-4 text-indigo-100 text-sm">
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-circle-check text-indigo-400 mt-1"></i>
                <span><b>Folder not opening?</b> Browsers block <code>file://</code> links for security. If clicking doesn't work, use the <b>Copy Icon</b> next to the path and paste it into your address bar manually.</span>
              </li>
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-circle-check text-indigo-400 mt-1"></i>
                <span><b>Best Practice:</b> Use the <b>Pick a PDF</b> button. It loads your local files into the dashboard's built-in reader instantly without security restrictions.</span>
              </li>
            </ul>
          </div>
          <i className="fa-solid fa-book-open-reader absolute -right-4 -bottom-4 text-white/5 text-9xl group-hover:scale-110 transition-transform duration-700"></i>
        </div>
      </div>
    </div>
  );
};

export default LibraryView;
