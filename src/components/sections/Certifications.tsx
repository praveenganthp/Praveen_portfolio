import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { CERTIFICATIONS, EDUCATION } from '../../constants/data';
import { Award, GraduationCap } from 'lucide-react';

export const Certifications = () => {
  return (
    <Section id="certifications" style={{ background: 'var(--color-surface)', padding: '100px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Credentials</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: 'var(--color-foreground)',
            margin: 0,
          }}>
            Certifications & Education
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="cred-grid">
          {/* Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,166,35,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={18} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem', margin: 0, color: 'var(--color-foreground)' }}>
                Certifications
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-accent)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-foreground)', margin: 0 }}>
                      {cert.title}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>{cert.duration}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, margin: '0 0 6px' }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0, lineHeight: 1.6 }}>
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,166,35,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={18} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem', margin: 0, color: 'var(--color-foreground)' }}>
                Education
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-accent)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-foreground)', margin: 0 }}>
                      {edu.degree}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>{edu.duration}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, margin: '0 0 4px' }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>
                    {edu.score}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cred-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
};
