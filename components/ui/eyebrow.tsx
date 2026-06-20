/** Mono, uppercase, tracked label with a short leading gold rule (notebook annotation). */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow mb-[18px] ${className}`}>{children}</p>;
}
