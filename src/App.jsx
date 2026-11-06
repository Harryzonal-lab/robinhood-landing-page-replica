import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Smartphone,
  ChartNoAxesCombined,
  Bitcoin,
  Wallet,
  GraduationCap,
  Headphones,
  Sparkles,
} from "lucide-react";
import TradingSection from "./sections/TradingSection";
import CryptoSection from "./sections/CryptoSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProtectionSection from "./sections/ProtectionSection";
import LearnSection from "./sections/LearnSection";
import JoinSection from "./sections/JoinSection";
import Footer from "./sections/Footer";
const menuContent = {
  Investing: ["Stocks & funds", "Options", "Retirement"],
  Crypto: ["Crypto trading", "Crypto transfers", "Crypto disclosures"],
  "Robinhood Gold": ["Gold benefits", "Compare plans"],
};

function Logo({ dark = false }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2 ${dark ? "text-black" : "text-white"}`}
      aria-label="Robinhood home"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="14.1"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M10 8.5h7.5c4.2 0 6.5 2.1 6.5 5.3 0 2.3-1.3 4-3.7 4.8l4 4.9h-5.1l-3.5-4.4h-1.4v4.4H10V8.5Zm4.3 3.8v3.3h3c1.5 0 2.3-.6 2.3-1.7s-.8-1.6-2.3-1.6h-3Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-[21px] font-semibold tracking-[-1.1px]">
        robinhood
      </span>
    </a>
  );
}
function Header() {
  const [openMenu, setOpenMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-16">
        <Logo />
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {Object.entries(menuContent).map(([label, links]) => (
            <div className="relative" key={label}>
              <button
                onClick={() => setOpenMenu(openMenu === label ? "" : label)}
                aria-expanded={openMenu === label}
                className="flex items-center gap-1.5 py-3 text-sm text-white/90 transition hover:text-[#c7ff00]"
              >
                {label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${openMenu === label ? "rotate-180" : ""}`}
                />
              </button>
              {openMenu === label && (
                <div className="absolute left-0 top-12 min-w-48 rounded-xl border border-white/15 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#learn-more"
                      onClick={() => setOpenMenu("")}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/75 hover:bg-white/10 hover:text-white"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#learn-more"
            className="text-sm text-white/90 hover:text-[#c7ff00]"
          >
            Learn
          </a>
        </nav>
        <div className="hidden items-center gap-6 sm:flex">
          <a
            href="#login"
            className="text-sm font-medium text-white hover:text-[#c7ff00]"
          >
            Log in
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-[#c7ff00] px-5 py-3 text-sm font-semibold text-black hover:bg-[#d9ff57]"
          >
            Get started
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white sm:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/15 bg-black/95 px-5 pb-6 pt-3 sm:hidden">
          {Object.entries(menuContent).map(([label, links]) => (
            <div key={label} className="border-b border-white/10 py-3">
              <button
                onClick={() => setOpenMenu(openMenu === label ? "" : label)}
                className="flex w-full justify-between py-1 text-white"
              >
                {label}
                <ChevronDown size={16} />
              </button>
              {openMenu === label && (
                <div className="grid gap-3 py-3 pl-3">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#learn-more"
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-white/65"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#learn-more"
            onClick={() => setMobileOpen(false)}
            className="block border-b border-white/10 py-4 text-white"
          >
            Learn
          </a>
          <div className="mt-5 flex items-center gap-5">
            <a href="#login" className="text-sm text-white">
              Log in
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-[#c7ff00] px-5 py-3 text-sm font-semibold text-black"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black text-white"
    >
      <video
        className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="https://videos.ctfassets.net/ilblxxee70tt/1kZEpfkMA6NNjD1iNXHjez/57c24de9a0d08c076e07d132b52d46a0/HPTO_V3-Fade-Desktop.mp4"
          type="video/mp4"
        />
      </video>
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 sm:px-10 md:pb-20 md:pt-36 lg:px-16">
        <div className="max-w-[820px]">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-4 py-2.5 text-xs font-medium text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#c7ff00]" />
            Investing, all in one place
          </p>
          <h1 className="max-w-[900px] text-[clamp(4rem,8.5vw,8.5rem)] font-medium leading-[.88] tracking-[-.085em]">
            Trade all
            <br />
            in <span className="text-[#c7ff00]">one place.</span>
          </h1>
          <p className="mt-8 max-w-[500px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Manage your portfolio with stocks, ETFs, crypto, options, futures,
            and prediction markets. Get started with as little as $1.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-[#c7ff00] px-7 py-4 text-sm font-semibold text-black hover:bg-[#dcff66]"
            >
              Get started <ArrowRight size={17} />
            </a>
            <a
              href="#tools"
              className="rounded-full border border-white/55 bg-black/20 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Explore the platform
            </a>
          </div>
          <p className="mt-6 max-w-[520px] text-[11px] leading-5 text-white/65">
            Investing involves risk. Securities and cryptocurrency services are
            offered through separate affiliated entities.
          </p>
        </div>
      </div>
    </section>
  );
}
const tools = [
  {
    icon: ChartNoAxesCombined,
    title: "Intuitive trading tools",
    text: "Build your strategy and track market trends with powerful tools for every level of investor.",
  },
  {
    icon: Bitcoin,
    title: "Trade crypto 24/7",
    text: "Buy, sell, and transfer popular cryptocurrencies. Start with as little as $1.",
  },
  {
    icon: Wallet,
    title: "Your portfolio, handled by the pros",
    text: "Get timely market insights with an expert-managed portfolio and flexible investing options.",
  },
];
const protections = [
  {
    icon: LockKeyhole,
    title: "We work hard to keep your data safe and secure.",
  },
  {
    icon: ShieldCheck,
    title: "We protect your account from unauthorized activity.",
  },
  {
    icon: Smartphone,
    title: "Multi-factor authentication helps protect your account.",
  },
  { icon: Headphones, title: "We've got your back with 24/7 support." },
];
function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#64705d]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-medium leading-[1.02] tracking-[-.055em] text-[#111] sm:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#555b53]">{copy}</p>
      )}
    </div>
  );
}
function ToolsSection() {
  return (
    <section
      id="tools"
      className="bg-[#f4f5f1] px-6 py-24 text-black sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro
          eyebrow="The Robinhood experience"
          title="Intuitive tools. More ways to invest."
          copy="Build your strategy and track market trends, seamlessly. Trade stocks, options, crypto, and more on Robinhood."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tools.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group flex min-h-[330px] flex-col justify-between rounded-[28px] bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,.04)] transition hover:-translate-y-1"
            >
              <div>
                <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f4d0]">
                  <Icon size={27} />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-4 leading-7 text-[#666b63]">{text}</p>
              </div>
              <a
                href="#get-started"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <TradingSection />
      <CryptoSection />
      <PortfolioSection />
      <ProtectionSection />
      <LearnSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
