import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About HSV HVAC Pros | HVAC Service Network — Athens & Huntsville AL",
  description:
    "Since 2009, HSV HVAC Pros has connected North Alabama homeowners with vetted, licensed HVAC professionals. Serving Athens, Huntsville, Madison & surrounding areas. 4.9★ rated.",
  alternates: { canonical: "https://www.hsvhvacpros.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-overlay grid-pattern bg-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              North Alabama&apos;s Trusted{" "}
              <span className="text-blue-300">HVAC Service Network</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Since 2009, HSV HVAC Pros has been connecting families across
              Athens, Huntsville, and North Alabama with vetted, licensed HVAC
              professionals they can count on.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
              <p>
                HSV HVAC Pros was founded with a simple mission: connect North
                Alabama homeowners with HVAC professionals they can actually
                trust. Too many families were getting overcharged, sold
                unnecessary repairs, or left waiting for days without heat or
                air conditioning. We set out to change that.
              </p>
              <p>
                Based in Athens, Alabama, our network of vetted technicians
                serves homeowners across the greater Huntsville metro area —
                from Madison and Harvest to Meridianville, Hazel Green, New
                Market, and Toney. Every technician in our network lives in the
                communities they serve, which means they treat every home like
                a neighbor&apos;s.
              </p>
              <p>
                Over the past 15+ years, we&apos;ve grown into one of the most
                trusted HVAC service networks in North Alabama — dispatching
                local experts to more than 4,800 homes and maintaining a 4.9
                star Google rating from over 312 reviews. That reputation
                wasn&apos;t built on advertising. It was built by connecting
                homeowners with professionals who show up on time, diagnose
                problems honestly, and stand behind their work.
              </p>
            </div>

            {/* Values */}
            <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              What We Stand For
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Vetted Partners",
                  desc: "Every technician in our network is independently licensed, EPA-certified, background-checked, and insured. We only work with pros who meet our standards.",
                },
                {
                  title: "Fast Response Times",
                  desc: "HVAC failures don't wait. Our network averages under 1 hour response time, and we dispatch local experts 24/7 with no overtime charges.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "You'll know exactly what a repair costs before work begins. No surprises, no hidden fees, no upselling. Every option explained in plain language.",
                },
                {
                  title: "Community First",
                  desc: "We're not a national franchise — we're a local network of North Alabama professionals. Built on referrals and repeat customers, and we plan to keep it that way.",
                },
              ].map((v) => (
                <div key={v.title} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* By the Numbers */}
            <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              By the Numbers
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "15+", label: "Years in Business" },
                { value: "4,800+", label: "Homes Served" },
                { value: "4.9★", label: "Google Rating" },
                { value: "24/7", label: "Emergency Service" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold text-blue-700">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Licensing */}
            <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Licensed & Insured Network
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              <p>
                All technicians in our network are independently licensed by the
                State of Alabama and carry their own general liability and
                workers&apos; compensation insurance. Every partner holds EPA
                Section 608 certification for refrigerant handling.
              </p>
              <p>
                Our network partners stay current with all local building codes
                and permit requirements across Madison County, Limestone County,
                and the surrounding areas.
              </p>
            </div>

            {/* Service Areas */}
            <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Areas We Serve
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Our network of vetted HVAC professionals serves homeowners in{" "}
              <strong>Athens</strong>, <strong>Huntsville</strong>,{" "}
              <strong>Madison</strong>, <strong>Harvest</strong>,{" "}
              <strong>Meridianville</strong>, <strong>Hazel Green</strong>,{" "}
              <strong>New Market</strong>, <strong>Toney</strong>, and
              surrounding communities throughout North Alabama.
            </p>

            {/* CTA */}
            <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Ready to Connect With a Pro You Can Trust?
              </h3>
              <p className="mt-3 text-slate-600">
                Call us today or request a free estimate online. We&apos;ll
                dispatch a vetted local expert to your home.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:+12565884712"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-800"
                >
                  Call (256) 588-4712
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-blue-700 px-8 py-4 text-base font-bold text-blue-700 transition-all hover:bg-blue-50"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
