
import React from 'react';
import { Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PriceItem } from '../types';

interface PricesProps {
  priceList: PriceItem[];
}

const Prices: React.FC<PricesProps> = ({ priceList }) => {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <section className="bg-teak text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Estimasi Biaya Pembangunan</h1>
          <p className="text-stone-300 max-w-2xl mx-auto">Tabel di bawah adalah referensi harga awal. Harga akhir sangat bergantung pada kerumitan desain, jenis kayu, and lokasi proyek.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#fdfaf6] text-teak">
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Jenis Bangunan</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Ukuran</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Material Dasar</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Harga Mulai</th>
                  <th className="px-8 py-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {priceList.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-800">{item.type}</td>
                    <td className="px-8 py-6 text-gray-600">{item.size}</td>
                    <td className="px-8 py-6">
                      <span className="bg-stone-100 px-3 py-1 rounded-full text-[10px] text-stone-600 font-bold uppercase tracking-tight">{item.material}</span>
                    </td>
                    <td className="px-8 py-6 text-nature font-bold text-lg">{item.startingPrice}</td>
                    <td className="px-8 py-6 text-right">
                      <Link to="/contact" className="text-teak hover:underline text-sm font-bold">Konsultasi</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 p-8 rounded-3xl flex items-start gap-6 shadow-sm">
          <Info className="text-amber-600 shrink-0" size={28} />
          <div className="text-sm text-amber-900 space-y-3 leading-relaxed">
            <p className="font-bold text-lg">Syarat & Ketentuan Harga:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Harga mencakup rangka utama, dinding (jika ada), and atap standar.</li>
              <li>Belum termasuk biaya pondasi beton and pengiriman (di luar area tertentu).</li>
              <li>Custom desain atau ukiran khusus akan dikenakan biaya tambahan sesuai kerumitan.</li>
              <li>Harga dapat berubah sewaktu-waktu mengikuti fluktuasi harga bahan baku kayu jati dunia.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center space-y-6">
          <HelpCircle className="mx-auto text-teak opacity-20" size={64} />
          <h2 className="text-3xl font-bold font-serif text-teak">Punya Budget Khusus?</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Kami sangat fleksibel. Tim kami dapat menyesuaikan pemilihan grade kayu and detail desain agar sesuai dengan rencana anggaran Anda.</p>
          <Link to="/contact" className="inline-block bg-teak text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-teak/20 hover:scale-105 transition-all">
            Diskusikan Budget Anda Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Prices;
