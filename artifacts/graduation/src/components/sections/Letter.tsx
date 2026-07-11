import { motion } from 'framer-motion';

export function Letter() {
  const paragraphs = [
    "Thank you for taking the time to celebrate one of the most meaningful milestones of my life.",
    "Your presence, encouragement, and support have meant more than words can express. I will always cherish the memories we created together.",
    "This graduation is not only my achievement but also a reflection of everyone who believed in me along the way.",
    "From the bottom of my heart — thank you.",
  ];

  return (
    <section
      id="letter"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-[#F3E9FF] via-[#FFF6E9] to-[#FFE5EC]"
    >
      {/* Soft blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#D4C4FF]/40 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FFC9DE]/40 blur-3xl"
      />

      <div className="container mx-auto max-w-2xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.15em] text-[#FF8FAE] mb-3">
            💌 A LITTLE NOTE FOR YOU
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4A5C]">
            Before I Go...
          </h2>
        </motion.div>

        {/* The note card — tilted, taped, handwritten feel */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.4, 0.64, 1] }}
          className="relative bg-white/90 backdrop-blur rounded-[1.5rem] shadow-xl shadow-pink-200/50 border-2 border-white p-8 md:p-12"
        >
          {/* Washi tape corners */}
          <div className="absolute -top-4 left-8 w-16 h-7 bg-[#FFD1E3]/80 rotate-[-8deg] rounded-sm shadow-sm" />
          <div className="absolute -top-4 right-10 w-16 h-7 bg-[#D4E8FF]/80 rotate-[6deg] rounded-sm shadow-sm" />

          {/* Heart wax seal */}
          <motion.div
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#FF8FAE] to-[#FF6B9D] flex items-center justify-center shadow-lg shadow-pink-300/60 border-2 border-white"
          >
            <span className="text-xl">💗</span>
          </motion.div>

          <div className="space-y-5 mt-4">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`text-[16px] md:text-[17px] leading-8 text-[#6B4A5C] ${
                  i === paragraphs.length - 1 ? 'font-semibold' : ''
                }`}
              >
                {i === 0 && <span className="mr-1">🌸</span>}
                {text}
              </motion.p>
            ))}
          </div>

          {/* Little dashed divider like a note ending */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="border-t-2 border-dashed border-[#FFD1E3] my-8"
          />

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-right"
          >
            <p className="text-[#9B7B95] text-sm mb-1">With all my heart,</p>
            <p className="text-2xl font-bold text-[#FF6B9D]">
              The Graduate 🎓
            </p>
          </motion.div>
        </motion.div>

        {/* Little floating hearts under the card */}
        <div className="flex justify-center gap-3 mt-8">
          {['💕', '✨', '💌'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
              className="text-xl"
            >
              {e}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}