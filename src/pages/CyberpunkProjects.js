import React from 'react';
import { Cpu, Zap, Box } from 'lucide-react';
import CyberpunkNavbar from './CyberpunkNavbar';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3' },
  { id: 4, title: 'Project 4', description: 'Description of Project 4' },
  { id: 5, title: 'Project 5', description: 'Description of Project 5' },
  { id: 6, title: 'Project 6', description: 'Description of Project 6' },
  { id: 7, title: 'Project 7', description: 'Description of Project 7' },
  { id: 8, title: 'Project 8', description: 'Description of Project 8' },
];
const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{children}</span>
    <span className="relative">{children}</span>
  </span>
);
export default function CyberpunkProjects() {
  const handleProjectClick = (project) => {
    window.location.href = `/projects/${project.id}`; // Navigate to project description page
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative z-[0]">
      {/* <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[0]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div> */}
      <div className="container mx-auto px-6 pt-32">
        <h2 className="text-5xl font-bold mb-12 text-center">
          <span className="relative">
            <span className="relative"><GlowingText>Explore Projects</GlowingText></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
              <div className="relative">
                <div className="text-blue-400 mb-2">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-blue-300">{project.description}</p>
              </div>
              <div className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2 animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/4 right-1/4">
          <Box className="w-8 h-8 text-blue-500 animate-pulse" />
        </div>
        {/* <div className="absolute bottom-1/4 left-1/4">
          <Zap className="w-10 h-10 text-blue-400 animate-ping" />
        </div> */}
      </div>
    </div>
  );
}
