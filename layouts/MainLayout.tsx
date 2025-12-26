
import React, { useState } from 'react';
import { ViewState, User } from '../types';
import { Waves, Home, ShieldCheck, MapPin, Users, ShoppingBag, BarChart3, LogOut, Menu, X } from 'lucide-react';
import { Button } from '../components/Button';

interface MainLayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
  user: User;
  logout: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, currentView, setView, user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button 
      onClick={() => { setView(view); setIsOpen(false); }}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${currentView === view ? 'bg-cyan-500/20 text-cyan-400' : 'text-blue-200 hover:bg-white/5 hover:text-white'}`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex overflow-hidden relative">
      {/* 移动端头部 */}
      <div className="md:hidden flex items-center justify-between p-4 glass-panel sticky top-0 z-50 fixed w-full top-0 left-0 bg-[#0f172a]/90 backdrop-blur">
        <div className="flex items-center gap-2 font-bold text-xl">
           <Waves className="text-cyan-400" /> OceanGuard
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 侧边栏 */}
      <div className={`fixed inset-y-0 left-0 w-64 glass-panel border-r border-white/10 transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:block bg-[#0f172a]`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 font-bold text-2xl mb-8 text-cyan-100">
             <Waves className="text-cyan-400" /> OceanGuard
          </div>
          
          <div className="space-y-2 flex-1">
            <NavItem view="home" icon={Home} label="首页" />
            <NavItem view="blockchain" icon={ShieldCheck} label="溯源" />
            <NavItem view="checkin" icon={MapPin} label="签到" />
            <NavItem view="map" icon={MapPin} label="地图" />
            <NavItem view="community" icon={Users} label="社区" />
            <NavItem view="mall" icon={ShoppingBag} label="商城" />
            <NavItem view="stats" icon={BarChart3} label="统计" />
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-white/5">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                 {user.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <div className="font-bold truncate">{user.name}</div>
                <div className="text-xs text-blue-300">{user.points} 积分</div>
              </div>
            </div>
            <Button variant="secondary" className="w-full text-sm" onClick={logout}>
              <LogOut size={16} /> 退出
            </Button>
          </div>
        </div>
      </div>
      
      {/* 移动端遮罩 */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* 主内容区域 */}
      <main className="flex-1 overflow-y-auto relative z-10 h-screen pt-16 md:pt-0">
        <div className="max-w-6xl mx-auto p-4 md:p-8 pb-20">
          {children}
        </div>
      </main>
    </div>
  );
};
