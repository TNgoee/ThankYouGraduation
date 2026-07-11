import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToJourney = () => {
    document
      .getElementById("journey")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Blur */}
      <div className="absolute top-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mb-5 rounded-full border border-border bg-background/60 px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted-foreground backdrop-blur"
        >
          Graduation 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Thank You
          <span className="block text-primary">
            For Celebrating
          </span>
          <span className="block">
            My Graduation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          Every message, every smile, and every moment of support
          helped shape this unforgettable milestone. I'm truly
          grateful to have shared this journey with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .8 }}
          className="mt-12"
        >
          <Button
            size="lg"
            onClick={scrollToJourney}
            className="rounded-full px-8"
          >
            View My Journey
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 w-full max-w-3xl rounded-3xl border border-border bg-card/60 p-8 shadow-xl backdrop-blur"
        >
          <div className="grid grid-cols-3 gap-6 text-center">

            <div>
              <p className="text-4xl font-bold text-primary">4</p>
              <p className="mt-2 text-muted-foreground">
                Years of Learning
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary">∞</p>
              <p className="mt-2 text-muted-foreground">
                Memories Created
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary">1</p>
              <p className="mt-2 text-muted-foreground">
                New Beginning
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}