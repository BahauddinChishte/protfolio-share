import React from 'react';
import { volunteerExperiences } from '../data';
import { Calendar, ExternalLink } from 'lucide-react';

export default function Volunteer() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-900" id="volunteer">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Volunteer Work
          </h2>
          <p className="text-zinc-400 text-lg mb-12">
            Giving back to the community through technology education and mentorship.
          </p>
        </div>

        <div className="grid gap-8">
          {volunteerExperiences.map((experience, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-800/50 rounded-lg overflow-hidden hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 to-transparent" />
                </div>
                
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {experience.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-blue-400 text-sm mb-4">
                      {experience.organization}
                    </p>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {experience.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 text-zinc-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}