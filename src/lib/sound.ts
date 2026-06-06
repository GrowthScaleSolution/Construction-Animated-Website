'use client';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    return null;
  }
}

function playSyntheticClick(ctx: AudioContext, volume: number) {
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1200, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.05);
}

function playSyntheticPopupOpen(ctx: AudioContext, volume: number) {
  const now = ctx.currentTime;
  const playTone = (freq: number, delay: number, dur: number) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);
    gainNode.gain.setValueAtTime(0.001, now + delay);
    gainNode.gain.linearRampToValueAtTime(volume, now + delay + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start(now + delay);
    osc.stop(now + delay + dur + 0.05);
  };
  playTone(440, 0, 0.25);
  playTone(659.25, 0.06, 0.3);
}

function playSyntheticWhoosh(ctx: AudioContext, volume: number) {
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(150, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
  osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
  gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.35);
}

function playSyntheticCTAConfirm(ctx: AudioContext, volume: number) {
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
  notes.forEach((freq, index) => {
    const delay = index * 0.08;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);
    gainNode.gain.setValueAtTime(0.001, now + delay);
    gainNode.gain.linearRampToValueAtTime(volume, now + delay + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.2);
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start(now + delay);
    osc.stop(now + delay + 0.25);
  });
}

function triggerFallback(type: 'click' | 'popup' | 'whoosh' | 'cta', volume: number) {
  const ctx = getAudioContext();
  if (!ctx) return;
  switch (type) {
    case 'click': playSyntheticClick(ctx, volume); break;
    case 'popup': playSyntheticPopupOpen(ctx, volume); break;
    case 'whoosh': playSyntheticWhoosh(ctx, volume); break;
    case 'cta': playSyntheticCTAConfirm(ctx, volume); break;
  }
}

// Helper to play general sounds cleanly and safely with fallback
export function playSound(src: string, volume: number = 0.05, isMuted: boolean = true, fallbackType: 'click' | 'popup' | 'whoosh' | 'cta' = 'click') {
  if (isMuted || typeof window === 'undefined') return;
  
  let played = false;
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => { played = true; })
        .catch((err) => {
          if (err.name !== 'NotAllowedError') {
            triggerFallback(fallbackType, volume);
          }
        });
    }
    
    audio.onerror = () => {
      if (!played) {
        triggerFallback(fallbackType, volume);
        played = true;
      }
    };
  } catch (error) {
    triggerFallback(fallbackType, volume);
  }
}

// Named exports
export const playClickSound = (isMuted: boolean) => playSound('/sounds/premium-click.mp3', 0.40, isMuted, 'click');
export const playPopupOpenSound = (isMuted: boolean) => playSound('/sounds/popup-open.mp3', 0.40, isMuted, 'popup');
export const playWhooshSound = (isMuted: boolean) => playSound('/sounds/soft-whoosh.mp3', 0.0, isMuted, 'whoosh');
export const playCTAConfirmSound = (isMuted: boolean) => playSound('/sounds/cta-confirm.mp3', 0.50, isMuted, 'cta');

// Cement mixer loader sound handles loop start & stop lifecycle
let mixerAudio: HTMLAudioElement | null = null;
let syntheticMixerOsc1: OscillatorNode | null = null;
let syntheticMixerOsc2: OscillatorNode | null = null;
let syntheticMixerGain: GainNode | null = null;
let syntheticMixerLFO: OscillatorNode | null = null;

function startSyntheticMixer(ctx: AudioContext) {
  if (syntheticMixerOsc1) return;
  const now = ctx.currentTime;
  
  syntheticMixerOsc1 = ctx.createOscillator();
  syntheticMixerOsc2 = ctx.createOscillator();
  syntheticMixerGain = ctx.createGain();
  syntheticMixerLFO = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  
  syntheticMixerOsc1.type = 'sine';
  syntheticMixerOsc1.frequency.setValueAtTime(55, now);
  
  syntheticMixerOsc2.type = 'triangle';
  syntheticMixerOsc2.frequency.setValueAtTime(82.41, now);
  
  syntheticMixerLFO.frequency.setValueAtTime(1.2, now);
  lfoGain.gain.setValueAtTime(0.005, now);
  syntheticMixerGain.gain.setValueAtTime(0.012, now);
  
  syntheticMixerLFO.connect(lfoGain);
  lfoGain.connect(syntheticMixerGain.gain);
  syntheticMixerOsc1.connect(syntheticMixerGain);
  syntheticMixerOsc2.connect(syntheticMixerGain);
  syntheticMixerGain.connect(ctx.destination);
  
  syntheticMixerOsc1.start(now);
  syntheticMixerOsc2.start(now);
  syntheticMixerLFO.start(now);
}

function stopSyntheticMixer() {
  try {
    if (syntheticMixerOsc1) { syntheticMixerOsc1.stop(); syntheticMixerOsc1.disconnect(); syntheticMixerOsc1 = null; }
    if (syntheticMixerOsc2) { syntheticMixerOsc2.stop(); syntheticMixerOsc2.disconnect(); syntheticMixerOsc2 = null; }
    if (syntheticMixerLFO) { syntheticMixerLFO.stop(); syntheticMixerLFO.disconnect(); syntheticMixerLFO = null; }
    if (syntheticMixerGain) { syntheticMixerGain.disconnect(); syntheticMixerGain = null; }
  } catch (e) {}
}

export const startMixerSound = (isMuted: boolean) => {
  if (isMuted || typeof window === 'undefined') return;
  try {
    if (!mixerAudio) {
      mixerAudio = new Audio('/sounds/cement-mixer-loader.mp3');
      mixerAudio.volume = 0.015;
      mixerAudio.loop = true;
      mixerAudio.onerror = () => { const ctx = getAudioContext(); if (ctx) startSyntheticMixer(ctx); };
    }
    mixerAudio.play().catch((err) => {
      if (err.name !== 'NotAllowedError') { const ctx = getAudioContext(); if (ctx) startSyntheticMixer(ctx); }
    });
  } catch (e) {
    const ctx = getAudioContext(); if (ctx) startSyntheticMixer(ctx);
  }
};

export const stopMixerSound = () => {
  if (typeof window === 'undefined') return;
  try {
    if (mixerAudio) { mixerAudio.pause(); mixerAudio.currentTime = 0; }
    stopSyntheticMixer();
  } catch (e) {}
};
