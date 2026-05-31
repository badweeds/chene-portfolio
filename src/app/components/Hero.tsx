import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#faf9f6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(180,165,148,0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(180,165,148,0.06) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "8rem 2rem 6rem",
          width: "100%",
        }}
      >
        {/* Flex container to hold text on the left, image on the right */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4rem",
          }}
        >
          {/* LEFT SIDE: Text Content */}
          <div style={{ flex: "1 1 500px", maxWidth: "100%" }}>
            <FadeUp delay={0.05}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {/* The Green Dot */}
                <span
                  style={{
                    width: "8px", 
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e", // Beautiful bright green color
                    display: "inline-block",
                    boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)", // Adds a subtle green glow
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    color: "#9a8c7e",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Available for opportunities
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "#111110",
                  marginBottom: "0",
                  maxWidth: "900px",
                }}
              >
                Chene D.
                <br />
                <span style={{ color: "#111110" }}>Abenoja</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, #d4c9be 0%, transparent 60%)",
                  margin: "2.5rem 0",
                  maxWidth: "480px",
                }}
              />
            </FadeUp>

            <FadeUp delay={0.32}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontWeight: 400,
                  color: "#5a5a52",
                  lineHeight: 1.55,
                  maxWidth: "520px",
                  letterSpacing: "-0.01em",
                }}
              >
                Customer Service Advocate &amp; Technical Support Specialist
                <br />
                <span style={{ color: "#9a8c7e" }}>based in Davao City, Philippines.</span>
              </p>
            </FadeUp>

            <FadeUp delay={0.42}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.975rem",
                  fontWeight: 400,
                  color: "#6b6b62",
                  lineHeight: 1.95,
                  maxWidth: "560px",
                  marginTop: "2rem",
                  paddingLeft: "1.25rem",
                  borderLeft: "2px solid #e0d8cf",
                }}
              >
                A dedicated professional with extensive experience in customer service, technical
                support, and healthcare operations. Committed to delivering exceptional client
                experiences through clear communication, problem-solving, and a genuine passion
                for helping people navigate complex systems with ease and confidence.
              </p>
            </FadeUp>

            <FadeUp delay={0.52} style={{ marginTop: "3rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
                <a
                  href="#experience"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    background: "#111110",
                    color: "#faf9f6",
                    padding: "0.8rem 2rem",
                    borderRadius: "999px",
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    transition: "opacity 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.75")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  View Experience
                </a>
                <a
                  href="mailto:abenojachene@gmail.com"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    color: "#6b6b62",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111110")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b6b62")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  abenojachene@gmail.com
                </a>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT SIDE: Profile Image */}
          <FadeUp delay={0.3} style={{ flex: "0 1 auto" }}>
            <div
              style={{
                width: "clamp(250px, 30vw, 320px)",
                aspectRatio: "3/4", // Keeps it in a nice portrait ID format
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(180, 165, 148, 0.3)",
                boxShadow: "0 24px 48px rgba(17, 17, 16, 0.08)",
              }}
            >
              <img
                src="/chene-id.png"
                alt="Chene D. Abenoja ID"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </FadeUp>
        </div>

        {/* Scroll indicator - kept below the flex container */}
        <FadeUp delay={0.9} style={{ marginTop: "6rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{
                width: "20px",
                height: "32px",
                border: "1.5px solid #c4b9ae",
                borderRadius: "999px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              <div
                style={{
                  width: "3px",
                  height: "6px",
                  borderRadius: "999px",
                  background: "#c4b9ae",
                }}
              />
            </motion.div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                color: "#b0a898",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Scroll to explore
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}