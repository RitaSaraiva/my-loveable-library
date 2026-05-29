import { Link, useLocation } from "@tanstack/react-router";
import { AudioLines, BookOpen } from "lucide-react";

export function BottomNav() {
  const { pathname } = useLocation();
  const isLibrary = pathname.startsWith("/library");
  const isPairing = !isLibrary;

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md border-t border-border bg-background/95 backdrop-blur z-50">
      <div className="grid grid-cols-2">
        <Link to="/pair" className="flex flex-col items-center gap-1 py-3 text-xs tracking-widest" style={{ color: isPairing ? "var(--foreground)" : "var(--muted-foreground)" }}>
          <AudioLines className="h-6 w-6" />
          PAIRING
        </Link>
        <Link to="/library" className="flex flex-col items-center gap-1 py-3 text-xs tracking-widest" style={{ color: isLibrary ? "var(--foreground)" : "var(--muted-foreground)" }}>
          <BookOpen className="h-6 w-6" />
          LIBRARY
        </Link>
      </div>
    </nav>
  );
}
