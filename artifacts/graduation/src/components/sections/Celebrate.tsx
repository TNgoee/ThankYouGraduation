import { motion } from 'framer-motion';
import { useState } from 'react';
// @ts-ignore
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function Celebrate() {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    if (celebrated) return;
    
    setCelebrated(true);
    
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 10,
        spread: 70,
        origin: { x: 0.3, y: 0.7 },
        colors: ['#f472b6', '#fb7185', '#fcd34d', '#ffffff']
      });
      confetti({
        particleCount: 10,
        spread: 70,
        origin: { x: 0.7, y: 0.7 },
        colors: ['#f472b6', '#fb7185', '#fcd34d', '#ffffff']
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section id="celebrate" className="py-28 md:py-44 relative overflow-hidden bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/30 dark:to-zinc-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-pink-100 dark:bg-pink-900 rounded-full mb-6">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-pink-600 dark:text-pink-400 text-sm font-medium tracking-widest">HAPPY MOMENT</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-foreground leading-tight mb-6">
              Let’s Celebrate Together
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Because joy is doubled when you're by my side.
            </p>
          </motion.div>

          {/* Cute Main Button */}
          <div className="mt-20 mb-16 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                onClick={handleCelebrate}
                disabled={celebrated}
                className="group relative h-36 w-36 md:h-40 md:w-40 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 text-white shadow-2xl hover:shadow-pink-500/40 flex items-center justify-center text-6xl border-8 border-white dark:border-zinc-900 transition-all duration-500"
              >
                <span className="transition-all group-hover:rotate-12 group-active:scale-125">🎉</span>
              </Button>
            </motion.div>
          </div>

          <p className="text-sm tracking-[3px] text-pink-400 font-medium mb-12">
            {celebrated ? "🎊 CONGRATULATIONS..." : "CLICK TO SEND CONGRATULATIONS"}
          </p>

          {/* Thank You Message */}
          {celebrated && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-xl max-w-lg mx-auto border border-pink-100 dark:border-pink-900"
            >
              <div className="text-3xl md:text-4xl font-serif leading-snug text-pink-600 dark:text-pink-400">
               Thank you<br />for sharing this joy with me!
              </div>
              <p className="mt-6 text-muted-foreground">
                My graduation day was special because you were there.
              </p>
              <div className="mt-8 flex justify-center">
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating cute elements */}
      {celebrated && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0.9, 
                scale: 0.4,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight * 0.75,
                rotate: 0
              }}
              animate={{ 
                y: -180,
                opacity: 0,
                scale: 1.3,
                rotate: Math.random() * 180 - 90
              }}
              transition={{
                duration: 3.5 + Math.random() * 3,
                delay: i * 0.08,
                ease: "easeOut"
              }}
              className="absolute text-5xl drop-shadow-md"
            >
              {['🎉', '🎓', '✨', '💖', '🌸'][i % 5]}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}