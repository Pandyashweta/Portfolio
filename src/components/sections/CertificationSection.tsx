import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "IIT Bombay",
    certificateUrl: "", // Users can add PDF link here
  },
  {
    title: "Cyber Security",
    issuer: "IIT Bombay",
    certificateUrl: "",
  },
  {
    title: "C Programming",
    issuer: "AIICE",
    certificateUrl: "",
  },
  {
    title: "Writing in the Sciences",
    issuer: "Coursera (Stanford University)",
    certificateUrl: "",
  },
];

const CertificationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-4xl w-full space-y-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-foreground"
        >
          Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="backdrop-blur-sm bg-card/50 border border-border p-6 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <Award className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.issuer}</p>
              {cert.certificateUrl ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(cert.certificateUrl, '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              ) : (
                <p className="text-xs text-muted-foreground italic">Certificate PDF not added yet</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationSection;
