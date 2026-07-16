import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { PROJECTS } from '../../constants/data';

// Color map per project type
const typeColors: Record<string, { bg: string; text: string; accent: string }> = {
  'Healthcare Platform': { bg: '#e8f4e8', text: '#2d6a2d', accent: '#4caf50' },
  'AI / SaaS':          { bg: '#e8eaf6', text: '#283593', accent: '#3f51b5' },
  'SaaS Platform':      { bg: '#fff3e0', text: '#e65100', accent: '#F5A623' },
  'Full Stack':         { bg: '#fce4ec', text: '#880e4f', accent: '#e91e63' },
};

const illustrationColors = [
  { bg: '#e8f4e8', dot: '#4caf50', line: '#a5d6a7' },
  { bg: '#e8eaf6', dot: '#3f51b5', line: '#9fa8da' },
  { bg: '#fff3e0', dot: '#F5A623', line: '#ffe082' },
  { bg: '#fce4ec', dot: '#e91e63', line: '#f48fb1' },
];

export const Projects = () => {
  return (
    <Section id="projects" style={{ background: 'var(--color-background)', padding: '100px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Featured Work</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: 'var(--color-foreground)',
            margin: 0,
          }}>
            Projects
          </h2>
          <div style={{ width: '48px', height: '4px', background: 'var(--color-accent)', borderRadius: '2px', marginTop: '1rem' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map((project, index) => {
            const color = typeColors[project.type] || typeColors['SaaS Platform'];
            const illus = illustrationColors[index % illustrationColors.length];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                  className="card-hover project-grid"
                >
                  {/* Visual side */}
                  <div
                    style={{
                      background: illus.bg,
                      padding: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '260px',
                      order: index % 2 === 0 ? 2 : 1,
                    }}
                    className="project-visual"
                  >
                    {/* Abstract project illustration */}
                    <div style={{
                      width: '100%',
                      maxWidth: '260px',
                      background: 'white',
                      borderRadius: '14px',
                      padding: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    }}>
                      {/* Mock browser bar */}
                      <div style={{ display: 'flex', gap: '5px', marginBottom: '14px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }} />
                      </div>
                      {/* Content bars */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ height: '10px', borderRadius: '5px', background: illus.line, width: '60%' }} />
                        <div style={{ height: '7px', borderRadius: '4px', background: illus.line, opacity: 0.6, width: '90%' }} />
                        <div style={{ height: '7px', borderRadius: '4px', background: illus.line, opacity: 0.4, width: '75%' }} />
                        <div style={{ height: '40px', borderRadius: '8px', background: illus.bg, border: `1px solid ${illus.line}`, marginTop: '6px' }} />
                        <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                          <div style={{ height: '24px', borderRadius: '6px', background: illus.dot, flex: 1 }} />
                          <div style={{ height: '24px', borderRadius: '6px', background: illus.line, flex: 2 }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div style={{
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    order: index % 2 === 0 ? 1 : 2,
                  }}>
                    {/* Type badge */}
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      background: color.bg,
                      color: color.text,
                      marginBottom: '1rem',
                      alignSelf: 'flex-start',
                    }}>
                      {project.type}
                    </span>

                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 400,
                      color: 'var(--color-foreground)',
                      margin: '0 0 0.3rem',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--color-accent)',
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}>
                      {project.subtitle}
                    </p>

                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          padding: '3px 10px',
                          borderRadius: '999px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          background: 'var(--color-surface-2)',
                          color: 'var(--color-muted)',
                          border: '1px solid var(--color-border)',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights (collapsed) */}
                    <ul style={{ margin: '0 0 1.5rem', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color.accent, marginTop: '7px', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      {project.linkLive ? (
                        <a
                          href={project.linkLive}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '9px 20px',
                            borderRadius: '8px',
                            background: 'var(--color-accent)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                            transition: 'background 0.2s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-dark)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-accent)')}
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '9px 20px',
                          borderRadius: '8px',
                          background: 'var(--color-surface-2)',
                          color: 'var(--color-muted)',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          border: '1px solid var(--color-border)',
                        }}>
                          Confidential
                        </span>
                      )}
                      {project.linkGithub && (
                        <a
                          href={project.linkGithub}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '38px',
                            height: '38px',
                            borderRadius: '8px',
                            background: 'var(--color-surface-2)',
                            color: 'var(--color-muted)',
                            border: '1px solid var(--color-border)',
                            transition: 'all 0.2s',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)'; }}
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-grid { grid-template-columns: 1fr !important; }
          .project-visual { order: 1 !important; min-height: 180px !important; }
        }
      `}</style>
    </Section>
  );
};
