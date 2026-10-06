"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useEffect, useState } from "react";
export function Hero() {
  const [greeting, setGreeting] = useState("こんにちは");
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("おはようございます");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("こんにちは");
      } else {
        setGreeting("こんばんは");
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60_000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
      >
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute right-0 top-80 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-20">
        {/* Introduction */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Software Developer
          </div>

          <p className="mb-3 font-mono text-sm text-blue-600 dark:text-blue-400">
            {greeting}、I&apos;m Joshua.
          </p>

          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
          >
            Software Developer
            <span className="block text-zinc-400 dark:text-zinc-600">
              building useful things.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
            I build full-stack, backend, web, and mobile applications with a
            focus on practical solutions, clean architecture, and reliable user
            experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Full-Stack",
              "Backend",
              "TypeScript",
              "C# / .NET",
              "Python",
              "日本語 JLPT",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-zinc-100 px-3 py-1.5 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-400"
            >
              View my work
              <ArrowDown size={16} aria-hidden="true" />
            </a>

            <a
              href="/Joshua Caranzo Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Resume
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Joshua-Caranzo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
            >
              <SiGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/joshua-caranzo-655474333/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Developer terminal */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-2 font-mono text-xs text-zinc-400">
                joshua@portfolio ~
              </span>
            </div>

            {/* Terminal content */}
            <div className="space-y-5 p-5 font-mono text-sm leading-6 sm:p-7">
              {/* Whoami */}
              <div>
                <p className="text-zinc-400">
                  <span className="text-emerald-500">$</span> whoami
                </p>

                <p className="mt-1 text-zinc-800 dark:text-zinc-200">
                  Joshua H. Caranzo
                </p>
              </div>

              {/* Developer info */}
              <div>
                <p className="text-zinc-400">
                  <span className="text-emerald-500">$</span> developer --info
                </p>

                <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                  <p>
                    role:{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      Software Developer
                    </span>
                  </p>

                  <p>
                    experience:{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      2+ year
                    </span>
                  </p>

                  <p>
                    focus:{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      Full-Stack / Backend
                    </span>
                  </p>

                  <p>
                    hobbies:{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      Basketball · Travelling · Cooking
                    </span>
                  </p>
                </div>
              </div>

              {/* Primary stack */}
              <div>
                <p className="text-zinc-400">
                  <span className="text-emerald-500">$</span> stack --primary
                </p>

                <div className="mt-1 space-y-0.5 text-zinc-600 dark:text-zinc-400">
                  <p>TypeScript · C# · Python</p>
                  <p>React · Next.js · .NET</p>
                  <p>MSSQL · PostgreSQL · MySQL</p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-zinc-400">
                  <span className="text-emerald-500">$</span> certifications
                </p>

                <div className="mt-1 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                  <p>
                    <span className="text-blue-600 dark:text-blue-400">
                      JLPT
                    </span>{" "}
                    N4 · Japanese Language Proficiency Test
                  </p>

                  <p>
                    <span className="text-blue-600 dark:text-blue-400">
                      PhilNITS FE
                    </span>{" "}
                    · Fundamental Engineer
                  </p>

                  <p>
                    <span className="text-blue-600 dark:text-blue-400">
                      TOPCIT Level 3
                    </span>{" "}
                    · Competent
                  </p>
                </div>
              </div>

              {/* Cursor */}
              <p className="text-zinc-400">
                <span className="text-emerald-500">$</span>{" "}
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          {/* Decorative element */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-2xl border border-blue-500/20 bg-blue-500/5"
          />
        </div>
      </div>
    </section>
  );
}
