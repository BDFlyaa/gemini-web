
import React, { useState } from 'react';
import { Waves } from 'lucide-react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

interface AuthViewProps {
  onLogin: () => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="mb-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-4 animate-float">
          <Waves size={40} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">
          OceanGuard
        </h1>
        <p className="text-blue-200 mt-2">保护海洋，从每一个区块开始。</p>
      </div>

      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isRegister ? '加入浪潮' : '欢迎回来'}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">邮箱</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="diver@ocean.com" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">密码</label>
            <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="••••••••" />
          </div>
          <Button onClick={onLogin} className="w-full mt-4">
            {isRegister ? '注册' : '登录'}
          </Button>
          <p className="text-center text-sm text-blue-300 mt-4 cursor-pointer hover:text-white" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? '已有账号？登录' : "没有账号？注册"}
          </p>
        </div>
      </Card>
    </div>
  );
};
