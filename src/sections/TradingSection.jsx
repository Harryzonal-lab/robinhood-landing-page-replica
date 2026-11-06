export default function TradingSection() {
  return (
    <section
      id="tools"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#252a28] text-white"
    >
      {/* Full-screen background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#171b1b] via-[#303735] to-[#777b77]" />

      {/* Full-screen image */}
      <img
        src="https://images.ctfassets.net/ilblxxee70tt/4AMLNM2FP37FHghha7757l/c29e98a9b5a31535a7333855183dca7b/wide_homepage_investing_4k_3.jpeg"
        alt="Robinhood trading platform displaying market charts"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Text on the right */}
      <div className="absolute inset-y-0 right-0 flex w-[42%] items-center bg-gradient-to-r from-transparent via-[#252a28]/70 to-[#252a28]/90 px-8 sm:px-12 lg:px-16">
        <div className="max-w-[580px]">
          <h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#c7ff00]">Intuitive trading tools</span>
            <br />
            Build your strategy and track market trends, seamlessly
          </h2>

          <p className="mt-6 text-base leading-7 text-white sm:text-lg">
            Trade stocks, options, crypto, and more on Robinhood Legend and the
            Robinhood app.
          </p>

          <a
            href="#learn-more"
            className="mt-8 inline-flex rounded-full bg-[#c7ff00] px-9 py-4 font-medium text-black transition hover:bg-[#d9ff57]"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
