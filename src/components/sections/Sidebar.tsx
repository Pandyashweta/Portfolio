import { motion } from "framer-motion";
import Logo from "../Logo";

interface NavItem {
  id: string;
  label: string;
}

interface SidebarProps {
  sections: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Sidebar = ({ sections, activeSection, onNavigate }: SidebarProps) => {
  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
      className="fixed top-0 left-0 h-full w-64 bg-card/30 backdrop-blur-lg border-r border-border/50 z-40 flex flex-col"
    >
      <div className="p-8">
        <Logo />
      </div>
      <nav className="flex-grow px-4">
        <ul className="space-y-2">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 relative flex items-center ${
                  activeSection === id
                    ? "text-primary-foreground font-semibold"
                    : "text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground"
                }`}
              >
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSidebarTab"
                    className="absolute inset-0 bg-primary rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;