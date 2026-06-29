import { useState } from 'react';
import Modal from '../components/Modal';

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text">Team Members</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          Invite Member
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-surface p-6 rounded-xl border border-border flex flex-col items-center text-center">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-20 h-20 rounded-full bg-slate-100 mb-4" />
            <h3 className="font-semibold text-text">Team Member {i}</h3>
            <p className="text-sm text-textMuted mb-4">Software Engineer</p>
            <button 
              onClick={(e) => {
                e.target.innerText = 'Viewing Profile...';
                e.target.classList.add('opacity-70');
                setTimeout(() => {
                  e.target.innerText = 'View Profile';
                  e.target.classList.remove('opacity-70');
                }, 1500);
              }} 
              className="w-full text-primary-600 bg-primary-50 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Invite Team Member">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Email Address</label>
            <input type="email" required className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20" placeholder="colleague@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Role</label>
            <select className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20">
              <option>Team Member</option>
              <option>Project Manager</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="flex justify-end pt-4 space-x-3">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-textMuted hover:text-text font-medium">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700">Send Invitation</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
