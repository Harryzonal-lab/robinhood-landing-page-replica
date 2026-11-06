export default function LearnSection() {
  return (
    <section className="min-h-screen w-full overflow-hidden bg-[#C6FF00] px-6 pt-16 text-black">
      {/* Heading and introduction */}
      <div className="mx-auto text-center">
        <h2 className="text-5xl font-normal leading-tight tracking-tight md:text-7xl">
          Become a better investor
          <br />
          on the go, right in the app
        </h2>

        <p className="mt-6 text-lg md:text-xl">
          Here's a preview of the things you can learn when you sign up.
        </p>

        <button className="mt-10 rounded-full bg-black px-10 py-5 text-base font-semibold text-white transition hover:bg-neutral-800 md:text-lg">
          Sign up to access Robinhood Learn
        </button>
      </div>

      {/* Robinhood Learn phone image */}
      <div className="mx-auto mt-16 flex justify-center">
        <img
          src="https://images.ctfassets.net/ilblxxee70tt/PKdx5QPF2hxl9vcbxm55W/b1942354f732fbb69a019c53c73bf46b/homepage_learn_phone_2x.png"
          alt="Robinhood Learn app preview"
          className="h-auto w-full max-w-[520px] object-contain"
        />
      </div>
    </section>
  );
}
