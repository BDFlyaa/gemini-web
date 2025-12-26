
import React from 'react';
import { Card } from '../../components/Card';

export const StatsView = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">您的影响力</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="text-center py-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/40">
        <div className="text-4xl font-bold text-cyan-400 mb-2">12.5 kg</div>
        <div className="text-sm text-blue-200 uppercase tracking-wider">清理垃圾</div>
      </Card>
      <Card className="text-center py-8 bg-gradient-to-br from-purple-900/40 to-blue-900/40">
        <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
        <div className="text-sm text-blue-200 uppercase tracking-wider">参与活动</div>
      </Card>
      <Card className="text-center py-8 bg-gradient-to-br from-emerald-900/40 to-teal-900/40">
        <div className="text-4xl font-bold text-emerald-400 mb-2">Top 5%</div>
        <div className="text-sm text-blue-200 uppercase tracking-wider">社区排名</div>
      </Card>
    </div>

    <Card>
      <h3 className="text-xl font-bold mb-6">活动历史</h3>
      <div className="flex items-end gap-2 h-48 w-full px-4">
        {[40, 70, 35, 90, 60, 20, 80].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full gap-2 group cursor-pointer">
             <div 
               className="w-full bg-cyan-500/30 rounded-t-lg transition-all duration-300 group-hover:bg-cyan-400 relative"
               style={{ height: `${h}%` }}
             >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-xs p-1 rounded transition-opacity">
                  {h}分
                </div>
             </div>
             <div className="text-center text-xs text-blue-400">第 {i+1} 天</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);
