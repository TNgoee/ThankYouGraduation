import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

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

    const audio = new Audio('/Cảm Ơn Người Đã Thức Cùng Tôi.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
    audioRef.current = audio;

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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Fine gold vignette frame — reads as "ceremony" not "app splash" */}
          <div className="absolute inset-4 md:inset-8 border border-[#B8985A]/25 pointer-events-none" />
          <div className="absolute inset-6 md:inset-10 border border-[#B8985A]/10 pointer-events-none" />

          {/* Drifting gold motes, replacing generic blur circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#B8985A]/50"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 20,
                  opacity: 0,
                }}
                animate={{
                  y: -20,
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: Math.random() * 6 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {/* Seal / crest — SVG laurel instead of an emoji cap */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="34" stroke="#B8985A" strokeWidth="1" opacity="0.5" />
              <circle cx="36" cy="36" r="27" stroke="#B8985A" strokeWidth="1" opacity="0.3" />
              <path
                d="M36 20 L40 32 L52 32 L42 39 L46 51 L36 44 L26 51 L30 39 L20 32 L32 32 Z"
                fill="#B8985A"
                opacity="0.9"
              />
            </svg>
          </motion.div>

          {/* Headline */}
          <div className="space-y-1.5 text-center mb-3 px-6">
            {['Thank You', 'for Being Part of', 'My Graduation Journey'].map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.25 }}
                className="text-2xl md:text-4xl font-serif text-foreground font-medium tracking-wide"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Gold divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="h-px bg-[#B8985A] mb-10"
          />

          {/* Enter button — outlined pill, matches navbar language */}
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleEnter}
            disabled={leaving}
            className="group relative px-10 py-3.5 rounded-full border border-[#B8985A] text-foreground font-serif text-base tracking-[0.08em] overflow-hidden disabled:opacity-60"
            data-testid="button-enter"
          >
            <span className="absolute inset-0 bg-[#B8985A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              Enter
            </span>
          </motion.button>

          {/* Music hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-5 text-xs text-muted-foreground tracking-wide"
          >
            Music will begin softly once you enter.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}