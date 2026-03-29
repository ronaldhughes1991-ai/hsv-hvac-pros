export default function Emergency() {
  return (
    <section
      id="emergency"
      className="relative overflow-hidden bg-slate-900 py-16 sm:py-20"
      aria-labelledby="emergency-heading"
      data-theme="heating"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          {/* Icon */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30 pulse-ring">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-10 w-10" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2
              id="emergency-heading"
              className="text-2xl font-extrabold text-white sm:text-3xl"
            >
              HVAC Emergency? We&apos;re On Our Way.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              Dispatching local experts across Athens, Huntsville, Madison,
              and Harvest &mdash; average arrival in 60 minutes, day or night.
              No overtime fees, no surprises.
            </p>
          </div>

          {/* CTA */}
          <a
            href="tel:+12565884712"
            id="emergency-cta"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-700 hover:shadow-xl"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
            (256) 588-4712
          </a>
        </div>
      </div>
    </section>
  );
}
