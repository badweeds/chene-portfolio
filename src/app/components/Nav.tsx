import { useState, useEffect } from "react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(250, 249, 246, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#111110",
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
        >
          CDA
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 450,
                color: "#6b6b62",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111110")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b6b62")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:abenojachene@gmail.com"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#faf9f6",
              background: "#111110",
              padding: "0.45rem 1.1rem",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.75")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Hire me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
