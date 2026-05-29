import { createFileRoute, Link } from "@tanstack/react-router";
import { Blob } from "@/components/TornShape";

export const Route = createFileRoute("/")({ component: Loading });

function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-16">
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl serif text-center">Concept<br/>Pairing</h1>
        <p className="text-sm tracking-widest text-muted-foreground uppercase text-center">
          Discover how ideas connect
        </p>
        <div className="relative w-48 h-48">
          <Blob color="blue" size={180} className="absolute inset-0 animate-pulse" />
          <Blob color="pink" size={80} className="absolute top-4 right-0 opacity-80" />
          <Blob color="red" size={60} className="absolute bottom-4 left-0 opacity-80" />
        </div>
      </div>
      <Link
        to="/pair"
        className="w-full py-4 bg-foreground text-background text-center tracking-widest text-sm font-semibold uppercase rounded-full"
      >
        Continue
      </Link>
    </div>
  );
}
