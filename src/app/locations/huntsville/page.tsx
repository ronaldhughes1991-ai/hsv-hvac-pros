import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HVAC Services in Huntsville, AL — AC Repair, Heating & Emergency | HSV HVAC Pros",
  description:
    "Trusted HVAC service in Huntsville, Alabama. Our network of vetted technicians provides AC repair, heating maintenance, emergency service & system installation. Call (256) 588-4712.",
  alternates: { canonical: "https://www.hsvhvacpros.com/locations/huntsville" },
};

export default function HuntsvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs
          items={[
            { name: "Locations", href: "/#services" },
            { name: "Huntsville, AL", href: "/locations/huntsville" },
          ]}
        />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Huntsville, Alabama
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Trusted HVAC Service in{" "}
            <span className="text-blue-300">Huntsville, Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            The Rocket City deserves HVAC pros who launch into action. Our
            network of vetted, licensed technicians delivers fast, reliable
            heating and cooling service to Huntsville homeowners — day or night.
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
            HVAC Services for Huntsville Homeowners
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Huntsville&apos;s climate pushes HVAC systems to their limits.
              Summers regularly exceed 95°F with oppressive humidity, while
              winters can dip below freezing with ice storms that knock out
              power and heating. Whether you live in Hampton Cove, Jones Valley,
              Five Points, or anywhere across the city, our network of local
              HVAC experts is ready to help.
            </p>
            <p>
              When you call HSV HVAC Pros, we dispatch a vetted, licensed
              technician from our network who knows Huntsville inside and out.
              They arrive fast — our average response time is under 60 minutes
              — diagnose the problem honestly, and provide upfront pricing
              before starting any work.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            What We Offer in Huntsville
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AC Repair",
                desc: "Same-day air conditioning repair for all brands. Dispatching local experts who know Huntsville's brutal summer heat.",
                href: "/services/ac-repair",
              },
              {
                title: "Heating Maintenance",
                desc: "Annual furnace tune-ups and heat pump service to keep you warm through North Alabama winters.",
                href: "/services/heating-maintenance",
              },
              {
                title: "Emergency 24/7 Service",
                desc: "HVAC emergencies answered immediately. No overtime charges — nights, weekends, or holidays.",
                href: "/services/emergency-hvac",
              },
              {
                title: "System Installation",
                desc: "New AC, furnace, and heat pump installations with free in-home consultations and transparent quotes.",
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
            Huntsville Neighborhoods We Serve
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Our network covers all of Huntsville and surrounding areas
            including <strong>Hampton Cove</strong>,{" "}
            <strong>Jones Valley</strong>, <strong>Five Points</strong>,{" "}
            <strong>Blossomwood</strong>, <strong>Monte Sano</strong>,{" "}
            <strong>Research Park</strong>, <strong>South Huntsville</strong>,{" "}
            <strong>Weatherly</strong>, <strong>Big Cove</strong>, and{" "}
            <strong>Redstone Arsenal</strong> housing.
          </p>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Why Huntsville Homeowners Choose Our Network
          </h3>
          <div className="mt-6 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Huntsville is one of the fastest-growing cities in the Southeast,
              and with that growth comes demand for reliable home services. Our
              network of independently licensed technicians has served over
              4,800 homes across North Alabama with a 4.9-star Google rating.
              Every technician is background-checked, EPA-certified, and carries
              their own liability insurance.
            </p>
            <p>
              We don&apos;t charge overtime for after-hours calls, we provide
              upfront pricing on every job, and we back every service with a
              satisfaction guarantee. It&apos;s why Huntsville families keep
              calling us back.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Need HVAC Service in Huntsville?
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
            name: "HVAC Services in Huntsville, AL",
            description:
              "Residential HVAC repair, maintenance, installation & emergency service in Huntsville, Alabama. Dispatching vetted, licensed technicians.",
            provider: {
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              telephone: "256-588-4712",
              url: "https://www.hsvhvacpros.com",
            },
            areaServed: {
              "@type": "City",
              name: "Huntsville",
              "@id": "https://en.wikipedia.org/wiki/Huntsville,_Alabama",
            },
            serviceType: "HVAC Services",
          }),
        }}
      />
    </>
  );
}
