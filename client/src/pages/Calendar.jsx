import { useState } from 'react';

export default function Calendar() {
  const [isToday, setIsToday] = useState(true);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text">Calendar</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsToday(true)} 
            className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
              isToday ? 'bg-primary-50 text-primary-700 border-primary-200' : 'bg-surface text-text border-border hover:bg-slate-50'
            }`}
          >
            Today
          </button>
        </div>
      </div>
      <div className="bg-surface rounded-xl border border-border p-6 min-h-[600px] flex items-center justify-center text-textMuted">
        [ Interactive Calendar Component Here ]
      </div>
    </div>
  );
}
