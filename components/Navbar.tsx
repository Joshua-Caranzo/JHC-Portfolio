"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;

    setDarkMode(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-tight"
        >
          JHC<span className="text-blue-600">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 sm:flex">
          <a
            href="#about"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="rounded-full border border-zinc-300 p-2 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {darkMode ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="rounded-full border border-zinc-300 p-2 dark:border-zinc-700"
          >
            {darkMode ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full border border-zinc-300 p-2 dark:border-zinc-700"
          >
            {menuOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-zinc-200 px-5 py-4 sm:hidden dark:border-zinc-800">
          <div className="flex flex-col gap-4">
            {[
              ["about", "About"],
              ["experience", "Experience"],
              ["projects", "Projects"],
              ["skills", "Skills"],
              ["contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={closeMenu}
                className="text-sm text-zinc-600 dark:text-zinc-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}