import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export function Splash({ onComplete }: SplashProps) {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);

    // Start music — browsers allow autoplay only after user gesture
    const audio = new Audio('/Cảm Ơn Người Đã Thức Cùng Tôi.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {/* silently ignore if blocked */});
    audioRef.current = audio;

    // Fade out splash then unmount
    setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 200);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/20 blur-sm"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {/* Graduation cap */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-8xl mb-8"
          >
            🎓
          </motion.div>

          {/* Headline */}
          <div className="space-y-2 text-center mb-12">
            {['Thank You', 'for Being Part of', 'My Graduation Journey'].map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.25 }}
                className="text-2xl md:text-4xl font-serif text-foreground font-medium"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Enter button */}
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleEnter}
            disabled={leaving}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
            data-testid="button-enter"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
           Go to page
          </motion.button>

          {/* Music hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-4 text-xs text-muted-foreground tracking-wide"
          >
            🎵 Music will automatically play when you log in.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
