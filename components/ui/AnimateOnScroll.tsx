"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-in";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: AnimationType;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  type = "fade-up",
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const animationMap: Record<AnimationType, string> = {
    "fade-up": "fadeUp",
    "fade-in": "fadeIn",
    "fade-left": "fadeLeft",
    "fade-right": "fadeRight",
    "scale-in": "scaleIn",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        animation: visible
          ? `${animationMap[type]} 0.7s ease ${delay}ms forwards`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
