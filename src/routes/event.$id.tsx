import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Pause, Play } from "lucide-react";
import { useState } from "react";

import eventMask from "@/assets/event-mask.svg";
import { getEventById } from "@/data/events";
import {
  playEventAudio,
  pauseAudio,
  resumeAudio,
  getCurrentAudio,
} from "@/lib/audio";

export const Route = createFileRoute("/event/$id")({
  component: EventPage,
  notFoundComponent: () => <div className="p-8">Event not found</div>,
  errorComponent: () => <div className="p-8">Error loading event</div>,
});

function EventPage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const [playing, setPlaying] = useState(false);

  const event = getEventById(id);

  if (!event) {
    return <div className="p-8">Event not found</div>;
  }

  const eventId = event.id;

  function handleAudioClick() {
    const audio = getCurrentAudio();

    if (playing) {
      pauseAudio();
      setPlaying(false);
      return;
    }

    if (!audio || audio.ended) {
      playEventAudio(eventId);
    } else {
      resumeAudio();
    }

    setPlaying(true);
  }

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: event.color }}
    >
      <div className="px-6 pt-12">
        <button
          onClick={() => router.history.back()}
          className="w-10 h-10 rounded-full border border-black text-black flex items-center justify-center mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>

      <div
        className="w-full h-[260px] bg-center bg-cover mb-8"
        style={{
          backgroundImage: `url(${event.image})`,
          maskImage: `url(${eventMask})`,
          WebkitMaskImage: `url(${eventMask})`,
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />

      <div className="px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex bg-black text-[#F9F6EC] rounded-full px-4 py-1 text-xs uppercase tracking-widest">
            Event
          </span>

          <button
            onClick={handleAudioClick}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: playing ? "#000000" : "transparent",
              border: playing ? "none" : "2px solid #000000",
              color: playing ? event.color : "#000000",
            }}
            aria-label={playing ? "Pause audio" : "Play audio"}
          >
            {playing ? (
              <Pause className="h-4 w-4" fill="currentColor" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
            )}
          </button>
        </div>

        <h1 className="text-5xl serif leading-none text-black mb-4 max-w-[320px]">
          {event.name}
        </h1>

        <p className="text-left text-lg text-black/70 mb-8">{event.date}</p>

        <p className="text-lg leading-relaxed text-black/75">
          {event.explanation}
        </p>
      </div>
    </div>
  );
}
