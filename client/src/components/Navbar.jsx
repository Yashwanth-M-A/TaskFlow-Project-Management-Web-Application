import { useState } from 'react';
import { Bell, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-4 md:px-6 lg:px-8 relative">
      <div className="flex items-center flex-1">
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden mr-4 text-textMuted hover:text-text">
          {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
          <input 
            type="text" 
            placeholder="Search tasks, projects..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)} 
            className="relative p-2 text-textMuted hover:bg-slate-50 rounded-full transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-surface"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-surface rounded-xl shadow-xl border border-border z-50 overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-text">Notifications</h3>
              </div>
              <div className="p-4 text-center text-sm text-textMuted">
                No new notifications.
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
