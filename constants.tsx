
import React from 'react';
import { Home, Trees, Hammer, Compass, Users, LayoutGrid, Phone, Building2, Shovel } from 'lucide-react';
import { Service, Project, PriceItem } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Rumah Kayu Jati',
    icon: 'Home',
    description: 'Hunian eksklusif dengan sentuhan alami kayu jati grade A yang tahan lama dan estetik.',
    estimatedTime: '3-6 Bulan',
    imageUrl: 'https://picsum.photos/seed/rumah-kayu/800/600'
  },
  {
    id: '2',
    title: 'Joglo Tradisional',
    icon: 'Compass',
    description: 'Mahakarya arsitektur Jawa dengan struktur tumpang sari yang megah dan filosofis.',
    estimatedTime: '4-8 Bulan',
    imageUrl: 'https://picsum.photos/seed/joglo/800/600'
  },
  {
    id: '3',
    title: 'Gazebo & Pendopo',
    icon: 'Trees',
    description: 'Tempat berkumpul yang nyaman di halaman atau taman dengan desain terbuka.',
    estimatedTime: '2-4 Minggu',
    imageUrl: 'https://picsum.photos/seed/gazebo/800/600'
  },
  {
    id: '4',
    title: 'Rumah Villa Kayu',
    icon: 'Building2',
    description: 'Desain villa modern tropis yang menyatu dengan alam untuk investasi properti Anda.',
    estimatedTime: '4-7 Bulan',
    imageUrl: 'https://picsum.photos/seed/villa/800/600'
  },
  {
    id: '5',
    title: 'Bangunan Komersial',
    icon: 'LayoutGrid',
    description: 'Restoran, cafe, atau kantor dengan nuansa kayu yang meningkatkan prestise bisnis.',
    estimatedTime: 'Custom',
    imageUrl: 'https://picsum.photos/seed/commercial/800/600'
  },
  {
    id: '6',
    title: 'Renovasi & Bongkar Pasang',
    icon: 'Hammer',
    description: 'Layanan ahli untuk pemindahan atau perbaikan bangunan kayu tradisional.',
    estimatedTime: 'Bervariasi',
    imageUrl: 'https://picsum.photos/seed/renovation/800/600'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  { id: 'p1', name: 'Joglo Agung Solo', location: 'Surakarta', type: 'Joglo', imageUrl: 'https://picsum.photos/seed/p1/800/600' },
  { id: 'p2', name: 'Villa Kayu Merapi', location: 'Yogyakarta', type: 'Villa', imageUrl: 'https://picsum.photos/seed/p2/800/600' },
  { id: 'p3', name: 'Gazebo Jati Minimalis', location: 'Semarang', type: 'Gazebo', imageUrl: 'https://picsum.photos/seed/p3/800/600' },
  { id: 'p4', name: 'Pendopo Balai Desa', location: 'Klaten', type: 'Lainnya', imageUrl: 'https://picsum.photos/seed/p4/800/600' },
  { id: 'p5', name: 'Rumah Panggung Modern', location: 'Bandung', type: 'Rumah Kayu', imageUrl: 'https://picsum.photos/seed/p5/800/600' },
];

export const PRICE_LIST: PriceItem[] = [
  { id: 'pr1', type: 'Gazebo Kayu', size: '3x3 m', material: 'Jati Grade B', startingPrice: 'Rp 15.000.000' },
  { id: 'pr2', type: 'Gazebo Kayu', size: '3x3 m', material: 'Jati Grade A', startingPrice: 'Rp 22.000.000' },
  { id: 'pr3', type: 'Joglo Soko 20', size: '6x6 m', material: 'Jati Tua', startingPrice: 'Rp 85.000.000' },
  { id: 'pr4', type: 'Rumah Kayu', size: '6x8 m', material: 'Jati Mix', startingPrice: 'Rp 120.000.000' },
  { id: 'pr5', type: 'Pendopo Luas', size: 'Custom', material: 'Jati Pilihan', startingPrice: 'Konsultasi' },
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home size={24} />;
    case 'Trees': return <Trees size={24} />;
    case 'Hammer': return <Hammer size={24} />;
    case 'Compass': return <Compass size={24} />;
    case 'Users': return <Users size={24} />;
    case 'LayoutGrid': return <LayoutGrid size={24} />;
    case 'Phone': return <Phone size={24} />;
    case 'Building2': return <Building2 size={24} />;
    case 'Shovel': return <Shovel size={24} />;
    default: return <Hammer size={24} />;
  }
};
