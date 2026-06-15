import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/question")({
  head: () => ({
    meta: [
      { title: "A Question for Aditi" },
      { name: "description", content: "Aditi… will you?" },
    ],
  }),
  component: QuestionPage,
});

function QuestionPage() {
  const [yes, setYes] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);

  const dodgeNo = () => {
    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 400;
    setNoPos({ x, y });
    setYesScale((s) => Math.min(s + 0.15, 2.6));
  };

  return (
    <SiteShell>
      <section className="relative mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        {!yes ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="mx-auto h-8 w-8 text-blush" />
            <p className="mt-6 font-script text-3xl text-rose">my dearest Aditi,</p>
            <h1 className="mt-6 font-serif text-5xl sm:text-7xl leading-tight">
              Will you be my <span className="italic text-shimmer">forever</span>?
            </h1>
            <p className="mx-auto mt-8 max-w-md text-muted-foreground leading-relaxed">
              No pressure. Just a small, soft, infinite question from the boy who's wana be yours since 2 years.
            </p>

            <div className="relative mt-16 flex h-40 items-center justify-center gap-6">
              <motion.button
                onClick={() => setYes(true)}
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-full bg-rose px-12 py-5 text-lg font-medium text-primary-foreground shadow-[0_0_60px_-10px_oklch(0.66_0.22_0)] hover:shadow-[0_0_80px_-5px_oklch(0.66_0.22_0)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="h-5 w-5 heart-beat" fill="currentColor" />
                  Yes, Navmeet
                </span>
              </motion.button>

              <motion.button
                onMouseEnter={dodgeNo}
                onClick={dodgeNo}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="rounded-full border border-border bg-secondary/40 px-8 py-4 text-muted-foreground"
              >
                No
              </motion.button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground/70 italic">(the "no" button is a little shy 🌹)</p>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              {/* burst hearts */}
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
                  animate={{
                    x: (Math.random() - 0.5) * 800,
                    y: (Math.random() - 0.5) * 600,
                    opacity: 0,
                    scale: 1.6,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 2 + Math.random(), ease: "easeOut", repeat: Infinity, repeatDelay: 0.3 }}
                  className="pointer-events-none absolute left-1/2 top-1/2"
                >
                  <Heart className="h-6 w-6 text-rose" fill="currentColor" />
                </motion.div>
              ))}

              <p className="font-script text-3xl text-blush">i knew it.</p>
              <h2 className="mt-6 font-serif text-6xl sm:text-8xl text-shimmer italic">
                forever it is.
              </h2>
              <p className="mx-auto mt-10 max-w-lg font-serif text-xl italic text-foreground/90 leading-relaxed">
                Thank you for saying yes — to the ring, to the metro station, to the boy who'll spend the rest of his life trying to deserve you.
              </p>
              <p className="mt-10 font-script text-2xl text-rose">— Navmeet, yours always.</p>
            </motion.div>
          </AnimatePresence>
        )}
      </section>
    </SiteShell>
  );
}
