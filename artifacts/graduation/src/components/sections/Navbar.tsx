import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'appreciation', label: 'Appreciation' },
  { id: 'letter', label: 'A Personal Note' },
  { id: 'celebrate', label: 'Celebrate' },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar — thin gold line instead of flat primary block */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B8985A] via-[#D4AF6A] to-[#B8985A] z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-[#B8985A]/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand mark */}
          <button
            onClick={scrollToTop}
            className="font-serif text-xl tracking-[0.15em] text-foreground group"
            data-testid="nav-brand"
          >
            <span className="text-[#B8985A]">CLASS OF</span>{' '}
            <span className="font-semibold">2026</span>
          </button>

          {/* Nav links with active underline */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-4 py-2 text-[13px] uppercase tracking-[0.12em] font-medium text-foreground/70 hover:text-foreground transition-colors"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-[1.5px] bg-[#B8985A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Theme toggle — pill switch instead of stacked icons */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative w-14 h-7 rounded-full border border-[#B8985A]/40 bg-foreground/5 flex items-center px-1"
            data-testid="button-theme-toggle"
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-[#B8985A] flex items-center justify-center"
              animate={{ x: theme === 'dark' ? 26 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              {theme === 'dark' ? (
                <Moon className="h-3 w-3 text-background" />
              ) : (
                <Sun className="h-3 w-3 text-background" />
              )}
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </motion.nav>

      {/* Back to top — minimal outlined circle, label fades in on hover */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="group fixed bottom-8 right-8 z-40 flex items-center gap-2 pl-4 pr-1 py-1 rounded-full border border-[#B8985A]/40 bg-background/90 backdrop-blur-md shadow-md hover:border-[#B8985A] transition-colors"
            data-testid="button-back-to-top"
          >
            <span className="text-[11px] uppercase tracking-[0.1em] text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-w-0 group-hover:max-w-[80px] overflow-hidden whitespace-nowrap">
              Top
            </span>
            <span className="w-8 h-8 rounded-full bg-[#B8985A] flex items-center justify-center shrink-0">
              <ArrowUp className="h-4 w-4 text-background" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}