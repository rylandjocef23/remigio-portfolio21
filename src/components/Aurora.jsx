// Slow-drifting gradient glows behind every page.
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night" aria-hidden="true">
      <span className="absolute -right-[20vmax] -top-[26vmax] size-[64vmax] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.30),transparent_62%)] will-change-transform motion-safe:animate-drift-a" />
      <span className="absolute -bottom-[30vmax] -left-[24vmax] size-[64vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.34),transparent_62%)] will-change-transform motion-safe:animate-drift-b" />
      <span className="absolute left-[38%] top-[32%] size-[46vmax] rounded-full bg-[radial-gradient(circle,rgba(240,171,252,0.16),transparent_62%)] will-change-transform motion-safe:animate-drift-c" />
    </div>
  );
}
