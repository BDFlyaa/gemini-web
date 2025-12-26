
import { LucideIcon } from 'lucide-react';

export type ViewState = 'home' | 'auth' | 'blockchain' | 'checkin' | 'community' | 'mall' | 'map' | 'stats';

export interface User {
  id: string;
  name: string;
  points: number;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Post {
  id: string;
  author: string;
  content: string;
  likes: number;
  time: string;
}

export interface BlockchainStep {
  title: string;
  desc: string;
  date: string;
  icon: LucideIcon;
}
