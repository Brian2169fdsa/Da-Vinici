import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "secondary-on-dark" | "ink" | "tertiary";

const base =
  "inline-flex items-center gap-2.5 font-semibold rounded-pill transition-colors duration-150 ease-smooth";

const variants: Record<Variant, string> = {
  // Gold fill, ink label — the brand's primary action.
  primary: "bg-gold text-ink hover:bg-gold-bright px-8 py-[15px] text-base",
  // Outline on light: ink border, fills ink on hover.
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-cream px-7 py-[15px] text-base",
  // Outline on a dark photo hero: cream border on translucent fill.
  "secondary-on-dark":
    "border border-cream/50 bg-white/10 text-cream hover:bg-white/20 px-[30px] py-[17px] text-base",
  // Ink fill (used inside the gold CTA band).
  ink: "bg-ink text-cream hover:bg-ink-panel px-[34px] py-[17px] text-base",
  // Text + arrow link, no fill.
  tertiary: "!rounded-none text-gold-deep hover:text-gold px-0 py-0 text-[15px]",
};

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

/** Internal links use next/link; external (tel:/mailto:/http) use <a>. */
export function CTA({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: CTAProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-[18px] w-[18px]" aria-hidden />}
    </>
  );

  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
