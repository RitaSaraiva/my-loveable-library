import { colorClass } from "@/lib/data";

function resolveFill(color: string) {
  if (color.startsWith("#")) {
    return color;
  }

  return colorClass(color);
}

// Irregular torn-paper polygon shape
export function TornShape({
  color,
  size = 80,
  number,
  label,
  square = false,
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

  const path = square
    ? "M12,8 L88,5 L94,90 L10,95 Z"
    : "M50,4 L88,28 L82,82 L22,90 L8,40 Z";

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        <path
          d={path}
          fill={fill}
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="0.5"
        />
      </svg>

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
        <div className="absolute inset-0 flex items-center justify-center text-black text-[10px] font-bold tracking-wider uppercase serif text-center px-2">
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
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ width: size, height: size, ...style }}
    >
      <path
        d="M50,5 C70,8 92,22 95,45 C98,68 80,90 55,95 C30,98 8,82 5,55 C2,28 28,2 50,5 Z"
        fill={fill}
      />
    </svg>
  );
}
