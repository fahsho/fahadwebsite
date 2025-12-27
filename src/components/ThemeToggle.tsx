"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 font-mono text-xs opacity-0">
        <span className="h-4 w-8 rounded-full bg-foreground/10" />
        <span>SIGNAL</span>
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 font-mono text-xs hover:text-accent transition-colors group"
      aria-label="Toggle Signal vs Noise"
    >
      <div className={`h-4 w-8 rounded-full p-1 transition-colors border border-foreground/20 ${theme === 'dark' ? 'bg-accent/20' : 'bg-foreground/5'}`}>
        <div className={`h-full aspect-square rounded-full transition-all duration-300 ${theme === 'dark' ? 'translate-x-full bg-accent' : 'translate-x-0 bg-foreground/40'}`} />
      </div>
      <span className="tracking-widest uppercase">
        {theme === "dark" ? "SIGNAL" : "NOISE"}
      </span>
    </button>
  );
}

