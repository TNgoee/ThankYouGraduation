import { motion } from 'framer-motion';

const appreciations = [
  { num: 'I', title: 'Family', msg: 'Your unconditional love carried me through every moment of doubt. Thank you for believing in me when I couldn\u2019t.' },
  { num: 'II', title: 'Friends', msg: 'You made the journey joyful, the hard times lighter, and every celebration brighter.' },
  { num: 'III', title: 'Professors', msg: 'Your knowledge and guidance shaped how I think and who I am becoming.' },
  { num: 'IV', title: 'Mentors', msg: 'Your wisdom pointed me forward when I couldn\u2019t see the path ahead.' },
  { num: 'V', title: 'Classmates', msg: 'We learned together, struggled together, and now celebrate together.' },
  { num: 'VI', title: 'Guests', msg: 'Thank you for taking the time to share in this milestone. Your presence means everything.' },
];

export function Appreciation() {
  return (
    <section id="appreciation" className="py-28 bg-background relative">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#B8985A] mb-4">Gratitude</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            With Deepest Gratitude
          </h2>
          <div className="w-14 h-px bg-[#B8985A] mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-light">
            To the village that supported, guided, and celebrated with me
          </p>
        </motion.div>

        <div className="divide-y divide-[#B8985A]/20 border-t border-b border-[#B8985A]/20">
          {appreciations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group grid grid-cols-[64px_1fr] md:grid-cols-[110px_180px_1fr] gap-4 md:gap-10 items-start py-10 md:py-12"
            >
              {/* Roman numeral */}
              <span className="font-serif text-4xl md:text-5xl text-[#B8985A]/50 group-hover:text-[#B8985A] transition-colors duration-500 leading-none">
                {item.num}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight col-span-2 md:col-span-1 -mt-1 md:mt-0">
                {item.title}
              </h3>

              {/* Message */}
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-serif italic col-span-2 md:col-span-1">
                "{item.msg}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xs tracking-[0.3em] text-[#B8985A]">THANK YOU</p>
        </motion.div>
      </div>
    </section>
  );
}