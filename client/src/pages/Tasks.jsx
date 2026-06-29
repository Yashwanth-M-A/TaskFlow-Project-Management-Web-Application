import { useState } from 'react';
import Modal from '../components/Modal';

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text">Kanban Board</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700"
        >
          + Add Task
        </button>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        {/* Kanban Columns */}
        {['To Do', 'In Progress', 'Review', 'Completed'].map((column) => (
          <div key={column} className="w-80 flex-shrink-0 bg-slate-50/50 rounded-xl p-4 flex flex-col border border-border">
            <h3 className="font-semibold text-text mb-4 flex items-center justify-between">
              {column}
              <span className="bg-slate-200 text-slate-600 text-xs py-0.5 px-2 rounded-full">3</span>
            </h3>
            
            <div className="space-y-3 overflow-y-auto flex-1">
              {/* Task Cards */}
              {[1, 2, 3].map((task) => (
                <div key={task} className="bg-surface p-4 rounded-lg shadow-sm border border-border cursor-grab hover:border-primary-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-red-100 text-red-700">High</span>
                  </div>
                  <p className="text-sm font-medium text-text">Design new landing page hero section {task}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-surface flex items-center justify-center text-[10px] text-white font-bold">JD</div>
                    </div>
                    <span className="text-xs text-textMuted flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Oct 24
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Task">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Task Title</label>
            <input type="text" required className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20" placeholder="e.g. Update user dashboard" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Description</label>
            <textarea rows="3" className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20" placeholder="Add some details..."></textarea>
          </div>
          <div className="flex justify-end pt-4 space-x-3">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-textMuted hover:text-text font-medium">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700">Create Task</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
