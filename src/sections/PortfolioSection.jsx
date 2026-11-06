export default function PortfolioSection() {
  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-black text-white">
      {/* Full-screen Robinhood Strategies image */}
      <img
        src="https://images.ctfassets.net/ilblxxee70tt/54Guv4y5evT0ZpKTaC09c1/391b135f648b2582deff63a48ef63c10/RH25_Strategiespromo_wide_homepage_hero_4k.jpeg"
        alt="Robinhood Strategies portfolio displayed on a smartphone"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Text content on the left */}
      <div className="absolute inset-y-0 left-0 flex w-full items-center px-8 sm:w-[55%] sm:px-12 lg:px-[13.7%]">
        <div className="max-w-[470px]">
          {/* Brand */}
          <div className="mb-8 flex items-center gap-2 text-2xl">
            <span className="text-3xl">◢</span>
            <span>
              <strong className="font-semibold">Robinhood</strong>{" "}
              <span className="font-normal">Strategies</span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
            Your portfolio, handled by the pros
          </h2>

          {/* Description */}
          <p className="mt-8 text-base font-medium leading-6 sm:text-lg">
            Get timely market insights with an expert-managed portfolio that
            proactively adjusts your investments. Robinhood Gold members get
            zero management fees on every dollar over $100K.
          </p>

          {/* Subscription terms */}
          <p className="mt-7 text-sm font-medium sm:text-base">
            Terms apply. Gold subscription $5/month.
          </p>

          {/* CTA */}
          <a
            href="#start-investing"
            className="mt-7 inline-flex rounded-full bg-[#c7ff00] px-9 py-4 text-sm font-medium text-black transition hover:bg-[#d9ff57]"
          >
            Start investing
          </a>
        </div>
      </div>
    </section>
  );
}
