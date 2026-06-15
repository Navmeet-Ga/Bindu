import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Music, Play, Pause, MapPin, Plane, Loader2 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/playlist")({
  head: () => ({
    meta: [
      { title: "Our Playlist & Dreams — For Aditi" },
      { name: "description", content: "Songs that taste like us, and the places we'll wander together." },
    ],
  }),
  component: PlaylistPage,
});

const songs = [
  { title: "Perfect", artist: "Ed Sheeran", note: "", lyric: "I found a love for me, darling just dive right in and follow my lead." },
  { title: "Your Eyes", artist: "Barney Sku", note: "", lyric: "Kaise btaye kyu tujhko chaahe, yara bta na pyae." },
  { title: "Senorita", artist: "Shawn Mendes", note: "", lyric: "Her body fit right in my hands, la la la." },
  { title: "Co2", artist: "Prateek Kuhad",  note: "", lyric: "I just wana feel like i deserve you 'Cause you deserver me." },
  { title: "Raabta", artist: "Arijit Singh", note: "", lyric: "Kehte hain khuda ne is jahan mein sabhi ke liye kisi na kisi ko hai banaya." },
  { title: "Make You Feel My Love", artist: "Adele", note: "", lyric: "I could make you happy, make your dreams come true. Nothing that I wouldn't do." },
];

// iTunes Search API gives free 30s previews — no auth, CORS-enabled.
async function fetchPreviewUrl(title: string, artist: string): Promise<string | null> {
  const term = encodeURIComponent(`${title} ${artist}`);
  const res = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song&limit=1`);
  const data = await res.json();
  return data?.results?.[0]?.previewUrl ?? null;
}

const dreams = [
  { place: "Manali, in snow", note: "you in my hoodie, snow in your hair." },
  { place: "Paris at midnight", note: "kissing under the Eiffel because it's a cliché we deserve." },
  { place: "Goa monsoon", note: "barefoot, salt in our hair, no plans." },
  { place: "Kyoto in cherry blossom", note: "pink everywhere, exactly like the day I met you." },
  { place: "A tiny home of our own", note: "yellow lights, your books, my noise, our forever." },
];

function PlaylistPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [loadingIdx, setLoadingIdx] = useState<number | null>(null);
  const [previewCache, setPreviewCache] = useState<Record<number, string | null>>({});

  useEffect(() => {
    const a = new Audio();
    audioRef.current = a;
    const onEnd = () => setPlayingIdx(null);
    a.addEventListener("ended", onEnd);
    return () => {
      a.pause();
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = async (i: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingIdx === i) {
      audio.pause();
      setPlayingIdx(null);
      return;
    }

    audio.pause();
    let url = previewCache[i];
    if (url === undefined) {
      setLoadingIdx(i);
      try {
        url = await fetchPreviewUrl(songs[i].title, songs[i].artist);
      } catch {
        url = null;
      }
      setPreviewCache((c) => ({ ...c, [i]: url ?? null }));
      setLoadingIdx(null);
    }
    if (!url) return;

    audio.src = url;
    try {
      await audio.play();
      setPlayingIdx(i);
    } catch {
      setPlayingIdx(null);
    }
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
        <p className="font-script text-2xl text-rose">sounds of us</p>
        <h1 className="mt-2 font-serif text-5xl sm:text-6xl">Our Playlist</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Press play on any of these and I'll come running.
        </p>
      </section>

      {/* PLAYLIST */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ul className="rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md divide-y divide-border/40 overflow-hidden">
          {songs.map((s, i) => {
            const isPlaying = playingIdx === i;
            const isLoading = loadingIdx === i;
            const missing = previewCache[i] === null;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-center gap-5 p-5 hover:bg-rose/5 transition-colors"
              >
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full bg-rose/40 blur-md transition-opacity ${isPlaying ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"}`} />
                  <button
                    onClick={() => toggle(i)}
                    aria-label={isPlaying ? `Pause ${s.title}` : `Play ${s.title}`}
                    className={`relative h-12 w-12 rounded-full border border-rose/40 flex items-center justify-center transition-all ${isPlaying ? "bg-rose scale-110" : "bg-rose/20 group-hover:bg-rose group-hover:scale-110"}`}
                  >
                    {isLoading ? (
                      <Loader2 className={`h-5 w-5 animate-spin ${isPlaying ? "text-primary-foreground" : "text-rose"}`} />
                    ) : isPlaying ? (
                      <Pause className="h-5 w-5 text-primary-foreground" fill="currentColor" />
                    ) : (
                      <Play className={`h-5 w-5 ml-0.5 ${isPlaying ? "text-primary-foreground" : "text-rose group-hover:text-primary-foreground"}`} fill="currentColor" />
                    )}
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-xl text-foreground truncate">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.artist}</p>
                  <p className="mt-2 font-script text-base text-blush italic leading-snug">"{s.lyric}"</p>
                  {missing && (
                    <p className="mt-1 text-xs text-muted-foreground/70">Preview unavailable</p>
                  )}
                </div>
                <p className="hidden sm:block font-script text-lg text-blush/80 italic shrink-0 ml-4">{s.note}</p>
                <Music className="h-4 w-4 text-muted-foreground/40" />
              </motion.li>
            );
          })}
        </ul>
        <p className="mt-4 text-center text-xs text-muted-foreground/70">
          30-second previews from iTunes — tap to play, tap again to pause.
        </p>
      </section>


      {/* DREAMS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-16 text-center">
          <Plane className="mx-auto h-6 w-6 text-rose -rotate-12" />
          <p className="mt-4 font-script text-2xl text-rose">places we'll wear out together</p>
          <h2 className="mt-2 font-serif text-5xl">Dreams</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {dreams.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-plum/60 to-card/30 backdrop-blur-md p-8"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-rose/20 blur-3xl" />
              <div className="relative">
                <MapPin className="h-5 w-5 text-rose" />
                <h3 className="mt-3 font-serif text-3xl">{d.place}</h3>
                <p className="mt-3 font-serif italic text-foreground/80 leading-relaxed">{d.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center font-serif italic text-xl text-muted-foreground">
          Pick one. Pick all. I'm packing tonight.
        </p>
      </section>
    </SiteShell>
  );
}
