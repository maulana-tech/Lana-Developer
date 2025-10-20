// Performance configuration helpers
export const ANIMATION_PRESETS = {
  REDUCED: {
    duration: 0,
    delay: 0,
  },
  FAST: {
    duration: 0.3,
    delay: 0,
  },
  NORMAL: {
    duration: 0.6,
    delay: 0.1,
  },
  SLOW: {
    duration: 1.0,
    delay: 0.2,
  },
};

export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getAnimationConfig = (preset: keyof typeof ANIMATION_PRESETS) => {
  if (shouldReduceMotion()) {
    return ANIMATION_PRESETS.REDUCED;
  }
  return ANIMATION_PRESETS[preset];
};

// Check if device is low-end based on available memory
export const isLowEndDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  const deviceMemory = (navigator as any).deviceMemory;
  return deviceMemory ? deviceMemory <= 4 : false;
};

// Enable heavy animations only if device is capable
export const shouldEnableHeavyAnimations = (): boolean => {
  return !isLowEndDevice() && !shouldReduceMotion();
};

export const IMAGE_OPTIMIZATION = {
  DEVICE_SIZES: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  FORMATS: ['image/avif', 'image/webp'],
  QUALITY: 75,
} as const;
