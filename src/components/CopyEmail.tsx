"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-accent transition-all group relative overflow-hidden"
    >
      <span className={`flex items-center gap-4 transition-transform duration-300 ${copied ? '-translate-y-12' : 'translate-y-0'}`}>
        INITIALIZE_CONTACT
        <Copy size={14} />
      </span>
      <span className={`absolute inset-0 flex items-center justify-center gap-4 transition-transform duration-300 ${copied ? 'translate-y-0' : 'translate-y-12'}`}>
        COPIED_TO_CLIPBOARD
        <Check size={14} />
      </span>
    </button>
  );
}

