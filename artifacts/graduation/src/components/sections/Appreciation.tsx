import { motion } from 'framer-motion';

const appreciations = [
  { emoji: '❤️', title: 'Family', msg: 'Your unconditional love carried me through every moment of doubt. Thank you for believing in me when I couldn\u2019t.', bg: 'from-[#FFD1E3] to-[#FFB8D4]' },
  { emoji: '🌟', title: 'Friends', msg: 'You made the journey joyful, the hard times lighter, and every celebration brighter.', bg: 'from-[#FFE8B8] to-[#FFD48A]' },
  { emoji: '📚', title: 'Professors', msg: 'Your knowledge and guidance shaped how I think and who I am becoming.', bg: 'from-[#D4E8FF] to-[#B8D4FF]' },
  { emoji: '🧭', title: 'Mentors', msg: 'Your wisdom pointed me forward when I couldn\u2019t see the path ahead.', bg: 'from-[#E0D4FF] to-[#CBB8FF]' },
  { emoji: '🎓', title: 'Classmates', msg: 'We learned together, struggled together, and now celebrate together.', bg: 'from-[#C9F2DC] to-[#A8E8C4]' },
  { emoji: '🎉', title: 'Guests', msg: 'Thank you for taking the time to share in this milestone. Your presence means everything.', bg: 'from-[#FFDCC2] to-[#FFC299]' },
];

const tilts = [-2, 1.5, -1, 2, -1.5, 1];

export function Appreciation() {
  return (
    <section
      id="appreciation"
      className="py-28 relative overflow-hidden bg-gradient-to-b from-[#FFF6E9] via-[#FFF0F5] to-[#F3E9FF]"
    >
      {/* Soft blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FFD1E3]/40 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#D4C4FF]/40 blur-3xl"
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-[#FF8FAE] mb-3">
            💕 GRATITUDE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#6B4A5C] mb-5">
            With Deepest Gratitude
          </h2>
          <p className="text-lg text-[#9B7B95]">
            To the village that supported, guided, and celebrated with me
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {appreciations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.34, 1.4, 0.64, 1] }}
              whileHover={{ scale: 1.05, rotate: 0, y: -6 }}
              className={`relative rounded-[2rem] bg-gradient-to-br ${item.bg} p-8 shadow-lg shadow-pink-100/60 border-2 border-white/60 cursor-default`}
              data-testid={`appreciation-card-${i}`}
            >
              {/* Emoji bubble */}
              <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-full bg-white/70 backdrop-blur flex items-center justify-center text-3xl mb-5 shadow-sm"
              >
                {item.emoji}
              </motion.div>

              <h3 className="text-2xl font-bold text-[#6B4A5C] mb-3">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#7A5C72] italic">
                "{item.msg}"
              </p>

              {/* Little sparkle accent */}
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                className="absolute top-5 right-6 text-lg"
              >
                ✨
              </motion.span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-[#FF8FAE]">
            THANK YOU 🤍
          </p>
        </motion.div>
      </div>
    </section>
  );
}