import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    category: "coding",
    title: "Interactive Portfolio Website",
    period: "Jan – Feb 2024",
    description: "A modern, retro-inspired personal portfolio built with React and Framer Motion. Features a dynamic project showcase, animated visuals, and a seamless, responsive user experience.",
    tech: ["React", "HTML5", "CSS3", "JavaScript"],
    imageUrl: "/images/portfolio-preview.png", 
    githubUrl: "https://github.com/Pandyashweta/Portfolio",
    liveUrl: "#", // Link to the live site
  },
  {
    category: "coding",
    title: "Image Processing Tools – Innovate2Automate",
    period: "Nov 2023 – Present",
    description: "Developed image analysis applications using Java, Node.js, and ImageJ. Integrated scalable data pipelines and collaborated with R&D teams to optimize product functionality.",
    tech: ["Java", "Node.js", "ImageJ", "Data Pipelines"],
    imageUrl: "/images/image-processing-preview.png",
    githubUrl: "https://github.com/Pandyashweta/",
  },
  {
    category: "art",
    title: "Digital Illustration Series",
    period: "2023",
    description: "A collection of digital paintings exploring the intersection of nature and technology, created using Procreate with a focus on vibrant colors and atmospheric lighting.",
    tech: ["Procreate", "Digital Painting", "Concept Art"],
    imageUrl: "/images/art-preview.png", // Replace with your art image
    downloadUrl: "/downloads/art-collection.zip", // Optional: link to high-res images
  },
  {
    category: "writings",
    title: "The Impact of Design Systems on Team Collaboration",
    period: "May 2023",
    description: "An in-depth article on the benefits and challenges of implementing a design system in a fast-paced development environment, published on a popular tech blog.",
    tech: ["Technical Writing", "UX Strategy", "Design Systems"],
    articleUrl: "https://example.com/your-article-link", // Replace with the actual link
  },
  {
    category: "research",
    title: "Usability Study for a New Mobile App",
    period: "Oct 2023 – Present",
    description: "Led a usability study for a new mobile app at SriSri Tech. Conducted user interviews, created wireframes, and analyzed feedback to inform design iterations, increasing task completion rates by 20%.",
    tech: ["Figma", "Wireframing", "User Research", "Usability Testing"],
    imageUrl: "/images/ui-ux-preview.png",
    downloadUrl: "/downloads/research-summary.pdf", // Link to your research paper or summary
  },
];

const categories = ["coding", "art", "writings", "research"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("coding");

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
          className="text-5xl font-bold text-foreground"
        >
          Featured Projects
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

        <div className="space-y-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors">{project.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-accent/80 backdrop-blur-sm border border-border/50 px-3 py-1.5 rounded-full text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Image and Links Section */}
                  {(project.imageUrl || project.githubUrl || project.downloadUrl || project.articleUrl) && (
                    <div className="mt-6 space-y-4">
                      {project.imageUrl && (
                        <img 
                          src={project.imageUrl} 
                          alt={`Preview of ${project.title}`} 
                          className="rounded-lg border border-border/50 w-full object-cover"
                        />
                      )}
                      <div className="flex gap-4 pt-2">
                        {project.githubUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" /> View Code</a>
                          </Button>
                        )}
                    {project.liveUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> View Website</a>
                      </Button>
                    )}
                        {project.downloadUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.downloadUrl} download><Download className="w-4 h-4 mr-2" /> Download Asset</a>
                          </Button>
                        )}
                        {project.articleUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.articleUrl} target="_blank" rel="noopener noreferrer"><BookOpen className="w-4 h-4 mr-2" /> Read Article</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
