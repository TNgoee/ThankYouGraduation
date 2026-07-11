import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import friends from '@assets/generated_images/friends.jpg';
import campus from '@assets/generated_images/campus.jpg';
import diploma from '@assets/generated_images/diploma.jpg';

const memories = [
  { img: friends, quote: "Late-night study sessions with the best people", tag: "Friendship" },
  { img: diploma, quote: "The day we submitted our final project", tag: "Milestone" },
  { img: campus, quote: "Campus walks between lectures", tag: "Campus Life" },
  { img: diploma, quote: "The moment we all crossed the stage", tag: "Graduation" },
  { img: friends, quote: "Celebrating every small win together", tag: "Joy" },
  { img: campus, quote: "The friendships that changed everything", tag: "Bonds" }
];

export function Memories() {
  return (
    <section id="memories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Moments I'll Always Cherish</h2>
          <p className="text-muted-foreground text-lg">The little things that made it all worthwhile</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-[350px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <Card className="h-full overflow-hidden border-border/50">
                    <img src={item.img} alt={item.tag} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                      <span className="text-white font-medium bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>
                  </Card>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-card border border-border/50 p-8 text-center flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="text-4xl text-primary/30 mb-4 font-serif">"</div>
                  <p className="text-xl font-serif italic text-foreground mb-6 leading-relaxed">
                    {item.quote}
                  </p>
                  <div className="w-12 h-px bg-primary/30"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
