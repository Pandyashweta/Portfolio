import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    period: "Jul 2024 – May 2026",
    degree: "Master of Information Technology (IT)",
    institution: "The Maharaja Sayajirao University of Baroda",
    summary: "Master’s degree in Information Technology with a focus on databases, network security, software development, and IT project management.",
    activities: "Participated in multiple hackathon programs and collaborated under faculty guidance on projects involving technologies such as image processing.",
  },
  {
    period: "Jul 2021 – May 2024",
    degree: "Bachelor of Science – BS, Environmental Science",
    institution: "The Maharaja Sayajirao University of Baroda",
    summary: "Bachelor’s in Environmental Science, gaining practical exposure to fieldwork, research, sustainability, and ecological systems.",
    activities: "Showcased research on microplastics in fertilizers, explaining their environmental impact and demonstrating samples under a microscope at an Open House event.",
  },
];

const experiences = [
  {
    period: "Jul 2025 – Present",
    role: "Business Operations & Technology Associate",
    company: "Beyond Labs · California, United States (Remote)",
    description: "Handled business operations and day-to-day management, supported technology-related tasks and documentation, worked on client projects, and continuously improved UI/UX design skills through hands-on learning and execution.",
  },
  {
    period: "Apr 2025 – Oct 2025",
    role: "Data Entry Assistant",
    company: "Vatero bath + kitchen · Vadodara, Gujarat, India (Hybrid)",
    description: "As an assistant to the respective team member, I handled daily data entry tasks, including maintaining, managing, and updating records throughout my tenure.",
  },
  {
    period: "Sep 2024 – Feb 2025",
    role: "Software Engineer Intern (Backend)",
    company: "Innovate2Automate Technologies Pvt Ltd · Bengaluru, Karnataka, India (Remote)",
    description: "Developed and delivered data-driven software solutions using Java, Node.js, and ImageJ to enhance market analysis and decision-making.",
  },
];

const CareerSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-4xl w-full space-y-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-foreground"
        >
          Career Journey
        </motion.h2>

        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-foreground" />
            <h3 className="text-3xl font-semibold text-foreground">Education</h3>
          </div>
          <div className="space-y-8 relative">
            {/* Single continuous timeline line for education */}
            <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-border shadow-glow" />
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                className="relative pl-10 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-border group-hover:bg-foreground group-hover:scale-125 transition-all duration-300 shadow-glow" />
                <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-xl p-6 group-hover:border-foreground/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="text-sm text-muted-foreground mb-1 block">{edu.period}</span>
                  <h4 className="text-2xl font-semibold text-foreground mt-2">{edu.degree}</h4>
                  <p className="text-lg text-secondary-foreground mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground mb-4">{edu.summary}</p>
                  <p className="text-sm text-muted-foreground border-l-2 border-border/80 pl-4 italic">
                    <strong className="font-semibold not-italic text-secondary-foreground">Activities & Societies:</strong> {edu.activities}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-foreground" />
            <h3 className="text-3xl font-semibold text-foreground">Professional Experience</h3>
          </div>
          <div className="space-y-8 relative">
            {/* Single continuous timeline line */}
            <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-border shadow-glow" />
            
            {experiences.map((exp, index) => {
              const isPresent = exp.period.includes("Present");
              return (
                <motion.div 
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                  className="relative pl-10 group"
                >
                  {/* Timeline dot with special styling for "Present" roles */}
                  <div 
                    className={`absolute left-0 top-2 w-3 h-3 rounded-full transition-all duration-300 shadow-glow ${
                      isPresent 
                        ? 'bg-foreground animate-pulse' 
                        : 'bg-border group-hover:bg-foreground group-hover:scale-125'
                    }`} 
                  />
                <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-xl p-6 group-hover:border-foreground/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <span className="text-sm text-muted-foreground mb-1 block">{exp.period}</span>
                  <h4 className="text-2xl font-semibold text-foreground mt-2">{exp.role}</h4>
                  <p className="text-lg text-secondary-foreground mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerSection;
