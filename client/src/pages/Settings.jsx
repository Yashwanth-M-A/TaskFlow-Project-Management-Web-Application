import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Settings() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }, 800);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold text-text">Settings</h1>
      
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-medium text-text">Profile Information</h2>
          <p className="text-sm text-textMuted mt-1">Update your account's profile information and email address.</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text mb-1">Name</label>
            <input type="text" defaultValue="John Doe" className="w-full max-w-md px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Email</label>
            <input type="email" defaultValue="john@example.com" className="w-full max-w-md px-4 py-2 bg-slate-50 border border-border rounded-lg focus:ring-2 focus:ring-primary-500/20" />
          </div>
          <button 
            onClick={handleSave} 
            disabled={isSaving || isSaved}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all ${
              isSaved ? 'bg-green-500 text-white' : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {isSaving ? 'Saving...' : isSaved ? <><Check className="w-4 h-4 mr-1" /> Saved</> : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
