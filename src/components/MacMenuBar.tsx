import React from 'react';
import { Wifi, Battery } from 'lucide-react';

export const MacMenuBar = () => (
  <div className="h-7 w-full bg-white/70 backdrop-blur-[20px] flex items-center justify-between px-3 text-[13px] font-medium text-[#333] fixed top-0 left-0 right-0 z-40 border-b border-black/10">
    <div className="flex items-center space-x-4">
      <span className="text-[18px] pb-1 mr-1"></span>
      <span className="font-bold">Web Tutorial</span>
      <span className="hidden sm:inline hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors">File</span>
      <span className="hidden sm:inline hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors">Edit</span>
      <span className="hidden sm:inline hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors">View</span>
      <span className="hidden sm:inline hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors">Help</span>
    </div>
    <div className="flex items-center space-x-4">
      <Wifi size={14} className="cursor-pointer" />
      <Battery size={14} className="cursor-pointer" />
      <span className="tabular-nums cursor-default">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
    </div>
  </div>
);
