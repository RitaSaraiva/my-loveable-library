import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { pairs } from "@/data/pairs";
import { getPersonById } from "@/data/people";
import { getEventById } from "@/data/events";

export const Route = createFileRoute("/pair-detail/$id")({
  component: PairDetailPage,
  notFoundComponent: () => <div className="p-8">Pair not found</div>,
  errorComponent: () => <div className="p-8">Error loading pair</div>,
});

function PairDetailPage() {
  const { id } = Route.useParams();
  const router = useRouter();

  const pair = pairs.find((item) => item.id === id);

  if (!pair) {
    return <div className="p-8">Pair not found</div>;
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      <div className="relative" style={{ background: pair.color }}>
        <div className="bg-background torn-bottom px-6 pt-12 pb-16 -mb-4">
          <button
            onClick={() => router.history.back()}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <h1 className="text-5xl serif leading-tight">
            {pair.title}
          </h1>
        </div>

        <div
          className="px-6 py-10"
          style={{ color: "oklch(0.15 0.02 240)" }}
        >
          <p className="serif text-2xl leading-snug">
            {pair.explanation}
          </p>
        </div>
      </div>

      <div className="bg-background torn-top -mt-4 pt-8 px-6">
        <h2 className="serif text-xl mb-4 flex items-center gap-2">
          People <ChevronRight className="h-4 w-4" />
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6">
          {pair.people.map((personId) => {
            const person = getPersonById(personId);
            if (!person) return null;

            return (
              <Link
                key={person.id}
                to="/person/$id"
                params={{ id: person.id }}
                className="flex-shrink-0 w-24 text-center"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover mb-2 mx-auto bg-muted"
                />
                <div className="text-xs font-semibold leading-tight">
                  {person.name}
                </div>
                <div
                  className="text-[10px] mt-1"
                  style={{ color: person.color }}
                >
                  {person.role}
                </div>
              </Link>
            );
          })}
        </div>

        <h2 className="serif text-xl mt-8 mb-4 flex items-center gap-2">
          Events <ChevronRight className="h-4 w-4" />
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
          {pair.events.map((eventId) => {
            const event = getEventById(eventId);
            if (!event) return null;

            return (
              <Link
                key={event.id}
                to="/event/$id"
                params={{ id: event.id }}
                className="flex-shrink-0 w-56"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-56 h-40 object-cover rounded-sm mb-2 bg-muted"
                />
                <div className="text-sm">{event.name}</div>
                <div
                  className="text-xs"
                  style={{ color: event.color }}
                >
                  {event.date}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}