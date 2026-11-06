export default function CryptoSection() {
  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#9eabc3] text-black">
      {/* Full-screen crypto background image */}
      <img
        src="https://images.ctfassets.net/ilblxxee70tt/2zqFBs1Dk1ZFLa68vgaCUM/06b9013b2eb0ec31bcd3c4bd97f30997/RH26_CryptoEarn_Hero_Header_WideDesktop__1_.jpeg"
        alt="Metallic chain representing cryptocurrency"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Content positioned on the right */}
      <div className="absolute inset-y-0 right-0 flex w-full items-center px-8 sm:w-[52%] sm:px-10 lg:w-[48%] lg:px-16">
        <div className="max-w-[500px]">
          {/* Brand */}
          <div className="mb-7 flex items-center gap-2 text-2xl">
            <span className="text-3xl">◢</span>
            <span>
              <strong className="font-semibold">Robinhood</strong>{" "}
              <span className="font-normal">Crypto</span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-normal tracking-tight sm:text-5xl">
            Trade crypto 24/7
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[440px] text-base leading-6 sm:text-lg">
            Start with as little as $1. Buy, sell, and transfer BTC, ETH, XRP,
            SOL, DOGE, SHIB, and more.
          </p>

          {/* Risk disclosure */}
          <a
            href="#crypto-risk-disclosures"
            className="mt-5 inline-flex items-center gap-2 text-xs text-black/70 hover:underline"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-black/50">
              i
            </span>
            Crypto Risk Disclosures
          </a>

          {/* Learn more */}
          <div>
            <a
              href="#learn-more"
              className="mt-8 inline-flex rounded-full bg-black px-9 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
