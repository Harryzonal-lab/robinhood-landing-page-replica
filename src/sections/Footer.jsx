const footerColumns = [
  {
    title: "Product",
    links: [
      "Invest",
      "IPO Access",
      "Predict",
      "Strategies",
      "Agents",
      "Agentic Credit Card",
      "Retirement",
      "Gold",
      "Crypto",
      "Earn",
      "Staking",
      "Chain",
      "Wallet",
      "Connect",
      "API",
      "Legend",
      "Options",
      "Futures",
      "Trading",
      "Custodial",
      "Ventures",
      "Social",
      "Banking",
      "Gold Card",
      "Platinum Card",
      "Concierge",
      "Learn",
      "Snacks",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Blog",
      "Vendors",
      "Press",
      "Careers",
      "Investor Relations",
      "Support",
      "Sustainability",
      "Investor Index",
      "Robinhood Merch",
    ],
  },
  {
    title: "Legal & Regulatory",
    links: [
      "Terms & Conditions",
      "Disclosures",
      "Robinhood US User Privacy Statement",
      "Robinhood Markets US Web Visitor Privacy Statement",
      "Law Enforcement Requests",
      "Your Privacy Choices",
    ],
  },
];

function LegalDisclosures() {
  return (
    <div className="space-y-5 text-sm leading-6">
      <p className="font-bold">All Investing involves risk.</p>

      <p>
        <strong>Brokerage services</strong> are offered through Robinhood
        Financial LLC, (“RHF”) a registered broker dealer (member <u>SIPC</u>),
        and clearing services through Robinhood Securities, LLC, (“RHS”) a
        registered broker dealer (member <u>SIPC</u>). While there is no
        additional cost to use Robinhood Legend, there are other fees associated
        with your brokerage account. Review the <u>fee schedule</u> for more
        information.
      </p>

      <p>
        <strong>Portfolio Management</strong> offered through Robinhood Asset
        Management, LLC (“Robinhood Strategies” or “RAM”), an SEC-registered
        investment advisor. For additional information about Robinhood
        Strategies, including about services, fees, risks, and conflicts of
        interest, please see our <u>firm's brochure</u>.
      </p>

      <p>
        <strong>Futures and cleared swaps trading</strong> is offered by
        Robinhood Derivatives, LLC, (“RHD”) a registered futures commission
        merchant with the Commodity Futures Trading Commission (CFTC) and a
        Member of the National Futures Association (NFA). RHD is not FDIC
        insured or SIPC protected.
      </p>

      <p>
        <strong>Cryptocurrency services</strong> are offered through an account
        with Robinhood Crypto, LLC (“RHC”) (NMLS ID: 1702840). Robinhood Crypto
        is licensed to engage in virtual currency business activity by the New
        York State Department of Financial Services. Review a list of RHC's
        licenses for more information. Cryptocurrency held through Robinhood
        Crypto is not FDIC insured or SIPC protected.
      </p>

      <p>
        <strong>The Robinhood spending account</strong> is offered through
        Robinhood Money, LLC (“RHY”) (NMLS ID: 1990968), a licensed money
        transmitter. Review a <u>list of our licenses</u> for more information.
      </p>

      <p>
        <strong>The Robinhood Cash Card</strong> is a prepaid card issued by
        Sutton Bank, Member FDIC, pursuant to a license from Mastercard
        International Incorporated. Mastercard and the circles design are
        registered trademarks of Mastercard International Incorporated.
      </p>

      <p>
        <strong>Robinhood Gold Card</strong> is subject to credit approval and
        underwriting. Robinhood Gold Card is offered by Robinhood Credit, Inc.
        (“RCT”), and is issued by Coastal Community Bank, pursuant to a license
        from Visa U.S.A. Inc. RCT is a financial technology company, not a bank.
      </p>

      <p>
        <strong>Robinhood Gold</strong> is a subscription-based membership
        program of premium services offered through Robinhood Gold, LLC (“RHG”).
      </p>

      <p>
        RHF, RHS, RAM, RHD, RHC, RHY, RCT, and RHG are affiliated entities and
        wholly owned subsidiaries of Robinhood Markets, Inc. RHF, RHS, RAM, RHD,
        RHC, RHY, RCT, and RHG are not banks. Investing products offered by RHF
        are not FDIC insured and involve risk, including possible loss of
        principal.
      </p>

      <p>
        RHY is not a member of FINRA, and products are not subject to SIPC
        protection, but funds held in the Robinhood spending account and
        Robinhood Cash Card account may be eligible for FDIC pass-through
        insurance (review the <u>Robinhood Cash Card Agreement</u> and the{" "}
        <u>Robinhood Spending Account Agreement</u>).
      </p>

      <p>
        Funds held in your Robinhood Cash Card account at Sutton Bank are
        eligible for FDIC insurance up to $250,000 and will not accrue or pay
        any interest. The availability of FDIC insurance is contingent upon
        Robinhood maintaining records acceptable to the FDIC, as receiver, if
        Sutton Bank should fail. FDIC insurance limits apply collectively to all
        of your deposits held at Sutton Bank.
      </p>

      <p>
        Options trading entails significant risk and is not appropriate for all
        customers. Customers must read and understand the{" "}
        <u>Characteristics and Risks of Standardized Options</u> before engaging
        in any options trading strategies. Options transactions are often
        complex and may involve the potential of losing the entire investment in
        a relatively short period of time. Certain complex options strategies
        carry additional risk, including the potential for losses that may
        exceed the original investment amount.
      </p>

      <p>4784959</p>

      <p>
        Robinhood, 85 Willow Road, Menlo Park, CA 94025. © 2026 Robinhood. All
        rights reserved.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#C6FF00] text-black">
      {/* Top utility bar */}
      <div className="flex flex-wrap items-center justify-between gap-5 border-b border-black px-6 py-6 md:px-10">
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
          <a href="#" className="underline underline-offset-4">
            Customer Relationship Summaries
          </a>

          <span className="h-9 border-l border-black" />

          <a href="#" className="underline underline-offset-4">
            FINRA’s BrokerCheck
          </a>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-sm md:text-base">Follow us on</span>

          <a href="https://x.com/RobinhoodApp" aria-label="X">
            𝕏
          </a>
          <a
            href="https://www.instagram.com/robinhoodapp/"
            aria-label="Instagram"
          >
            ◎
          </a>
          <a
            href="https://www.linkedin.com/company/robinhood/"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a href="https://www.tiktok.com/@robinhood" aria-label="TikTok">
            ♪
          </a>
          <a href="https://www.youtube.com/@RobinhoodApp" aria-label="YouTube">
            ▶
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="grid grid-cols-1 gap-12 px-6 py-7 md:grid-cols-2 md:px-10 xl:grid-cols-[1fr_1fr_1.2fr_3.2fr]">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-7 font-bold">{column.title}</h3>

            <ul className="space-y-3 text-sm md:text-base">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-opacity hover:opacity-60">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <LegalDisclosures />
      </div>

      {/* Large Robinhood wordmark */}
      <div className="overflow-hidden px-5 pt-10">
        <div className="whitespace-nowrap text-center text-[20vw] font-semibold leading-[0.8] tracking-[-0.08em]">
          Robinhood
        </div>
      </div>
    </footer>
  );
}
