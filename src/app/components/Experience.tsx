import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    title: "Customer Service Advocate — Healthcare",
    company: "Optum Global Solutions || OptumRx",
    location: "Davao City",
    dates: "Jun 2023 – Mar 2026",
    tag: "Healthcare",
    bullets: [
      "Managed high-volume inbound calls for U.S.-based health insurance members, resolving inquiries related to benefits, claims, and prior authorizations.",
      "Utilized Salesforce Health Cloud and internal EHR platforms to accurately document interactions and update member records.",
      "Collaborated with clinical and billing teams to expedite prior authorization requests and reduce resolution time.",
      "Maintained strict HIPAA compliance while handling sensitive patient and insurance data across all channels.",
      "Consistently achieved or exceeded KPIs including CSAT scores, handle time, and first-call resolution rates.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "Concentrix",
    location: "Davao City",
    dates: "Jan 2022 – May 2023",
    tag: "Technical",
    bullets: [
      "Provided Tier 1 and Tier 2 technical support for software and hardware issues across diverse client accounts.",
      "Diagnosed and resolved connectivity, device configuration, and application performance issues via phone and chat.",
      "Escalated complex cases with detailed documentation to ensure seamless handoff to specialized engineering teams.",
      "Educated customers on product features and best practices, reducing repeat contact rates.",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "Concentrix",
    location: "Davao City",
    dates: "Jul 2021 – Jan 2022",
    tag: "Customer Service",
    bullets: [
      "Handled end-to-end customer inquiries for billing, account management, and service troubleshooting.",
      "Leveraged Oracle Service Cloud CRM to log tickets, track case history, and deliver consistent service quality.",
      "Processed transactions, adjustments, and refunds with a high degree of accuracy and attention to detail.",
      "Recognized multiple times for exemplary customer satisfaction scores within the first quarter of employment.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#faf9f6",
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
          style={{ marginBottom: "5rem" }}
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
            Work History
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
            Professional Experience
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.dates}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "1px solid #e8e4de",
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                      <h3
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#111110",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.68rem",
                          fontWeight: 500,
                          color: "#b4a594",
                          background: "#f0ece6",
                          padding: "0.2rem 0.7rem",
                          borderRadius: "999px",
                          letterSpacing: "0.05em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "#8a8a80",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      {exp.company}
                      <span style={{ color: "#d4cec8" }}>·</span>
                      {exp.location}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "#b0a898",
                      letterSpacing: "0.01em",
                      paddingTop: "2px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.dates}
                  </span>
                </div>

                {/* Bullets */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  {exp.bullets.map((bullet, bi) => (
                    <div
                      key={bi}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "#c4b9ae",
                          marginTop: "0.55rem",
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9rem",
                          color: "#5a5a52",
                          lineHeight: 1.75,
                        }}
                      >
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final border */}
          <div style={{ borderTop: "1px solid #e8e4de" }} />
        </div>
      </div>
    </section>
  );
}
