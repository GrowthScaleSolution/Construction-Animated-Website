'use client';

// Synthetic beep generator using browser's AudioContext
export const playSyntheticBeep = (
  frequency = 800,
  duration = 0.05,
  volume = 0.02,
  type: OscillatorType = 'sine'
) => {
  if (typeof window === 'undefined') return;

  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.value = frequency;

    // Gain control (volume envelope)
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    // Exponential decay to avoid cracking pops
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Fail silently to avoid interrupting user interactions
    console.warn('Web Audio playback failed', e);
  }
};

export const playHoverSound = (isMuted: boolean) => {
  if (isMuted) return;
  // Short, high-frequency soft tick
  playSyntheticBeep(1200, 0.03, 0.01, 'sine');
};

export const playClickSound = (isMuted: boolean) => {
  if (isMuted) return;
  // Slightly lower pitch, longer click beep
  playSyntheticBeep(800, 0.06, 0.02, 'sine');
};
