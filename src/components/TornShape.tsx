import { colorClass } from "@/lib/data";

import blobSvg from "@/assets/blob.svg";
import pentagonSvg from "@/assets/pentagon.svg";

function resolveFill(color: string) {
  if (color.startsWith("#")) {
    return color;
  }

  return colorClass(color);
}

export function TornShape({
  color,
  size = 80,
  number,
  label,
  className = "",
}: {
  color: string;
  size?: number;
  number?: number;
  label?: string;
  square?: boolean;
  className?: string;
}) {
  const fill = resolveFill(color);

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 drop-shadow-lg"
        style={{
          backgroundColor: fill,
          maskImage: `url(${pentagonSvg})`,
          WebkitMaskImage: `url(${pentagonSvg})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />

      {number !== undefined && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center"
            style={{
              clipPath: "polygon(10% 0,100% 5%,95% 100%,0 90%)",
            }}
          >
            {number}
          </div>
        </div>
      )}

      {label && (
        <div className="absolute inset-0 flex items-center justify-center text-black text-[10px] font-bold tracking-wider uppercase serif text-center px-3 leading-tight">
          {label}
        </div>
      )}
    </div>
  );
}

export function Blob({
  color,
  size = 60,
  className = "",
  style,
}: {
  color: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const fill = resolveFill(color);

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: fill,
        maskImage: `url(${blobSvg})`,
        WebkitMaskImage: `url(${blobSvg})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        ...style,
      }}
    />
  );
}
