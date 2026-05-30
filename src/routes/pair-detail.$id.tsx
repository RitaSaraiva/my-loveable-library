import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { discoverPair } from "@/lib/discovery";
import {
  pauseAudio,
  resumeAudio,
  replayAudio,
  getCurrentAudio,
} from "@/lib/audio";

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
  useEffect(() => {
  discoverPair(pair.id);
}, [pair.id]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
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
              className="w-10 h-10 rounded-full border border-[#F9F6EC] text-[#F9F6EC] flex items-center justify-center mb-5"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-start justify-between gap-10">
              <h1 className="text-[2.3rem] serif leading-none text-[#F9F6EC] max-w-[290px]">
                {pair.title}
              </h1>

              <button
                onClick={() => {
  const audio = getCurrentAudio();

  if (playing) {
    pauseAudio();
    setPlaying(false);
    return;
  }

  if (!audio || audio.ended) {
    replayAudio();
  } else {
    resumeAudio();
  }

  setPlaying(true);
}}

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

        <div className="px-8 pt-1 pb-18 -mt-8">
          <p className="serif text-[1.9rem] leading-snug text-black">
            {pair.explanation}
          </p>
        </div>
      </section>

      <section className="relative -mt-6 min-h-[620px] pb-24 bg-background overflow-visible">
  <img
    src={contentShape}
    alt=""
    className="absolute pointer-events-none select-none z-0"
    style={{
      width: "150%",
      height: "100%",
      left: "-25%",
      top: "-6%",
      objectFit: "fill",
    }}
  />

        <div className="relative z-10 px-6 pt-12">
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
        </div>
      </section>
    </div>
  );
}