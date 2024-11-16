import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-slate-950 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 space-y-6">
              <h1 className="text-gradient-soft animate-gradient">
                Hey, I'm {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
                {personalInfo.bio}
              </p>
              <div className="flex gap-4 text-slate-400">
                <a href={personalInfo.contact.github} className="p-2 hover:text-slate-200 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={personalInfo.contact.linkedin} className="p-2 hover:text-slate-200 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.contact.email}`} className="p-2 hover:text-slate-200 transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="absolute -inset-4 border border-slate-800/50 rounded-xl -z-10" />
            <div className="absolute -inset-8 border border-slate-800/30 rounded-xl -z-20" />
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900/50">
                <img 
                  src={personalInfo.image} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="absolute -inset-2 border border-slate-800/50 rounded-2xl -z-10" />
              <div className="absolute -inset-4 border border-slate-800/30 rounded-2xl -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}