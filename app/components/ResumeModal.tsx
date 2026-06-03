"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import ResumeViewer from "./ResumeViewer"; // Pulls your clean reader engine from earlier

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  
  // Prevent background viewport scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        // Find this outer div layer inside your ResumeModal.tsx file:
<div className="fixed inset-0 fixed-screen z-[9999] w-screen h-screen flex items-center justify-center p-4 sm:p-6 bg-transparent">
          
          {/* Backdrop Overlay (Fades in, clicks outside to close) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Modal Container Content Window (Scales and glides up) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-10 p-4 sm:p-6 my-auto max-h-[90vh] overflow-y-auto flex flex-col"
          >
            
            {/* Elegant Floating Close Icon Corner Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 shadow-xs hover:bg-zinc-50 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
              aria-label="Close layout overlay"
            >
              <Icon icon="heroicons:x-mark-20-solid" className="text-xl" />
            </button>

            {/* Injected Resume Component layout */}
            <div className="mt-4">
              <ResumeViewer pdfFileName="resume.pdf" />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}