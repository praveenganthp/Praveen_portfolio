import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { PROFILE } from '../../constants/data';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = NAV_LINKS.map(link => link.name.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-[#0f0a1c]/80 backdrop-blur-md border-purple-500/10 py-4 shadow-lg" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          {PROFILE.name.split(' ')[0]}<span className="text-purple-500">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-purple-400",
                    activeSection === link.name.toLowerCase() ? "text-purple-400" : "text-gray-300"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" size="sm">
            <a href="#contact">Contact Me</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#18112b] border-b border-purple-500/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild variant="primary" className="mt-2 w-full">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
