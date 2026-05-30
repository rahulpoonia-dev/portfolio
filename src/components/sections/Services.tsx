"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { services } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  monitor: (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  server: (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </svg>
  ),
  layers: (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  plug: (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 22v-5M9 7V3M15 7V3M9 7h6a4 4 0 010 8H9a4 4 0 010-8z" />
    </svg>
  ),
  chart: (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  users: (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
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
          <span className="section-counter">03 /</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Services
          </h2>
        </div>

        {/* Services list */}
        <div>
          {services.map((service, i) => (
            <div
              key={service.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2.5rem 1fr",
                gap: "2rem",
                alignItems: "start",
                padding: "2.25rem 0",
                borderTop: "1px solid var(--border)",
                borderBottom:
                  i === services.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.6s ease ${i * 80}ms`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  color: "var(--accent)",
                  paddingTop: "0.25rem",
                  flexShrink: 0,
                }}
              >
                {icons[service.icon]}
              </div>

              {/* Content */}
              <div>
                {/* Title + tag row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginBottom: "0.65rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      paddingBottom: "0.05rem",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    fontWeight: 300,
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    maxWidth: "620px",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
