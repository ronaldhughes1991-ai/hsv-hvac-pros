const services = [
  {
    id: "ac-repair",
    href: "/services/ac-repair",
    title: "AC Repair",
    tagline: "Cool Comfort, Restored Fast",
    description:
      "Huntsville summers don't wait — neither do we. Our certified techs diagnose and fix all residential AC brands with same-day service and upfront pricing. No hidden fees, ever.",
    features: ["Same-day diagnostics", "All brands serviced", "Parts warranty included"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: "heating-maintenance",
    href: "/services/heating-maintenance",
    title: "Heating Maintenance",
    tagline: "Prevent Breakdowns Before They Start",
    description:
      "Protect your family from cold-weather surprises. Our comprehensive tune-ups cover furnaces, heat pumps, and ductwork — extending equipment life by up to 40%.",
    features: ["20-point inspection", "Filter replacement", "Efficiency optimization"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    id: "emergency-service",
    href: "/services/emergency-hvac",
    title: "Emergency 24/7 Service",
    tagline: "When Minutes Matter, We're There",
    description:
      "AC quit at midnight? Furnace down during a cold snap? Our emergency team is on-call around the clock — average 60-minute response time across North Alabama.",
    features: ["24/7/365 availability", "60-min avg response", "No overtime charges"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    urgent: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="services-heading"
      data-theme="cooling"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Residential HVAC Solutions You Can Count On
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every service is backed by licensed technicians, transparent quotes,
            and our no-surprise pricing promise.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              id={`service-${s.id}`}
              className={`group relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-lg ${
                s.urgent
                  ? "border-red-200 ring-1 ring-red-100"
                  : "border-slate-200"
              }`}
            >
              {s.urgent && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white pulse-ring">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  24/7
                </span>
              )}

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                {s.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-blue-600">
                {s.tagline}
              </p>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                {s.description}
              </p>

              <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-800"
                >
                  Schedule Service
                </a>
                <a
                  href={s.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                >
                  Learn More
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
