import React from 'react';
import { Home, Briefcase, FolderGit2, Trophy, Heart, HandHeart, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Achievements', href: '#achievements', icon: Trophy },
    { label: 'Interests', href: '#interests', icon: Heart },
    { label: 'Volunteer', href: '#volunteer', icon: HandHeart },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-[240px] bg-slate-950/90 backdrop-blur-sm border-r border-slate-800/50 flex flex-col z-50">
      <div className="p-6 border-b border-slate-800/50">
        <a href="#" className="relative group inline-block">
          <div className="flex items-center space-x-1.5">
            <span className="text-lg font-bold text-gradient-soft">
              Bahauddin
            </span>
            <span className="text-lg font-light text-slate-400 group-hover:text-slate-200 transition-colors">
              C.
            </span>
          </div>
          <div className="absolute -inset-x-3 -inset-y-2 border border-slate-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </a>
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        <div className="px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="relative group flex items-center gap-3 px-4 py-3 text-[14px] font-medium rounded-lg"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-colors" />
                <span className="relative z-10 text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                  {item.label}
                </span>
                <div className="absolute inset-0 rounded-lg group-hover:bg-slate-800/30 transition-colors duration-300" />
                <div className="absolute left-0 h-full w-0.5 bg-gradient-soft scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="p-6 border-t border-slate-800/50">
        <p className="text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </nav>
  );
}