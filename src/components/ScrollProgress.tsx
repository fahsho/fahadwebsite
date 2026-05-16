"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress");
    if (!progressBar) return;

    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = `${scrolled}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // initial

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return null;
}
