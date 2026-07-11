import { motion } from 'framer-motion';

export function Letter() {
  const paragraphs = [
    "Thank you for taking the time to celebrate one of the most meaningful milestones of my life.",
    "Your presence, encouragement, and support have meant more than words can express. I will always cherish the memories we created together.",
    "This graduation is not only my achievement but also a reflection of everyone who believed in me along the way.",
    "From the bottom of my heart — thank you.",
  ];

  return (
    <section id="letter" className="relative py-28 bg-background overflow-hidden">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#B8985A] mb-3">
            A Personal Note
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Words, Before I Go
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-16 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Commencement Edition</span>
          <span className="w-1 h-1 rounded-full bg-[#B8985A]" />
          <span>2026</span>
        </motion.div>

        {/* Top and bottom rules — bracket the article like a magazine spread */}
        <div className="border-t border-b border-[#B8985A]/25 py-14 md:py-16">
          {/* Editorial two-column body */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="columns-1 md:columns-2 gap-x-12 [column-rule:1px_solid_theme(colors.border/40%)]"
          >
            {/* First paragraph with drop cap */}
            <p className="text-[17px] leading-8 text-foreground/80 font-serif mb-6 [text-align:justify] break-inside-avoid">
              <span className="float-left font-serif text-6xl leading-[0.85] text-[#B8985A] pr-2 pt-1">
                {paragraphs[0].charAt(0)}
              </span>
              {paragraphs[0].slice(1)}
            </p>

            {/* Pull quote — sits inline within the column flow */}
            <blockquote className="break-inside-avoid my-8 py-1">
              <div className="w-8 h-px bg-[#B8985A] mb-4" />
              <p className="font-serif italic text-xl leading-relaxed text-foreground">
                "{paragraphs[1].split('.')[0]}."
              </p>
              <div className="w-8 h-px bg-[#B8985A] mt-4" />
            </blockquote>

            <p className="text-[17px] leading-8 text-foreground/80 font-serif mb-6 [text-align:justify] break-inside-avoid">
              {paragraphs[1]}
            </p>

            <p className="text-[17px] leading-8 text-foreground/80 font-serif mb-6 [text-align:justify] break-inside-avoid">
              {paragraphs[2]}
            </p>

            <p className="text-[17px] leading-8 text-foreground font-serif font-medium break-inside-avoid">
              {paragraphs[3]}
            </p>
          </motion.div>
        </div>

        {/* Signature + page footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-end justify-between"
        >
          <div>
            <p className="text-muted-foreground italic text-sm mb-1">With gratitude,</p>
            <h3 className="font-serif text-2xl font-semibold text-[#B8985A]">
              The Graduate
            </h3>
          </div>
          <p className="font-serif text-sm text-muted-foreground tracking-widest">
            — 04 —
          </p>
        </motion.div>
      </div>
    </section>
  );
}