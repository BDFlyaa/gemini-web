
import React from 'react';
import { Card } from '../../components/Card';
import { ShieldCheck, Search } from 'lucide-react';
import { BLOCKCHAIN_STEPS } from '../../data';

export const BlockchainView = () => (
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
      <ShieldCheck className="text-emerald-400" />
      垃圾溯源记录
    </h2>
    <div className="bg-white/5 rounded-xl p-1 mb-8">
      <div className="flex items-center px-4 py-3 border-b border-white/10 gap-2">
        <Search size={18} className="text-blue-300" />
        <input type="text" placeholder="输入记录哈希 (例如 0x7f...3a9)" className="bg-transparent w-full focus:outline-none text-white placeholder-blue-400/50" />
      </div>
    </div>
    
    <div className="relative border-l-2 border-cyan-500/30 ml-4 space-y-8 py-2">
      {BLOCKCHAIN_STEPS.map((step, idx) => (
        <div key={idx} className="relative pl-8 group">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />
          <Card className="hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-lg text-cyan-100">{step.title}</h4>
                <p className="text-blue-200 mt-1">{step.desc}</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-blue-400 font-mono bg-black/20 px-2 py-1 rounded w-fit">
                  <span>哈希: 0x7f...3a9{idx}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-blue-300 block">{step.date}</span>
                <step.icon className="inline-block mt-2 text-cyan-500/50" size={32} />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
);
