import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/playlist", label: "Playlist" },
  { to: "/question", label: "A Question" },
] as const;

function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number; opacity: number }[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      size: 10 + Math.random() * 18,
      opacity: 0.15 + Math.random() * 0.35,
    }));
    setHearts(arr);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="absolute text-rose"
          fill="currentColor"
          style={{
            left: `${h.left}%`,
            bottom: `-40px`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animation: `float-up ${14 + Math.random() * 10}s linear ${h.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <FloatingHearts />
      <header className="relative z-10 border-b border-border/40 backdrop-blur-md bg-background/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2 font-serif text-xl italic">
            <Heart className="h-4 w-4 text-rose heart-beat" fill="currentColor" />
            <span className="text-shimmer">N &amp; A</span>
          </Link>
          <ul className="flex items-center gap-1 sm:gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="px-3 py-2 rounded-full text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "px-3 py-2 rounded-full text-foreground bg-secondary/60" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 mt-32 border-t border-border/40 py-10 text-center">
        <p className="font-serif italic text-muted-foreground">
          Made with <Heart className="inline h-4 w-4 text-rose heart-beat" fill="currentColor" /> by Navmeet, for Aditi.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70">Forever, since 3 April 2026.</p>
      </footer>
    </div>
  );
}
