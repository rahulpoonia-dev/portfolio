"use client";
import { useState } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { skills } from "@/lib/data";

type Category = "all" | "frontend" | "backend" | "tools";

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tools" },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      style={{
        padding: "7rem 2rem",
        borderTop: "1px solid var(--border-light)",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto" }}
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <span className="section-counter">02 /</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Stack
          </h2>
        </div>

        {/* Filter — mono pill tabs */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "3rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.6rem 1.25rem",
                border: "none",
                borderBottom:
                  active === cat.value
                    ? "2px solid var(--accent)"
                    : "2px solid transparent",
                background: "transparent",
                color:
                  active === cat.value
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginBottom: "-1px",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills — inline flowing tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
          }}
        >
          {filtered.map((skill, i) => (
            <span
              key={skill.name}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 400,
                padding: "0.45rem 1rem",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                color: "var(--text-secondary)",
                background: "var(--bg-card)",
                transition: "all 0.2s ease",
                cursor: "default",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${i * 30}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
