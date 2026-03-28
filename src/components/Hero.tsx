export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-overlay grid-pattern relative bg-slate-900 text-white"
      aria-labelledby="hero-heading"
      data-theme="cooling"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-sm font-medium text-blue-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            Serving Athens, Huntsville &amp; North Alabama
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Huntsville&apos;s Most Trusted
            <span className="block text-blue-300">Residential HVAC Experts</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            From same-day AC repair to full heating system overhauls, our
            licensed technicians deliver reliable comfort for your home&nbsp;&mdash;
            backed by transparent pricing and a 100% satisfaction guarantee.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              id="hero-cta-quote"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 text-base font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              Get Your Free Estimate
              <svg viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-5 w-5" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="tel:+12565884712"
              id="hero-cta-call"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              (256) 588-4712
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "4,800+", label: "Homes Served" },
              { value: "4.9★", label: "Google Rating" },
              { value: "1hr", label: "Avg. Response" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
