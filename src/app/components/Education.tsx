import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  return (
    <section
      id="education"
      style={{
        background: "#111110",
        padding: "7rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: "4rem" }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#5a5a52",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Academic Background
          </span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#faf9f6",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            padding: "3rem",
            background: "#151514",
            border: "1px solid #222220",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "#1e1e1c",
                border: "1px solid #2a2a28",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b4a594" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#faf9f6",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  marginBottom: "0.35rem",
                }}
              >
                Bachelor of Secondary Education
                <span style={{ color: "#5a5a52" }}> — </span>
                Major in English
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#6b6b62",
                  letterSpacing: "-0.01em",
                }}
              >
                Saint John Paul II College of Davao
                <span style={{ color: "#3a3a38", margin: "0 0.4rem" }}>·</span>
                Davao City, Philippines
              </p>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#b4a594",
                background: "#1e1e1c",
                border: "1px solid #2a2a28",
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Jun 2016 – Jun 2021
            </span>
          </div>
        </motion.div>

        {/* Certifications note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            color: "#3a3a38",
            marginTop: "1.5rem",
            textAlign: "center",
            letterSpacing: "0.01em",
          }}
        >
          Completed various internal certifications in HIPAA compliance, CRM platforms, and healthcare operations.
        </motion.p>
      </div>
    </section>
  );
}
