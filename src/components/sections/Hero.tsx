import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { PROFILE } from "../../constants/data";
import { Button } from "../ui/Button";

export const Hero = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_URL;

  const handlePreviewAndDownload = () => {
    // Open preview in new tab
    const newTab = window.open(resumeUrl, "_blank");

    // Trigger download after slight delay
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Praveen_Resume.pdf"; // your custom name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000); // delay so preview opens first
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-purple-600/10 rounded-full blur-[120px] opacity-70 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-indigo-600/10 rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-5xl relative z-10 flex flex-col items-center text-center grow justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/20 bg-[#120c24]/80 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.15)] text-purple-200 font-medium text-sm transition-transform hover:scale-105">
            <Sparkles size={16} className="text-purple-400" />
            <span>{PROFILE.role}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8 font-heading"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-400 to-indigo-400 drop-shadow-sm">
            responsive and scalable
          </span>{" "}
          web applications.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 max-w-4xl leading-relaxed mb-12 font-light"
        >
          {PROFILE.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto min-h-[56px] flex items-center justify-center text-base"
          >
            <a href="#experience" className="flex gap-2 items-center">
              View Experience
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>

          {resumeUrl ? (
            <Button
              asChild
              variant="secondary"
              size="lg"
              onClick={handlePreviewAndDownload}
              className="w-full sm:w-auto min-h-[56px] flex items-center justify-center text-base group cursor-pointer"
            >
              <span className="flex gap-2 items-center">
                <Download size={20} className="mr-2 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </span>
            </Button>
          ) : (
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[56px] flex items-center justify-center text-base group cursor-pointer"
            >
              <a href="#contact" rel="noreferrer" className="flex gap-2 items-center">
                <Download size={20} className="mr-2 transition-transform group-hover:-translate-y-1" />
                Contact Me
              </a>
            </Button>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 z-10 hidden sm:flex group cursor-pointer"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400/60 group-hover:text-purple-400 transition-colors">
          Scroll Down
        </span>
        <div className="w-px h-12 bg-linear-to-b from-purple-500/60 to-transparent" />
      </motion.a>
    </section>
  );
};
