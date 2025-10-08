import { motion } from "framer-motion";
import { Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Interactive Portfolio Website",
    period: "Jan 2025 – Feb 2025",
    description: "Created a modern, retro-inspired personal portfolio website using React, HTML5, CSS3, and JavaScript. Features include dynamic project showcase, animated visuals, and seamless navigation for enhanced user experience. Optimized for mobile and desktop device responsiveness.",
    tech: ["React", "HTML5", "CSS3", "JavaScript"],
    // Example: Add your image path relative to the `public` folder
    imageUrl: "/images/portfolio-preview.png", 
    // Link to your GitHub repository for this project
    githubUrl: "https://github.com/Pandyashweta/your-portfolio-repo-name", 
  },
  {
    title: "UI/UX Intern Projects – SriSri Tech",
    period: "Oct 2025 – Present",
    description: "Developed prototypes and wireframes for web and mobile products. Conducted user research and usability testing to inform design decisions. Improved retention and engagement metrics through intuitive layouts and design thinking.",
    tech: ["Figma", "Wireframing", "User Research", "Design Thinking"],
    imageUrl: "/images/ui-ux-preview.png",
    // Example: Add a link to a downloadable file (e.g., a PDF or ZIP of your designs)
    downloadUrl: "/downloads/ui-ux-designs.zip",
  },
  {
    title: "Image Processing Tools – Innovate2Automate",
    period: "Nov 2024 – Present",
    description: "Developed image analysis applications utilizing Java, Node.js, and ImageJ for scientific and business use-cases. Integrated scalable data pipelines and remote database solutions. Collaborated with R&D teams to validate and optimize product functionality.",
    tech: ["Java", "Node.js", "ImageJ", "Data Pipelines"],
    imageUrl: "/images/image-processing-preview.png",
    githubUrl: "https://github.com/Pandyashweta/image-processing-repo-name",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-5xl w-full space-y-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-foreground"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors">{project.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-accent/80 backdrop-blur-sm border border-border/50 px-3 py-1.5 rounded-full text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Image and Links Section */}
              {project.imageUrl && (
                <div className="mt-6 space-y-4">
                  <img 
                    src={project.imageUrl} 
                    alt={`Preview of ${project.title}`} 
                    className="rounded-lg border border-border/50 w-full object-cover"
                  />
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" /> View Code</a>
                      </Button>
                    )}
                    {project.downloadUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.downloadUrl} download><Download className="w-4 h-4 mr-2" /> Download Asset</a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
