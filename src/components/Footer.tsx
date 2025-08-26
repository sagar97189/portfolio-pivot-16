import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onScrollToTop: () => void;
}

const Footer = ({ onScrollToTop }: FooterProps) => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">
              Alex Chen
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-surface-elevated border border-border/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={onScrollToTop}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Alex Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;