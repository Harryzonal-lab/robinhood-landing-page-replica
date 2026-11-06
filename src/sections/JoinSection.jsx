export default function JoinSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#19170f] px-6 text-white">
      {/* Robinhood animated background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.ctfassets.net/ilblxxee70tt/3r1UZhjsj4AexVmCH9hrfH/1e7b93b16249b7ef73025a31d4cfae38/Dotcom_NewGeneration_Animation_WEB.webm"
          type="video/webm"
        />
      </video>

      {/* Main content */}
      <div className="relative z-10 mx-auto -mt-2 text-center">
        <h2 className="font-serif text-5xl font-normal leading-[1.12] tracking-tight sm:text-6xl md:text-7xl">
          Join a new generation
          <br />
          of investors
        </h2>

        <button className="mt-10 rounded-full bg-[#C6FF00] px-9 py-3.5 text-base font-medium text-black transition hover:bg-[#b5eb00]">
          Get started
        </button>
      </div>
    </section>
  );
}
