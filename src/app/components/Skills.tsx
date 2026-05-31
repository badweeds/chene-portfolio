import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const skillGroups = [
  {
    category: "Microsoft Office 365",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b4a594" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    skills: ["Word", "Excel", "PowerPoint", "Outlook", "Teams", "OneNote", "SharePoint"],
  },
  {
    category: "CRM & Healthcare Platforms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b4a594" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    skills: ["Oracle Service Cloud", "Salesforce Health Cloud", "Healthcare CRM", "Case Management", "Member Portal"],
  },
  {
    category: "Insurance & Billing Tools",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b4a594" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    skills: ["EHR Systems", "Insurance Verification", "Claims Processing", "Prior Authorization", "Billing Support"],
  },
  {
    category: "Core Competencies",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b4a594" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    skills: ["Adaptability", "Multi-tasking", "Active Listening", "Conflict Resolution", "Technical Troubleshooting", "Cross-functional Collaboration", "HIPAA Compliance"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
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
            Expertise
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
            Skills &amp; Expertise
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5px",
            background: "#1e1e1c",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              style={{
                background: "#151514",
                padding: "2.25rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
                {group.icon}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#5a5a52",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                  }}
                >
                  {group.category}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      color: "#9a9a90",
                      background: "#1e1e1c",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "999px",
                      display: "inline-block",
                      border: "1px solid #2a2a28",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
