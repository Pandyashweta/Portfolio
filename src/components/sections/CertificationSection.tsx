import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "IIT Bombay",
    imageUrl: "/images/cert-cloud.png", // Example: Path to your certificate image
    certificateUrl: "/downloads/cert-cloud.pdf", // Example: Path to your downloadable PDF
  },
  {
    title: "Cyber Security",
    issuer: "IIT Bombay",
    imageUrl: "/images/cert-cyber.png",
    certificateUrl: "/downloads/cert-cyber.pdf",
  },
  {
    title: "C Programming",
    issuer: "AIICE",
    imageUrl: "/images/cert-c-programming.png",
    certificateUrl: "/downloads/cert-c-programming.pdf",
  },
  {
    title: "Writing in the Sciences",
    issuer: "Coursera (Stanford University)",
    imageUrl: "/images/cert-writing-sciences.png",
    certificateUrl: "/downloads/cert-writing-sciences.pdf",
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
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col backdrop-blur-sm bg-card/50 border border-border p-6 rounded-2xl hover:border-foreground transition-all duration-300 group shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div className="flex-grow">
                <Award className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                {cert.imageUrl && (
                  <div className="my-4 rounded-lg overflow-hidden border border-border/50">
                    <img src={cert.imageUrl} alt={`Certificate for ${cert.title}`} className="w-full h-auto object-contain" />
                  </div>
                )}
              </div>
              {cert.certificateUrl ? (
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                >
                  <a href={cert.certificateUrl} download={cert.title}>
                    <FileText className="w-4 h-4 mr-2" />
                    Download Certificate
                  </a>
                </Button>                
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationSection;
