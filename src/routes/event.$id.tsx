import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { events } from "@/lib/data";

export const Route = createFileRoute("/event/$id")({
  component: EventPage,
  notFoundComponent: () => <div className="p-8">Not found</div>,
  errorComponent: () => <div className="p-8">Error</div>,
});

function EventPage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const e = events[id];
  if (!e) return <div className="p-8">Not found</div>;
  return (
    <div className="min-h-screen pb-24">
      <div className="relative">
        <img src={e.image} alt={e.title} className="w-full h-72 object-cover" />
        <button onClick={() => router.history.back()} className="absolute top-12 left-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center">
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
      <div className="px-6 py-8">
        <h1 className="text-3xl serif mb-2">{e.title}</h1>
        <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--concept-blue)" }}>{e.position}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{e.description}</p>
      </div>
      <BottomNav />
    </div>
  );
}
