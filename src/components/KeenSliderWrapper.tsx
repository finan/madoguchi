'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef } from 'react';

export default function KeenSliderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ref, slider] = useKeenSlider({
    loop: false,
    slides: { perView: 1 },
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !slider.current) return;

    const handleMouseEnter = () => {
      if (window.innerWidth >= 768) {
        slider.current?.moveToIdx(1);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        slider.current?.moveToIdx(0);
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [slider]);

  return (
    <div ref={containerRef}>
      <div ref={ref} className="keen-slider overflow-hidden rounded">
        {children}
      </div>
    </div>
  );
}
