"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { experiences } from "@/lib/data";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
            Where I&apos;ve worked
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700 ml-[7px] hidden sm:block" />

            <div className="flex flex-col gap-10">
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  className={`sm:pl-10 relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                      exp.current
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white dark:bg-zinc-900 border-zinc-400 dark:border-zinc-600"
                    }`}
                  />

                  <div className="p-6 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                          {exp.duration}
                        </span>
                        {exp.current && (
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 flex-shrink-0 mt-1.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}