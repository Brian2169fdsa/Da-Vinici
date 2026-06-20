import { CornerTicks } from "@/components/proportion";

/**
 * Striped placeholder frame with a mono caption — an intentional slot for the
 * client's real photography (founder portrait, team cards, blog images).
 */
export function PlaceholderFrame({
  label,
  aspect = "4/5",
  ticks = false,
  className = "",
}: {
  label: string;
  aspect?: string;
  ticks?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="flex items-center justify-center overflow-hidden rounded-card border border-line bg-[repeating-linear-gradient(135deg,#EFE7D6_0_10px,#FBF8F1_10px_20px)]"
        style={{ aspectRatio: aspect }}
      >
        <span className="px-4 text-center font-mono text-[11px] uppercase tracking-[.1em] text-[#A8997F]">
          {label}
        </span>
      </div>
      {ticks && <CornerTicks size={18} />}
    </div>
  );
}
