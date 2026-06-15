import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import hero from "@/assets/hero.jpg";
import moment1 from "@/assets/moment1.jpg";
import moment2 from "@/assets/moment2.jpg";
import moment3 from "@/assets/moment3.jpg";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories & Reasons — For Aditi" },
      { name: "description", content: "Polaroid memories of us, and a hundred reasons I love you." },
    ],
  }),
  component: MemoriesPage,
});

const polaroids = [
  { src: hero, caption: "the first rose", date: "spring" },
  { src: moment1, caption: "metro station goodbye", date: "the night" },
  { src: moment2, caption: "your ring on my finger", date: "3 april" },
  { src: moment3, caption: "fingers almost touching", date: "always" },
  { src: hero, caption: "you, my whole world", date: "everyday" },
  { src: moment3, caption: "petals & promises", date: "forever" },
];

const reasons = [
  "the way you laugh with your whole face",
  "how your eyes go soft when you talk about your dreams",
  "the way you said my name the first time",
  "your hand finding mine in the dark",
  "how you make ordinary days feel like festivals",
  "the patience you have with my chaos",
  "your handwriting on tiny notes",
  "the silence we share that never feels empty",
  "the courage you give me without trying",
  "the way 3 April will never be just a date again",
  "how the metro station feels like our church now",
  "the ring you gave me — and everything it means",
  "your forehead against mine",
  "the small wars you fight for me",
  "how home stopped being a place and became you",
];

function MemoriesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <p className="font-script text-2xl text-rose">a small museum</p>
        <h1 className="mt-2 font-serif text-5xl sm:text-6xl">Memories of us</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Tilted, imperfect, real. Polaroids from the heart's archive.
        </p>
      </section>

      {/* POLAROID GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {polaroids.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -3 : 3) }}
              whileHover={{ rotate: 0, scale: 1.04, y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-blush/95 p-4 pb-12 rounded-sm shadow-2xl shadow-black/50"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover grayscale-[10%]"
              />
              <p className="mt-4 text-center font-script text-2xl text-midnight">{p.caption}</p>
              <p className="text-center font-sans text-xs uppercase tracking-widest text-midnight/60">{p.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REASONS */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-rose">a beginning of a list</p>
          <h2 className="mt-2 font-serif text-5xl">Reasons I love you</h2>
          <p className="mt-4 text-muted-foreground">There are infinite. Here are the first {reasons.length}.</p>
        </div>
        <ol className="space-y-5">
          {reasons.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex gap-5 items-baseline border-b border-border/40 pb-5"
            >
              <span className="font-serif text-3xl italic text-rose/80 tabular-nums w-12 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-xl italic text-foreground/90 leading-snug">
                {r}.
              </span>
              <Heart className="ml-auto h-4 w-4 text-rose opacity-0 group-hover:opacity-100 transition-opacity heart-beat shrink-0" fill="currentColor" />
            </motion.li>
          ))}
        </ol>
        <p className="mt-12 text-center font-script text-3xl text-blush">…and 85 more I'm saving for whispers.</p>
      </section>
    </SiteShell>
  );
}
