'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const projects = [
  {
    id: 1,
    name: "Modern E-commerce Platform",
    scope: "Web Design",
    desc1: "A complete overhaul of the digital storefront.",
    desc2: "UX/UI, Frontend Development",
    year: "2024",
    images: [
      "/projects/ecommerce.png",
      "/projects/dashboard.png",
      "/projects/branding.png"
    ]
  },
  {
    id: 2,
    name: "Financial App Interface",
    scope: "Mobile App",
    desc1: "Simplifying personal finance management.",
    desc2: "Product Design, App Development",
    year: "2024",
    images: [
      "/projects/fintech.png",
      "/projects/dashboard.png",
      "/projects/ecommerce.png"
    ]
  },
  {
    id: 3,
    name: "Tech Startup Branding",
    scope: "Branding",
    desc1: "Creating a cohesive identity for a new AI startup.",
    desc2: "Brand Strategy, Visual Identity",
    year: "2023",
    images: [
      "/projects/branding.png",
      "/projects/editorial.png",
      "/projects/packaging.png"
    ]
  },
  {
    id: 4,
    name: "Lifestyle Magazine",
    scope: "Editorial Design",
    desc1: "Digital publication for modern living.",
    desc2: "Layout Design, Typography",
    year: "2023",
    images: [
      "/projects/editorial.png",
      "/projects/branding.png",
      "/projects/packaging.png"
    ]
  },
  {
    id: 5,
    name: "Eco-Friendly Packaging",
    scope: "Packaging Design",
    desc1: "Sustainable packaging for organic cosmetics.",
    desc2: "Material Sourcing, Print Design",
    year: "2025",
    images: [
      "/projects/packaging.png",
      "/projects/branding.png",
      "/projects/editorial.png"
    ]
  },
  {
    id: 6,
    name: "Global Logistics Dashboard",
    scope: "Web Application",
    desc1: "Real-time tracking and management interface.",
    desc2: "UX/UI, Data Visualization",
    year: "2025",
    images: [
      "/projects/dashboard.png",
      "/projects/fintech.png",
      "/projects/ecommerce.png"
    ]
  }
];

function PortfolioCard({ project }: { project: typeof projects[0] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="w-full aspect-[4/3] bg-gray-200 mb-6 overflow-hidden relative">
        <AnimatePresence initial={false} mode="sync">
          <motion.img 
            key={currentSlide}
            src={project.images[currentSlide]} 
            alt={project.name} 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute top-0 left-0" 
          />
        </AnimatePresence>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-brand-raisin mb-1">{project.name}</h3>
          <p className="text-sm font-medium text-brand-raisin/60 mb-2">{project.desc1}</p>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="flex-1 sm:px-4">
          <h3 className="text-lg font-bold text-brand-raisin mb-1">{project.scope}</h3>
          <p className="text-sm font-medium text-brand-raisin/60 mb-2">{project.desc2}</p>
        </div>
        
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
          <span className="text-base font-bold text-brand-raisin">{project.year}</span>
          <div className="flex items-center gap-3 text-base font-bold text-brand-raisin sm:mt-1">
            <button onClick={prevSlide} className="hover:text-brand-primary p-1">&lt;</button>
            <span className="text-sm w-6 text-center">{currentSlide + 1}/{project.images.length}</span>
            <button onClick={nextSlide} className="hover:text-brand-primary p-1">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [visibleCount, setVisibleCount] = useState(4);
  const isExpanded = visibleCount >= projects.length;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(4);
      // Scroll back up slightly so the user isn't left at the bottom of the page when items collapse
      const element = document.getElementById('works');
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100; // offset for navbar
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      setVisibleCount(projects.length);
    }
  };

  return (
    <section id="works" className="w-full px-6 md:px-12 py-16 md:py-20 bg-white">
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
        <AnimatePresence mode="popLayout">
          {projects.slice(0, visibleCount).map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {projects.length > 4 && (
        <motion.div layout className="w-full flex justify-center mt-16 md:mt-32">
          <button 
            onClick={handleToggle}
            className="px-8 py-3 md:px-10 md:py-4 bg-brand-raisin text-white rounded-full font-bold hover:bg-brand-primary transition-colors flex items-center gap-2"
          >
            {isExpanded ? 'Show Less' : 'Show All Projects'}
            <motion.span 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
}
