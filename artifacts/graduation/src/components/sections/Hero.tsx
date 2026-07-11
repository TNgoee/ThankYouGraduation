import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '4', label: 'Years of Learning', emoji: '📚' },
    { value: '∞', label: 'Memories Created', emoji: '💌' },
    { value: '1', label: 'New Beginning', emoji: '🌱' },
  ];

  const floaties = ['🎀', '✨', '💕', '⭐', '🌸', '🎈'];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-[#FFE5EC] via-[#FFF6E9] to-[#F3E9FF]"
    >
      {/* Soft blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#FFC9DE]/50 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-28 -right-16 w-96 h-96 rounded-full bg-[#D4C4FF]/50 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-[#FFF0B8]/50 blur-2xl"
      />

      {/* Floating emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{ left: `${Math.random() * 100}%` }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{
              y: '-10%',
              opacity: [0, 1, 1, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() > 0.5 ? 20 : -20, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          >
            {floaties[i % floaties.length]}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8 }}
          className="mb-6 rounded-full border-2 border-white/70 bg-white/50 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-[#9B5C7A] backdrop-blur shadow-sm"
        >
          🎓 GRADUATION 2026
        </motion.p>

        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
            className="text-5xl font-bold leading-tight tracking-tight md:text-7xl text-[#6B4A5C]"
          >
            Thank You
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
            className="text-5xl font-bold leading-tight tracking-tight md:text-7xl bg-gradient-to-r from-[#FF8FAE] to-[#FFA96B] bg-clip-text text-transparent"
          >
            For Celebrating ✨
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
            className="text-5xl font-bold leading-tight tracking-tight md:text-7xl text-[#6B4A5C]"
          >
            My Graduation
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-[#9B7B95]"
        >
          Every message, every smile, and every moment of support helped shape
          this unforgettable milestone. I'm truly grateful to have shared this
          journey with you 🤍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.06, rotate: -1 }}
            whileTap={{ scale: 0.94 }}
            onClick={scrollToJourney}
            className="rounded-full px-9 py-4 bg-gradient-to-r from-[#FFAFC5] to-[#FFC9A8] text-white font-bold text-base shadow-lg shadow-pink-200/70 flex items-center gap-2"
            data-testid="button-explore-journey"
          >
            View My Journey
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>

        {/* Stat bubbles instead of a boxed card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              className="w-40 h-40 rounded-full bg-white/60 backdrop-blur border-2 border-white/70 shadow-md shadow-pink-100 flex flex-col items-center justify-center"
            >
              <span className="text-2xl mb-1">{stat.emoji}</span>
              <p className="text-3xl font-bold text-[#FF8FAE]">{stat.value}</p>
              <p className="mt-1 text-xs text-[#9B7B95] px-4 text-center leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}