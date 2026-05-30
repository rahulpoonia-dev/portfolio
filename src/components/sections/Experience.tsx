"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { experiences } from "@/lib/data";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
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
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <span className="section-counter">05 /</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Trajectory
          </h2>
        </div>

        {/* Experience entries */}
        <div>
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "3rem",
                padding: "2.5rem 0",
                borderTop: "1px solid var(--border)",
                borderBottom:
                  i === experiences.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.6s ease ${i * 150}ms`,
              }}
              className="flex flex-col md:grid"
            >
              {/* Left — date + company */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {exp.duration}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    maxWidth: "160px",
                  }}
                >
                  {exp.location}
                </div>
                {exp.current && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginTop: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                      }}
                    >
                      Current
                    </span>
                  </div>
                )}
              </div>

              {/* Right — role + points */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {exp.company}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {exp.description.map((point, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        color: "var(--text-secondary)",
                        lineHeight: 1.75,
                        paddingLeft: "1rem",
                        borderLeft: "1px solid var(--border)",
                      }}
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
