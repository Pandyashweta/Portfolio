import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex items-center justify-center px-8 relative overflow-hidden"
    >
      {/* Multi-layer background with depth */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating orbs for depth */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[100px]"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-muted-foreground/5 rounded-full blur-[120px]"
      />
      
      <div className="max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold text-foreground leading-[0.95] mb-8 tracking-tight relative">
            <span className="inline-block relative">
              Pandya
              <motion.span
                className="absolute -inset-4 bg-foreground/5 blur-2xl -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
            <br />
            <span className="inline-block">Portfolio</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-2xl p-6 max-w-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            Crafting beautiful and functional digital experiences
          </p>
        </motion.div>
        
        {/* Enhanced decorative elements */}
        <div className="flex gap-4 mt-12 items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 w-32 bg-gradient-to-r from-foreground to-muted-foreground origin-left shadow-glow"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="w-2 h-2 rounded-full bg-foreground shadow-glow"
          />
        </div>
      </div>

    </motion.section>
  );
};

export default AboutSection;
