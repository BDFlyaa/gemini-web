
import React from 'react';
import { MapPin } from 'lucide-react';

export const MapView = () => (
    <div className="h-[70vh] w-full rounded-2xl overflow-hidden relative glass-panel flex items-center justify-center">
        {/* 地图占位符 */}
        <div className="absolute inset-0 bg-blue-900/20" 
             style={{ 
                 backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)' 
             }}>
        </div>
        <div className="text-center z-10 p-8">
            <MapPin size={64} className="mx-auto text-cyan-400 mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold text-white mb-2">探索海洋地图</h2>
            <p className="text-blue-200 max-w-md mx-auto">
                展示清洁活动、海洋保护区和塑料污染热点的互动地图。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                 <div className="flex items-center gap-2 text-sm text-blue-300">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span> 污染
                 </div>
                 <div className="flex items-center gap-2 text-sm text-blue-300">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span> 清洁
                 </div>
                 <div className="flex items-center gap-2 text-sm text-blue-300">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span> 活动
                 </div>
                 <div className="flex items-center gap-2 text-sm text-blue-300">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span> 商店
                 </div>
            </div>
        </div>
    </div>
);
