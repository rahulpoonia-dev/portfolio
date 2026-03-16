"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { siteConfig } from "@/lib/data";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
            Who I am
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base mb-6">
                {siteConfig.bio}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base mb-8">
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open source, and staying up to date with the latest trends in web development. I believe in writing clean, maintainable code that solves real problems.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Let&apos;s work together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Jaipur" },
                { label: "Availability", value: "Open to work" },
                { label: "Focus", value: "Full Stack Dev" },
                { label: "Experience", value: "2+ Years" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60"
                >
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}