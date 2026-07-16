import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Count-up hook ── */
function useCountUp(target: number, duration = 1200, startDelay = 300) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [target, duration, startDelay]);
  return ref;
}

const STATS = [
  { value: 4,  suffix: "+", label: "Products Built",        desc: "Enterprise-grade applications" },
  { value: 2,  suffix: "+", label: "Years Experience",       desc: "In production environments" },
  { value: 20, suffix: "+", label: "Reusable Components",    desc: "Built & documented" },
  { value: 15, suffix: "+", label: "REST APIs Integrated",   desc: "Across healthcare & SaaS" },
];

const StatCard = ({ value, suffix, label, desc, delay }: typeof STATS[0] & { delay: number }) => {
  const numRef = useCountUp(value, 1100, 200 + delay);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03 }}
      style={{
        textAlign: "center",
        padding: "2rem 1.5rem",
        borderRadius: "16px",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        cursor: "default",
        transition: "box-shadow 0.25s ease",
      }}
      className="card-hover"
    >
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
        fontWeight: 400,
        color: "var(--color-foreground)",
        lineHeight: 1,
        marginBottom: "6px",
      }}>
        <span ref={numRef}>0</span>
        <span style={{ color: "var(--color-accent)" }}>{suffix}</span>
      </div>
      <div style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: "var(--color-foreground)",
        marginBottom: "4px",
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.78rem",
        color: "var(--color-muted)",
      }}>
        {desc}
      </div>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section
      id="stats"
      style={{
        background: "var(--color-background)",
        padding: "56px 0 80px",
        borderTop: "1px solid var(--color-border-soft)",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
          className="stats-grid"
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 100} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 420px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
