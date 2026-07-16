import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { EXPERIENCE } from '../../constants/data';

export const Experience = () => {
  return (
    <Section id="experience" style={{ background: 'var(--color-surface)', padding: '100px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Work Experience</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: 'var(--color-foreground)',
            margin: 0,
          }}>
            Where I've Worked
          </h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--color-border)' }}>
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              style={{
                position: 'relative',
                marginBottom: index < EXPERIENCE.length - 1 ? '3.5rem' : 0,
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-2.6rem',
                top: '6px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--color-accent)',
                border: '3px solid var(--color-surface)',
                boxShadow: '0 0 0 2px var(--color-accent)',
              }} />

              {/* Card */}
              <div style={{
                background: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '2rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                className="card-hover"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--color-foreground)',
                      margin: '0 0 4px',
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span style={{
                    alignSelf: 'flex-start',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    background: 'rgba(245,166,35,0.12)',
                    color: '#b07d10',
                    border: '1px solid rgba(245,166,35,0.3)',
                    whiteSpace: 'nowrap',
                  }}>
                    {exp.duration}
                  </span>
                </div>

                <p style={{ color: 'var(--color-muted)', margin: '0.75rem 0 1rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {exp.description}
                </p>

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', marginTop: '7px', flexShrink: 0 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
