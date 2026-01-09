"use client";

import { useEffect, useState } from "react";

interface AnimatedNameProps {
  text: string;
  className?: string;
  speed?: number; // milliseconds per character
}

export function AnimatedName({ text, className = "", speed = 100 }: AnimatedNameProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isAnimating]);

  return (
    <h1 className={className}>
      {displayedText}
      {isAnimating && (
        <span className="inline-block w-[2px] h-[0.9em] bg-current ml-1 animate-pulse" />
      )}
    </h1>
  );
}

