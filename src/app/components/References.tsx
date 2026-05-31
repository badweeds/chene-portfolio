import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const references = [
  {
    name: "Dyril Mae Joshel Miranda",
    role: "Professional Reference",
    initials: "DM",
    email: "dyrilmae.miranda@email.com",
    phone: "Available upon request",
  },
  {
    name: "Alija Salibo",
    role: "Professional Reference",
    initials: "AS",
    email: "alija.salibo@email.com",
    phone: "Available upon request",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "2", label: "Major Employers" },
  { value: "100%", label: "HIPAA Compliant" },
  { value: "B.Ed.", label: "Degree Holder" },
];

export function References() {
  return (
    <section
      id="contact"
      style={{
        background: "#faf9f6",
        padding: "7rem 0 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "#e8e4de",
            border: "1px solid #e8e4de",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "6rem",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#faf9f6",
                padding: "2rem 1.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#111110",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "#9a8c7e",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* References heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: "3rem" }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#9a8c7e",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            References
          </span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#111110",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Professional References
          </h2>
        </motion.div>

        {/* Reference cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "6rem",
          }}
        >
          {references.map((ref, i) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              style={{
                background: "#ffffff",
                border: "1px solid #e8e4de",
                borderRadius: "16px",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#f0ece6",
                    border: "1px solid #e0d8cf",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#8a7e74",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {ref.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.975rem",
                      fontWeight: 600,
                      color: "#111110",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {ref.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#9a8c7e",
                      marginTop: "2px",
                    }}
                  >
                    {ref.role}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c4b9ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.825rem",
                      color: "#6b6b62",
                    }}
                  >
                    {ref.email}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c4b9ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.825rem",
                      color: "#9a8c7e",
                      fontStyle: "italic",
                    }}
                  >
                    {ref.phone}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
          style={{
            background: "#111110",
            borderRadius: "24px",
            padding: "4rem 3rem",
            textAlign: "center",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(180,165,148,0.07) 0%, transparent 55%),
                radial-gradient(circle at 75% 30%, rgba(180,165,148,0.05) 0%, transparent 45%)`,
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#5a5a52",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Let's Connect
          </p>
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#faf9f6",
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            Open to new opportunities.
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#6b6b62",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            I'm actively looking for full-time or remote roles in customer service,
            <br />
            healthcare support, or technical operations.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="mailto:abenojachene@gmail.com"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#111110",
                background: "#faf9f6",
                padding: "0.8rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            >
              Send an email
            </a>
            <a
              href="tel:+63XXXXXXXXXX"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                color: "#9a9a90",
                padding: "0.8rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                border: "1px solid #2a2a28",
                letterSpacing: "-0.01em",
                transition: "color 0.2s, border-color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement;
                el.style.color = "#faf9f6";
                el.style.borderColor = "#5a5a52";
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement;
                el.style.color = "#9a9a90";
                el.style.borderColor = "#2a2a28";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call me
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "2rem 0",
            borderTop: "1px solid #e8e4de",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#b0a898",
              letterSpacing: "0.01em",
            }}
          >
            © {new Date().getFullYear()} Chene D. Abenoja · Davao City, Philippines
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="mailto:abenojachene@gmail.com"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "#9a8c7e",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111110")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8c7e")}
            >
              Email
          </a>
          <a
            href="https://www.linkedin.com/in/chene-abenoja-89775a167/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#9a8c7e",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111110")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8c7e")}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
