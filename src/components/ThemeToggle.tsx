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
    return <div className="h-4 w-8" aria-hidden />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className={`h-4 w-8 rounded-full p-0.5 overflow-hidden transition-colors border border-rule ${theme === "dark" ? "bg-accent/20" : "bg-foreground/5"}`}>
        <div className={`h-full aspect-square rounded-full transition-all duration-300 ${theme === "dark" ? "translate-x-3.5 bg-accent" : "translate-x-0 bg-foreground/40"}`} />
      </div>
    </button>
  );
}
