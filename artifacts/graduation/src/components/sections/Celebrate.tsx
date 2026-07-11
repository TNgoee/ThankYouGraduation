import { motion } from 'framer-motion';
import { useState } from 'react';
// @ts-ignore
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

export function Celebrate() {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    setCelebrated(true);
    
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C9A84C', '#0A1628', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C9A84C', '#0A1628', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section id="celebrate" className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <motion.div 
        animate={{ 
          backgroundColor: celebrated ? 'hsl(var(--primary) / 0.1)' : 'transparent',
        }}
        className="absolute inset-0 transition-colors duration-1000"
      />
      
      {celebrated && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl opacity-40"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                rotate: 0
              }}
              animate={{
                y: -200,
                rotate: 360
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                ease: "easeOut",
              }}
            >
              {['🎈', '🎉', '🎓'][i % 3]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">Celebrate Together</h2>
          
          <Button
            size="lg"
            onClick={handleCelebrate}
            className="text-2xl px-12 py-8 rounded-full shadow-xl hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground mb-12"
            data-testid="button-celebrate"
          >
            🎉 Celebrate!
          </Button>

          {celebrated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-serif text-primary font-medium"
            >
              Thank You for Making My Graduation Day Truly Special!
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
