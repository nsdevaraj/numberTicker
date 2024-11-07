import React, { useEffect, useRef } from 'react';

interface NumberTickerProps {
  value: number;
  duration?: number;
  className?: string;
}

export function NumberTicker({ value, duration = 1000, className = '' }: NumberTickerProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const previousValue = useRef<number>(value);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animationDuration = duration;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);

    let frame = 0;
    const startValue = previousValue.current;
    const changeInValue = value - startValue;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = startValue + changeInValue * easeOutExpo(progress);

      element.textContent = Math.round(currentValue).toString();

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = value.toString();
        previousValue.current = value;
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <span
      ref={elementRef}
      className={`tabular-nums font-mono ${className}`}
    >
      {value}
    </span>
  );
}

// Easing function for smooth animation
function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}