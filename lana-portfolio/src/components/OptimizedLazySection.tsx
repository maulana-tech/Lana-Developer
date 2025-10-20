'use client';

import { useState, useEffect, useRef, memo, ReactNode } from 'react';

interface OptimizedLazySectionProps {
  children: ReactNode;
  fallback: ReactNode;
  threshold?: number;
}

export const OptimizedLazySection = memo(function OptimizedLazySection({
  children,
  fallback,
  threshold = 0.1,
}: OptimizedLazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
});
