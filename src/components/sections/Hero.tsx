import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin, Globe2, Code2, Terminal, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const TECH_STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "REST APIs",
  "Node.js",
];

const EngineerCodeCard = () => {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "620px", margin: "0 auto" }}>
      {/* Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-5rem",
          left: "-5rem",
          width: "18rem",
          height: "18rem",
          borderRadius: "50%",
          backgroundColor: "rgba(251, 191, 36, 0.2)",
          filter: "blur(3rem)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5rem",
          right: "-5rem",
          width: "18rem",
          height: "18rem",
          borderRadius: "50%",
          backgroundColor: "rgba(96, 165, 250, 0.2)",
          filter: "blur(3rem)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          borderRadius: "1rem",
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-surface)",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--color-border)",
            backgroundColor: "#f5f5f4",
            padding: "1rem 1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ height: "1rem", width: "1rem", borderRadius: "50%", backgroundColor: "#f87171" }} />
            <span style={{ height: "1rem", width: "1rem", borderRadius: "50%", backgroundColor: "#facc15" }} />
            <span style={{ height: "1rem", width: "1rem", borderRadius: "50%", backgroundColor: "#4ade80" }} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              borderRadius: "0.375rem",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              padding: "0.375rem 0.875rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <Code2 size={18} color="#f59e0b" />
            <span>engineer.ts</span>
          </div>

          <div
            style={{
              borderRadius: "9999px",
              backgroundColor: "#ecfdf5",
              padding: "0.375rem 0.875rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#047857",
              border: "1px solid #a7f3d0",
            }}
          >
            ● Active
          </div>
        </div>

        {/* Code Content */}
        <div
          style={{
            backgroundColor: "#0f172a",
            padding: "2.5rem",
            fontFamily: "monospace",
            fontSize: "1rem",
            lineHeight: 1.625,
            color: "#d1d5db",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>1</span>
            <div>
              <span style={{ color: "#38bdf8", fontWeight: 600 }}>const</span>{" "}
              <span style={{ color: "#fbbf24", fontWeight: 700 }}>engineer</span>:{" "}
              <span style={{ color: "#22d3ee" }}>Developer</span> = {"{"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              margin: "0 -2.5rem",
              padding: "0.375rem 2.5rem",
              borderLeft: "2px solid #22d3ee",
            }}
          >
            <span style={{ color: "#9ca3af", userSelect: "none", width: "1.25rem" }}>2</span>
            <div>
              <span style={{ color: "#cbd5e1" }}>name</span>:{" "}
              <span style={{ color: "#34d399", fontWeight: 500 }}>"Praveenganth V"</span>,
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>3</span>
            <div>
              <span style={{ color: "#cbd5e1" }}>role</span>:{" "}
              <span style={{ color: "#34d399", fontWeight: 500 }}>"Frontend Engineer"</span>,
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>4</span>
            <div>
              <span style={{ color: "#cbd5e1" }}>experience</span>:{" "}
              <span style={{ color: "#34d399", fontWeight: 500 }}>"2+ Years Production"</span>,
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>5</span>
            <div>
              <span style={{ color: "#cbd5e1" }}>domain</span>:{" "}
              <span style={{ color: "#34d399", fontWeight: 500 }}>"Healthcare SaaS"</span>,
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>6</span>
            <div>
              <span style={{ color: "#cbd5e1" }}>stack</span>: [<span style={{ color: "#fcd34d" }}>"React"</span>,{" "}
              <span style={{ color: "#fcd34d" }}>"TypeScript"</span>, <span style={{ color: "#fcd34d" }}>"Node.js"</span>],
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>7</span>
            <div>
              <span style={{ color: "#cbd5e1" }}>openToWork</span>:{" "}
              <span style={{ color: "#c084fc", fontWeight: 700 }}>true</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "#6b7280", userSelect: "none", width: "1.25rem" }}>8</span>
            <div>{"};"}</div>
          </div>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--color-border)",
            backgroundColor: "#f5f5f4",
            padding: "1rem 1.5rem",
            fontSize: "0.9375rem",
            color: "#4b5563",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <Terminal size={18} />
            <span>TypeScript 5.4</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#047857", fontWeight: 600 }}>
            <CheckCircle2 size={18} color="#059669" />
            <span>0 Errors</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_URL;

  const handleDownload = () => {
    if (!resumeUrl) return;
    window.open(resumeUrl, "_blank");
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = resumeUrl;
      a.download = "Praveenganth_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1000);
  };

  return (
    <section
      id="hero"
      style={{
        width: "100%",
        minHeight: "calc(100vh - 80px)",
        backgroundColor: "var(--color-background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div
        className="hero-container"
        style={{
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "grid",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 2.5rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(254, 243, 199, 0.9)",
              border: "1px solid rgba(252, 211, 77, 0.8)",
              color: "#92400e",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: "#f59e0b" }} />
            FRONTEND ENGINEER
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.06)}
            style={{
              marginTop: "1rem",
              maxWidth: "620px",
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--color-foreground)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Building Modern <br className="hero-br" /> Healthcare Applications
          </motion.h1>

          {/* Subtitle / Meta */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              marginTop: "1rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--color-muted)",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>Praveenganth V</span>
            <span style={{ color: "#d1d5db" }}>•</span>
            <span>Frontend Engineer</span>
            <span style={{ color: "#d1d5db" }}>•</span>
            <span style={{ color: "#6b7280", fontWeight: 400 }}>2+ Years Experience</span>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.18)}
            style={{
              marginTop: "1rem",
              maxWidth: "600px",
              fontSize: "1.05rem",
              color: "#4b5563",
              lineHeight: 1.7,
            }}
          >
            I build scalable healthcare applications using React, TypeScript, and Node.js, creating intuitive user
            experiences and maintainable frontend architectures for real-world products.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            {...fadeUp(0.24)}
            style={{
              marginTop: "1.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
            }}
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "0.5rem 0.875rem",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid rgba(231, 229, 228, 0.9)",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-muted)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.3)}
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.25rem",
              width: "100%",
            }}
            className="hero-buttons"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                padding: "0 1.75rem",
                height: "48px",
                borderRadius: "1rem",
                background: "linear-gradient(135deg, #F5A623 0%, #e8941a 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9375rem",
                boxShadow: "0 2px 10px rgba(245,158,11,0.25)",
                textDecoration: "none",
              }}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            {resumeUrl ? (
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                  padding: "0 1.75rem",
                  height: "48px",
                  borderRadius: "1rem",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-foreground)",
                  border: "1px solid var(--color-border)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                }}
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            ) : (
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                  padding: "0 1.75rem",
                  height: "48px",
                  borderRadius: "1rem",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-foreground)",
                  border: "1px solid var(--color-border)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  boxShadow: "var(--shadow-sm)",
                  textDecoration: "none",
                }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            )}
          </motion.div>

          {/* Status Row */}
          <motion.div
            {...fadeUp(0.36)}
            style={{
              marginTop: "1.25rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.25rem",
              fontSize: "0.9375rem",
              color: "#6b7280",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                backgroundColor: "rgba(236, 253, 245, 0.8)",
                border: "1px solid rgba(167, 243, 208, 0.8)",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
              }}
            >
              <span style={{ width: "0.625rem", height: "0.625rem", borderRadius: "50%", backgroundColor: "#10b981", boxShadow: "var(--shadow-sm)" }} />
              <span style={{ fontWeight: 600, color: "#065f46" }}>Open to Opportunities</span>
            </div>
            <span className="hero-hide-mobile" style={{ color: "#d1d5db" }}>•</span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={18} color="#9ca3af" />
              <span>Chennai, India</span>
            </div>
            <span className="hero-hide-mobile" style={{ color: "#d1d5db" }}>•</span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Globe2 size={18} color="#9ca3af" />
              <span>Remote Friendly</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Card */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <EngineerCodeCard />
        </div>
      </div>
      <style>{`
        .hero-container {
          grid-template-columns: 1.3fr 1fr;
          gap: 4rem;
        }
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .hero-br {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .hero-buttons {
            width: auto;
          }
          .hero-hide-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
