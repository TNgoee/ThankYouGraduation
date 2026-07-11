import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const stats = [
  { icon: "🎓", value: 1, label: "Degree Earned" },
  { icon: "📚", value: 42, label: "Courses Completed" },
  { icon: "🏆", value: 3, label: "Academic Awards" },
  { icon: "📖", value: 5, label: "Research Projects" },
  { icon: "☕", value: 1200, label: "Study Hours" },
  { icon: "👨‍💻", value: 24, label: "Coding Projects" },
  { icon: "🌍", value: 2, label: "Internships" },
  { icon: "🤝", value: 87, label: "Friends Made" }
];

const chartData = [
  { name: 'Computer Science', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Mathematics', value: 25, color: 'hsl(var(--primary) / 0.7)' },
  { name: 'Electives', value: 20, color: 'hsl(var(--primary) / 0.4)' },
  { name: 'Design', value: 10, color: 'hsl(var(--primary) / 0.2)' },
];

function StatCard({ icon, value, label }: { icon: string, value: number, label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useAnimatedCounter(value, 2000, inView);

  return (
    <div ref={ref} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center shadow-sm">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-3xl font-bold font-serif text-foreground mb-1">
        {count.toLocaleString()}{value > 100 ? '+' : ''}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">The Journey in Numbers</h2>
          <p className="text-muted-foreground text-lg">Quantifying the unforgettable</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-background/80 backdrop-blur border border-border p-8 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-serif font-bold text-center mb-8">Focus Areas</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {chartData.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                {entry.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
