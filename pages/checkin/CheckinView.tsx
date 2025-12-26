
import React, { useState } from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '../../components/Button';

interface CheckinViewProps {
  onCheckIn: () => void;
}

export const CheckinView: React.FC<CheckinViewProps> = ({ onCheckIn }) => {
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckIn = () => {
    setCheckedIn(true);
    onCheckIn();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-8 relative">
        <div className={`w-64 h-64 rounded-full border-4 flex items-center justify-center transition-all duration-700 ${checkedIn ? 'border-emerald-500 bg-emerald-500/10' : 'border-dashed border-cyan-500/30'}`}>
          {checkedIn ? (
            <div className="animate-bounce">
              <ShieldCheck size={80} className="text-emerald-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-emerald-100">已签到！</h3>
            </div>
          ) : (
            <div>
              <MapPin size={60} className="text-cyan-400 mx-auto mb-4 animate-pulse" />
              <p className="text-blue-200">正在定位清洁区域...</p>
            </div>
          )}
        </div>
      </div>
      
      {!checkedIn ? (
        <>
          <h2 className="text-3xl font-bold mb-2">准备好清洁了吗？</h2>
          <p className="text-blue-200 mb-8 max-w-md">在指定的海滩清洁点验证您的位置以赚取积分。</p>
          <Button onClick={handleCheckIn} className="px-8 py-3 text-lg">
            确认位置并签到
          </Button>
        </>
      ) : (
        <div className="space-y-4">
           <p className="text-emerald-200 text-lg">+50 积分已添加到您的钱包</p>
           <Button variant="secondary" onClick={() => setCheckedIn(false)}>在其他地方签到</Button>
        </div>
      )}
    </div>
  );
};
