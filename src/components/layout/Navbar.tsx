import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About',      href: '#about' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);

      // Active section tracking
      const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
      const current = sectionIds.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 110 && rect.bottom >= 110;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position:       'fixed',
        top:            0,
        width:          '100%',
        zIndex:         50,
        transition:     'all 0.3s ease',
        background:     isScrolled ? 'rgba(250,248,245,0.90)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(1.6)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(1.6)' : 'none',
        borderBottom:   isScrolled ? '1px solid var(--color-border-soft)' : '1px solid transparent',
        padding:        isScrolled ? '10px 0' : '16px 0',
        boxShadow:      isScrolled ? '0 1px 20px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo / wordmark */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--color-foreground)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Praveenganth<span style={{ color: 'var(--color-accent)' }}>.dev</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '0.25rem' }}
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  color: isActive ? 'var(--color-foreground)' : 'var(--color-muted)',
                  background: isActive ? 'rgba(245,158,11,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,0,0,0.04)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }
                }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    style={{ position: 'absolute', bottom: '-2px', left: '14px', right: '14px', height: '2px', background: 'var(--color-accent)', borderRadius: '2px' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: '0.75rem',
              padding: '8px 20px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #F5A623 0%, #e8941a 100%)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 2px 10px rgba(245,158,11,0.25)',
              transition: 'all 0.2s ease',
            }}
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'var(--color-foreground)',
            padding: '7px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              background: 'rgba(250,248,245,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem 1.5rem', gap: '0.25rem' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-muted)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-surface-2)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)'; }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  marginTop: '0.75rem',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #F5A623 0%, #e8941a 100%)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
