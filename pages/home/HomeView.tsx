
import React from 'react';
import { User, ViewState } from '../../types';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { MapPin, ShieldCheck, ShoppingBag, BarChart3, Droplets } from 'lucide-react';

interface HomeViewProps {
  user: User;
  setView: (v: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ user, setView }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold">你好, {user.name} 🌊</h2>
        <p className="text-blue-200">准备好开始今天的海洋保护之旅了吗？</p>
      </div>
      <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
        <span className="text-yellow-400 font-bold">{user.points}</span>
        <span className="text-xs uppercase tracking-wider text-blue-300">积分</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setView('checkin')}>
        <MapPin className="text-cyan-400 mb-3" size={32} />
        <h3 className="text-lg font-semibold">智能签到</h3>
        <p className="text-sm text-blue-300">清理海滩赚取积分</p>
      </Card>
      <Card className="cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setView('blockchain')}>
        <ShieldCheck className="text-emerald-400 mb-3" size={32} />
        <h3 className="text-lg font-semibold">垃圾溯源</h3>
        <p className="text-sm text-blue-300">追踪回收再生全过程</p>
      </Card>
      <Card className="cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setView('mall')}>
        <ShoppingBag className="text-purple-400 mb-3" size={32} />
        <h3 className="text-lg font-semibold">生态商城</h3>
        <p className="text-sm text-blue-300">兑换环保奖励</p>
      </Card>
      <Card className="cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setView('stats')}>
        <BarChart3 className="text-pink-400 mb-3" size={32} />
        <h3 className="text-lg font-semibold">影响力统计</h3>
        <p className="text-sm text-blue-300">查看你的贡献</p>
      </Card>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="text-xl font-bold mb-4">每日任务</h3>
        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
            <Droplets size={24} />
          </div>
          <div>
            <h4 className="font-semibold">减少塑料使用</h4>
            <p className="text-sm text-blue-300">今天避免使用一次性塑料。</p>
          </div>
          <Button className="ml-auto text-xs" variant="secondary">接受</Button>
        </div>
      </Card>
      <Card>
        <h3 className="text-xl font-bold mb-4">社区精选</h3>
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-4 rounded-xl border border-white/10">
          <p className="italic text-blue-100">“海洋就是我想成为的一切。美丽、神秘、狂野而自由。”</p>
          <div className="mt-2 text-right text-sm text-cyan-400">- 海洋卫士社区</div>
        </div>
      </Card>
    </div>
  </div>
);
