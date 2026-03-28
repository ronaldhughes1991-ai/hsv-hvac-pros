import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="contact-heading"
      data-theme="heating"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          {/* Left info panel — 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Contact Us
            </p>
            <h2
              id="contact-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Get Your Free Estimate
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Fill out the form and a member of our team will reach out within 2
              hours during business hours. For emergencies, call us directly.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Phone</dt>
                  <dd>
                    <a href="tel:+12565884712" className="text-lg font-bold text-slate-900 hover:text-blue-700">
                      (256) 588-4712
                    </a>
                  </dd>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.028 11.028 0 00.757.433l.04.021.01.005.004.002h.001zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Service Area</dt>
                  <dd className="font-semibold text-slate-900">
                    Huntsville, Athens, Madison &amp; Harvest, AL
                  </dd>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Hours</dt>
                  <dd className="text-slate-700">
                    <p className="font-semibold text-red-600">24/7 — Always Available</p>
                    <p>Including nights, weekends &amp; holidays</p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Form panel — 3 cols */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
