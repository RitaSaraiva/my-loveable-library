import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Pause, ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { concepts, people, events } from "@/lib/data";

export const Route = createFileRoute("/concept/$id")({
  component: ConceptPage,
  notFoundComponent: () => <div className="p-8">Concept not found</div>,
  errorComponent: () => <div className="p-8">Error loading concept</div>,
});

function ConceptPage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const concept = concepts[id];
  if (!concept) return <div className="p-8">Not found</div>;

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Hero - torn black card on colored bg */}
      <div className="relative" style={{ background: `var(--concept-${concept.color})` }}>
        <div className="bg-background torn-bottom px-6 pt-12 pb-16 -mb-4">
          <div className="flex items-start justify-between mb-6">
            <button onClick={() => router.history.back()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <Pause className="h-5 w-5" fill="currentColor" />
            </button>
          </div>
          <h1 className="text-6xl serif leading-none">{concept.name.split(" ").map((w, i) => <span key={i} className="block">{w}</span>)}</h1>
        </div>

        {/* Description block */}
        <div className="px-6 py-10 text-foreground" style={{ color: "oklch(0.15 0.02 240)" }}>
          <p className="serif text-2xl leading-snug">
            <span className="font-semibold">Lorem ipsum</span> <span className="opacity-70">dolor sit amet consectetur. Sit sagittis tincidunt libero dictum. Ac pharetra aliquam tortor pretium volutpat tortor tortor sed. {concept.description}</span>
          </p>
        </div>
      </div>

      {/* People */}
      <div className="bg-background torn-top -mt-4 pt-8 px-6">
        <Link to="/concept/$id" params={{ id }} className="flex items-center gap-2 serif text-xl mb-4">
          People <ChevronRight className="h-4 w-4" />
        </Link>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6">
          {concept.people.map((pid) => {
            const p = people[pid];
            return (
              <Link key={pid} to="/person/$id" params={{ id: pid }} className="flex-shrink-0 w-20 text-center">
                <img src={p.image} alt={p.name} className="w-20 h-20 rounded-full object-cover mb-2" />
                <div className="text-xs font-semibold truncate">{p.name.split(" ")[0]}</div>
                <div className="text-[10px]" style={{ color: "var(--concept-blue)" }}>{p.position.split(" ")[0]}</div>
              </Link>
            );
          })}
        </div>

        {/* Events */}
        <h2 className="serif text-xl mt-8 mb-4 flex items-center gap-2">Events <ChevronRight className="h-4 w-4" /></h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
          {concept.events.map((eid) => {
            const e = events[eid];
            return (
              <Link key={eid} to="/event/$id" params={{ id: eid }} className="flex-shrink-0 w-56">
                <img src={e.image} alt={e.title} className="w-56 h-40 object-cover rounded-sm mb-2" />
                <div className="text-sm">{e.title}</div>
                <div className="text-xs" style={{ color: "var(--concept-blue)" }}>{e.position}</div>
              </Link>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
