import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { EDUCATION } from '../../constants/data';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <Section id="education">
      <SectionHeading 
        title="Education" 
        subtitle="Academic background and qualifications." 
      />
      
      <div className="flex flex-col gap-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#120c24]/90 border-purple-500/10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 text-purple-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-2">{edu.degree}</h3>
                  <div className="text-gray-300 font-medium text-lg flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                     <span>{edu.institution}</span>
                     <span className="hidden md:inline text-purple-500/50">•</span>
                     <span className="text-purple-300 font-bold">{edu.score}</span>
                  </div>
                </div>
              </div>
              <div className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm font-semibold tracking-widest whitespace-nowrap md:self-start">
                  {edu.duration}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
