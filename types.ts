
export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  estimatedTime: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  type: 'Joglo' | 'Rumah Kayu' | 'Gazebo' | 'Villa' | 'Lainnya';
  imageUrl: string;
  beforeImageUrl?: string;
}

export interface PriceItem {
  id: string;
  type: string;
  size: string;
  material: string;
  startingPrice: string;
}
