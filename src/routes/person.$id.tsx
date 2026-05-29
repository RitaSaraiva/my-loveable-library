import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { people } from "@/lib/data";

export const Route = createFileRoute("/person/$id")({
  component: PersonPage,
  notFoundComponent: () => <div className="p-8">Not found</div>,
  errorComponent: () => <div className="p-8">Error</div>,
});

function PersonPage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const p = people[id];
  if (!p) return <div className="p-8">Not found</div>;
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <button onClick={() => router.history.back()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-6">
        <ArrowLeft className="h-4 w-4" />
      </button>
      <img src={p.image} alt={p.name} className="w-40 h-40 rounded-full object-cover mx-auto mb-6" />
      <h1 className="text-4xl serif text-center mb-2">{p.name}</h1>
      <p className="text-center text-xs tracking-widest uppercase text-muted-foreground mb-8">{p.position}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
    </div>
  );
}
