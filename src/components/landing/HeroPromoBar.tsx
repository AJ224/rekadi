export function HeroPromoBar() {
  return (
    <section className="w-full bg-[var(--rk-orange)] text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-6 md:py-10">
        <h2
          className="text-center ds-anim-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(32px, 5.2vw, 60px)",
            lineHeight: "100%",
            letterSpacing: 0,
          }}
        >
          STREET CULTURE MEETS MODERN TASTE
        </h2>
      </div>
    </section>
  );
}