import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HapticButton } from './HapticButton';
import { tutorialSteps } from '../data/tutorialData';

interface TutorialWindowProps {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
}

const CompletionDot = ({ onComplete }: { onComplete: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // start expanding shortly after mount
    const t = setTimeout(() => setExpanded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white/80 rounded-b-xl">
      {/* Expanding Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: expanded ? 50 : 0 }} // large enough to cover everything
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute w-32 h-32 bg-[#007aff] rounded-full"
      />
      
      {/* Button revealing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: expanded ? 1 : 0, scale: expanded ? 1 : 0.8 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="text-white text-2xl font-bold mb-8">すべてのステップが完了しました！</div>
        <HapticButton 
          onClick={onComplete}
          className="px-8 py-3 bg-white text-[#007aff] font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          完了
        </HapticButton>
      </motion.div>
    </div>
  );
}

export const TutorialWindow: React.FC<TutorialWindowProps> = ({ currentStep, onNext, onPrev, onComplete }) => {
  const isFinished = currentStep >= tutorialSteps.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[860px] h-[580px] max-w-[95vw] max-h-[85vh] bg-white/85 backdrop-blur-[30px] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden border border-white/40"
    >
      {/* Mac Title Bar */}
      <div className="h-10 flex items-center px-4 border-b border-black/5 shrink-0 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center font-semibold text-[#555] text-[13px]">
          Web Fundamentals - {isFinished ? '完了' : `Step ${currentStep + 1} / ${tutorialSteps.length}`}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 p-8 sm:p-12 overflow-y-auto"
            >
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">{tutorialSteps[currentStep].title}</h2>
              {tutorialSteps[currentStep].content}
            </motion.div>
          ) : (
            <motion.div
              key="completion"
              className="absolute inset-0"
            >
               <CompletionDot onComplete={onComplete} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Nav */}
      {!isFinished && (
        <div className="h-16 bg-gray-50/50 border-t border-black/5 flex items-center justify-between px-6 shrink-0">
          <HapticButton 
            onClick={onPrev}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors text-[13px] ${currentStep === 0 ? 'text-gray-400 cursor-not-allowed opacity-50' : 'text-gray-600 hover:bg-black/5'}`}
          >
            <ChevronLeft size={16} className="mr-1" /> 戻る
          </HapticButton>
          <div className="flex space-x-2">
            {tutorialSteps.map((_, idx) => (
              <div key={idx} className={`transition-all duration-300 rounded-full ${idx === currentStep ? 'w-5 h-2 bg-[#007aff]' : 'w-2 h-2 bg-black/10'}`} />
            ))}
          </div>
          <HapticButton 
            onClick={onNext}
            className="flex items-center px-4 py-2 bg-[#007aff] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors text-[13px] shadow-sm"
          >
            {currentStep === tutorialSteps.length - 1 ? '完了へ' : '次へ'} <ChevronRight size={16} className="ml-1" />
          </HapticButton>
        </div>
      )}
    </motion.div>
  );
}
