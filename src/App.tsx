/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StartScreen } from './components/StartScreen';
import { MacMenuBar } from './components/MacMenuBar';
import { TutorialWindow } from './components/TutorialWindow';
import { HapticProvider } from './utils/haptics';

type AppState = 'LOADING' | 'START' | 'RESUME' | 'TUTORIAL' | 'EXITING';

export default function App() {
  const [appState, setAppState] = useState<AppState>('LOADING');
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const savedStep = localStorage.getItem('tutorialStep');
    if (savedStep && parseInt(savedStep, 10) > 0) {
      setCurrentStep(parseInt(savedStep, 10));
      setAppState('RESUME');
    } else {
      setAppState('START');
    }
  }, []);

  const handleStart = () => {
    setAppState('TUTORIAL');
    setCurrentStep(0);
    localStorage.setItem('tutorialStep', '0');
  };

  const handleResume = () => {
    setAppState('TUTORIAL');
  };

  const handleRestart = () => {
    setCurrentStep(0);
    localStorage.setItem('tutorialStep', '0');
    setAppState('TUTORIAL');
  };

const executeExit = () => {     
  setAppState('EXITING');     
  setTimeout(() => {       
    // /assets/ を削除して、ルート直下のファイルを指定します
    window.location.href = 'beast-code.netlify.app/tt.html';     
  }, 700);   
}



  const handleSkip = () => {
    executeExit();
  };
  
  const handleComplete = () => {
    localStorage.removeItem('tutorialStep'); // clear progress
    executeExit();
  };

  const nextStep = () => {
    const next = currentStep + 1;
    setCurrentStep(next);
    localStorage.setItem('tutorialStep', next.toString());
  };

  const prevStep = () => {
    const prev = Math.max(0, currentStep - 1);
    setCurrentStep(prev);
    localStorage.setItem('tutorialStep', prev.toString());
  };

  if (appState === 'LOADING') return null;

  return (
    <>
      <HapticProvider />
      <motion.div
        animate={appState === 'EXITING' ? { scale: 3, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="h-screen w-screen overflow-hidden relative bg-gradient-to-br from-[#ff9a9e] via-[#fecfef] to-[#fecfef]"
      >
        <MacMenuBar />
        
        <AnimatePresence>
          {(appState === 'START' || appState === 'RESUME') && (
            <StartScreen
              mode={appState}
              onStart={handleStart}
              onResume={handleResume}
              onRestart={handleRestart}
              onSkip={handleSkip}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {appState === 'TUTORIAL' && (
            <TutorialWindow 
              currentStep={currentStep} 
              onNext={nextStep} 
              onPrev={prevStep} 
              onComplete={handleComplete}
            />
          )}
        </AnimatePresence>

      </motion.div>
    </>
  );
}

