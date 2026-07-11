import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const appreciations = [
  { icon: "❤️", title: "Family", msg: "Your unconditional love carried me through every moment of doubt. Thank you for believing in me when I couldn't." },
  { icon: "🌟", title: "Friends", msg: "You made the journey joyful, the hard times lighter, and every celebration brighter." },
  { icon: "👨‍🏫", title: "Professors", msg: "Your knowledge and guidance shaped how I think and who I am becoming." },
  { icon: "🧭", title: "Mentors", msg: "Your wisdom pointed me forward when I couldn't see the path ahead." },
  { icon: "🎓", title: "Classmates", msg: "We learned together, struggled together, and now celebrate together." },
  { icon: "🎉", title: "Guests", msg: "Thank you for taking the time to share in this milestone. Your presence means everything." }
];

export function Appreciation() {
  return (
    <section id="appreciation" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">With Deepest Gratitude</h2>
          <p className="text-muted-foreground text-lg">To the village that made this possible</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appreciations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-background/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="pt-8 text-center px-6 pb-8">
                  <div className="text-5xl mb-6 bg-primary/5 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-primary border border-primary/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed italic">{item.msg}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
