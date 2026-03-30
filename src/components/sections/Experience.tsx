import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { EXPERIENCE } from '../../constants/data';

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading 
        title="Experience" 
        subtitle="Where I've delivered high-impact engineering." 
      />
      
      <div className="relative border-l border-purple-500/10 ml-4 md:ml-8 space-y-16 pb-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="relative pl-10 md:pl-16"
          >
            {/* Elegant premium Timeline node */}
            <div className="absolute -left-[25px] top-8 w-12 h-12 rounded-full bg-[#090514] border-2 border-purple-500/30 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <div className="w-4 h-4 bg-linear-to-br from-purple-400 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
            
            <Card hoverEffect={true} className="border-purple-500/10 bg-[#120c24]/90 before:content-[''] before:absolute before:inset-0 before:bg-linear-to-b before:from-purple-500/5 before:to-transparent before:rounded-2xl before:pointer-events-none">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold font-heading text-white tracking-tight mb-2">{exp.role}</h3>
                  <p className="text-purple-400 text-xl font-medium tracking-wide">{exp.company}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm font-semibold tracking-widest whitespace-nowrap self-start">
                  {exp.duration}
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  <strong className="text-white font-medium">Impact: </strong>
                  {exp.description}
                </p>
                
                <div className="w-12 h-px bg-purple-500/30" />
                
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 font-light">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
