'use client';

import { useEffect, useRef, useState } from 'react';

export function useDeferredAnimation() {
  const [canAnimate, setCanAnimate] = useState(false);
  
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setCanAnimate(true), { timeout: 2000 });
    } else {
      setTimeout(() => setCanAnimate(true), 100);
    }
  }, []);
  
  return canAnimate;
}

export function useIntersectionObserver(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  
  return isVisible;
}
