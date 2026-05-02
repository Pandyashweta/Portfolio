import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden pb-32"
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
      
      <div className="max-w-5xl relative z-10 w-full">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-playfair tracking-tight text-foreground">
              Pandya Shweta
            </h1>
            <p className="mt-2 text-2xl md:text-3xl text-primary font-semibold tracking-wide">
              Portfolio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-3xl w-full backdrop-blur-sm bg-card/30 border border-border/50 rounded-2xl p-8 shadow-2xl"
          >
            <p className="text-xl text-muted-foreground/90 leading-relaxed">
              A passionate, detail-oriented creative professional with a multidisciplinary approach across design and technology. I love turning ideas into intuitive and visually engaging digital experiences, driven by curiosity, continuous learning, and problem-solving.
            </p>
          </motion.div>
        </div>
      </div>

    </motion.section>
  );
};

export default AboutSection;
