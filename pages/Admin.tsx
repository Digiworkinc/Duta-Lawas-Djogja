
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project, Service, PriceItem } from '../types';
import { 
  Plus, 
  LayoutGrid, 
  CheckCircle, 
  Trash2, 
  Settings, 
  Tag, 
  Hammer,
  ChevronRight,
  Lock,
  LogOut,
  AlertCircle,
  ShieldCheck,
  KeyRound
} from 'lucide-react';
import { getIcon } from '../constants';

interface AdminProps {
  projects: Project[];
  services: Service[];
  prices: PriceItem[];
  adminPassword: string;
  onUpdateProjects: (p: Project[]) => void;
  onUpdateServices: (s: Service[]) => void;
  onUpdatePrices: (p: PriceItem[]) => void;
  onUpdatePassword: (pw: string) => void;
}

const Admin: React.FC<AdminProps> = ({ 
  projects, 
  services, 
  prices, 
  adminPassword,
  onUpdateProjects, 
  onUpdateServices, 
  onUpdatePrices,
  onUpdatePassword
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('dk_jati_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  // CMS State
  const [activeTab, setActiveTab] = useState<'proyek' | 'layanan' | 'harga' | 'keamanan'>('proyek');
  const [success, setSuccess] = useState('');

  // Form states for Proyek
  const [projName, setProjName] = useState('');
  const [projLoc, setProjLoc] = useState('');
  const [projType, setProjType] = useState<Project['type']>('Joglo');
  const [projUrl, setProjUrl] = useState('');

  // Form states for Harga
  const [priceType, setPriceType] = useState('');
  const [priceSize, setPriceSize] = useState('');
  const [priceMaterial, setPriceMaterial] = useState('');
  const [priceVal, setPriceVal] = useState('');

  // Form states for Password Change
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmNewPw, setConfirmNewPw] = useState('');
  const [pwError, setPwError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('dk_jati_auth', 'true');
      setLoginError(false);
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 2000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('dk_jati_auth');
  };

  const notify = (msg: string) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(''), 3000);
  };

  const addProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: Date.now().toString(),
      name: projName,
      location: projLoc,
      type: projType,
      imageUrl: projUrl || `https://picsum.photos/seed/${Math.random()}/800/600`,
    };
    onUpdateProjects([newProject, ...projects]);
    setProjName(''); setProjLoc(''); setProjUrl('');
    notify('Proyek baru berhasil ditambahkan!');
  };

  const deleteProject = (id: string) => {
    if (confirm('Hapus proyek ini?')) {
      onUpdateProjects(projects.filter(p => p.id !== id));
      notify('Proyek berhasil dihapus.');
    }
  };

  const addPrice = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: PriceItem = {
      id: Date.now().toString(),
      type: priceType,
      size: priceSize,
      material: priceMaterial,
      startingPrice: priceVal
    };
    onUpdatePrices([...prices, newItem]);
    setPriceType(''); setPriceSize(''); setPriceMaterial(''); setPriceVal('');
    notify('Daftar harga berhasil diperbarui!');
  };

  const deletePrice = (id: string) => {
    onUpdatePrices(prices.filter(p => p.id !== id));
    notify('Harga dihapus.');
  };

  const updateService = (id: string, updates: Partial<Service>) => {
    const updated = services.map(s => s.id === id ? { ...s, ...updates } : s);
    onUpdateServices(updated);
    notify('Layanan diperbarui!');
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPwError('');

    if (currentPw !== adminPassword) {
      setPwError('Password lama tidak sesuai.');
      return;
    }

    if (newPw !== confirmNewPw) {
      setPwError('Konfirmasi password baru tidak cocok.');
      return;
    }

    if (newPw.length < 6) {
      setPwError('Password baru minimal 6 karakter.');
      return;
    }

    onUpdatePassword(newPw);
    setCurrentPw('');
    setNewPw('');
    setConfirmNewPw('');
    notify('Password admin berhasil diperbarui!');
  };

  // Login View
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-teak flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1542662565-7e4b66bae529" className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md relative z-10 border border-white/20">
          <div className="text-center mb-10">
            <div className="bg-teak text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teak/20">
              <Lock size={32} />
            </div>
            <h1 className="text-3xl font-bold text-teak font-serif mb-2">Panel Admin</h1>
            <p className="text-gray-500">Silakan masukkan kata sandi akses</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Kata Sandi</label>
              <input 
                type="password" 
                autoFocus
                className={`w-full bg-stone-100 border-2 rounded-2xl px-6 py-4 outline-none transition-all ${loginError ? 'border-red-400 animate-pulse' : 'border-transparent focus:border-teak/20 focus:bg-white'}`}
                placeholder="Masukkan password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              {loginError && (
                <p className="text-red-500 text-xs flex items-center gap-1 mt-2 ml-1">
                  <AlertCircle size={14} /> Password salah, silakan coba lagi.
                </p>
              )}
            </div>
            
            <button 
              type="submit"
              className="w-full bg-teak text-white py-5 rounded-2xl font-bold shadow-xl shadow-teak/30 hover:bg-teak/90 transition-all flex items-center justify-center gap-2"
            >
              Masuk Dashboard <ChevronRight size={18} />
            </button>
          </form>

          <Link to="/" className="block text-center mt-8 text-sm text-gray-400 hover:text-teak transition-colors">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  // Admin Dashboard View
  return (
    <div className="min-h-screen bg-[#f8f5f0] flex flex-col md:flex-row animate-in fade-in duration-500">
      {/* Sidebar Admin */}
      <aside className="w-full md:w-64 bg-teak text-white md:min-h-screen p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10">
          <Settings className="text-amber-400" />
          <h2 className="font-bold text-xl tracking-tight">Admin CMS</h2>
        </div>
        
        <nav className="space-y-2 flex-grow">
          <button 
            onClick={() => setActiveTab('proyek')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'proyek' ? 'bg-white text-teak font-bold shadow-lg' : 'hover:bg-white/10'}`}
          >
            <LayoutGrid size={18} /> Portofolio
          </button>
          <button 
            onClick={() => setActiveTab('layanan')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'layanan' ? 'bg-white text-teak font-bold shadow-lg' : 'hover:bg-white/10'}`}
          >
            <Hammer size={18} /> Layanan
          </button>
          <button 
            onClick={() => setActiveTab('harga')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'harga' ? 'bg-white text-teak font-bold shadow-lg' : 'hover:bg-white/10'}`}
          >
            <Tag size={18} /> Daftar Harga
          </button>
          <button 
            onClick={() => setActiveTab('keamanan')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'keamanan' ? 'bg-white text-teak font-bold shadow-lg' : 'hover:bg-white/10'}`}
          >
            <ShieldCheck size={18} /> Keamanan
          </button>
        </nav>

        <div className="pt-6 border-t border-white/10 space-y-4">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-200 transition-all"
          >
            <LogOut size={18} /> Keluar Sesi
          </button>
          <Link to="/" className="text-sm text-stone-400 hover:text-white flex items-center gap-2 transition-colors px-4">
            <ChevronRight size={14} className="rotate-180" /> Ke Website
          </Link>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-4 md:p-10 max-w-5xl">
        {success && (
          <div className="fixed top-24 right-10 z-[100] bg-white border-l-4 border-green-500 shadow-2xl p-4 rounded-lg flex items-center gap-3 animate-in slide-in-from-right duration-300">
            <CheckCircle className="text-green-500" />
            <span className="font-medium text-gray-700">{success}</span>
          </div>
        )}

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-teak capitalize font-serif">
            {activeTab === 'keamanan' ? 'Pengaturan Keamanan' : `Manajemen ${activeTab}`}
          </h1>
          <p className="text-gray-500">
            {activeTab === 'keamanan' ? 'Perbarui akses masuk ke panel administrator.' : `Kelola konten yang tampil pada halaman ${activeTab}.`}
          </p>
        </header>

        {/* Tab: Proyek */}
        {activeTab === 'proyek' && (
          <div className="space-y-10">
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus className="text-teak" /> Tambah Proyek Baru</h3>
              <form onSubmit={addProject} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  placeholder="Nama Proyek" required
                  className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20"
                  value={projName} onChange={(e) => setProjName(e.target.value)}
                />
                <input 
                  placeholder="Lokasi (cth: Solo, Jateng)" required
                  className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20"
                  value={projLoc} onChange={(e) => setProjLoc(e.target.value)}
                />
                <select 
                  className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20 appearance-none"
                  value={projType} onChange={(e) => setProjType(e.target.value as any)}
                >
                  <option>Joglo</option>
                  <option>Rumah Kayu</option>
                  <option>Gazebo</option>
                  <option>Villa</option>
                  <option>Lainnya</option>
                </select>
                <input 
                  placeholder="URL Gambar"
                  className="w-full bg-stone-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20"
                  value={projUrl} onChange={(e) => setProjUrl(e.target.value)}
                />
                <button type="submit" className="md:col-span-2 bg-teak text-white py-4 rounded-xl font-bold shadow-lg shadow-teak/10 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Plus size={20} /> Tambah ke Portofolio
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 group relative">
                  <img src={p.imageUrl} alt={p.name} className="w-full aspect-video object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 truncate">{p.name}</h4>
                    <p className="text-xs text-gray-500">{p.location} • {p.type}</p>
                  </div>
                  <button 
                    onClick={() => deleteProject(p.id)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Layanan */}
        {activeTab === 'layanan' && (
          <div className="space-y-6">
            {services.map(s => (
              <div key={s.id} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6">
                <div className="w-20 h-20 bg-teak/5 rounded-2xl flex items-center justify-center text-teak shrink-0">
                  {getIcon(s.icon)}
                </div>
                <div className="flex-1 space-y-4">
                  <input 
                    className="text-lg font-bold w-full bg-transparent border-b border-transparent focus:border-teak/30 outline-none"
                    value={s.title}
                    onChange={(e) => updateService(s.id, { title: e.target.value })}
                  />
                  <textarea 
                    className="text-sm text-gray-500 w-full bg-transparent border rounded-xl p-3 focus:border-teak/30 outline-none resize-none"
                    rows={2}
                    value={s.description}
                    onChange={(e) => updateService(s.id, { description: e.target.value })}
                  />
                  <div className="flex gap-4">
                    <input 
                      className="text-xs bg-stone-50 px-3 py-1 rounded-lg border-none"
                      value={s.estimatedTime}
                      onChange={(e) => updateService(s.id, { estimatedTime: e.target.value })}
                      placeholder="Estimasi waktu"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Harga */}
        {activeTab === 'harga' && (
          <div className="space-y-10">
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus className="text-teak" /> Tambah Baris Harga</h3>
              <form onSubmit={addPrice} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input placeholder="Jenis (cth: Rumah Kayu)" required className="bg-stone-50 border-none rounded-xl px-4 py-3 text-sm outline-none" value={priceType} onChange={e => setPriceType(e.target.value)} />
                <input placeholder="Ukuran (cth: 4x6m)" required className="bg-stone-50 border-none rounded-xl px-4 py-3 text-sm outline-none" value={priceSize} onChange={e => setPriceSize(e.target.value)} />
                <input placeholder="Material" required className="bg-stone-50 border-none rounded-xl px-4 py-3 text-sm outline-none" value={priceMaterial} onChange={e => setPriceMaterial(e.target.value)} />
                <input placeholder="Harga Mulai" required className="bg-stone-50 border-none rounded-xl px-4 py-3 text-sm outline-none" value={priceVal} onChange={e => setPriceVal(e.target.value)} />
                <button type="submit" className="lg:col-span-4 bg-teak text-white py-3 rounded-xl font-bold text-sm">Update Daftar Harga</button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-stone-50 text-gray-500 border-b">
                    <th className="p-4">Jenis</th>
                    <th className="p-4">Ukuran</th>
                    <th className="p-4">Material</th>
                    <th className="p-4">Harga</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {prices.map(item => (
                    <tr key={item.id}>
                      <td className="p-4 font-bold">{item.type}</td>
                      <td className="p-4">{item.size}</td>
                      <td className="p-4 text-xs italic">{item.material}</td>
                      <td className="p-4 font-bold text-nature">{item.startingPrice}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => deletePrice(item.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab: Keamanan */}
        {activeTab === 'keamanan' && (
          <div className="max-w-xl mx-auto md:mx-0">
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teak/10 p-4 rounded-2xl text-teak">
                  <KeyRound size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ganti Password Admin</h3>
                  <p className="text-xs text-gray-400">Pastikan password baru Anda sulit ditebak namun mudah diingat.</p>
                </div>
              </div>

              <form onSubmit={handleUpdatePassword} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password Lama</label>
                  <input 
                    type="password" required
                    className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20"
                    placeholder="Masukkan password saat ini"
                    value={currentPw} onChange={(e) => setCurrentPw(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password Baru</label>
                  <input 
                    type="password" required
                    className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20"
                    placeholder="Minimal 6 karakter"
                    value={newPw} onChange={(e) => setNewPw(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Konfirmasi Password Baru</label>
                  <input 
                    type="password" required
                    className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teak/20"
                    placeholder="Ulangi password baru"
                    value={confirmNewPw} onChange={(e) => setConfirmNewPw(e.target.value)}
                  />
                </div>

                {pwError && (
                  <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm flex items-center gap-3">
                    <AlertCircle size={18} /> {pwError}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-teak text-white py-4 rounded-2xl font-bold shadow-xl shadow-teak/20 hover:opacity-90 transition-all"
                >
                  Simpan Password Baru
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
