"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { siteConfig } from "@/lib/data";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      style={{
        padding: "7rem 2rem",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto" }}
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <span className="section-counter">01 /</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            About
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
          className="md:grid-cols-[2fr_1fr]"
        >
          {/* Bio — prose heavy, like ozgur.design */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                maxWidth: "620px",
              }}
            >
              {siteConfig.bio}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                maxWidth: "620px",
              }}
            >
              {siteConfig.bio2}
            </p>

            <a
              href="#contact"
              className="link-underline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              Let&apos;s work together →
            </a>
          </div>

          {/* Info sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {siteConfig.aboutInfo.map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "1.1rem 0",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
