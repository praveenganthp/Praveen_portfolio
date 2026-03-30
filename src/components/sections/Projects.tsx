import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '../../constants/data';
import { Card } from '../ui/Card';

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeading 
        title="Featured Work" 
        subtitle="Selected case studies demonstrating my frontend architecture and product development capabilities." 
      />
      
      <div className="flex flex-col gap-12 md:gap-20">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card hoverEffect={true} className="p-0 overflow-hidden bg-[#120c24] border-purple-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* High-end visual placeholder */}
                <div className="col-span-1 lg:col-span-6 aspect-video lg:aspect-auto border-b lg:border-b-0 lg:border-r border-purple-500/10 bg-[#090514] relative flex items-center justify-center p-10 overflow-hidden group-hover:bg-[#0d071a] transition-colors duration-500">
                  <div className="absolute inset-0 bg-linear-to-tr from-purple-600/5 to-transparent opacity-60" />
                  
                  {/* Abstract Representation of Project */}
                  <div className="relative w-full max-w-md aspect-[4/3] rounded-xl border border-purple-500/20 bg-[#1a1133] shadow-2xl overflow-hidden transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-700 flex flex-col">
                    {/* Fake Browser Top Bar */}
                    <div className="w-full h-8 bg-[#0b0716] border-b border-purple-500/20 flex items-center px-4 gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    {/* Content Placeholder */}
                    <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="w-1/3 h-4 rounded bg-purple-500/30" />
                      <div className="w-full h-12 rounded bg-indigo-500/10 flex items-center px-4 gap-3">
                         <div className="w-6 h-6 rounded bg-purple-500/40" />
                         <div className="w-2/3 h-2 rounded bg-purple-500/20" />
                      </div>
                      <div className="flex-1 rounded border border-purple-500/20 bg-purple-500/5" />
                    </div>
                  </div>
                </div>
                
                {/* Content side */}
                <div className="col-span-1 lg:col-span-6 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10 bg-[#120c24]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4 mb-10">
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 mb-12">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-sm text-purple-200 font-semibold px-4 py-1.5 border border-purple-500/20 bg-[#090514]/80 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    {project.linkLive && (
                      <a href={project.linkLive} target="_blank" rel="noreferrer" title="Live Preview" className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-300 shadow-[0_4px_14px_0_rgb(147,51,234,0.39)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.3)]">
                        View Live Project <ExternalLink size={18} className="ml-2" />
                      </a>
                    )}
                    {project.linkGithub && (
                      <a href={project.linkGithub} target="_blank" rel="noreferrer" title="GitHub Repo" className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#090514] border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
