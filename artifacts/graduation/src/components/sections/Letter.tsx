import { motion } from 'framer-motion';

export function Letter() {
  const paragraphs = [
    "Thank you for taking the time to celebrate one of the most meaningful milestones of my life.",
    "Your presence, encouragement, and support have meant more than words can express. I will always cherish the memories we created together.",
    "This graduation is not only my achievement but also a reflection of everyone who believed in me along the way.",
    "From the bottom of my heart — thank you."
  ];

  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden flex items-center min-h-[70vh]">
      {/* Decorative watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-primary/[0.03] select-none pointer-events-none">
        🎓
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">A Personal Note</h2>
          <div className="w-20 h-px bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-6 text-center md:text-left text-lg md:text-xl font-serif leading-loose text-foreground/80">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-center md:text-right"
        >
          <p className="text-muted-foreground italic mb-2">With gratitude,</p>
          <p className="font-serif text-3xl text-primary font-semibold signature-font">The Graduate</p>
        </motion.div>
      </div>
    </section>
  );
}
