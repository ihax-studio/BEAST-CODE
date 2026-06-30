import React from 'react';

export const HapticProvider = () => {
  return (
    <>
      <input 
        type="checkbox" 
        id="haptic-switch" 
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        ref={(el) => {
          if (el && !el.hasAttribute('switch')) {
            el.setAttribute('switch', '');
          }
        }} 
      />
      <label 
        htmlFor="haptic-switch" 
        id="haptic-label" 
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
      ></label>
    </>
  );
};

export const triggerHaptic = () => {
  const label = document.getElementById('haptic-label');
  if (label) {
    label.click();
  }
};
