import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { CERTIFICATIONS } from '../../constants/data';
import { Award } from 'lucide-react';

export const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionHeading 
        title="Certifications" 
        subtitle="Continuous learning and professional skill validation." 
      />
      
      <div className="flex flex-col gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="flex flex-col gap-6 bg-[#120c24]/90 border-purple-500/10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 text-indigo-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <Award size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-2">{cert.title}</h3>
                    <p className="text-purple-400 font-bold text-lg mb-4">{cert.issuer}</p>
                    <p className="text-gray-400 font-light leading-relaxed max-w-3xl">{cert.description}</p>
                  </div>
                </div>
                <div className="px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-sm font-semibold tracking-widest whitespace-nowrap md:self-start">
                    {cert.duration}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
