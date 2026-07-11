import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

interface SplashProps {
  onComplete: () => void;
}

const floaties = ['💕', '✨', '🎀', '⭐', '🌸'];

export function Splash({ onComplete }: SplashProps) {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [burst, setBurst] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    setBurst(true);

    const audio = new Audio('\A Little Dream Of Me - Lyrics Video - Cảm Ơn Người Đã Thức Cùng Tôi.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
    audioRef.current = audio;

    setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 500);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFE5EC] via-[#FFF6E9] to-[#E8D9FF]"
        >
          {/* Soft blob shapes in the background */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -left-24 w-72 h-72 rounded-full bg-[#FFC9DE]/50 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-[#D4C4FF]/50 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#FFF0B8]/50 blur-2xl"
          />

          {/* Floating cute emojis drifting up */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                style={{ left: `${Math.random() * 100}%` }}
                initial={{ y: window.innerHeight + 40, opacity: 0, rotate: 0 }}
                animate={{
                  y: -60,
                  opacity: [0, 1, 1, 0],
                  rotate: [0, Math.random() > 0.5 ? 25 : -25, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'easeInOut',
                }}
              >
                {floaties[i % floaties.length]}
              </motion.span>
            ))}
          </div>

          {/* Confetti burst on enter */}
          <AnimatePresence>
            {burst && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-xl"
                    style={{ left: '50%', top: '55%' }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
                    animate={{
                      x: (Math.random() - 0.5) * 500,
                      y: (Math.random() - 0.5) * 500 - 100,
                      opacity: 0,
                      scale: 1,
                      rotate: Math.random() * 360,
                    }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    {floaties[i % floaties.length]}
                  </motion.span>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Cute badge */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-6"
          >
            <motion.div
              animate={{ rotate: [0, -6, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD1E3] to-[#FFB8D4] shadow-lg shadow-pink-200/60 flex items-center justify-center border-4 border-white/70"
            >
              <span className="text-5xl">🎓</span>
            </motion.div>
            <motion.span
              animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-1 -right-1 text-xl"
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-1 -left-2 text-lg"
            >
              💫
            </motion.span>
          </motion.div>

          {/* Headline — playful, rounded, gently tilted lines */}
          <div className="space-y-0.5 text-center mb-2 px-6">
            {['Thank You', 'for Being Part of', 'My Graduation Journey 🌷'].map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 14, rotate: i % 2 === 0 ? -2 : 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
                className="text-2xl md:text-4xl font-bold text-[#6B4A5C]"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm text-[#9B7B95] mb-9"
          >
            made with love, just for you 🤍
          </motion.p>

          {/* Enter button — candy pill, bouncy */}
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.06, rotate: -1 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleEnter}
            disabled={leaving}
            className="relative px-10 py-4 rounded-full bg-gradient-to-r from-[#FFAFC5] to-[#FFC9A8] text-white font-bold text-lg shadow-lg shadow-pink-200/70 disabled:opacity-70"
            data-testid="button-enter"
          >
            <span className="flex items-center gap-2">
              Let's Begin <span className="text-xl">🎉</span>
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-5 text-xs text-[#9B7B95] tracking-wide"
          >
            🎵 a little song will play once you enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}