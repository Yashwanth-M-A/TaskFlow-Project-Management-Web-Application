import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary-200">
      <header className="fixed top-0 w-full glass z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="text-xl font-bold">TaskFlow</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-textMuted hover:text-text transition-colors">
              Log in
            </Link>
            <Link to="/login" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm shadow-primary-500/20">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Manage projects like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-400">pro</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-textMuted max-w-2xl mx-auto"
          >
            The premium, modern workspace to organize your tasks, collaborate with your team, and hit your deadlines without breaking a sweat.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dashboard" className="w-full sm:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30">
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-slate-200/50"
        >
          {/* A mock UI showing the dashboard, you'd typically put a real image here */}
          <div className="bg-slate-900 w-full h-[300px] sm:h-[500px] flex items-center justify-center text-slate-500">
            [ Premium Dashboard Preview Image / UI Mockup Here ]
          </div>
        </motion.div>
      </main>
    </div>
  );
}
