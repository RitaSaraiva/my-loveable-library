import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Pencil } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { TornShape } from "@/components/TornShape";
import { pairs } from "@/data/pairs";

export const Route = createFileRoute("/library")({ component: Library });

function Library() {
  const discoveredPairs = {
    "capitalism-liberalism": "2026-05-30",
    "equity-socialism": "2026-05-29",
  };

  const discoveredCount = Object.keys(discoveredPairs).length;

  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <div className="flex justify-end mb-4">
        <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
          <Settings className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1591622180780-c9b8a8c43056?w=200"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border border-border"
          />
          <button className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center">
            <Pencil className="h-3 w-3" />
          </button>
        </div>

        <h2 className="mt-4 text-sm tracking-widest uppercase font-semibold">
          Margarida Rodrigues
        </h2>

        <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
          {discoveredCount} / {pairs.length} pairs discovered
        </p>
      </div>

      <h1 className="text-3xl serif mb-6">All pairs</h1>

      <div className="grid grid-cols-3 gap-x-3 gap-y-8">
        {pairs.map((pair, index) => {
          const number = index + 1;
          const discoveredDate =
            discoveredPairs[pair.id as keyof typeof discoveredPairs];

          const isDiscovered = !!discoveredDate;
          const displayColor = isDiscovered ? pair.color : "#6D6D6D";

          const CardContent = (
            <>
              <div className="relative h-16 w-full flex items-center">
                <div className="absolute left-0 top-0">
                  <TornShape color={displayColor} size={56} />
                </div>

                <div className="absolute left-8 top-2">
                  <TornShape
                    color={displayColor}
                    size={56}
                    number={number}
                  />
                </div>
              </div>

              <div className="mt-3 text-sm font-semibold leading-tight">
                {isDiscovered ? (
                  pair.title
                    .replace(" & ", " &\n")
                    .split("\n")
                    .map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                ) : (
                  <>
                    <span className="block">Unknown</span>
                    <span className="block">Pairing</span>
                  </>
                )}
              </div>

              <div className="text-xs mt-1 text-muted-foreground">
                {discoveredDate ?? "Not discovered"}
              </div>
            </>
          );

          return isDiscovered ? (
            <Link
              key={pair.id}
              to="/pair-detail/$id"
              params={{ id: pair.id }}
              className="flex flex-col items-start"
            >
              {CardContent}
            </Link>
          ) : (
            <div
              key={pair.id}
              className="flex flex-col items-start opacity-80"
            >
              {CardContent}
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
}
