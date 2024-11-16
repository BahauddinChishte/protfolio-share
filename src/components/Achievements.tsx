import React, { useState } from 'react';
import { Award, GraduationCap, Trophy } from 'lucide-react';
import { achievements } from '../data';

const categories = [
  { id: 'all', label: 'All', icon: Trophy },
  { id: 'certificates', label: 'Certificates', icon: GraduationCap },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
];

interface AchievementModalProps {
  achievement: typeof achievements[0];
  onClose: () => void;
}

function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-zinc-900 rounded-lg max-w-2xl w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={achievement.image} 
          alt={achievement.title}
          className="w-full h-48 sm:h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{achievement.title}</h3>
          <p className="text-blue-400 mb-2">{achievement.organization}</p>
          <p className="text-zinc-400 mb-4">{achievement.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500">{achievement.date}</span>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  const filteredAchievements = achievements.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950" id="achievements">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Achievements
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8">
              A collection of professional accomplishments, certifications, and recognition received throughout my career journey.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-900/50 rounded-xl">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base
                  ${activeCategory === id 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}
                `}
              >
                <Icon size={16} className="sm:w-5 sm:h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <button
              key={index}
              onClick={() => setSelectedAchievement(achievement)}
              className="text-left bg-zinc-900/50 rounded-lg overflow-hidden hover:bg-zinc-900 transition-all duration-300 group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 line-clamp-2 mb-2">
                      {achievement.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 text-xs sm:text-sm">Click to view details</span>
                      <span className="text-zinc-500 text-xs sm:text-sm">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedAchievement && (
          <AchievementModal 
            achievement={selectedAchievement} 
            onClose={() => setSelectedAchievement(null)} 
          />
        )}
      </div>
    </section>
  );
}