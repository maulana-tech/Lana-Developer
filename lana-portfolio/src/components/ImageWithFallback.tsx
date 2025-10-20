'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconPhoto } from '@tabler/icons-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  style,
  fallbackSrc,
  priority = false,
  loading = 'lazy',
  placeholder = 'empty',
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div 
        className={`${className} bg-secondary/50 flex items-center justify-center`}
        style={{ width, height }}
      >
        <div className="text-center text-muted-foreground">
          <IconPhoto size={48} className="mx-auto mb-2 opacity-50" />
          <p className="text-sm font-medium">{alt}</p>
          <p className="text-xs opacity-75">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      onError={handleError}
      priority={priority}
      loading={!priority ? loading : undefined}
      placeholder={placeholder}
    />
  );
}