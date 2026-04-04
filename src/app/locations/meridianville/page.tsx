import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HVAC Services in Meridianville, AL — AC Repair, Heating & Emergency | HSV HVAC Pros",
  description:
    "Trusted HVAC service in Meridianville, Alabama. Our network of vetted technicians provides AC repair, heating maintenance, emergency service & system installation. Call (256) 588-4712.",
  alternates: { canonical: "https://www.hsvhvacpros.com/locations/meridianville" },
  openGraph: {
    title: "HVAC Services in Meridianville, AL — AC Repair, Heating & Emergency",
    description:
      "Trusted HVAC service in Meridianville, Alabama. Our network of vetted technicians provides AC repair, heating maintenance, emergency service & system installation.",
    url: "https://www.hsvhvacpros.com/locations/meridianville",
  },
  other: {
    "geo.region": "US-AL",
    "geo.placename": "Meridianville",
    "geo.position": "34.8512;-86.5722",
    ICBM: "34.8512, -86.5722",
  },
};

export default function MeridianvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs
          items={[
            { name: "Locations", href: "/#services" },
            { name: "Meridianville, AL", href: "/locations/meridianville" },
          ]}
        />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Meridianville, Alabama
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Trusted HVAC Service in{" "}
            <span className="text-blue-300">Meridianville, Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Meridianville homeowners deserve HVAC technicians who show up fast
            and get it right the first time. Our network of vetted, licensed
            pros delivers dependable heating and cooling service to your door —
            day or night.
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
            HVAC Services for Meridianville Homeowners
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Nestled northeast of Huntsville, Meridianville offers the best of
              rural living with easy access to the city. But the same North
              Alabama climate that makes spring beautiful also brings punishing
              summer heat above 95&deg;F and winter freezes that test every
              heating system. Your HVAC needs to be ready year-round.
            </p>
            <p>
              When you call HSV HVAC Pros, we dispatch a vetted, licensed
              technician from our network who regularly serves the
              Meridianville area. They arrive fast — our average response time
              is under 60 minutes — diagnose the problem honestly, and provide
              upfront pricing before starting any work.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            What We Offer in Meridianville
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AC Repair",
                desc: "Same-day air conditioning repair for all brands. Local experts dispatched to keep Meridianville homes cool all summer.",
                href: "/services/ac-repair",
              },
              {
                title: "Heating Maintenance",
                desc: "Annual furnace tune-ups and heat pump service to keep Meridianville families comfortable through cold North Alabama nights.",
                href: "/services/heating-maintenance",
              },
              {
                title: "Emergency 24/7 Service",
                desc: "HVAC emergencies answered immediately in the Meridianville area. No overtime charges — nights, weekends, or holidays.",
                href: "/services/emergency-hvac",
              },
              {
                title: "System Installation",
                desc: "New AC, furnace, and heat pump installations for Meridianville homes. Free in-home consultations and transparent quotes.",
                href: "/services/system-installation",
              },
            ].map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
              >
                <h4 className="font-bold text-slate-900">{s.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-blue-700">
                  Learn More &rarr;
                </span>
              </a>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Meridianville Areas We Serve
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Our network covers all of Meridianville and surrounding areas
            including <strong>Meridianville proper</strong>,{" "}
            <strong>McMullen Cove</strong>, <strong>Union Hill</strong>,{" "}
            <strong>Highway 231 corridor</strong>,{" "}
            <strong>Wall Triana</strong>, and the{" "}
            <strong>Old Railroad Bed Road area</strong>.
          </p>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Why Meridianville Homeowners Choose Our Network
          </h3>
          <div className="mt-6 space-y-6 text-base leading-7 text-slate-700">
            <p>
              When you live outside city limits, getting timely HVAC service
              can feel like a gamble. That&apos;s exactly why our network
              exists. Our independently licensed technicians have served over
              4,800 homes across North Alabama with a 4.9-star Google rating.
              Every technician is background-checked, EPA-certified, and
              carries their own liability insurance.
            </p>
            <p>
              We don&apos;t charge overtime for after-hours calls, we provide
              upfront pricing on every job, and we back every service with a
              satisfaction guarantee. It&apos;s why Meridianville homeowners
              keep calling us back.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Need HVAC Service in Meridianville?
            </h3>
            <p className="mt-3 text-slate-600">
              Call now to connect with a vetted local technician. Free
              estimates, fast response.
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
            name: "HVAC Services in Meridianville, AL",
            description:
              "Residential HVAC repair, maintenance, installation & emergency service in Meridianville, Alabama. Dispatching vetted, licensed technicians.",
            provider: {
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              telephone: "256-588-4712",
              url: "https://www.hsvhvacpros.com",
            },
            areaServed: {
              "@type": "City",
              name: "Meridianville",
            },
            serviceType: "HVAC Services",
          }),
        }}
      />
    </>
  );
}
