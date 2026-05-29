import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Blob, TornShape } from "@/components/TornShape";
import { concepts } from "@/lib/data";

export const Route = createFileRoute("/pair")({ component: PairFlow });

type Stage = "listening" | "detected" | "connecting" | "squared";

function PairFlow() {
  const [stage, setStage] = useState<Stage>("listening");
  const navigate = useNavigate();
  const concept = concepts.liberty;

  // Suggested ball options
  const options = [
    { id: "state", color: "blue", label: "State" },
    { id: "democracy", color: "pink", label: "Democracy" },
    { id: "authoritarianism", color: "red", label: "Authority" },
  ];
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (stage === "detected") {
      const t = setTimeout(() => setStage("connecting"), 3000);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <div className="min-h-screen pb-24 px-6 pt-12 relative">
      {stage === "listening" && (
        <ListeningScreen onDetect={() => setStage("detected")} />
      )}

      {stage !== "listening" && (
        <button
          onClick={() => setStage("listening")}
          className="absolute top-12 left-6 w-10 h-10 rounded-full border border-border flex items-center justify-center"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      {stage === "detected" && (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-12">Detected!</p>
          <h1 className="text-6xl serif mb-8">{concept.name}</h1>
          <p className="text-xs tracking-widest text-muted-foreground uppercase leading-loose max-w-xs">
            {concept.description}
          </p>
        </div>
      )}

      {(stage === "connecting" || stage === "squared") && (
        <ConnectScreen
          concept={concept}
          options={options}
          stage={stage}
          selected={selected}
          onPick={(id) => {
            setSelected(id);
            setStage("squared");
          }}
          onOpen={(id) => navigate({ to: "/concept/$id", params: { id } })}
        />
      )}

      {stage === "listening" && <BottomNav />}
    </div>
  );
}

function ListeningScreen({ onDetect }: { onDetect: () => void }) {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <h1 className="text-5xl serif mb-3">Listening...</h1>
      <p className="text-xs tracking-widest text-muted-foreground uppercase max-w-xs">
        Try scanning a political concept on the base of the device
      </p>
      <button
        onClick={onDetect}
        className="mx-auto mt-24 relative w-56 h-56 active:scale-95 transition-transform"
        aria-label="Scan"
      >
        <TornShape color="blue" size={224} />
        <div className="absolute inset-0 flex items-center justify-center gap-1">
          {[12, 28, 18, 32].map((h, i) => (
            <div key={i} className="w-1.5 bg-black animate-pulse" style={{ height: h, animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </button>
      <p className="text-center mt-6 text-xs text-muted-foreground">Tap shape to detect</p>
    </div>
  );
}

function ConnectScreen({
  concept, options, stage, selected, onPick, onOpen,
}: {
  concept: typeof concepts[string];
  options: { id: string; color: string; label: string }[];
  stage: Stage;
  selected: string | null;
  onPick: (id: string) => void;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <p className="text-center text-xs tracking-widest uppercase mt-2">Find a compatible concept</p>

      <div className="relative h-72 my-8">
        {/* torn arc strokes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 280" fill="none">
          <path d="M20,140 Q80,60 150,80" stroke="oklch(0.85 0.02 80)" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 4" opacity="0.7" />
          <path d="M280,160 Q220,90 160,90" stroke="oklch(0.85 0.02 80)" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 4" opacity="0.7" />
        </svg>

        {/* center pentagon shows the active concept */}
        {selected && (
          <div className="absolute left-1/2 top-4 -translate-x-1/2 animate-float-in">
            <TornShape color={options.find(o => o.id === selected)!.color} size={140} label={options.find(o => o.id === selected)!.label} />
          </div>
        )}

        {/* balls/squares */}
        <div className="absolute inset-0 flex items-end justify-around pb-4">
          {options.map((o, i) => {
            const isSelected = selected === o.id;
            // when squared and one is selected, hide non-selected
            if (stage === "squared" && !isSelected) {
              return (
                <button
                  key={o.id}
                  onClick={() => onPick(o.id)}
                  className="opacity-30"
                  aria-label={`Pick ${o.label}`}
                >
                  <Blob color={o.color} size={50} />
                </button>
              );
            }
            if (isSelected) {
              return (
                <button
                  key={o.id}
                  onClick={() => onOpen(concept.id)}
                  className="animate-float-in"
                  aria-label={`Open ${o.label}`}
                >
                  <TornShape color={o.color} size={88} label={o.label} square />
                </button>
              );
            }
            return (
              <button
                key={o.id}
                onClick={() => onPick(o.id)}
                className="animate-float-in active:scale-90 transition-transform"
                style={{ animationDelay: `${i * 0.15}s` }}
                aria-label={`Pick ${o.label}`}
              >
                <Blob color={o.color} size={64} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto text-center pb-6">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-xs tracking-widest uppercase mb-3">1st Concept</span>
        <h1 className="text-5xl serif mb-4">{concept.name}</h1>
        <p className="text-xs tracking-widest text-muted-foreground uppercase leading-loose max-w-xs mx-auto">
          {concept.description}
        </p>
      </div>
    </div>
  );
}
