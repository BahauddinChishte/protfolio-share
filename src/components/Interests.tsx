import React from 'react';
import { Camera, Code2, Brain, Globe } from 'lucide-react';
import { interests } from '../data';
import SectionTitle from './SectionTitle';

const iconMap = {
  Camera,
  Code2,
  Brain,
  Globe,
};

export default function Interests() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900" id="interests">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Interests & Hobbies</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => {
            const Icon = iconMap[interest.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{interest.title}</h3>
                <p className="text-zinc-400">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}