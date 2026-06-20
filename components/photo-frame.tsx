import Image from "next/image";
import { CornerTicks } from "@/components/proportion";

/**
 * Real-photo counterpart to PlaceholderFrame: a bordered, rounded image frame
 * with the same optional corner-ticks treatment, so swapping a placeholder for
 * a photo is a drop-in change. The image is cropped to `aspect` via object-cover.
 */
export function PhotoFrame({
  src,
  alt,
  aspect = "4/5",
  ticks = false,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  ticks?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative overflow-hidden rounded-card border border-line"
        style={{ aspectRatio: aspect }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {ticks && <CornerTicks size={18} />}
    </div>
  );
}
