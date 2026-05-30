import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useState } from "react";

import titleShape from "@/assets/pair-detail/title-shape.svg";
import contentShape from "@/assets/pair-detail/content-shape.svg";

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
  const [playing, setPlaying] = useState(true);

  const pair = pairs.find((item) => item.id === id);

  if (!pair) {
    return <div className="p-8">Pair not found</div>;
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      <section
  className="relative"
  style={{ backgroundColor: pair.color }}
>
  <div className="relative h-[280px] overflow-visible">
    <img
  src={titleShape}
  alt=""
  className="absolute pointer-events-none select-none z-0"
  style={{
    width: "180%",
    height: "108%",
    left: "-4%",
    top: "-15%",
  }}
/>

    <div className="relative z-10 px-6 pt-11">
      <button
        onClick={() => router.history.back()}
        className="w-10 h-10 rounded-full border border-[#F9F6EC] text-[#F9F6EC] flex items-center justify-center mb-3"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <div className="flex items-start justify-between gap-10">
        <h1 className="text-5xl serif leading-none text-[#F9F6EC] max-w-[210px]">
          {pair.title}
        </h1>

        <button
          onClick={() => setPlaying((value) => !value)}
          className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 mr-12"
          style={{
            backgroundColor: playing ? pair.color : "transparent",
            border: playing ? "none" : `2px solid ${pair.color}`,
            color: playing ? "#000000" : pair.color,
          }}
          aria-label={playing ? "Pause audio" : "Play audio"}
        >
          {playing ? (
            <Pause className="h-7 w-7" fill="currentColor" />
          ) : (
            <Play className="h-8 w-8 ml-1" fill="currentColor" />
          )}
        </button>
      </div>
    </div>
  </div>

  <div className="px-8 pt-8 pb-16">
    <p className="serif text-2xl leading-snug text-black">
      {pair.explanation}
    </p>
  </div>
</section>

      <section
        className="-mt-4 px-6 pt-12 pb-24"
        style={{
          backgroundImage: `url(${contentShape})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <h2 className="serif text-2xl mb-4 flex items-center gap-2 text-[#F9F6EC]">
          People <ChevronRight className="h-5 w-5" />
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
                className="flex-shrink-0 w-24 text-left"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover mb-2 bg-muted"
                />
                <div className="text-sm font-semibold leading-tight text-[#F9F6EC]">
                  {person.name}
                </div>
                <div className="text-xs mt-1" style={{ color: pair.color }}>
                  {person.role}
                </div>
              </Link>
            );
          })}
        </div>

        <h2 className="serif text-2xl mt-10 mb-4 flex items-center gap-2 text-[#F9F6EC]">
          Events <ChevronRight className="h-5 w-5" />
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
                  className="w-56 h-40 object-cover rounded-2xl mb-3 bg-muted"
                />
                <div className="text-base leading-tight text-[#F9F6EC]">
                  {event.name}
                </div>
                <div className="text-xs mt-1" style={{ color: pair.color }}>
                  {event.date}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}