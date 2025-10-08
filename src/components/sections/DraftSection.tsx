import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex items-center justify-center px-8 pb-32"
    >
      <div className="max-w-3xl text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-foreground"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-muted-foreground"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </motion.p>
        
        <div className="flex justify-center gap-4 pt-8">
          <a 
            href="mailto:pandyashwetaa@gmail.com"
            className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-card/50 border border-border/50 hover:border-foreground hover:bg-card/80 transition-all duration-300 flex items-center justify-center group shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/shwetapandya001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-card/50 border border-border/50 hover:border-foreground hover:bg-card/80 transition-all duration-300 flex items-center justify-center group shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a 
            href="https://github.com/Pandyashweta"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-card/50 border border-border/50 hover:border-foreground hover:bg-card/80 transition-all duration-300 flex items-center justify-center group shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
