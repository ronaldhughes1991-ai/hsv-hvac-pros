import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "HVAC Services in Athens, AL — AC Repair, Heating & Emergency | HSV HVAC Pros",
  description:
    "Trusted HVAC service in Athens, Alabama. Our network of vetted technicians provides AC repair, heating maintenance, emergency service & system installation. Call (256) 588-4712.",
  alternates: { canonical: "https://hsvhvacpros.com/locations/athens" },
};

export default function AthensPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs
          items={[
            { name: "Locations", href: "/#services" },
            { name: "Athens, AL", href: "/locations/athens" },
          ]}
        />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Athens, Alabama
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Trusted HVAC Service in{" "}
            <span className="text-blue-300">Athens, Alabama</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Athens is home base for HSV HVAC Pros. Our network of vetted,
            licensed technicians is deeply rooted in Limestone County — delivering
            fast, honest HVAC service to Athens homeowners year-round.
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
            HVAC Services for Athens Homeowners
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Athens, Alabama sits in the heart of Limestone County and
              experiences the full range of North Alabama weather — from
              sweltering 95°F+ summers to freezing winter nights that can dip
              into the teens. A reliable HVAC system isn&apos;t a luxury here;
              it&apos;s essential for your family&apos;s comfort and safety.
            </p>
            <p>
              As our home base, Athens gets the fastest response times in our
              network. When you call HSV HVAC Pros, we dispatch a vetted,
              licensed technician who knows the area — from downtown Athens to
              the neighborhoods along Highway 72 and out toward Elkmont and
              East Limestone. They diagnose honestly, price upfront, and get
              your system running right.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            What We Offer in Athens
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AC Repair",
                desc: "Same-day air conditioning repair for Athens homes. All brands serviced with upfront pricing and no hidden fees.",
                href: "/services/ac-repair",
              },
              {
                title: "Heating Maintenance",
                desc: "Furnace tune-ups and heat pump service to keep Limestone County families warm through winter.",
                href: "/services/heating-maintenance",
              },
              {
                title: "Emergency 24/7 Service",
                desc: "Around-the-clock HVAC emergencies answered immediately. No overtime charges — ever.",
                href: "/services/emergency-hvac",
              },
              {
                title: "System Installation",
                desc: "New HVAC system installations with free consultations. We help Athens homeowners choose the right system for their budget.",
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
            Athens Areas We Serve
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Our network covers all of Athens and greater Limestone County
            including <strong>downtown Athens</strong>,{" "}
            <strong>East Limestone</strong>, <strong>West Limestone</strong>,{" "}
            <strong>Tanner</strong>, <strong>Elkmont</strong>,{" "}
            <strong>Ardmore</strong>, and the <strong>Highway 72
            corridor</strong>. If you&apos;re in the Athens area, we&apos;ve
            got you covered.
          </p>

          <h3 className="mt-12 text-xl font-bold text-slate-900">
            Why Athens Homeowners Trust Our Network
          </h3>
          <div className="mt-6 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Athens is where HSV HVAC Pros started, and it&apos;s still where
              our roots run deepest. Our network of independently licensed
              technicians has been serving Limestone County families since
              2009 — building a reputation one honest repair at a time.
            </p>
            <p>
              With a 4.9-star Google rating and over 4,800 homes served across
              North Alabama, we&apos;ve earned the trust of Athens homeowners
              by doing things the right way: fast response, fair pricing, and
              quality work backed by a satisfaction guarantee.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Need HVAC Service in Athens?
            </h3>
            <p className="mt-3 text-slate-600">
              Call now to connect with a vetted local technician. Free
              estimates, fastest response times in our network.
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
            name: "HVAC Services in Athens, AL",
            description:
              "Residential HVAC repair, maintenance, installation & emergency service in Athens, Alabama. Dispatching vetted, licensed technicians.",
            provider: {
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              telephone: "256-588-4712",
              url: "https://hsvhvacpros.com",
            },
            areaServed: {
              "@type": "City",
              name: "Athens",
              "@id": "https://en.wikipedia.org/wiki/Athens,_Alabama",
            },
            serviceType: "HVAC Services",
          }),
        }}
      />
    </>
  );
}
