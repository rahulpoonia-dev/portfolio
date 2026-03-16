"use client";
import { useTypewriter } from "@/lib/useTypeWriter";
import { siteConfig } from "@/lib/data";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Engineer",
  "Next.js Developer",
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 px-3 py-1.5 rounded-full mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Available for work
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-4 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {siteConfig.name}
              </span>
              <br />
              <span className="text-zinc-400 dark:text-zinc-500 font-normal text-3xl sm:text-4xl md:text-5xl">
                {typed}
                <span className="inline-block w-0.5 h-8 sm:h-10 bg-blue-500 ml-1 align-middle animate-blink" />
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-zinc-100 dark:border-zinc-800">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "5+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — Code Block */}
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 shadow-xl">
              {/* Window Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700/60">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  rahul.ts
                </span>
              </div>

              {/* Code Content */}
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 font-mono text-sm leading-7">

                <div>
                  <span className="text-blue-600 dark:text-blue-400">const </span>
                  <span className="text-zinc-900 dark:text-zinc-100">rahul </span>
                  <span className="text-zinc-500 dark:text-zinc-400">= </span>
                  <span className="text-zinc-900 dark:text-zinc-100">{"{"}</span>
                </div>

                <div className="pl-5">
                  <span className="text-emerald-600 dark:text-emerald-400">name</span>
                  <span className="text-zinc-500 dark:text-zinc-400">: </span>
                  <span className="text-amber-600 dark:text-amber-400">&quot;Rahul&quot;</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-emerald-600 dark:text-emerald-400">role</span>
                  <span className="text-zinc-500 dark:text-zinc-400">: </span>
                  <span className="text-amber-600 dark:text-amber-400">&quot;Full Stack Developer&quot;</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-emerald-600 dark:text-emerald-400">skills</span>
                  <span className="text-zinc-500 dark:text-zinc-400">: </span>
                  <span className="text-zinc-900 dark:text-zinc-100">[</span>
                </div>

                {["React", "Next.js", "Node.js", "TypeScript"].map((skill) => (
                  <div key={skill} className="pl-10">
                    <span className="text-amber-600 dark:text-amber-400">&quot;{skill}&quot;</span>
                    <span className="text-zinc-500">,</span>
                  </div>
                ))}

                <div className="pl-5">
                  <span className="text-zinc-900 dark:text-zinc-100">]</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-emerald-600 dark:text-emerald-400">available</span>
                  <span className="text-zinc-500 dark:text-zinc-400">: </span>
                  <span className="text-blue-600 dark:text-blue-400">true</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div className="pl-5">
                  <span className="text-emerald-600 dark:text-emerald-400">location</span>
                  <span className="text-zinc-500 dark:text-zinc-400">: </span>
                  <span className="text-amber-600 dark:text-amber-400">&quot;Jaipur&quot;</span>
                  <span className="text-zinc-500">,</span>
                </div>

                <div>
                  <span className="text-zinc-900 dark:text-zinc-100">{"}"}</span>
                  <span className="text-zinc-500">;</span>
                </div>

                {/* Bottom comment */}
                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700/60">
                  <span className="text-zinc-400 dark:text-zinc-500 text-xs">
                    // always open to new opportunities
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}