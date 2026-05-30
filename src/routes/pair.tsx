import blueSvg from "@/assets/blue.svg";
import greenSvg from "@/assets/green.svg";
import pinkSvg from "@/assets/pink.svg";

import oneRightLine from "@/assets/lines/one-right.svg";
import twoLeftLine from "@/assets/lines/two-left.svg";
import twoRightLine from "@/assets/lines/two-right.svg";
import threeLeftLine from "@/assets/lines/three-left.svg";
import threeTopLine from "@/assets/lines/three-top.svg";
import threeRightLine from "@/assets/lines/three-right.svg";

import { BottomNav } from "@/components/BottomNav";
import { Blob, TornShape } from "@/components/TornShape";
import { concepts as allConcepts, getConceptById } from "@/data/concepts";
import { getPairByConcepts } from "@/data/pairs";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/pair")({ component: PairFlow });

type Stage = "listening" | "detected" | "connecting" | "squared";
type Concept = (typeof allConcepts)[number];

function PairFlow() {
  const [stage, setStage] = useState<Stage>("listening");
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const concept = getConceptById("liberalism");

  if (!concept) return <div className="p-8">Concept not found</div>;

  const options = concept.suggestions
    .map((suggestionId) => {
      const suggestedConcept = getConceptById(suggestionId);
      if (!suggestedConcept) return null;

      const pair = getPairByConcepts(concept.id, suggestedConcept.id);

      return {
        id: suggestedConcept.id,
        label: suggestedConcept.name,
        pairId: pair?.id,
        color: pair?.color ?? "#79B8EC",
      };
    })
    .filter(Boolean) as {
    id: string;
    label: string;
    pairId?: string;
    color: string;
  }[];

  useEffect(() => {
    if (stage === "detected") {
      const timer = setTimeout(() => setStage("connecting"), 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="min-h-screen pb-24 px-6 pt-22 relative">
      {stage === "listening" && (
        <ListeningScreen onDetect={() => setStage("detected")} />
      )}

      {stage !== "listening" && (
        <button
          onClick={() => {
            setStage("listening");
            setSelected(null);
          }}
          className="absolute top-12 left-6 w-10 h-10 rounded-full border border-border flex items-center justify-center"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      {stage === "detected" && (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-12">
            Detected!
          </p>
          <h1 className="text-6xl serif mb-8">{concept.name}</h1>
          <p className="text-xs tracking-widest text-muted-foreground uppercase leading-loose max-w-xs">
            {concept.definition}
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
            if (id === "") {
              setSelected(null);
              setStage("connecting");
              return;
            }

            setSelected(id);
            setStage("squared");
          }}
          onOpen={(id) => {
            const option = options.find((item) => item.id === id);

            if (option?.pairId) {
              navigate({
                to: "/pair-detail/$id",
                params: { id: option.pairId },
              });
            } else {
              navigate({
                to: "/concept/$id",
                params: { id },
              });
            }
          }}
        />
      )}

      {stage === "listening" && <BottomNav />}
    </div>
  );
}

const LISTENING_SVGS = [blueSvg, pinkSvg, greenSvg] as const;

function ListeningScreen({ onDetect }: { onDetect: () => void }) {
  const [svgIndex, setSvgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSvgIndex((prev) => (prev + 1) % LISTENING_SVGS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <img src={LISTENING_SVGS[svgIndex]} alt="" className="w-full h-full" />
      </button>

      <p className="text-center mt-6 text-xs text-muted-foreground">
        Tap shape to detect
      </p>
    </div>
  );
}

function getSuggestionLayout(count: number) {
  if (count === 1) {
    return [
      {
        x: "50%",
        y: "50%",
        line: oneRightLine,
        lineClass: "absolute left-[52%] top-[10%] w-[205px]",
      },
    ];
  }

  if (count === 2) {
    return [
      {
  x: "25%",
  y: "25%",
  line: twoLeftLine,
  lineClass: "absolute left-[-15%] top-[23%] w-[99px]",
},
      {
        x: "55%",
        y: "85%",
        line: twoRightLine,
        lineClass: "absolute left-[66%] top-[80%] w-[190px]",
      },
    ];
  }

  return [
  {
    x: "14%",
    y: "80%",
    line: threeLeftLine,
    lineClass: "absolute left-[-10%] top-[39%] w-[92px]",
  },
  {
    x: "50%",
    y: "38%",
    line: threeTopLine,
    lineClass: "absolute left-[60%] top-[15%] w-[250px]",
  },
  {
    x: "76%",
    y: "76%",
    line: threeRightLine,
    lineClass: "absolute left-[85%] top-[80%] w-[120px]",
  },
];
}

function ConnectScreen({
  concept,
  options,
  stage,
  selected,
  onPick,
  onOpen,
}: {
  concept: Concept;
  options: { id: string; color: string; label: string; pairId?: string }[];
  stage: Stage;
  selected: string | null;
  onPick: (id: string) => void;
  onOpen: (id: string) => void;
}) {
  const layout = getSuggestionLayout(options.length);

  return (
    <div
      className="min-h-[80vh] flex flex-col"
      onClick={() => {
        if (stage === "squared") onPick("");
      }}
    >
      <p className="text-center text-xs tracking-widest uppercase mt-2 text-[#F9F6EC]">
        Find a compatible concept
      </p>

      <div className="relative h-80 my-8 overflow-visible">
        {options.map((option, index) => {
          const position = layout[index];
          const isSelected = selected === option.id;

          return (
            <div key={option.id}>
              <img
  src={position.line}
  alt=""
  className={`${position.lineClass} pointer-events-none select-none z-20`}
/>

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  if (isSelected) {
                    onOpen(option.id);
                  } else {
                    onPick(option.id);
                  }
                }}
                className="absolute transition-all duration-300 active:scale-95 z-10"
                style={{
                  left: position.x,
                  top: position.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {isSelected ? (
                  <TornShape color={option.color} size={160} label={option.label} />
                ) : (
                  <Blob color={option.color} size={62} />
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-auto text-center pb-6">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-xs tracking-widest uppercase mb-3 text-[#F9F6EC]">
          1st Concept
        </span>

        <h1 className="text-5xl serif mb-4 text-[#F9F6EC]">{concept.name}</h1>

        <p className="text-xs tracking-widest uppercase leading-loose max-w-xs mx-auto text-[#C5C5C5]">
          {concept.definition}
        </p>
      </div>
    </div>
  );
}