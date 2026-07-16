import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PROFILE } from '../../constants/data';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '2.5rem 0',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-foreground)' }}>
            Praveenganth V
          </span>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {['About', 'Projects', 'Experience', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {link}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer"
              style={{ color: 'var(--color-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              <FaGithub size={18} />
            </a>
            <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer"
              style={{ color: 'var(--color-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-muted)', margin: 0 }}>
            © {new Date().getFullYear()} Praveenganth V. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-sans)', fontSize: '0.82rem',
              color: 'var(--color-muted)', background: 'none', border: 'none',
              cursor: 'pointer', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
