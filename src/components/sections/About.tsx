import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { PROFILE } from '../../constants/data';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <Section id="about">
      <SectionHeading 
        title="About Me" 
        subtitle="Driven by consistency, continuous learning, and high-quality delivery." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 font-light">
            <p className="text-2xl md:text-3xl text-white font-medium mb-4 font-heading">
              {PROFILE.about.split('.')[0]}.
            </p>
            <p>
              {PROFILE.about.substring(PROFILE.about.indexOf('.') + 1).trim()}
            </p>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.7, delay: 0.2 }}
           className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm aspect-square rounded-full border border-purple-500/20 bg-[#120c24]/50 backdrop-blur-3xl shadow-[0_0_50px_rgba(147,51,234,0.1)] flex items-center justify-center p-8 transition-transform hover:scale-[1.02] duration-500">
            {/* Elegant inner rings and stats */}
            <div className="absolute inset-0 rounded-full border border-purple-500/10 scale-90" />
            <div className="absolute inset-0 rounded-full border border-purple-500/5 scale-75" />
            
            <div className="text-center relative z-10 flex flex-col gap-8">
               <div>
                 <p className="text-6xl font-heading font-black text-transparent bg-clip-text bg-linear-to-b from-purple-300 to-purple-600 drop-shadow-lg">
                   2+
                 </p>
                 <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mt-3">Years Exp.</p>
               </div>
               <div className="w-16 h-px bg-purple-500/30 mx-auto" />
               <div>
                 <p className="text-3xl font-heading font-bold text-white tracking-tight">Frontend</p>
                 <p className="text-sm font-bold tracking-widest text-purple-400 uppercase mt-2">Specialist</p>
               </div>
            </div>
            
            {/* Subtle glow */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
