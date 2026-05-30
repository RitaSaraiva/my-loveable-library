import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Pencil } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { pairs } from "@/data/pairs";

import pfp from "@/assets/pfp.png";
import pairIcon from "@/assets/pair-icon.svg";

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
        <button className="w-10 h-10 rounded-full border border-[#F9F6EC] text-[#F9F6EC] flex items-center justify-center">
          <Settings className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <img
            src={pfp}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border border-[#F9F6EC]"
          />

          <button className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-transparent border border-[#F9F6EC] text-[#F9F6EC] flex items-center justify-center">
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
                <div
                  className="relative w-[76px] h-[56px]"
                  style={{
                    backgroundColor: displayColor,
                    maskImage: `url(${pairIcon})`,
                    WebkitMaskImage: `url(${pairIcon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />

                <div
                  className="absolute left-[43px] top-[18px] text-xs font-bold"
                  style={{ color: displayColor }}
                >
                  {number}
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
            <div key={pair.id} className="flex flex-col items-start opacity-80">
              {CardContent}
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
}
