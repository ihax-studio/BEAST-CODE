import React from 'react';
import { motion } from 'motion/react';
import { HapticButton } from './HapticButton';

interface StartScreenProps {
  mode: 'START' | 'RESUME';
  onStart: () => void;
  onResume: () => void;
  onRestart: () => void;
  onSkip: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ mode, onStart, onResume, onRestart, onSkip }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 bg-black/20 backdrop-blur-[15px]`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="bg-white p-10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center max-w-[400px] w-full mx-4 text-center"
      >
        <div className="text-5xl mb-5 text-black"></div>
        
        {mode === 'START' && (
          <div className="w-full flex flex-col items-center">
            <HapticButton 
              onClick={onStart} 
              className="inline-block px-6 py-3 mb-3 bg-[#007aff] text-white font-semibold rounded-xl hover:scale-[0.98] transition-transform select-none"
            >
              HTML CSS JavaScriptの書き方から学ぶ
            </HapticButton>
            <HapticButton 
              onClick={onSkip} 
              className="text-[#007aff] text-sm hover:underline transition-colors focus:outline-none bg-transparent"
            >
              スキップ
            </HapticButton>
          </div>
        )}

        {mode === 'RESUME' && (
          <div className="w-full flex flex-col items-center space-y-3">
            <HapticButton 
              onClick={onResume} 
              className="w-full py-3 bg-[#007aff] text-white font-semibold rounded-xl hover:scale-[0.98] transition-transform select-none"
            >
              続きから学ぶ
            </HapticButton>
            <HapticButton 
              onClick={onRestart} 
              className="w-full py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              最初から学び直す
            </HapticButton>
            <div className="pt-2">
              <HapticButton 
                onClick={onSkip} 
                className="text-[#007aff] text-sm hover:underline transition-colors focus:outline-none bg-transparent"
              >
                スキップ
              </HapticButton>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
