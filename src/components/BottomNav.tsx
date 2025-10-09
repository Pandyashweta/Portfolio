import { motion } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "career", label: "Career" },
    { id: "certification", label: "Certification" },
    { id: "connect", label: "Connect" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-[var(--nav-bg)] backdrop-blur-xl rounded-[20px] p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-[var(--nav-border)]"
      >
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative px-5 py-2.5 rounded-[16px] text-[13px] font-medium
                transition-all duration-200 ease-out
                ${
                  activeTab === tab.id
                    ? "text-[var(--nav-text)]"
                    : "text-[var(--nav-text)]/60 hover:text-[var(--nav-text)]/80"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--nav-active)] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default BottomNav;
