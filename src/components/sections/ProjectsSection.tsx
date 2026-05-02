import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, BookOpen, ExternalLink, Pencil, Paintbrush, BrainCircuit, LayoutGrid, Link, Figma, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    category: "coding",
    title: "Interactive Portfolio Website",
    description: "A modern, retro-inspired personal portfolio built with React and Framer Motion.",
    outcome: "Features a dynamic project showcase, animated visuals, and a seamless, responsive user experience.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    imageUrl: "/images/projects/portfolio-website.png",
    githubUrl: "https://github.com/Pandyashweta/Portfolio",
    liveUrl: "https://portfolio-pi-ivory-68.vercel.app/",
  },
  {
    category: "coding",
    title: "Python Project Vault",
    description: "A collection of various Python projects showcasing different libraries and applications.",
    outcome: "Covers a range of applications from data analysis to web scraping.",
    tech: ["Python", "Data Analysis", "Web Scraping", "Automation"],
    imageUrl: "/images/projects/python-vault.png", // Placeholder image
    githubUrl: "https://github.com/Pandyashweta/pyproject", // Placeholder URL
    liveUrl: "https://pyproject-one.vercel.app/",
  },
  {
    category: "coding",
    title: "Fitness App (Level Up)",
    description: "A mobile fitness application designed to help users track workouts, set goals, and monitor progress.",
    outcome: "Features an intuitive interface for a seamless user experience.",
    tech: ["React Native", "Firebase", "HealthKit Integration", "UI/UX"],
    imageUrl: "/images/projects/fitness-app.png", // Placeholder image
    githubUrl: "https://github.com/Pandyashweta/LevelUpFitnessApp", // Placeholder URL
    liveUrl: "",
  },
  /*
  {
    category: "coding",
    title: "App Vault",
    description: "A curated collection of small, helpful utility applications designed to enhance productivity and simplify daily tasks for users.",
    tech: ["React", "Node.js", "Microservices", "Utility Apps"],
    imageUrl: "/images/projects/app-vault.png", // Placeholder image
    githubUrl: "https://github.com/Pandyashweta/AppVault", // Placeholder URL
    liveUrl: "",
  },
  {
    category: "coding",
    title: "Image Processing Tools – Innovate2Automate",
    description: "Developed image analysis applications using Java, Node.js, and ImageJ. Integrated scalable data pipelines and collaborated with R&D teams to optimize product functionality.",
    tech: ["Java", "Node.js", "ImageJ", "Data Pipelines"],
    imageUrl: "/images/projects/image-processing.png",
    githubUrl: "https://github.com/Pandya/",
  },
  /*/
  {
    category: "UI/UX Design",
    title: "Histopedia - Android and Web App",
    description: "Designed a comprehensive UI/UX for 'Histopedia', an application for both Android and web.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    outcome: "Focused on creating an intuitive and engaging user experience for exploring historical content.",
    figmaUrl: "https://www.figma.com/community/file/1632092961246977062",
    driveUrl: "https://drive.google.com/drive/folders/1hushkki80RE11yWxoBsl_us8qllQmnto?usp=sharing",
  },
  {
    category: "research",
    title: "Dissertation: Research on Microplastic Contamination",
    description: "Completed a six-month independent research project during my bachelor’s degree investigating microplastic contamination.",
    association: "The Maharaja Sayajirao University of Baroda (Dec 2023 – May 2024)",
    outcome: "This work was compiled into a book, 'Comprehensive Nutrient and Contaminant Analysis by Examination of Organic Fertilizer', under the supervision of Dr. Shilpi Jain.",
    volunteering: "As a volunteer Research Presenter at a university Open House (Dec 2023), I showcased this research to highlight its environmental impact and promote public awareness.",
    tech: ["Independent Research", "Microplastics", "Environmental Science"],
    driveUrl: "https://drive.google.com/drive/folders/1K4UUCgT01lHFYCqOao0xEUpQe3agNTug?usp=sharing",
  },
  {
    category: "research",
    title: "Research Assistant Intern – FOSSIP Program",
    description: "Worked as a Research Assistant under the GSBTM-sponsored FOSSIP Program, focusing on the development of Polyhydroxyalkanoates (PHA).",
    association: "The Maharaja Sayajirao University of Baroda (Apr 2023 – Aug 2023)",
    outcome: "Received a certificate internship from the Faculty of Science.",
    tech: ["PHA Development", "Bioplastics", "Lab Research"],
    // Please replace # with your actual certificate link
    certificationUrl: "https://drive.google.com/file/d/1Qn_iIvj_yVaZv-S8bOT2PMVMdftSOQBZ/view?usp=sharing",
  },
];

const categories = ["UI/UX Design", "coding", "research"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX Design");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-5xl w-full space-y-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-foreground capitalize"
        >
          Projects
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-border pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                activeCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute inset-0 bg-accent rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="space-y-8">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.title}
                      className="backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors">{project.title}</h3>
                        {project.association && <span className="text-sm text-muted-foreground text-right flex-shrink-0 ml-4">{project.association}</span>}
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        {project.outcome && (
                            <p className="text-sm text-muted-foreground border-l-2 border-border/80 pl-4 italic">
                                <strong className="font-semibold not-italic text-secondary-foreground">Outcome:</strong> {project.outcome}
                            </p>
                        )}
                        {project.volunteering && (
                            <p className="text-sm text-muted-foreground border-l-2 border-border/80 pl-4 italic">
                                <strong className="font-semibold not-italic text-secondary-foreground">Volunteering:</strong> {project.volunteering}
                            </p>
                        )}
                      </div>

                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="text-xs bg-accent/80 backdrop-blur-sm border border-border/50 px-3 py-1.5 rounded-full text-foreground">{tech}</span>
                          ))}
                        </div>
                      )}
                      <div className="mt-6 flex gap-4 pt-2">
                        {project.githubUrl && <Button asChild variant="outline" size="sm"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" /> View Code</a></Button>}
                        {project.figmaUrl && <Button asChild variant="outline" size="sm"><a href={project.figmaUrl} target="_blank" rel="noopener noreferrer"><Figma className="w-4 h-4 mr-2" /> Figma Design</a></Button>}
                        {project.liveUrl && <Button asChild variant="outline" size="sm"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> View Website</a></Button>}
                        {project.driveUrl && <Button asChild variant="outline" size="sm"><a href={project.driveUrl} target="_blank" rel="noopener noreferrer"><Link className="w-4 h-4 mr-2" /> View Drive</a></Button>}
                        {project.certificationUrl && <Button asChild variant="outline" size="sm"><a href={project.certificationUrl} target="_blank" rel="noopener noreferrer"><Award className="w-4 h-4 mr-2" /> View Certificate</a></Button>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Coming Soon!</h3>
                  <p className="text-muted-foreground">This section is currently under construction.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
