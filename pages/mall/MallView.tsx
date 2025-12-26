
import React from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { MOCK_PRODUCTS } from '../../data';

interface MallViewProps {
  points: number;
  buyItem: (p: number) => void;
}

export const MallView: React.FC<MallViewProps> = ({ points, buyItem }) => (
  <div>
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-3xl font-bold">积分商城</h2>
        <p className="text-blue-200">兑换您辛苦赚取的生态积分。</p>
      </div>
      <div className="text-right">
        <span className="text-sm text-blue-300 uppercase">余额</span>
        <div className="text-2xl font-bold text-yellow-400">{points} 积分</div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_PRODUCTS.map((product) => (
        <Card key={product.id} className="group overflow-hidden">
          <div className="h-48 -mx-6 -mt-6 mb-4 overflow-hidden relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-yellow-400 text-xs font-bold px-2 py-1 rounded">
              {product.price} 积分
            </div>
          </div>
          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
          <p className="text-sm text-blue-300 mb-4">可持续 & 环保</p>
          <Button 
            className="w-full" 
            variant={points >= product.price ? 'primary' : 'secondary'}
            onClick={() => {
              if (points >= product.price) buyItem(product.price);
              else alert("积分不足！");
            }}
          >
            {points >= product.price ? '立即兑换' : '积分不足'}
          </Button>
        </Card>
      ))}
    </div>
  </div>
);
