
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", variant = 'primary' }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer";
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    danger: "bg-red-500/80 hover:bg-red-500 text-white"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
