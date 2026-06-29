import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users, ArrowUpRight } from 'lucide-react';
import Modal from '../components/Modal';

const stats = [
  { name: 'Total Projects', value: '12', icon: FolderKanbanIcon, color: 'bg-blue-500', trend: '+2.5%' },
  { name: 'Active Tasks', value: '48', icon: Clock, color: 'bg-orange-500', trend: '+5.2%' },
  { name: 'Completed Tasks', value: '124', icon: CheckCircle2, color: 'bg-green-500', trend: '+12.5%' },
  { name: 'Team Members', value: '8', icon: Users, color: 'bg-purple-500', trend: '+1.0%' },
];

function FolderKanbanIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
      <path d="M8 10v4"/>
      <path d="M12 10v2"/>
      <path d="M16 10v6"/>
    </svg>
  );
}

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Welcome back, John!</h1>
          <p className="text-textMuted text-sm mt-1">Here's what's happening with your projects today.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary-500/20"
        >
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-6 rounded-xl border border-border shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-textMuted">{stat.name}</p>
                  <p className="text-2xl font-bold text-text mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${stat.color} bg-opacity-10`}>
                  <Icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">{stat.trend}</span>
                <span className="text-textMuted ml-2">vs last month</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Add more dashboard widgets like charts or recent tasks here */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface p-6 rounded-xl border border-border shadow-sm h-96 flex items-center justify-center text-textMuted">
          Productivity Chart Area (Recharts)
        </div>
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm h-96 flex items-center justify-center text-textMuted">
          Recent Activity Feed
        </div>
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
