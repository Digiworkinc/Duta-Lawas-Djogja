import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, MessageCircle, Compass, LayoutDashboard } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { Project, Service, PriceItem } from './types';
import { INITIAL_PROJECTS, SERVICES as INITIAL_SERVICES, PRICE_LIST as INITIAL_PRICES } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Portofolio', path: '/portfolio' },
    { name: 'Harga', path: '/prices' },
    { name: 'Hubungi', path: '/contact' },
  ];

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfaf6]/95 backdrop-blur-sm border-b border-[#5d4037]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-serif text-[#5d4037] tracking-tight">DK JATI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#5d4037] ${
                  location.pathname === link.path ? 'text-[#5d4037] font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
              <Link
                to="/admin"
                className={`p-2 rounded-full transition-colors ${isAdmin ? 'bg-[#5d4037] text-white' : 'text-gray-400 hover:bg-gray-100 hover:text-[#5d4037]'}`}
                title="Panel Admin"
              >
                <LayoutDashboard size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-[#5d4037] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#5d4037]/90 transition-all flex items-center space-x-2"
              >
                <MessageCircle size={16} />
                <span>Konsultasi</span>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link to="/admin" className="text-gray-400 hover:text-[#5d4037]">
              <LayoutDashboard size={24} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#5d4037] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#fdfaf6] border-b border-[#5d4037]/10 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-[#5d4037]/5 hover:text-[#5d4037] rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="w-full bg-stone-200 text-stone-700 text-center py-3 rounded-md font-medium"
            >
              Panel Admin
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#5d4037] text-white text-center py-3 rounded-md font-medium"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#5d4037] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-4">
        <h3 className="text-2xl font-serif font-bold italic tracking-tighter">DK JATI</h3>
        <p className="text-stone-300 text-sm leading-relaxed">
          Spesialis pembuatan rumah kayu, joglo, gazebo, dan bangunan tradisional Jawa berkualitas premium dari kayu jati pilihan sejak 2008.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-stone-400 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-stone-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-stone-400 transition-colors"><MessageCircle size={20} /></a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Navigasi</h4>
        <ul className="space-y-3 text-stone-300 text-sm">
          <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Layanan</Link></li>
          <li><Link to="/portfolio" className="hover:text-white transition-colors">Portofolio</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Layanan Kami</h4>
        <ul className="space-y-3 text-stone-300 text-sm">
          <li>Rumah Kayu Jati</li>
          <li>Joglo & Limasan</li>
          <li>Gazebo & Pendopo</li>
          <li>Bongkar Pasang Bangunan</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
        <ul className="space-y-3 text-stone-300 text-sm">
          <li className="flex items-start space-x-3">
            <Phone size={18} className="shrink-0 mt-0.5 text-amber-400" />
            <span>+62 812-3456-7890</span>
          </li>
          <li className="flex items-start space-x-3 text-xs leading-5">
            <Compass size={18} className="shrink-0 mt-0.5 text-amber-400" />
            <span>Workshop: Jl. Raya Jati No. 45, Jepara, Jawa Tengah, Indonesia</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-stone-400 text-xs">
      &copy; {new Date().getFullYear()} DK Jati. Bangga Melestarikan Budaya Nusantara.
    </div>
  </footer>
);

export default function App() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('dk_jati_projects_v2');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('dk_jati_services_v2');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [prices, setPrices] = useState<PriceItem[]>(() => {
    const saved = localStorage.getItem('dk_jati_prices_v2');
    return saved ? JSON.parse(saved) : INITIAL_PRICES;
  });

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    const saved = localStorage.getItem('dk_jati_admin_pw');
    return saved || 'dkjati2024';
  });

  useEffect(() => {
    localStorage.setItem('dk_jati_projects_v2', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('dk_jati_services_v2', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('dk_jati_prices_v2', JSON.stringify(prices));
  }, [prices]);

  useEffect(() => {
    localStorage.setItem('dk_jati_admin_pw', adminPassword);
  }, [adminPassword]);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home projects={projects.slice(0, 3)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services services={services} />} />
            <Route path="/portfolio" element={<Portfolio projects={projects} />} />
            <Route path="/prices" element={<Prices priceList={prices} />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/admin" 
              element={
                <Admin 
                  projects={projects} 
                  services={services} 
                  prices={prices}
                  adminPassword={adminPassword}
                  onUpdateProjects={setProjects}
                  onUpdateServices={setServices}
                  onUpdatePrices={setPrices}
                  onUpdatePassword={setAdminPassword}
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
        <a 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center gap-2 group"
        >
          <MessageCircle size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
            WhatsApp Kami
          </span>
        </a>
      </div>
    </HashRouter>
  );
}
