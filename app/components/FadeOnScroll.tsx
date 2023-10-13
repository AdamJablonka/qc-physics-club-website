"use client";
import { useState, useRef, useEffect, ReactNode } from "react";

interface FadeOnScrollProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export const FadeOnScroll: React.FC<FadeOnScrollProps> = ({
  children,
  duration = 1.5,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
          observer.unobserve(currentRef!);
        }
      });
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}s`,
      }}
    >
      {children}
    </div>
  );
};
