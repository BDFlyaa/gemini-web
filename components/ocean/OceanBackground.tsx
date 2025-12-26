
import React from 'react';

export const OceanBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[100px]"></div>
    </div>
  );
};
