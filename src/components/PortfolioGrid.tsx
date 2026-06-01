'use client';
import { useState } from 'react';

const projects = [
  { id: 1, name: "Nama Project", scope: "Scope project", desc1: "Penjelasan / overeview", desc2: "Penjelasan / overeview", year: "2025" },
  { id: 2, name: "Nama Project", scope: "Scope project", desc1: "Penjelasan / overeview", desc2: "Penjelasan / overeview", year: "2025" },
  { id: 3, name: "Nama Project", scope: "Scope project", desc1: "Penjelasan / overeview", desc2: "Penjelasan / overeview", year: "2025" },
  { id: 4, name: "Nama Project", scope: "Scope project", desc1: "Penjelasan / overeview", desc2: "Penjelasan / overeview", year: "2025" },
  { id: 5, name: "Nama Project", scope: "Scope project", desc1: "Penjelasan / overeview", desc2: "Penjelasan / overeview", year: "2025" },
  { id: 6, name: "Nama Project", scope: "Scope project", desc1: "Penjelasan / overeview", desc2: "Penjelasan / overeview", year: "2025" },
];

export default function PortfolioGrid() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 2, projects.length));
  };

  return (
    <section id="works" className="w-full px-12 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-[4/3] bg-gray-200 mb-6 overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              {/* Placeholder */}
            </div>
            
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-raisin mb-1">{project.name}</h3>
                <p className="text-sm font-medium text-brand-raisin/60 mb-2">{project.desc1}</p>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="flex-1 px-4">
                <h3 className="text-lg font-bold text-brand-raisin mb-1">{project.scope}</h3>
                <p className="text-sm font-medium text-brand-raisin/60 mb-2">{project.desc2}</p>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <span className="text-base font-bold text-brand-raisin">{project.year}</span>
                <div className="flex items-center gap-3 text-base font-bold text-brand-raisin mt-1">
                  <button className="hover:text-brand-primary">&lt;</button>
                  <span className="text-sm">1/3</span>
                  <button className="hover:text-brand-primary">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {visibleCount < projects.length && (
        <div className="w-full flex justify-center mt-32">
          <button 
            onClick={handleShowMore}
            className="px-10 py-4 bg-brand-raisin text-white rounded-full font-bold hover:bg-black transition-colors"
          >
            Show All Projects
          </button>
        </div>
      )}
    </section>
  );
}
