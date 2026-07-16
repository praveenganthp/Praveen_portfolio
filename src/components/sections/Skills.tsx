import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { SKILLS } from '../../constants/data';

export const Skills = () => {
  return (
    <Section id="skills" style={{ background: 'var(--color-background)', padding: '100px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Technical Skills</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: 'var(--color-foreground)',
            margin: 0,
          }}>
            My Tech Stack
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {SKILLS.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '1.75rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              className="card-hover"
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  flexShrink: 0,
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  margin: 0,
                }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map(item => (
                  <span
                    key={item}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      background: 'var(--color-surface-2)',
                      color: 'var(--color-foreground)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
