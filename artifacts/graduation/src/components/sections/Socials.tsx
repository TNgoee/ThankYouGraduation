import { motion } from 'framer-motion';
import { SiGmail, SiGithub, SiInstagram } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const links = [
  { icon: SiGmail, label: 'Email', href: 'mailto:graduate@email.com', color: 'hover:text-[#EA4335]' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/graduate', color: 'hover:text-[#0A66C2]' },
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/graduate', color: 'hover:text-foreground' },
  { icon: SiInstagram, label: 'Instagram', href: 'https://instagram.com/graduate', color: 'hover:text-[#E4405F]' }
];

export function Socials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold mb-12"
        >
          Let's Stay Connected
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group outline-none"
                data-testid={`social-link-${link.label.toLowerCase()}`}
              >
                <Card className="h-full bg-background/80 backdrop-blur flex flex-col items-center justify-center p-6 border border-border/50 group-hover:border-primary/40 group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]">
                  <Icon className={`w-8 h-8 mb-4 text-muted-foreground transition-colors duration-300 ${link.color}`} />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </Card>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
