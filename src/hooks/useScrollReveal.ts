import { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "fade-down";

export const useScrollReveal = (animation: AnimationType = "fade-up", delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<AnimationType, string> = {
    "fade-up": "translateY(40px)",
    "fade-down": "translateY(-40px)",
    "fade-left": "translateX(-40px)",
    "fade-right": "translateX(40px)",
    "zoom-in": "scale(0.92)",
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0) scale(1)" : transforms[animation],
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  };

  return { ref, style };
};
