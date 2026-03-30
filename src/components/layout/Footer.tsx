import { ArrowUp, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PROFILE } from '../../constants/data';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0714] border-t border-purple-500/10 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter text-white mb-2">
              {PROFILE.name.split(' ')[0]}<span className="text-purple-500">.dev</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Building premium digital experiences. Passionate about interfaces and pixel-perfect design.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {import.meta.env.VITE_GITHUB_URL && (
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noreferrer" title="GitHub Profile" className="p-2 bg-[#18112b] rounded-full text-gray-400 hover:text-purple-400 hover:bg-[#2a1f43] transition-colors">
                <FaGithub size={20} />
              </a>
            )}
            {import.meta.env.VITE_LINKEDIN_URL && (
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noreferrer" title="LinkedIn Profile" className="p-2 bg-[#18112b] rounded-full text-gray-400 hover:text-purple-400 hover:bg-[#2a1f43] transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            )}
            {import.meta.env.VITE_WHATSAPP_URL && (
              <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" rel="noreferrer" title="WhatsApp Contact" className="p-2 bg-[#18112b] rounded-full text-gray-400 hover:text-purple-400 hover:bg-[#2a1f43] transition-colors">
                <MessageCircle size={20} />
              </a>
            )}
          </div>
        </div>
        
        <div className="border-t border-purple-500/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
          >
            Back to top
            <span className="p-1.5 bg-[#18112b] rounded-full group-hover:bg-purple-900/30 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
