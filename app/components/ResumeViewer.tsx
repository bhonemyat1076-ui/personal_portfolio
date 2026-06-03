"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface ResumeViewerProps {
  pdfFileName?: string; // e.g., "resume.pdf"
}

export default function ResumeViewer({ pdfFileName = "resume.pdf" }: ResumeViewerProps) {
  const publicPath = `/${pdfFileName}`;

  return (
    <div className="mx-auto max-w-5xl w-full flex flex-col gap-6">
      
      {/* Action Header Panel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-zinc-200/80 bg-white/40 dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md shadow-xs">
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center justify-center sm:justify-start gap-2">
            <Icon icon="vscode-icons:file-type-pdf" className="text-xl" />
            Curriculum Vitae / Resume
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Preview my background, technical stack, and engineering background.
          </p>
        </div>

        {/* Practical Download Button Actions */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
          {/* Main Download Action */}
          <a
            href={publicPath}
            download={pdfFileName}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm border bg-zinc-900 text-zinc-50 border-zinc-800 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-200 dark:hover:bg-zinc-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Icon icon="heroicons:arrow-down-tray-20-solid" className="text-base" />
            Download PDF
          </a>

          {/* Fallback View Fullscreen button for Mobile Devices */}
          <a
            href={publicPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm border border-zinc-200 bg-white/80 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-900/90 transition-all duration-200"
            title="Open in new window"
          >
            <Icon icon="heroicons:arrow-top-right-on-square-20-solid" className="text-base" />
          </a>
        </div>
      </div>

      {/* Frame Wrapper Layout */}
      <div className="relative w-full aspect-[1/1.4] sm:aspect-[4/5] md:aspect-[3/4] rounded-2xl border border-zinc-200 bg-zinc-100/50 dark:border-zinc-800 dark:bg-slate-900/20 shadow-xs overflow-hidden group">
        
        {/* Seamless PDF Viewer Layer using native Browser engine */}
        <iframe
          src={`${publicPath}#toolbar=0&navpanes=0&scrollbar=1`}
          className="w-full h-full block relative z-10"
          title="Professional Resume Preview Document"
        />

        {/* Elegant Loading Fallback state hidden behind the interactive frame layout */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-2 text-zinc-400 dark:text-zinc-500">
          <Icon icon="eos-icons:loading" className="text-3xl animate-spin text-cyan-500" />
          <span className="text-xs font-mono">Initializing Reader Engine...</span>
        </div>
      </div>

    </div>
  );
}