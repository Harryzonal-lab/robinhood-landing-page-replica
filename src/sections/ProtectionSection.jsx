const illustrations = [
  {
    src: "https://images.ctfassets.net/ilblxxee70tt/4eSlnvgaWAu2jaCVAyRcrY/602aa63fb17d4448ef651bd2944e963a/illo_secure.svg",
    alt: "Secure data illustration",
    caption: "We work hard to keep your data safe and secure.",
  },
  {
    src: "https://images.ctfassets.net/ilblxxee70tt/DwoUYJLid0EWhDOJPjFYN/673186170fb52deebdfaeb3691a28cac/illo_protect.svg",
    alt: "Account protection illustration",
    caption: "We protect your account from unauthorized activity.",
  },
  {
    src: "https://images.ctfassets.net/ilblxxee70tt/2KMkk3plAKjRG2fPBI69a1/18a5f48bbf278bc91008f6904096b559/illo_multi-factor.svg",
    alt: "Multi-factor authentication illustration",
    caption: "We provide multi-factor authentication on all accounts.",
  },
  {
    src: "https://images.ctfassets.net/ilblxxee70tt/4u2J3HEANe8rXfdytWGpAC/72bd780bca181f59b40dcf8c51f0e996/illo_247.svg",
    alt: "24/7 support illustration",
    caption: "We've got your back. We're available to you 24/7.",
  },
];

export default function ProtectionSection() {
  return (
    <section className="min-h-screen w-full bg-[#19170f] px-6 py-20 text-white">
      <h2 className="mx-auto text-center text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
        Robinhood Protection
        <br />
        Guarantee
      </h2>

      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 justify-items-center gap-x-20 gap-y-16 sm:grid-cols-2">
        {illustrations.map((illustration) => (
          <div
            key={illustration.src}
            className="flex w-full max-w-xs flex-col items-center text-center"
          >
            <div className="flex h-56 w-56 items-center justify-center">
              <img
                src={illustration.src}
                alt={illustration.alt}
                className="h-full w-full object-contain"
              />
            </div>

            <p className="mt-6 max-w-xs text-lg leading-relaxed text-white">
              {illustration.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
