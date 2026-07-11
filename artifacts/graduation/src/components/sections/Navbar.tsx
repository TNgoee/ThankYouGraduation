import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, ArrowUp, Heart } from 'lucide-react';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy
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
      {/* Sweet progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-pink-200/60 dark:border-pink-900/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand - Sweet style */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform">
              ❤️
            </div>
            <div className="font-serif text-2xl tracking-tight">
              <span className="text-pink-500">Class of </span>
              <span className="font-bold text-rose-500">2026</span>
            </div>
          </button>

          {/* Navigation - Cute & Soft */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-6 py-2.5 text-sm font-medium rounded-2xl hover:bg-pink-100 dark:hover:bg-pink-950/50 transition-all active:scale-95"
                >
                  <span className={`transition-colors ${isActive ? 'text-pink-600 dark:text-pink-400' : 'text-foreground/70 hover:text-pink-600 dark:hover:text-pink-400'}`}>
                    {item.label}
                  </span>
                  
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Theme Toggle + Heart accent */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-pink-100 dark:hover:bg-pink-950/50 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-pink-500" />
              )}
            </button>

            {/* Cute heart accent */}
            <div className="hidden md:block w-px h-6 bg-pink-200/70 dark:bg-pink-900" />
            
            <button
              onClick={scrollToTop}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-2xl hover:bg-pink-100 dark:hover:bg-pink-950/50 text-pink-400 hover:text-pink-500 transition-colors"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Back to top - Super cute */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 rounded-3xl bg-white dark:bg-zinc-900 shadow-lg border border-pink-200 dark:border-pink-900 hover:border-pink-400 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6 text-pink-500 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}