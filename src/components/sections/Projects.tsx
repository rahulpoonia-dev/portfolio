"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { projects } from "@/lib/data";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}
          >
            <span className="section-counter">04 /</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Selected Work
            </h2>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            2024 – present
          </span>
        </div>

        {/* Featured Project — large card */}
        {featured && (
          <div
            style={{
              marginBottom: "2px",
              padding: "2.5rem",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              borderRadius: "2px",
              position: "relative",
              transition: "border-color 0.2s ease",
            }}
            className="group hover:border-[var(--accent)]"
          >
            {/* Featured label */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                ★ Featured
              </span>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-muted)")
                  }
                >
                  GitHub ↗
                </a>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--text-muted)")
                    }
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              {featured.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {featured.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    padding: "0.3rem 0.7rem",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    borderRadius: "2px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Other projects — numbered list */}
        <div style={{ marginTop: "0" }}>
          {rest.map((project, i) => (
            <div
              key={project.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2.5rem 1fr",
                gap: "1.5rem",
                padding: "2rem 0",
                borderTop: "1px solid var(--border)",
                borderBottom:
                  i === rest.length - 1 ? "1px solid var(--border)" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.6s ease ${(i + 1) * 120}ms`,
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  paddingTop: "0.3rem",
                }}
              >
                0{i + 2}
              </span>

              <div>
                {/* Title + links */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.6rem",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-muted)")
                      }
                    >
                      GitHub ↗
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--text-muted)")
                        }
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                        padding: "0.2rem 0.6rem",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                        borderRadius: "2px",
                      }}
                    >
                      {t}
                    </span>
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
