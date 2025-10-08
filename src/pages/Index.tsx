import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CareerSection from "@/components/sections/CareerSection";
import CertificationSection from "@/components/sections/CertificationSection";
import DraftSection from "@/components/sections/DraftSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection key="about" />;
      case "projects":
        return <ProjectsSection key="projects" />;
      case "career":
        return <CareerSection key="career" />;
      case "certification":
        return <CertificationSection key="certification" />;
      case "upcoming":
        return <DraftSection key="upcoming" />;
      default:
        return <AboutSection key="about" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      </div>
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
