import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ArrowRight, MapPin, Calendar, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import hero from "@/assets/hero.jpg";
import moment1 from "@/assets/moment1.jpg";
import moment2 from "@/assets/moment2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Aditi — A Love Letter from Navmeet" },
      { name: "description", content: "A digital love letter for Aditi — our story, our memories, our forever." },
    ],
  }),
  component: HomePage,
});

const timeline = [
  { date: "First Glance", place: "When the world went quiet", text: "The moment I saw you, every other story I knew lost its meaning." },
  { date: "3 April", place: "Our day, forever underlined", text: "The date I'll never need a calendar to remember. It lives in the way my heart counts time." },
  { date: "The Metro Station", place: "Our last goodbye that wasn't one", text: "Our First Hug, Your Smile, Your laugh echoing on the platform — I imagined every second of it." },
  { date: "The Ring", place: "A part of your infinite love", text: "My be it's a pice of paper for you but for me it's a most valuable jwellery." },
  { date: "Today", place: "Wherever you are", text: "Still choosing you. Quietly. Loudly. Endlessly." },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-script text-2xl text-blush/80">to my Aditi,</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              you are the <span className="italic text-shimmer">poem</span> I keep
              <br />trying to write.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed">
              This little corner of the internet is for you — every memory we've made, every reason I love you, and every dream I still want to chase with you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/question"
                className="group inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_oklch(0.66_0.22_0)] hover:scale-105"
              >
                <Heart className="h-4 w-4 heart-beat" fill="currentColor" />
                I have a question for you
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/memories"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-foreground transition-colors hover:bg-secondary/50"
              >
                Our memories
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-rose/20 blur-3xl" />
            <img
              src={hero}
              alt="A single deep red rose on dark velvet"
              width={1024}
              height={1024}
              className="relative rounded-3xl border border-border/50 shadow-2xl"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md p-4 shadow-xl"
            >
              <p className="font-script text-xl text-blush">forever yours,</p>
              <p className="font-serif italic text-sm text-muted-foreground">— Navmeet</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Sparkles className="mx-auto h-6 w-6 text-blush" />
        <p className="mt-6 font-serif text-3xl sm:text-4xl italic leading-snug text-foreground/90">
          "In a world full of noise, your name is the only sound that feels like home."
        </p>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-16 text-center">
          <p className="font-script text-2xl text-rose">chapter one</p>
          <h2 className="mt-2 font-serif text-5xl">Our Story</h2>
          <p className="mt-4 text-muted-foreground">A timeline of us, in moments that mattered.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose/60 to-transparent" />
          <div className="space-y-16">
            {timeline.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? "" : "sm:flex-row-reverse"}`}
              >
                <div className="hidden sm:block flex-1" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 mt-2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-rose blur-md animate-pulse" />
                    <Heart className="relative h-5 w-5 text-rose" fill="currentColor" />
                  </div>
                </div>
                <div className="ml-12 sm:ml-0 flex-1 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 hover:border-rose/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose">
                    <Calendar className="h-3 w-3" />
                    {m.date}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {m.place}
                  </div>
                  <p className="mt-4 font-serif text-xl italic text-foreground/90 leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEASER STRIP */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <Link to="/memories" className="group relative overflow-hidden rounded-3xl border border-border/60">
            <img src={moment2} alt="A silver ring on velvet" loading="lazy" width={1024} height={1024} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="font-script text-2xl text-blush">the ring</p>
              <h3 className="font-serif text-3xl">Memories →</h3>
            </div>
          </Link>
          <Link to="/playlist" className="group relative overflow-hidden rounded-3xl border border-border/60">
            <img src={moment1} alt="Metro station at night" loading="lazy" width={1024} height={1024} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="font-script text-2xl text-blush">the metro station</p>
              <h3 className="font-serif text-3xl">Playlist & Dreams →</h3>
            </div>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
