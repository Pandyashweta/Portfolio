import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    period: "Aug 2024 – May 2026 (Expected)",
    degree: "MSc. in Information Technology",
    institution: "The Maharaja Sayajirao University, Vadodara",
    description: "Advanced coursework in software engineering, cloud infrastructure, cybersecurity, and big data analytics.",
  },
  {
    period: "Aug 2021 – May 2024",
    degree: "BSc. (Hons.) in Environmental Science",
    institution: "The Maharaja Sayajirao University, Vadodara",
    description: "Multidisciplinary insights into sustainability, research, and industry trends.",
  },
];

const experiences = [
  {
    period: "Apr 2023 – Jul 2024",
    role: "Research Intern",
    company: "The Maharaja Sayajirao University, Vadodara",
    description: "Conducted research focused on developing organic bioplastics, gaining hands-on experience in laboratory and field methodologies. Enhanced scientific understanding and contributed to research publications and process improvement.",
  },
  {
    period: "Sep 2024 – Feb 2025",
    role: "Intern",
    company: "Innovate2Automate – Vadodara, Gujarat",
    description: "Develop market analysis tools leveraging Java, Node.js, and ImageJ to enhance data accuracy and decision-making. Build scalable, efficient applications using full-stack development and cloud technologies. Collaborate with cross-functional teams to deliver impactful software solutions.",
  },
  {
    period: "Apr 2025 – Present",
    role: "Assistant Level (Part-Time)",
    company: "Parth Bus Services",
    description: "Responsible for part-time data maintenance and supporting operational efficiency through systematic data management and process support.",
  },
  {
    period: "Jul 2025 – Present",
    role: "Business Associate & Operations Intern",
    company: "Beyond Labs",
    description: "Supporting business operations and contributing to strategic initiatives and operational workflows.",
  },
  {
    period: "Nov 2025 – Present",
    role: "Full Stack Developer Intern",
    company: "Sri Sri Tech",
    description: "Developing full-stack solutions and contributing to web development projects.",
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
                <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-xl p-6 group-hover:border-foreground/50 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                  <span className="text-sm text-muted-foreground mb-1 block">{edu.period}</span>
                  <h4 className="text-2xl font-semibold text-foreground mt-2">{edu.degree}</h4>
                  <p className="text-lg text-secondary-foreground mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
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
                <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-xl p-6 group-hover:border-foreground/50 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
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
