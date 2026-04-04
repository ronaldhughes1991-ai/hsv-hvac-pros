import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AC Repair Huntsville AL | Same-Day Air Conditioning Service — HSV HVAC Pros",
  description:
    "Fast, affordable AC repair in Huntsville, Athens, Madison & North Alabama. Same-day service, upfront pricing, all brands. Call (256) 588-4712 for emergency air conditioning repair.",
  alternates: { canonical: "https://www.hsvhvacpros.com/services/ac-repair" },
};

export default function ACRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs items={[{ name: "Services", href: "/#services" }, { name: "AC Repair", href: "/services/ac-repair" }]} />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            AC Repair Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            AC Repair in Huntsville,{" "}
            <span className="text-blue-300">Athens & North Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            When your air conditioning breaks down in the Alabama heat, every
            minute counts. HSV HVAC Pros provides fast, reliable AC repair with
            same-day service and transparent pricing — no surprises, no hidden
            fees.
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
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why Huntsville Homeowners Choose Us for AC Repair
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              North Alabama summers regularly push past 95°F with humidity that
              makes it feel even hotter. A broken air conditioner isn&apos;t just
              uncomfortable — it can be a health risk for families, pets, and
              elderly residents. That&apos;s why our licensed technicians respond
              fast, typically arriving within 60 minutes of your call.
            </p>
            <p>
              We repair all major AC brands including Carrier, Trane, Lennox,
              Rheem, Goodman, York, and Daikin. Whether it&apos;s a refrigerant
              leak, compressor failure, frozen evaporator coil, or a faulty
              thermostat, we diagnose the issue accurately and explain your
              options before starting any work.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Common AC Problems We Fix
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "AC not blowing cold air",
              "Unit running but not cooling",
              "Strange noises from outdoor unit",
              "AC cycling on and off frequently",
              "Frozen evaporator coils",
              "Refrigerant leaks & recharging",
              "Thermostat malfunctions",
              "Electrical & capacitor failures",
              "Clogged condensate drain lines",
              "Ductwork leaks & airflow issues",
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
            Our AC Repair Process
          </h3>
          <div className="mt-6 space-y-6 text-base leading-7 text-slate-700">
            <p>
              <strong>1. Call or request service online.</strong> Our dispatchers
              are available 24/7 and will schedule the earliest available
              appointment — often same-day.
            </p>
            <p>
              <strong>2. Thorough diagnostic inspection.</strong> Our technician
              performs a complete system check, identifies the root cause, and
              explains the issue in plain language.
            </p>
            <p>
              <strong>3. Upfront pricing before any work.</strong> You&apos;ll
              receive an exact quote before we start. No surprises on the bill.
            </p>
            <p>
              <strong>4. Expert repair with quality parts.</strong> We use
              manufacturer-approved replacement parts and back every repair with
              our satisfaction guarantee.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Serving All of North Alabama
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            We provide AC repair services throughout the greater Huntsville metro
            area including <strong>Athens</strong>, <strong>Madison</strong>,{" "}
            <strong>Harvest</strong>, <strong>Meridianville</strong>,{" "}
            <strong>Hazel Green</strong>, <strong>New Market</strong>, and{" "}
            <strong>Toney</strong>. Wherever you are in North Alabama, we&apos;ll
            get your AC running again fast.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Need AC Repair Now?
            </h3>
            <p className="mt-3 text-slate-600">
              Don&apos;t sweat it. Call us for fast, reliable air conditioning
              repair in Huntsville & North Alabama.
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AC Repair in Huntsville, AL",
            description:
              "Same-day air conditioning repair service in Huntsville, Athens, Madison & North Alabama. All brands, upfront pricing, licensed technicians.",
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
            serviceType: "AC Repair",
          }),
        }}
      />
    </>
  );
}
