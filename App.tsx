
import React, { useState } from 'react';
import { ViewState } from './types';
import { useUserStore } from './stores/useUserStore';
import { MainLayout } from './layouts/MainLayout';
import { OceanBackground } from './components/ocean/OceanBackground';

// Pages
import { AuthView } from './pages/auth/AuthView';
import { HomeView } from './pages/home/HomeView';
import { BlockchainView } from './pages/blockchain/BlockchainView';
import { CheckinView } from './pages/checkin/CheckinView';
import { CommunityView } from './pages/community/CommunityView';
import { MallView } from './pages/mall/MallView';
import { StatsView } from './pages/stats/StatsView';
import { MapView } from './pages/map/MapView';

export const App = () => {
  const [view, setView] = useState<ViewState>('auth');
  const { user, login, logout, addPoints, spendPoints } = useUserStore();

  const handleLogin = () => {
    login();
    setView('home');
  };

  const handleLogout = () => {
    logout();
    setView('auth');
  };

  const handleCheckIn = () => {
    addPoints(50);
  };

  const handleBuy = (price: number) => {
    const success = spendPoints(price);
    if (success) {
      alert("兑换成功！");
    } else {
      alert("积分不足！");
    }
  };

  return (
    <>
      <OceanBackground />
      {user ? (
        <MainLayout currentView={view} setView={setView} user={user} logout={handleLogout}>
           {view === 'home' && <HomeView user={user} setView={setView} />}
           {view === 'blockchain' && <BlockchainView />}
           {view === 'checkin' && <CheckinView onCheckIn={handleCheckIn} />}
           {view === 'community' && <CommunityView />}
           {view === 'mall' && <MallView points={user.points} buyItem={handleBuy} />}
           {view === 'stats' && <StatsView />}
           {view === 'map' && <MapView />}
        </MainLayout>
      ) : (
        <div className="w-full relative z-10 overflow-y-auto">
          <AuthView onLogin={handleLogin} />
        </div>
      )}
    </>
  );
};
