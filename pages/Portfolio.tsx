
import React, { useState } from 'react';
import { Project } from '../types';
import { Maximize2, X } from 'lucide-react';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('Semua');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = ['Semua', 'Joglo', 'Rumah Kayu', 'Gazebo', 'Villa', 'Lainnya'];
  
  const filteredProjects = filter === 'Semua' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teak mb-6">Galeri Proyek</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Koleksi karya-karya terbaik DK Jati yang tersebar di berbagai wilayah.</p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-teak text-white shadow-lg' 
                    : 'bg-[#fdfaf6] text-gray-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImg(p.imageUrl)}
            >
              <img 
                src={p.imageUrl} 
                alt={p.name} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-amber-400 text-xs uppercase tracking-widest mb-2 block">{p.type}</span>
                    <h4 className="text-xl font-bold">{p.name}</h4>
                    <p className="text-sm text-stone-300">{p.location}</p>
                  </div>
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">
            Belum ada proyek untuk kategori ini.
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white/70 hover:text-white">
            <X size={40} />
          </button>
          <img 
            src={selectedImg} 
            alt="Project Lightbox" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
