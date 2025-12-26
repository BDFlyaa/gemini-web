
import { Product, Post, BlockchainStep } from './types';
import { MapPin, Trash2, Scale, Database } from 'lucide-react';

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: '再生海洋塑料袋', price: 500, image: 'https://images.unsplash.com/photo-1596525166418-090d235c5c0c?auto=format&fit=crop&q=80&w=300' },
  { id: '2', name: '竹制牙刷套装', price: 300, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb6dc2d?auto=format&fit=crop&q=80&w=300' },
  { id: '3', name: '海洋生物贴纸包', price: 150, image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=300' },
  { id: '4', name: '可重复使用金属吸管', price: 200, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=300' },
];

export const MOCK_POSTS: Post[] = [
  { id: '1', author: '爱丽丝·奥辛', content: '刚在阳光湾完成了海滩清洁！捡了5公斤塑料。🌊🗑️ #海洋清洁', likes: 24, time: '2小时前' },
  { id: '2', author: '鲍勃·潜水员', content: '今天潜水时看到了一只海龟。让我们保护它们的家园！🐢', likes: 56, time: '5小时前' },
];

export const BLOCKCHAIN_STEPS: BlockchainStep[] = [
  { title: '发现定位', desc: '在 A 区海滩标记污染点', date: '2023-10-01 09:30', icon: MapPin },
  { title: '清理收集', desc: '志愿者完成垃圾清理工作', date: '2023-10-01 10:15', icon: Trash2 },
  { title: '称重计量', desc: '分类称重共计 5.2kg', date: '2023-10-01 10:45', icon: Scale },
  { title: '数据上链', desc: '记录已生成哈希并永久存证', date: '2023-10-01 11:00', icon: Database },
];
