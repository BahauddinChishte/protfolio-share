import React, { useState } from 'react';
import { experiences } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24" id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-zinc-400 text-lg">
            A journey through my professional career in software development.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="bg-zinc-800/50 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleExperience(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.company}
                  </h3>
                  <p className="text-blue-400">{experience.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">{experience.period}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-zinc-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-zinc-800/30">
                  <p className="text-zinc-400">{experience.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}