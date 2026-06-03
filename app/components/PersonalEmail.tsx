"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactEmail() {
  const emailAddress = "minchitthu1076@gmail.com";
  // Track if the clipboard action successfully executed
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      // Flash back to the standard document copy layer layout after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text string: ", err);
    }
  };

  return (
    <div className="flex items-center gap-3 group/container w-fit">
      {/* Your original email layout hyperlink target stream */}
      <a 
        href={`mailto:${emailAddress}`} 
        className="text-lg sm:text-2xl md:text-3xl font-mono font-bold text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:underline transition-colors break-all"
      >
        {emailAddress}
      </a>

      {/* Modern, interactive clipboard floating button trigger */}
      <button
        onClick={handleCopy}
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200/60 bg-white/50 text-zinc-400 shadow-xs backdrop-blur-xs hover:border-cyan-500/40 hover:bg-white hover:text-cyan-500 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-500 dark:hover:border-cyan-400/30 dark:hover:bg-zinc-900 dark:hover:text-cyan-400 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
        title="Copy email to clipboard"
      >
        {copied ? (
          <Icon icon="heroicons:check-16-solid" className="text-base text-emerald-500 dark:text-emerald-400 animate-scaleIn" />
        ) : (
          <Icon icon="heroicons:square-2-stack-16-solid" className="text-base" />
        )}
      </button>
    </div>
  );
}