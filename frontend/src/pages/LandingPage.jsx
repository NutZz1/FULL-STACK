import React, { useState, useEffect } from 'react';
import { Download, Play, ArrowRight } from 'lucide-react';

const DashFlowHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F0F7FF] font-sans overflow-hidden">
      {/* Background Diagonal Shape */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#3B82F6] transform skew-x-[-12deg] translate-x-24 z-0 hidden lg:block" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            D
          </div>
          <span className="text-[#1E293B] font-bold text-2xl tracking-tight">DashFlow</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[#64748B] font-medium">
          {['Top', 'For Everyone', 'Features', 'Preview', 'License'].map((item) => (
            <a key={item} href="#" className="hover:text-[#3B82F6] transition-colors">{item}</a>
          ))}
        </div>

        <button className="bg-white text-[#3B82F6] px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all active:scale-95">
          Download
        </button>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 container mx-auto px-12 pt-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <h1 className="text-7xl font-extrabold text-[#1E293B] leading-[1.1] mb-6">
            Intelligent Workflow <br /> 
            <span className="relative inline-block">
              For Modern Teams
              <div className="absolute bottom-2 left-0 w-full h-3 bg-[#3B82F6]/20 -z-10" />
            </span>
          </h1>
          
          <p className="text-xl text-[#64748B] mb-10 max-w-md leading-relaxed">
            DashFlow simplifies complex project management with beautiful, 
            intuitive dashboards. Scale your productivity without the friction.
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#3B82F6] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-[#2563EB] transition-all group">
              <Download size={20} />
              Explore Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center gap-2 bg-[#D1E5FF] text-[#3B82F6] px-8 py-4 rounded-xl font-bold hover:bg-[#B9D9FF] transition-all">
              <Play size={20} fill="currentColor" />
              See in Action
            </button>
          </div>
        </div>

        {/* Right Side: Animated Cards */}
        <div className="lg:w-1/2 relative h-[600px] w-full mt-20 lg:mt-0">
          <div className="relative w-full h-full">
            
            {/* Animated Cards Container */}
            <div className="absolute inset-0 flex gap-4 animate-float-slow">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4 animate-slide-up">
                <div className="w-64 h-64 bg-emerald-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <div className="p-6 text-white font-bold">Real-time Analytics</div>
                </div>
                <div className="w-64 h-80 bg-[#1E1B4B] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 p-2">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-end p-6">
                     <p className="text-white font-bold text-xl">User Growth Patterns</p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 pt-12 animate-slide-down">
                <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 p-2">
                   <div className="w-full h-full bg-[#F8FAFC] rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center">
                      <div className="text-slate-300 font-bold">DASHBOARD_UI_01</div>
                   </div>
                </div>
                <div className="w-64 h-64 bg-rose-400 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                   <div className="p-6 text-white font-bold">Team Performance</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Custom Styles for Transitions */}
      <style jsx>{`
        @keyframes slide-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-slide-up { animation: slide-up 6s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default DashFlowHero;