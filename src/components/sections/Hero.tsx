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
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        paddingTop: "80px",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Year stamp top-right — ozgur.design signature detail */}
      <div
        style={{
          position: "absolute",
          top: "96px",
          right: "0",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
        }}
        className="hidden md:block"
      >
        MMXXVI / Jaipur
      </div>

      <div
        style={{
          maxWidth: "780px",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.1s forwards",
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            opacity: 0,
            animation: "fadeIn 0.6s ease 0.3s forwards",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Available for work
          </span>
        </div>

        {/* Section counter */}
        <p className="section-counter" style={{ marginBottom: "1.25rem" }}>
          00 /
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
          }}
        >
          Rahul Poonia —{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
            }}
          >
            {typed}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "0.85em",
                background: "var(--accent)",
                marginLeft: "2px",
                verticalAlign: "middle",
              }}
              className="animate-blink"
            />
          </em>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "3rem",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.5s forwards",
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "4rem",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.65s forwards",
          }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.75rem 1.75rem",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.8")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            View Work →
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.75rem 1.75rem",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--text-primary)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
          >
            Résumé ↓
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.75rem 1.75rem",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--text-primary)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Divider + Stats */}
        <div
          className="hr-editorial"
          style={{
            opacity: 0,
            animation: "fadeIn 0.6s ease 0.8s forwards",
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            paddingTop: "2rem",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.9s forwards",
          }}
        >
          {[
            { value: "2+", label: "Years building" },
            { value: "5+", label: "Projects shipped" },
            { value: "10+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
