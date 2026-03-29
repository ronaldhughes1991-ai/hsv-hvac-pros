import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Heating Maintenance Huntsville AL | Furnace Service & Tune-Ups — HSV HVAC Pros",
  description:
    "Professional furnace maintenance & heating tune-ups in Huntsville, Athens & North Alabama. Prevent breakdowns, lower energy bills. Call (256) 588-4712.",
  alternates: { canonical: "https://hsvhvacpros.com/services/heating-maintenance" },
};

export default function HeatingMaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs items={[{ name: "Services", href: "/#services" }, { name: "Heating Maintenance", href: "/services/heating-maintenance" }]} />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Heating Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Heating Maintenance &{" "}
            <span className="text-blue-300">Furnace Service in North Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Keep your furnace running safely and efficiently all winter long.
            HSV HVAC Pros provides comprehensive heating maintenance,
            inspections, and tune-ups for homeowners across Huntsville, Athens,
            and North Alabama.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+12565884712"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50"
            >
              Call (256) 588-4712
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Schedule a Tune-Up
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why Annual Heating Maintenance Matters
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              North Alabama winters can drop below freezing, and a furnace
              breakdown in January isn&apos;t just inconvenient — it&apos;s
              dangerous. Regular heating maintenance prevents unexpected
              failures, extends your system&apos;s lifespan by up to 5 years,
              and can reduce your energy bills by 15–20%.
            </p>
            <p>
              More importantly, annual inspections catch safety hazards like
              cracked heat exchangers, carbon monoxide leaks, and faulty gas
              connections before they put your family at risk. Our technicians
              have caught hundreds of these issues for North Alabama families
              over the past 15 years.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            What&apos;s Included in Our Heating Tune-Up
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Complete system safety inspection",
              "Heat exchanger crack check",
              "Carbon monoxide testing",
              "Thermostat calibration & testing",
              "Burner cleaning & adjustment",
              "Blower motor inspection",
              "Air filter replacement",
              "Electrical connection tightening",
              "Gas pressure verification",
              "Flue & exhaust venting check",
              "Condensate drain cleaning",
              "System performance report",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-700">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Furnace Repair Services
          </h3>
          <div className="mt-4 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Beyond maintenance, we handle all furnace repairs including pilot
              light issues, ignition failures, blower motor replacement, heat
              exchanger repairs, and thermostat problems. We service gas
              furnaces, electric furnaces, heat pumps, and dual-fuel systems
              from all major brands.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Service Areas
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            We provide heating maintenance and furnace repair throughout{" "}
            <strong>Huntsville</strong>, <strong>Athens</strong>,{" "}
            <strong>Madison</strong>, <strong>Harvest</strong>,{" "}
            <strong>Meridianville</strong>, <strong>Hazel Green</strong>,{" "}
            <strong>New Market</strong>, and <strong>Toney</strong>, Alabama.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Schedule Your Heating Tune-Up Today
            </h3>
            <p className="mt-3 text-slate-600">
              Don&apos;t wait until your furnace breaks down. Preventive
              maintenance saves you money and keeps your family safe.
            </p>
            <a
              href="tel:+12565884712"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-800"
            >
              Call (256) 588-4712
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
            name: "Heating Maintenance & Furnace Service in Huntsville, AL",
            description:
              "Professional furnace maintenance, tune-ups, and heating repair in Huntsville, Athens & North Alabama.",
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
            serviceType: "Heating Maintenance",
          }),
        }}
      />
    </>
  );
}
