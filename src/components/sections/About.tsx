import { Section } from "../ui/Section";
import { PROFILE } from "../../constants/data";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export const About = () => {
  return (
    <Section id="about" style={{ background: "var(--color-surface)", padding: "100px 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
          className="about-grid"
        >
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ marginBottom: "1rem" }}>
              About me
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.2,
                margin: "0 0 1.5rem",
              }}
            >
              About me
            </h2>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{PROFILE.about}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--color-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <MapPin size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                {PROFILE.location}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--color-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <Mail size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <a href={`mailto:${PROFILE.email}`} style={{ color: "var(--color-muted)", textDecoration: "none" }}>
                  {PROFILE.email}
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--color-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <Phone size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                {PROFILE.phone}
              </div>
            </div>

            <a
              href={`https://${PROFILE.linkedin}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "2rem",
                padding: "12px 28px",
                borderRadius: "8px",
                background: "var(--color-accent)",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
            >
              View LinkedIn
            </a>
          </motion.div>

          {/* Right: Photo circle with yellow bg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center" }}
            className="about-right"
          >
            <div style={{ position: "relative", width: "320px", height: "320px" }}>
              {/* Yellow circle background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  zIndex: 0,
                }}
              />
              {/* Initials / text overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(245,166,35,0.6) 0%, var(--color-accent) 100%)",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "5rem",
                    fontWeight: 400,
                    color: "white",
                    lineHeight: 1,
                    textShadow: "0 2px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  PV
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "8px",
                  }}
                >
                  Full Stack Dev
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-right { display: none !important; }
        }
      `}</style>
    </Section>
  );
};
