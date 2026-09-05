import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface ProjectItem {
  name: string;
  description: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project }) => {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`w-full ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: '0.2s' }}
    >
      {/* Offset text block */}
      <div className="ml-12 sm:ml-20 md:ml-28 mb-4">
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24]">
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-1">
          {project.description}
        </p>
      </div>

      {/* Full-width image container */}
      <div className="w-full rounded-2xl shadow-lg overflow-hidden bg-slate-100 aspect-[16/10] md:aspect-[16/9] max-h-[640px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((proj, index) => (
          <ProjectCard key={proj.name} project={proj} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
