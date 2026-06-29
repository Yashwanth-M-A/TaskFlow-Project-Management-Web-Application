import { useState } from 'react';
import Modal from '../components/Modal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text">Projects</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700"
        >
          Create Project
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">Website Redesign {i}</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">In Progress</span>
            </div>
            <p className="text-sm text-textMuted mt-2 line-clamp-2">Revamping the entire e-commerce flow and UI to increase conversion rates.</p>
            
            <div className="mt-6">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-textMuted">Progress</span>
                <span className="font-medium text-text">65%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Project">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Project Name</label>
            <input type="text" required className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20" placeholder="e.g. Q3 Marketing Site" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Status</label>
            <select className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20">
              <option>Planning</option>
              <option>In Progress</option>
              <option>On Hold</option>
            </select>
          </div>
          <div className="flex justify-end pt-4 space-x-3">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-textMuted hover:text-text font-medium">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700">Create Project</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
