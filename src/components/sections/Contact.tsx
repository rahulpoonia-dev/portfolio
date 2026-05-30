"use client";
import { useState } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
          setErrorMsg("");
        }, 3000);
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 0",
    border: "none",
    borderBottom: "1px solid var(--border)",
    background: "transparent",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
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
            marginBottom: "1.5rem",
          }}
        >
          <span className="section-counter">06 /</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Get in touch
          </h2>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            color: "var(--text-secondary)",
            marginBottom: "4rem",
            maxWidth: "480px",
            lineHeight: 1.75,
          }}
        >
          Have a project in mind or just want to say hi? I&apos;ll get back to
          you within 24 hours.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
          }}
          className="md:grid-cols-2"
        >
          {/* Left — contact info */}
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginBottom: "3rem",
              }}
            >
              {[
                {
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/rahulpoonia-dev",
                  href: siteConfig.linkedin,
                },
                {
                  label: "GitHub",
                  value: "github.com/rahulpoonia-dev",
                  href: siteConfig.github,
                },
              ].map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="link-underline group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.1rem 0",
                    borderTop: i === 0 ? "1px solid var(--border)" : "none",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.9rem",
                      color: "var(--accent)",
                      transition: "transform 0.2s ease",
                    }}
                    className="group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Response note */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  flexShrink: 0,
                  animation: "blink 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Usually responds within 24 hours
              </span>
            </div>
          </div>

          {/* Right — minimal underline form */}
          <form onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={
                      {
                        ...inputStyle,
                        "::placeholder": { color: "var(--text-muted)" },
                      } as React.CSSProperties
                    }
                    onFocus={(e) =>
                      ((
                        e.currentTarget as HTMLElement
                      ).style.borderBottomColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      ((
                        e.currentTarget as HTMLElement
                      ).style.borderBottomColor = "var(--border)")
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((
                        e.currentTarget as HTMLElement
                      ).style.borderBottomColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      ((
                        e.currentTarget as HTMLElement
                      ).style.borderBottomColor = "var(--border)")
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  style={{
                    ...inputStyle,
                    resize: "none",
                    borderBottom: "1px solid var(--border)",
                  }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderBottomColor =
                      "var(--accent)")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderBottomColor =
                      "var(--border)")
                  }
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.85rem 2rem",
                    background:
                      status === "sent"
                        ? "var(--accent)"
                        : "var(--text-primary)",
                    color: "var(--bg-primary)",
                    border: "none",
                    borderRadius: "2px",
                    cursor: status === "sending" ? "wait" : "pointer",
                    transition: "opacity 0.2s ease",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Message Sent ✓"
                      : "Send Message →"}
                </button>

                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "#ef4444",
                      marginTop: "0.75rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
