import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Academic Degrees",
    description: "Documents and transcripts for my BSc. (EnvSci) and MSc. (IT) degrees.",
    icon: GraduationCap,
    driveUrl: "https://drive.google.com/drive/folders/1kb0xEybiNmT6fIvVXJokU5tHGTgJx-wr?usp=drive_link",
  },
  {
    title: "Certifications+",
    description: "A collection of certificates for professional courses, management, and operations.",
    icon: Award,
    driveUrl: "https://drive.google.com/drive/folders/1qdhBTkWNwJoY7X40Hlwwx6LJdxwEVaBf?usp=drive_link",
  },
];

const CertificationSection = () => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-start justify-center px-8 pt-32 pb-24"
    >
      <div className="max-w-4xl w-full space-y-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-foreground"
        >
          Certifications
        </motion.h2>
        <div className="space-y-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex-grow">
                <div className="flex items-start gap-4">
                  <cert.icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </div>
              {cert.driveUrl && (
                <Button asChild variant="outline" size="sm" className="mt-6 self-start">
                  <a
                    href={cert.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link className="w-4 h-4 mr-2" /> View Link
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationSection;
