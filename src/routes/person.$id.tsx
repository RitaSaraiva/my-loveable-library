import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Pause, Play } from "lucide-react";
import { useState } from "react";

import personMask from "@/assets/people-mask.svg";
import { getPersonById } from "@/data/people";

export const Route = createFileRoute("/person/$id")({
  component: PersonPage,
  notFoundComponent: () => <div className="p-8">Person not found</div>,
  errorComponent: () => <div className="p-8">Error loading person</div>,
});

function PersonPage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const [playing, setPlaying] = useState(false);

  const person = getPersonById(id);

  if (!person) {
    return <div className="p-8">Person not found</div>;
  }

  return (
    <div
      className="min-h-screen pb-24 px-6 pt-12"
      style={{ backgroundColor: person.color }}
    >
      <button
        onClick={() => router.history.back()}
        className="w-10 h-10 rounded-full border border-black text-black flex items-center justify-center mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <div
        className="w-36 h-36 mx-auto mb-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${person.image})`,
          maskImage: `url(${personMask})`,
          WebkitMaskImage: `url(${personMask})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
        aria-label={person.name}
      />

      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex bg-black text-[#F9F6EC] rounded-full px-4 py-1 text-xs uppercase tracking-widest">
          Person
        </span>

        <button
          onClick={() => setPlaying((value) => !value)}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: playing ? "#000000" : "transparent",
            border: playing ? "none" : "2px solid #000000",
            color: playing ? person.color : "#000000",
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

      <h1 className="text-5xl serif leading-none text-black text-left mb-4 max-w-[280px]">
        {person.name}
      </h1>

      <p className="text-left text-lg text-black/80 mb-8">
        {person.role}
      </p>

      <p className="text-lg leading-relaxed text-black/85">
        {person.explanation}
      </p>
    </div>
  );
}