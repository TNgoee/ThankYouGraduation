import { motion } from 'framer-motion';

const milestones = [
  { icon: "🎒", title: "First Day at University", desc: "A new chapter begins, full of hope and excitement" },
  { icon: "🤝", title: "New Friendships", desc: "Bonds formed that will last a lifetime" },
  { icon: "📚", title: "Academic Challenges", desc: "Late nights, hard lessons, and hard-won knowledge" },
  { icon: "🔬", title: "Research & Projects", desc: "Diving deep into what drives curiosity" },
  { icon: "💼", title: "Internship Experience", desc: "Real-world lessons that textbooks can't teach" },
  { icon: "🎓", title: "Graduation Ceremony", desc: "The moment it all came together" },
  { icon: "🌅", title: "A New Beginning", desc: "The next chapter starts now" }
];

export function Journey() {
  return (
    <section id="journey" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">The Journey</h2>
          <p className="text-muted-foreground text-lg">Looking back at the steps that led here</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 md:left-auto md:top-1/2 md:-translate-y-1/2 bottom-0 top-0 w-px md:w-full md:h-px bg-primary/20 -translate-x-1/2 md:translate-x-0" />
          
          <div className="flex flex-col md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory pb-8 pt-4 gap-8 md:gap-12 hide-scrollbar px-4 relative z-10">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative md:min-w-[300px] md:snap-center flex flex-col md:items-center"
              >
                {/* Timeline node */}
                <div className="absolute left-[-2rem] md:left-1/2 md:-translate-x-1/2 top-6 md:top-auto md:-bottom-[1.6rem] w-4 h-4 rounded-full bg-primary border-4 border-background z-20" />
                
                <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ml-6 md:ml-0 w-full text-left md:text-center group">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left md:origin-center">{item.icon}</div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
