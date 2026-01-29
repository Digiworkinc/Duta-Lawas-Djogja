
import React from 'react';
import { Link } from 'react-router-dom';
// Added MessageCircle to imports
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { SERVICES, getIcon } from '../constants';
import { Project } from '../types';

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Wooden House Background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              DK Jati – Spesialis Rumah Kayu & <span className="text-amber-400">Joglo Berkualitas Tinggi</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 font-light leading-relaxed">
              Mewujudkan hunian tradisional yang elegan dan bernilai tinggi dengan kayu jati pilihan. Presisi, kualitas, dan nilai budaya dalam setiap serat kayu.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-teak text-white px-8 py-4 rounded-lg font-semibold hover:bg-teak/90 transition-all flex items-center space-x-2"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/portfolio" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Lihat Proyek
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-teak py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="text-amber-400" size={40} />
            <div>
              <h4 className="font-bold">Garansi Kualitas</h4>
              <p className="text-stone-300 text-sm">Kayu jati pilihan tahan puluhan tahun.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="text-amber-400" size={40} />
            <div>
              <h4 className="font-bold">Ketepatan Waktu</h4>
              <p className="text-stone-300 text-sm">Pengerjaan sesuai jadwal yang disepakati.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Star className="text-amber-400" size={40} />
            <div>
              <h4 className="font-bold">Desain Custom</h4>
              <p className="text-stone-300 text-sm">Fleksibel mengikuti keinginan Anda.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brief Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-teak">Layanan Unggulan Kami</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Kami menyediakan solusi konstruksi kayu tradisional lengkap mulai dari perencanaan hingga instalasi di lokasi Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative bg-[#fdfaf6] p-8 rounded-2xl border border-teak/5 hover:border-teak/20 transition-all hover:shadow-xl overflow-hidden">
                <div className="absolute -right-4 -top-4 text-teak/5 group-hover:text-teak/10 transition-colors">
                  {getIcon(service.icon)}
                </div>
                <div className="bg-teak/10 p-3 rounded-xl w-fit mb-6 text-teak">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="text-teak font-bold flex items-center text-sm group-hover:translate-x-1 transition-transform">
                  Selengkapnya <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-teak">Portofolio Terbaru</h2>
              <p className="text-gray-600">Beberapa karya terbaik yang telah kami selesaikan di seluruh Indonesia.</p>
            </div>
            <Link to="/portfolio" className="text-teak font-bold border-b-2 border-teak pb-1 flex items-center">
              Lihat Semua Galeri <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-teak/80 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.type}
                  </div>
                </div>
                <h4 className="text-lg font-bold group-hover:text-teak transition-colors">{project.name}</h4>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden bg-nature text-white text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Decorative pattern simulation */}
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Mewujudkan Hunian Impian Anda?</h2>
          <p className="text-stone-200 mb-10 text-lg">Konsultasikan kebutuhan rumah kayu atau joglo Anda dengan tim ahli kami secara gratis sekarang juga.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-nature px-8 py-4 rounded-lg font-bold hover:bg-stone-100 transition-all flex items-center gap-2">
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </Link>
            <Link to="/prices" className="bg-nature-dark border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Cek Estimasi Harga
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
