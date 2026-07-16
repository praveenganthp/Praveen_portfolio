import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { EDUCATION } from '../../constants/data';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <Section id="education" style={{ background: 'var(--color-background)', padding: '60px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Note: Education is now combined in Certifications section above.
            This component is kept minimal as a placeholder to avoid import errors. */}
        <div style={{ display: 'none' }}>
          {EDUCATION.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3>{edu.degree}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
