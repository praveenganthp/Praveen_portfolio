import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, className, centered = false }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-16 md:mb-24 flex flex-col", centered ? "items-center text-center" : "items-start", className)}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-semibold tracking-widest text-purple-400 uppercase"
      >
        {title.split(' ')[0]}
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-heading"
      >
        {title}
        <span className="text-purple-500">.</span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-purple-100/60 max-w-2xl font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
