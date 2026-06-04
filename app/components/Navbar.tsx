"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ResumeModal from "./ResumeModal";

// Import Menu and X icons from FontAwesome along with your existing ones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Track open state for mobile menu drawer
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-cyan-600 dark:text-cyan-200">
          Min Chit Thu
        </Link>

        {/* --- DESKTOP VIEW ACTIONS --- */}
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <span className="hidden md:block h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            {mounted && resolvedTheme === "dark" ? (
              <FontAwesomeIcon icon={faSun} className="h-4 w-4 text-amber-500" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="h-4 w-4 text-cyan-300 dark:text-cyan-400" />
            )}
          </button>

          {/* Desktop Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-cyan-600 
            px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 transition-colors"
          >
            Resume
          </button>

          {/* --- MOBILE HAMBURGER BUTTON TRIGGER --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 transition-colors"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION MENU PANEL --- */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 space-y-4 shadow-xl transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Closes menu drawer upon navigation jump
                className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
            {/* Mobile Resume Trigger */}
            <button
              onClick={() => {
                setIsMenuOpen(false); // Close mobile drawer
                setIsResumeOpen(true); // Open resume viewport dialog
              }}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-cyan-600 
              py-2.5 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      )}

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </header>
  );
}