
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, Upload } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    type: 'Joglo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Terima kasih ${formData.name}, pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda melalui WhatsApp.`);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-[#fdfaf6] py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-teak">Hubungi Kami</h1>
              <p className="text-gray-600">Konsultasikan ide bangunan kayu Anda. Kami siap membantu dari konsep hingga realisasi.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-teak">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Telepon / WhatsApp</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                  <p className="text-xs text-gray-400">Tersedia Senin - Sabtu (08.00 - 17.00)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-teak">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600">halo@dkjati.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-teak">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Workshop</h4>
                  <p className="text-gray-600">Jl. Raya Jati No. 45, Jepara, Jawa Tengah</p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="h-64 bg-stone-200 rounded-3xl overflow-hidden relative border-4 border-white shadow-xl">
              <img 
                src="https://picsum.photos/seed/map/800/600" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-teak/20 backdrop-blur-[2px]">
                 <a 
                   href="#" 
                   className="bg-white text-teak px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                 >
                   <MapPin size={18} /> Buka Google Maps
                 </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-stone-50">
            <h2 className="text-2xl font-bold mb-8 text-teak">Form Konsultasi Gratis</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-teak/20 transition-all outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="0812xxxxxx"
                    className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-teak/20 transition-all outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Lokasi Proyek</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Bekasi, Jawa Barat"
                    className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-teak/20 transition-all outline-none"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Jenis Bangunan</label>
                  <select 
                    className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-teak/20 transition-all outline-none appearance-none"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option>Joglo</option>
                    <option>Rumah Kayu</option>
                    <option>Gazebo</option>
                    <option>Villa</option>
                    <option>Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Pesan / Kebutuhan Khusus</label>
                <textarea 
                  rows={4} 
                  placeholder="Ceritakan detail rencana Anda..."
                  className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-teak/20 transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Upload Referensi Desain (Opsional)</label>
                <div className="border-2 border-dashed border-stone-200 rounded-xl p-8 text-center hover:border-teak/40 transition-colors cursor-pointer group">
                  <input type="file" className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="mx-auto text-stone-300 group-hover:text-teak mb-2 transition-colors" size={32} />
                    <p className="text-sm text-gray-500">Klik untuk upload atau drag & drop</p>
                    <p className="text-[10px] text-gray-400 mt-1">PNG, JPG, PDF (Maks. 5MB)</p>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-teak text-white py-5 rounded-2xl font-bold shadow-xl shadow-teak/20 hover:bg-teak/90 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <Send size={20} /> Kirim Pesan Konsultasi
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
