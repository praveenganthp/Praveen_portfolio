import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { PROFILE } from '../../constants/data';

export const Contact = () => {
  return (
    <Section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow Behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto rounded-3xl border border-purple-500/20 bg-[#120c24]/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(147,51,234,0.1)] p-12 md:p-16 text-center flex flex-col items-center"
      >
        <span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-6 inline-block bg-purple-500/10 px-5 py-2 rounded-full border border-purple-500/20 shadow-sm">
          Get in Touch
        </span>
        
        <h2 className="text-5xl md:text-6xl font-extrabold font-heading tracking-tight text-white mb-12 leading-[1.1]">
          Let's build something <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400 drop-shadow-sm">together.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090514]/50 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <MapPin size={24} />
            </div>
            <p className="text-gray-300 font-medium">{PROFILE.location}</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090514]/50 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <Phone size={24} />
            </div>
            <a href={`tel:${PROFILE.phone}`} className="text-purple-300 font-medium">
              {PROFILE.phone}
            </a>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090514]/50 border border-purple-500/10 hover:border-purple-500/30 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <Mail size={24} />
            </div>
            <a href={`mailto:${PROFILE.email}`} className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              {PROFILE.email}
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mt-6">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 px-10">
            <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="flex gap-2 items-center">
              <FaLinkedinIn size={22} className="mr-3" />
              Connect on LinkedIn
            </a>
          </Button>
          
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-10 group">
            <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className='flex gap-2 items-center'>
              <FaGithub size={22} className="mr-3 transition-transform group-hover:scale-110" />
              GitHub Profile
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
