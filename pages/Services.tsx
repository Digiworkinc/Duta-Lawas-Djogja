
import React from 'react';
import { getIcon } from '../constants';
import { Clock, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-[#fdfaf6] py-24 border-b border-teak/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teak mb-6">Layanan Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami menawarkan cakupan pekerjaan konstruksi kayu yang luas untuk kebutuhan hunian, bisnis, hingga renovasi.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((s) => (
            <div key={s.id} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto bg-stone-100">
                <img 
                  src={s.imageUrl || `https://picsum.photos/seed/${s.id}/800/600`} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-teak mb-4">
                    <div className="p-2 bg-teak/10 rounded-lg">
                      {getIcon(s.icon)}
                    </div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700">
                      <Clock size={16} className="mr-2 text-nature" />
                      <span>Estimasi: <strong>{s.estimatedTime}</strong></span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Hammer size={16} className="mr-2 text-nature" />
                      <span>Material: Kayu Jati Solid Pilihan</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50">
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-between group/link text-teak font-bold"
                  >
                    Tanya Detail
                    <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-teak text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 font-serif tracking-tight">Alur Pengerjaan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Berdiskusi mengenai model, ukuran, dan lokasi." },
              { step: "02", title: "Desain & Estimasi", desc: "Kami buatkan draft desain dan penawaran harga." },
              { step: "03", title: "Produksi", desc: "Proses pemotongan dan pengukiran di workshop." },
              { step: "04", title: "Instalasi", desc: "Pemasangan di lokasi Anda (Setting On Site)." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-6 border border-white/10 rounded-2xl bg-white/5 group hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-amber-400/20 mb-4 group-hover:text-amber-400/40 transition-colors font-serif">{step.step}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-stone-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
