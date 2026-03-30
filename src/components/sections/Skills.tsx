import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { SKILLS } from '../../constants/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const Skills = () => {
  return (
    <Section id="skills" className="relative">
      <SectionHeading 
        title="Technical Arsenal" 
        subtitle="The sophisticated tools and rigorous standards I bring to every web product." 
        centered={true}
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {SKILLS.map((skillGroup, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <Card hoverEffect={true} className="h-full flex flex-col pt-10 border-purple-500/10 hover:border-purple-500/30">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                {/* Decorative large number */}
                <span className="text-8xl font-black font-heading italic text-purple-400 leading-none">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-white mb-6 tracking-tight relative z-10">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2.5 mt-auto relative z-10">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-lg bg-[#090514]/80 text-purple-100 text-sm font-medium border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/40 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </Section>
  );
};
