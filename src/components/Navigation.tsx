import {
  Home,
  Briefcase,
  LayoutGrid,
  Award,
  Send,
  Github,
  Linkedin,
} from "lucide-react";

export function Navigation() {
  const links = [
    {
      title: "About",
      href: "#about",
      icon: <Home className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />,
    },
    {
      title: "Career",
      href: "#career",
      icon: <Briefcase className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: <LayoutGrid className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />,
    },
    {
      title: "Certifications",
      href: "#certifications",
      icon: <Award className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />,
    },
    {
      title: "Connect",
      href: "#connect",
      icon: <Send className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />,
    },
  ];

}