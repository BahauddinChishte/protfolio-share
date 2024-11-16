import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary AI-powered platform that transforms how we interact with data.",
    tech: ["React", "TypeScript", "TensorFlow"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Beta",
    description: "Real-time collaboration tool for remote teams with advanced features.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
];

export default function Projects() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-900" id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm text-zinc-300 bg-zinc-800 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-zinc-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}