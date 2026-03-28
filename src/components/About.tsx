export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              About Us
            </p>
            <h2
              id="about-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Huntsville&apos;s Trusted HVAC Experts
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              With over 15 years of experience serving the Huntsville community,
              Huntsville HVAC Pros has built a reputation for honest, dependable
              service. Our NATE-certified technicians are trained on the latest
              equipment and techniques.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We believe in transparent pricing, quality workmanship, and treating
              every home like our own. Whether it&apos;s a routine tune-up or an
              emergency repair, we&apos;re here when you need us.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <dt className="text-sm font-medium text-slate-500">
                  Years of Experience
                </dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">15+</dd>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <dt className="text-sm font-medium text-slate-500">
                  Homes Serviced
                </dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">
                  5,000+
                </dd>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <dt className="text-sm font-medium text-slate-500">
                  Customer Satisfaction
                </dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">98%</dd>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <dt className="text-sm font-medium text-slate-500">
                  Certified Technicians
                </dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">12</dd>
              </div>
            </dl>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-slate-800 p-8 text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="mb-4 h-20 w-20 opacity-80"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
                <p className="text-xl font-bold">Serving Huntsville Since 2010</p>
                <p className="mt-2 text-sm text-blue-200">
                  Your comfort is our priority
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-blue-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
