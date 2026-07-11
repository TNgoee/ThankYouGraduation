import { motion } from 'framer-motion';
import { useState } from 'react';
// @ts-ignore
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

export function Celebrate() {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    if (celebrated) return;
    
    setCelebrated(true);
    
    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6,
        spread: 60,
        origin: { x: 0.2, y: 0.6 },
        colors: ['#C9A84C', '#1F2937', '#E5E7EB']
      });
      confetti({
        particleCount: 6,
        spread: 60,
        origin: { x: 0.8, y: 0.6 },
        colors: ['#C9A84C', '#1F2937', '#E5E7EB']
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section id="celebrate" className="py-28 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary text-sm tracking-[4px] font-medium mb-4">THE MOMENT</div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-8">
              Let’s Celebrate This Achievement
            </h2>
            <p className="text-xl text-muted-foreground">
              Because success is better when shared
            </p>
          </motion.div>

          {/* Main Action */}
          <div className="mt-16 mb-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                onClick={handleCelebrate}
                disabled={celebrated}
                className="group relative h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-primary/20 hover:border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-700 text-5xl shadow-xl"
              >
                <span className="transition-transform group-hover:rotate-12">🎉</span>
              </Button>
            </motion.div>
            
            <p className="mt-6 text-sm tracking-widest text-muted-foreground">
              {celebrated ? "CELEBRATING..." : "TAP TO CELEBRATE"}
            </p>
          </div>

          {/* Thank You Message */}
          {celebrated && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
                Thank you for being part of<br />
                this beautiful journey
              </div>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Your presence made this graduation truly meaningful
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating subtle elements */}
      {celebrated && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0.6, 
                scale: 0.6,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight * 0.7
              }}
              animate={{ 
                y: -150,
                opacity: 0,
                scale: 1.2
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: i * 0.15,
              }}
              className="absolute text-6xl"
            >
              {['✨', '🎓', '🌟'][i % 3]}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}