import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, BookOpen, ExternalLink, Pencil, Paintbrush, BrainCircuit, LayoutGrid, Link, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    category: "coding",
    title: "Interactive Portfolio Website",
    description: "A modern, retro-inspired personal portfolio built with React and Framer Motion. Features a dynamic project showcase, animated visuals, and a seamless, responsive user experience.",
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageUrl: "/images/projects/portfolio-website.png", // Using your local screenshot
    githubUrl: "https://github.com/Pandyashweta/Portfolio",
    liveUrl: "https://portfolio-gamma-hazel-59.vercel.app/",
  },
  {
    category: "coding",
    title: "Image Processing Tools – Innovate2Automate",
    description: "Developed image analysis applications using Java, Node.js, and ImageJ. Integrated scalable data pipelines and collaborated with R&D teams to optimize product functionality.",
    tech: ["Java", "Node.js", "ImageJ", "Data Pipelines"],
    imageUrl: "/images/projects/image-processing.png",
    githubUrl: "https://github.com/Pandyashweta/",
  },
  {
    category: "UI/UX Design",
    title: "Histopedia - Android and Web App",
    description: "Designed a comprehensive UI/UX for 'Histopedia', an application for both Android and web. Focused on creating an intuitive and engaging user experience for exploring historical content.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    figmaUrl: "https://www.figma.com/community/file/1557710145700902956",
    driveUrl: "https://drive.google.com/drive/folders/1XnTT8h0UAnhJe23wGQIq4y7zzdfx-_GZ?usp=drive_link",
  },
  {
    category: "writings",
    title: "My Writings",
    description: "A collection of articles and posts on technology, design, and personal growth.",
    tech: ["Blogging", "Technical Writing"],
    driveUrl: "https://drive.google.com/drive/folders/1CXdsPO0Vk2S6-Z324z0iuijCjL0nMYW5?usp=drive_link",
  },
  {
    category: "research",
    title: "Research Projects",
    description: "Academic and personal research projects and papers.",
    tech: ["Scientific Research", "Data Analysis"],
    driveUrl: "#", // Replace with your Drive link
  },
];

const categories = ["UI/UX Design", "coding", "art", "writings", "research"];

const artCategories = [
  {
    title: "Pencil",
    description: "A collection of my traditional pencil sketches and drawings.",
    icon: Pencil,
    driveUrl: "https://drive.google.com/drive/folders/1jaRnYf_JyXo2Tku6gwBydEFvqiY9IuI0?usp=sharing",
  },
  {
    title: "Digital",
    description: "Digital paintings and illustrations created with various tools.",
    icon: Paintbrush,
    driveUrl: "https://drive.google.com/drive/folders/1eu9KetFjusDN_iKyCX0dRbTaHOEjYIKy?usp=sharing",
  },
  {
    title: "AI",
    description: "Explorations and projects using AI-powered art generation.",
    icon: BrainCircuit,
    driveUrl: "https://drive.google.com/drive/folders/19jHsQJKLlEEK9jb92FFW6vJVbaPlK1rV?usp=sharing",
  },
  {
    title: "Graphic Design",
    description: "Logos, branding, and other graphic design work.",
    icon: LayoutGrid,
    driveUrl: "https://drive.google.com/drive/folders/1HfbjYcN3K3bb5SmRJ9-s9dqO-ho9Kzrg?usp=sharing",
  },
];

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
              {activeCategory === "art" ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {artCategories.map((art) => (
                    <motion.div
                      key={art.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex flex-col text-center backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                    >
                      <div className="flex-grow flex flex-col items-center">
                        <art.icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">{art.title}</h3>
                        <p className="text-muted-foreground">{art.description}</p>
                      </div>
                      <Button asChild variant="outline" size="sm" className="mt-6">
                        <a href={art.driveUrl} target="_blank" rel="noopener noreferrer">
                          <Link className="w-4 h-4 mr-2" /> View Link
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <>
                  {filteredProjects.length > 0 ? (
                    <div className="space-y-8">
                      {filteredProjects.map((project) => (
                        <motion.div
                          key={project.title}
                          className="backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors">{project.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
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
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
