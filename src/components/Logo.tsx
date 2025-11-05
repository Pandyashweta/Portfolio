import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <motion.img
        src={logoImage}
        alt="xtof t logo"
        className="h-12 w-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <div className="text-foreground">
        <h2 className="text-xl font-bold leading-tight tracking-tight">
          Pandya <br /> 
        </h2>
      </div>
    </motion.div>
  );
};

export default Logo;
