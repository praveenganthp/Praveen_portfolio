import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Section } from '../ui/Section';
import { PROFILE } from '../../constants/data';

export const Contact = () => {
  return (
    <Section id="contact" style={{ background: 'var(--color-background)', padding: '100px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="contact-grid"
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ marginBottom: '1rem' }}>Get in Touch</div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--color-foreground)',
              lineHeight: 1.15,
              margin: '0 0 1.5rem',
            }}>
              Let's build something great together
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '1rem' }}>
              I'm open to full-time opportunities, freelance projects, or just a conversation about interesting problems. Feel free to reach out.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href={`mailto:${PROFILE.email}`} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                color: 'var(--color-muted)', textDecoration: 'none', fontSize: '0.95rem',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,166,35,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                {PROFILE.email}
              </a>

              <a href={`tel:${PROFILE.phone}`} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                color: 'var(--color-muted)', textDecoration: 'none', fontSize: '0.95rem',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,166,35,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                {PROFILE.phone}
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,166,35,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                {PROFILE.location}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={`https://${PROFILE.linkedin}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '11px 22px', borderRadius: '8px',
                  background: 'var(--color-accent)', color: '#fff',
                  fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-dark)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-accent)')}
              >
                <FaLinkedinIn size={16} />
                LinkedIn
              </a>
              <a
                href={`https://${PROFILE.github}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '11px 22px', borderRadius: '8px',
                  background: 'transparent', color: 'var(--color-foreground)',
                  fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
                  border: '1.5px solid var(--color-border)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)'; }}
              >
                <FaGithub size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="contact-right"
          >
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '24px',
              padding: '3rem',
              textAlign: 'center',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
            }}>
              {/* Yellow blob */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                background: 'var(--color-accent)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'white', fontWeight: 400 }}>PV</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--color-foreground)', margin: '0 0 0.5rem' }}>
                Praveenganth V
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Full Stack Developer
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '0 0 1.5rem' }}>
                <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer"
                  style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)'; }}
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer"
                  style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)'; }}
                >
                  <FaGithub size={18} />
                </a>
                <a href={`mailto:${PROFILE.email}`}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)'; }}
                >
                  <Mail size={18} />
                </a>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                © {new Date().getFullYear()} Praveenganth V
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .contact-right { display: none !important; }
        }
      `}</style>
    </Section>
  );
};
