
import React from 'react';
import { Target, Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <section className="bg-teak text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang DK Jati</h1>
          <p className="text-lg text-stone-200 max-w-3xl mx-auto font-light">
            Menjaga tradisi melalui arsitektur kayu yang tak lekang oleh waktu.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/carpenter/800/1000" 
              alt="Carpenter at work" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-teak">Profil Perusahaan</h2>
              <p className="text-gray-600 leading-relaxed">
                DK Jati didirikan dengan semangat untuk melestarikan kekayaan budaya arsitektur Nusantara, khususnya bangunan berbahan kayu jati. Kami berpusat di Jepara, jantung industri kayu Indonesia, yang memungkinkan kami mengakses material jati terbaik dan pengrajin paling terampil.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Selama lebih dari 15 tahun, kami telah menyelesaikan ratusan proyek mulai dari gazebo minimalis hingga joglo megah dan villa mewah. Kualitas adalah nafas kami, dan kepuasan pelanggan adalah pencapaian tertinggi kami.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#fdfaf6] p-6 rounded-xl border border-teak/5">
                <Target className="text-nature mb-3" size={32} />
                <h4 className="font-bold mb-2">Visi</h4>
                <p className="text-sm text-gray-500">Menjadi penyedia bangunan kayu tradisional terbaik di Asia Tenggara.</p>
              </div>
              <div className="bg-[#fdfaf6] p-6 rounded-xl border border-teak/5">
                <Users className="text-nature mb-3" size={32} />
                <h4 className="font-bold mb-2">Misi</h4>
                <p className="text-sm text-gray-500">Memberikan produk berkualitas dengan material jati grade A dan ketepatan waktu tinggi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teak mb-16">Nilai Utama Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Kualitas Kayu", text: "Hanya menggunakan jati pilihan (Grade A/B) yang sudah kering sempurna." },
              { icon: Award, title: "Keahlian", text: "Dikerjakan oleh tukang kayu profesional asli Jepara yang berpengalaman." },
              { icon: Target, title: "Presisi", text: "Desain yang akurat baik secara tradisional maupun modern." },
              { icon: Users, title: "Kepuasan", text: "Layanan purna jual dan konsultasi intensif selama pembangunan." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <val.icon className="mx-auto text-teak mb-4" size={40} />
                <h4 className="font-bold text-lg mb-2">{val.title}</h4>
                <p className="text-sm text-gray-500">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
