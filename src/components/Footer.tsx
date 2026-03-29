import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  const serviceAreas = [
    "Huntsville",
    "Madison",
    "Athens",
    "Harvest",
    "Meridianville",
    "Hazel Green",
    "New Market",
    "Toney",
  ];

  return (
    <footer className="bg-slate-900 text-slate-400" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="HSV HVAC Pros logo"
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
                quality={75}
                loading="lazy"
              />
              <span className="text-lg font-extrabold text-white">HSV HVAC Pros</span>
            </div>
            <p className="mt-4 text-sm leading-6">
              Locally owned and operated since 2009. Licensed, insured, and
              committed to keeping North Alabama homes comfortable.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {["AC Repair", "Heating Maintenance", "Emergency 24/7 Service", "System Installation", "Duct Cleaning", "Preventive Tune-Ups"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="text-sm transition-colors hover:text-white">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm">
                  {area}, AL
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic text-sm">
              <p className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-blue-400" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                <a href="tel:+12565884712" className="font-semibold text-white hover:text-blue-300">
                  (256) 588-4712
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-blue-400" aria-hidden="true">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                <a href="mailto:info@hsvhvacpros.com" className="hover:text-white">
                  info@hsvhvacpros.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 text-blue-400" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.028 11.028 0 00.757.433l.04.021.01.005.004.002h.001zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                </svg>
                <span>Serving Huntsville, Athens,<br />Madison &amp; Harvest, AL</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
            <p>&copy; {year} HSV HVAC Pros. All rights reserved.</p>
            <p className="text-slate-500">
              Proudly serving Athens, Huntsville, Madison, Harvest &amp; surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
