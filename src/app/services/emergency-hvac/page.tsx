import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency HVAC Service Huntsville AL | After-Hours Repair — HSV HVAC Pros",
  description:
    "24/7 emergency HVAC repair in Huntsville, Athens & North Alabama. No overtime charges. AC & furnace emergencies answered immediately. Call (256) 588-4712.",
  alternates: { canonical: "https://hsvhvacpros.com/services/emergency-hvac" },
};

export default function EmergencyHVACPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)" }}>
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-1.5 text-sm font-medium text-red-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
            </span>
            Available 24/7 — Nights, Weekends & Holidays
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Emergency HVAC Repair{" "}
            <span className="text-red-300">When You Need It Most</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            HVAC emergencies don&apos;t wait for business hours — and neither do
            we. HSV HVAC Pros provides 24/7 emergency heating and air
            conditioning repair across Huntsville, Athens, and all of North
            Alabama. No overtime charges, ever.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+12565884712"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700"
            >
              Emergency: (256) 588-4712
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Request Emergency Service
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What Counts as an HVAC Emergency?
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Any situation where your heating or cooling system failure creates
              a safety risk or makes your home uninhabitable qualifies as an
              emergency. In North Alabama, that can mean a broken AC when
              temperatures hit 100°F in summer, or a dead furnace when
              it&apos;s below freezing in winter.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Common HVAC Emergencies We Handle
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Complete AC failure in extreme heat",
              "Furnace not producing heat in freezing temps",
              "Gas smell from heating system",
              "Carbon monoxide detector alarm",
              "Electrical burning smell from HVAC",
              "Water leaking from AC unit",
              "Heat pump frozen or not working",
              "Thermostat completely unresponsive",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-700">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Why Choose HSV HVAC Pros for Emergencies?
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Average 1-Hour Response", desc: "Our technicians are strategically located across North Alabama for the fastest possible response times." },
              { title: "No Overtime Charges", desc: "Nights, weekends, and holidays — you pay the same fair rate regardless of when you call." },
              { title: "Fully Stocked Trucks", desc: "Our service vehicles carry the most common parts so repairs can be completed on the first visit." },
              { title: "Licensed & Insured", desc: "Every technician is EPA-certified, background-checked, and fully insured for your peace of mind." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-6">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Emergency Service Areas
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Our 24/7 emergency HVAC service covers <strong>Huntsville</strong>,{" "}
            <strong>Athens</strong>, <strong>Madison</strong>,{" "}
            <strong>Harvest</strong>, <strong>Meridianville</strong>,{" "}
            <strong>Hazel Green</strong>, <strong>New Market</strong>, and{" "}
            <strong>Toney</strong>. If you&apos;re in the North Alabama area and
            have an HVAC emergency, call us — we&apos;ll be there.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-red-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              HVAC Emergency? Call Now.
            </h3>
            <p className="mt-3 text-slate-600">
              Our dispatchers are standing by 24/7. We&apos;ll have a technician
              on the way to your home fast.
            </p>
            <a
              href="tel:+12565884712"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700"
            >
              (256) 588-4712 — Call Now
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "24/7 Emergency HVAC Repair in Huntsville, AL",
            description:
              "Round-the-clock emergency heating and air conditioning repair in Huntsville, Athens & North Alabama. No overtime charges.",
            provider: {
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              telephone: "256-588-4712",
              url: "https://hsvhvacpros.com",
            },
            areaServed: [
              { "@type": "City", name: "Huntsville" },
              { "@type": "City", name: "Athens" },
              { "@type": "City", name: "Madison" },
              { "@type": "City", name: "Harvest" },
            ],
            serviceType: "Emergency HVAC Service",
            availableChannel: {
              "@type": "ServiceChannel",
              availableLanguage: "English",
              servicePhone: { "@type": "ContactPoint", telephone: "256-588-4712", contactType: "emergency" },
            },
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />
    </>
  );
}
