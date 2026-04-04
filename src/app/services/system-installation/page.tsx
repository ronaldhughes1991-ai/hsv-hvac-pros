import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HVAC Installation Huntsville AL | New AC & Furnace Systems — HSV HVAC Pros",
  description:
    "Professional HVAC system installation in Huntsville, Athens & North Alabama. New AC units, furnaces, heat pumps. Free estimates, financing available. Call (256) 588-4712.",
  alternates: { canonical: "https://www.hsvhvacpros.com/services/system-installation" },
};

export default function SystemInstallationPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs items={[{ name: "Services", href: "/#services" }, { name: "System Installation", href: "/services/system-installation" }]} />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            System Installation
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            HVAC Installation in{" "}
            <span className="text-blue-300">Huntsville & North Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            When it&apos;s time for a new heating or cooling system, HSV HVAC
            Pros delivers expert installation with transparent pricing, top-tier
            equipment, and a workmanship guarantee. We&apos;ll help you choose
            the right system for your home and budget.
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
              Get a Free Installation Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            When Should You Replace Your HVAC System?
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Most HVAC systems last 15–20 years with proper maintenance. If
              your system is approaching that age, requires frequent repairs,
              or your energy bills keep climbing, it may be more cost-effective
              to invest in a new, high-efficiency system than to keep patching
              an aging one.
            </p>
            <p>
              Modern HVAC systems are significantly more energy-efficient than
              models from even 10 years ago. A new system can reduce your
              heating and cooling costs by 30–50%, pay for itself within a few
              years, and provide more consistent comfort throughout your home.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Signs You Need a New System
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "System is 15+ years old",
              "Repair costs exceed 50% of replacement",
              "Uneven temperatures room to room",
              "Energy bills steadily increasing",
              "Frequent breakdowns & repairs",
              "Excessive noise during operation",
              "R-22 (Freon) refrigerant system",
              "Poor indoor air quality & humidity",
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
            Systems We Install
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Central Air Conditioning", desc: "High-efficiency split systems and packaged units from top brands. Properly sized using Manual J load calculations." },
              { title: "Gas & Electric Furnaces", desc: "Energy-efficient furnaces with AFUE ratings up to 98%. Variable-speed blowers for quiet, consistent heating." },
              { title: "Heat Pumps", desc: "All-in-one heating and cooling. Ideal for North Alabama's climate. Air-source and mini-split options available." },
              { title: "Dual-Fuel Systems", desc: "Combines a heat pump with a gas furnace for maximum efficiency — uses the most economical fuel source based on outdoor temperature." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-6">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Our Installation Process
          </h3>
          <div className="mt-6 space-y-6 text-base leading-7 text-slate-700">
            <p>
              <strong>1. Free in-home consultation.</strong> We evaluate your
              home&apos;s size, insulation, ductwork, and comfort needs to
              recommend the right system — not the most expensive one.
            </p>
            <p>
              <strong>2. Transparent, detailed quote.</strong> You&apos;ll receive
              an itemized estimate covering equipment, labor, permits, and
              warranty details. No hidden costs.
            </p>
            <p>
              <strong>3. Professional installation.</strong> Our crews follow
              manufacturer specifications and local building codes. Most
              installations are completed in a single day.
            </p>
            <p>
              <strong>4. Testing & walkthrough.</strong> We verify system
              performance, calibrate your thermostat, and walk you through
              operation and maintenance before we leave.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Brands We Install
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            We install equipment from Carrier, Trane, Lennox, Rheem, Goodman,
            York, Daikin, and other trusted brands. We&apos;ll recommend the
            best option based on your budget, efficiency goals, and home
            requirements.
          </p>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Service Areas
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            We install HVAC systems throughout <strong>Huntsville</strong>,{" "}
            <strong>Athens</strong>, <strong>Madison</strong>,{" "}
            <strong>Harvest</strong>, <strong>Meridianville</strong>,{" "}
            <strong>Hazel Green</strong>, <strong>New Market</strong>, and{" "}
            <strong>Toney</strong>, Alabama.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Ready for a New HVAC System?
            </h3>
            <p className="mt-3 text-slate-600">
              Get a free, no-obligation estimate for professional HVAC
              installation in your home.
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
            name: "HVAC System Installation in Huntsville, AL",
            description:
              "Professional HVAC installation — central AC, furnaces, heat pumps & dual-fuel systems in Huntsville, Athens & North Alabama.",
            provider: {
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              telephone: "256-588-4712",
              url: "https://www.hsvhvacpros.com",
            },
            areaServed: [
              { "@type": "City", name: "Huntsville" },
              { "@type": "City", name: "Athens" },
              { "@type": "City", name: "Madison" },
              { "@type": "City", name: "Harvest" },
            ],
            serviceType: "HVAC Installation",
          }),
        }}
      />
    </>
  );
}
