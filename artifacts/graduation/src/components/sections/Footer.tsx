import { motion } from 'framer-motion';

export function Footer() {
  const floaties = ['💕', '✨', '🌸', '💌'];

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-[#FFE5EC] to-[#FFF6E9] border-t-2 border-white/60">
      {/* Tiny floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floaties.map((e, i) => (
          <motion.span
            key={i}
            className="absolute text-lg opacity-70"
            style={{ left: `${15 + i * 22}%`, top: `${20 + (i % 2) * 30}%` }}
            animate={{ y: [0, -10, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          >
            {e}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <motion.div
          animate={{ rotate: [0, -6, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD1E3] to-[#FFB8D4] flex items-center justify-center mx-auto mb-6 shadow-md shadow-pink-200/60 border-2 border-white/70"
        >
          <span className="text-2xl">🎓</span>
        </motion.div>

        <p className="text-lg text-[#6B4A5C] mb-4 italic max-w-xl mx-auto font-medium">
          "Made with gratitude, a little bit of magic, and memories I'll
          treasure forever" 🤍
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-[#9B7B95] font-semibold tracking-wide">
          <span>🎀</span>
          <span>2026 Graduation Celebration</span>
          <span>🎀</span>
        </div>
      </div>
    </footer>
  );
}