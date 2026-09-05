import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { PRODUCT_PHOTOS } from '../data/photos';

interface ProjectItem {
  name: string;
  description: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    name: 'Gourmet Vanilla Planifolia',
    description: 'Carefully selected Indonesian vanilla beans for premium culinary, bakery, and confectionery applications',
    image: PRODUCT_PHOTOS.planifolia,
  },
  {
    name: 'Grade B Vanilla for Extract',
    description: 'Optimized for commercial extract production, industrial food applications, and flavor manufacturing',
    image: PRODUCT_PHOTOS.gradeB,
  },
  {
    name: 'Indonesian Vanilla Tahitensis',
    description: 'Floral and fruity aromatic profile suited for specialty confectionery, beverages, and craft food brands',
    image: PRODUCT_PHOTOS.tahitensis,
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
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="products" className="max-w-[1200px] mx-auto px-6 py-12 scroll-mt-24">
      {/* Anchor for backward compatibility */}
      <div id="projects" className="sr-only" />
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((proj, index) => (
          <ProjectCard key={proj.name} project={proj} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
