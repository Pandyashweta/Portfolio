import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Courses",
    description: "Collection of professional course certificates.",
    icon: Award,
    driveUrl: "https://drive.google.com/drive/folders/1qdhBTkWNwJoY7X40Hlwwx6LJdxwEVaBf?usp=drive_link",
  },
  {
    title: "BSc. EnvSci",
    description: "Documents and transcripts from my Bachelor's degree.",
    icon: GraduationCap,
    driveUrl: "https://drive.google.com/drive/folders/1B-BtFTnTzuyxvUT4SR7NswEN2RwfoZIQ?usp=sharing",
  },
  {
    title: "MSc. IT",
    description: "Documents and transcripts from my Master's degree.",
    icon: GraduationCap,
    driveUrl: "https://drive.google.com/drive/folders/1kb0xEybiNmT6fIvVXJokU5tHGTgJx-wr?usp=drive_link",
  },
  {
    title: "Management",
    description: "Certificates related to management and operations.",
    icon: Briefcase,
    driveUrl: "https://drive.google.com/drive/folders/1Cg5-Tl0MgCNG9HdleV0Om1eGk-Xd9s1p?usp=sharing",
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
      className="min-h-screen flex items-center justify-center px-8 py-24"
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
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col text-center backdrop-blur-sm bg-card/50 border border-border p-8 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div className="flex-grow flex flex-col items-center">
                <cert.icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
              {cert.driveUrl && (
                <Button asChild variant="outline" size="sm" className="mt-6">
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
