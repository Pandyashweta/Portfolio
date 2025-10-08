import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: "light", style: "bg-neutral-200 border-neutral-400" },
    { name: "dark", style: "bg-neutral-800 border-neutral-600" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 p-2 rounded-full backdrop-blur-sm bg-card/30 border border-border/50 shadow-lg">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`w-6 h-6 rounded-full transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-foreground/50 ${t.style}`}
          aria-label={`Switch to ${t.name} theme`}
        >
          {theme === t.name && (
            <motion.div
              layoutId="activeTheme"
              className="absolute inset-0 rounded-full border-2 border-foreground"
              initial={{
                opacity: 0,
                scale: 1.2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}