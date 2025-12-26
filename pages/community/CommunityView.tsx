
import React from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Heart, Share2 } from 'lucide-react';
import { MOCK_POSTS } from '../../data';

export const CommunityView = () => (
  <div className="max-w-2xl mx-auto space-y-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">海洋社区</h2>
      <Button>+ 发布</Button>
    </div>
    
    {MOCK_POSTS.map((post) => (
      <Card key={post.id}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-sm">
            {post.author.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="font-bold">{post.author}</h4>
              <span className="text-xs text-blue-400">{post.time}</span>
            </div>
            <p className="text-blue-100 mt-2 leading-relaxed">{post.content}</p>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5">
              <button className="flex items-center gap-2 text-sm text-blue-300 hover:text-pink-400 transition-colors">
                <Heart size={16} /> {post.likes}
              </button>
              <button className="flex items-center gap-2 text-sm text-blue-300 hover:text-cyan-400 transition-colors">
                <Share2 size={16} /> 分享
              </button>
            </div>
          </div>
        </div>
      </Card>
    ))}
  </div>
);
