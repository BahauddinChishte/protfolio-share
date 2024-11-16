import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-zinc-400 mb-8">
              I'm always open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a 
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>{personalInfo.contact.phone}</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-6 justify-center">
              <a 
                href={personalInfo.contact.github}
                className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.contact.linkedin}
                className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}