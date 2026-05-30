"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="certifications"
      style={{
        padding: "4rem 2rem",
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
        {/* Header — smaller than other sections, intentionally */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <span className="section-counter">07 /</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Certifications
          </h2>
        </div>

        {/* Cert rows */}
        <div>
          {certifications.map((cert, i) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: "2rem",
                padding: "1.25rem 0",
                borderTop: "1px solid var(--border)",
                borderBottom:
                  i === certifications.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                textDecoration: "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.5s ease ${i * 100}ms`,
              }}
            >
              {/* Left — title + issuer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {/* Issuer badge */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {cert.issuer}
                </span>

                {/* Title */}
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                >
                  {cert.title}
                </span>
              </div>

              {/* Right — date + arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.date}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--accent)",
                    transition: "transform 0.2s ease",
                    display: "inline-block",
                  }}
                  className="group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
