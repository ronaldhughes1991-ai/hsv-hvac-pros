import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HVAC Services in Madison, AL — AC Repair, Heating & Emergency | HSV HVAC Pros",
  description:
    "Trusted HVAC service in Madison, Alabama. Our network of vetted technicians provides AC repair, heating maintenance, emergency service & system installation. Call (256) 588-4712.",
  alternates: { canonical: "https://www.hsvhvacpros.com/locations/madison" },
  openGraph: {
    title: "HVAC Services in Madison, AL — AC Repair, Heating & Emergency",
    description:
      "Trusted HVAC service in Madison, Alabama. Our network of vetted technicians provides AC repair, heating maintenance, emergency service & system installation.",
    url: "https://www.hsvhvacpros.com/locations/madison",
  },
  other: {
    "geo.region": "US-AL",
    "geo.placename": "Madison",
    "geo.position": "34.6993;-86.7483",
    ICBM: "34.6993, -86.7483",
  },
};

export default function MadisonPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs
          items={[
            { name: "Locations", href: "/#services" },
            { name: "Madison, AL", href: "/locations/madison" },
          ]}
        />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Madison, Alabama
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Trusted HVAC Service in{" "}
            <span className="text-blue-300">Madison, Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Alabama&apos;s fastest-growing city deserves HVAC service that keeps
            up. Our network of vetted, licensed technicians delivers fast,
            reliable heating and cooling service to Madison families — day or
            night.
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
            HVAC Services for Madison Homeowners
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Madison&apos;s rapid growth means new neighborhoods popping up
              every year — and every one of them needs dependable heating and
              cooling. With scorching summers that push past 95&deg;F and winter
              cold snaps that test every furnace, Madison homeowners need an
              HVAC partner they can count on year-round.
            </p>
            <p>
              When you call HSV HVAC Pros, we dispatch a vetted, licensed
              technician from our network who knows Madison inside and out.
              They arrive fast — our average response time is under 60 minutes
              — diagnose the problem honestly, and provide upfront pricing
              before starting any work.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            What We Offer in Madison
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AC Repair",
                desc: "Same-day air conditioning repair for all brands. Dispatching local experts who understand Madison\u2019s hot, humid summers.",
                href: "/services/ac-repair",
              },
              {
                title: "Heating Maintenance",
                desc: "Annual furnace tune-ups and heat pump service to keep Madison families warm through unpredictable North Alabama winters.",
                href: "/services/heating-maintenance",
              },
              {
                title: "Emergency 24/7 Service",
                desc: "HVAC emergencies answered immediately across Madison. No overtime charges — nights, weekends, or holidays.",
                href: "/services/emergency-hvac",
              },
              {
                title: "System Installation",
                desc: "New AC, furnace, and heat pump installations for Madison\u2019s growing neighborhoods. Free in-home consultations and transparent quotes.",
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
            Madison Neighborhoods We Serve
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Our network covers all of Madison and surrounding areas
            including <strong>Madison City</strong>,{" "}
            <strong>Clift Farm</strong>, <strong>Providence</strong>,{" "}
            <strong>Celtic Ridge</strong>, <strong>Palmer Park</strong>,{" "}
            <strong>Bradford Creek</strong>, and the{" "}
            <strong>Hughes Road corridor</strong>.
          </p>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Why Madison Homeowners Choose Our Network
          </h3>
          <div className="mt-6 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Madison is one of the most family-oriented communities in North
              Alabama, and families here expect top-tier service for their
              homes. Our network of independently licensed technicians has
              served over 4,800 homes across the region with a 4.9-star Google
              rating. Every technician is background-checked, EPA-certified,
              and carries their own liability insurance.
            </p>
            <p>
              We don&apos;t charge overtime for after-hours calls, we provide
              upfront pricing on every job, and we back every service with a
              satisfaction guarantee. It&apos;s why Madison families keep
              calling us back.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Need HVAC Service in Madison?
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
            name: "HVAC Services in Madison, AL",
            description:
              "Residential HVAC repair, maintenance, installation & emergency service in Madison, Alabama. Dispatching vetted, licensed technicians.",
            provider: {
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              telephone: "256-588-4712",
              url: "https://www.hsvhvacpros.com",
            },
            areaServed: {
              "@type": "City",
              name: "Madison",
              "@id": "https://en.wikipedia.org/wiki/Madison,_Alabama",
            },
            serviceType: "HVAC Services",
          }),
        }}
      />
    </>
  );
}
