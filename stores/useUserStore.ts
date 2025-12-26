
import { useState } from 'react';
import { User } from '../types';

export const useUserStore = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      id: '123',
      name: '海洋卫士',
      points: 1250,
      avatar: 'https://via.placeholder.com/150'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const addPoints = (amount: number) => {
    if (user) {
      setUser({ ...user, points: user.points + amount });
    }
  };

  const spendPoints = (amount: number): boolean => {
    if (user && user.points >= amount) {
      setUser({ ...user, points: user.points - amount });
      return true;
    }
    return false;
  };

  return { user, login, logout, addPoints, spendPoints };
};
