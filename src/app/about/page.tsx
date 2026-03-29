import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About HSV HVAC Pros | Locally Owned HVAC Company — Athens & Huntsville AL",
  description:
    "Locally owned and operated since 2009. HSV HVAC Pros provides trusted residential HVAC service to Athens, Huntsville, Madison & North Alabama. Licensed, insured, 4.9★ rated.",
  alternates: { canonical: "https://hsvhvacpros.com/about" },
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
              <span className="text-blue-300">HVAC Professionals</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Since 2009, HSV HVAC Pros has been keeping families across Athens,
              Huntsville, and North Alabama comfortable with honest, reliable
              HVAC service.
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
                HSV HVAC Pros was founded with a simple mission: provide North
                Alabama homeowners with HVAC service they can actually trust.
                Too many families were getting overcharged, sold unnecessary
                repairs, or left waiting for days without heat or air
                conditioning. We set out to change that.
              </p>
              <p>
                Based in Athens, Alabama, we serve homeowners across the greater
                Huntsville metro area — from Madison and Harvest to
                Meridianville, Hazel Green, New Market, and Toney. Our
                technicians live in the same communities they serve, which means
                we treat every home like our neighbor&apos;s.
              </p>
              <p>
                Over the past 15+ years, we&apos;ve grown from a small
                operation to one of the most trusted HVAC companies in North
                Alabama — serving more than 4,800 homes and maintaining a 4.9
                star Google rating from over 312 reviews. That reputation
                wasn&apos;t built on advertising. It was built on showing up on
                time, diagnosing problems honestly, and standing behind our work.
              </p>
            </div>

            {/* Values */}
            <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              What We Stand For
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Transparent Pricing",
                  desc: "You'll know exactly what a repair costs before we start. No surprises, no hidden fees, no upselling. We show you the problem and explain your options in plain language.",
                },
                {
                  title: "Fast Response Times",
                  desc: "We understand that HVAC failures don't wait. Our average response time is under 1 hour, and we offer 24/7 emergency service with no overtime charges.",
                },
                {
                  title: "Quality Workmanship",
                  desc: "Every technician on our team is licensed, EPA-certified, and continuously trained on the latest equipment. We use manufacturer-approved parts and follow industry best practices.",
                },
                {
                  title: "Community First",
                  desc: "We're not a national franchise — we're your neighbors. We've built our business on referrals and repeat customers, and we plan to keep it that way.",
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
              Licensed & Insured
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              <p>
                HSV HVAC Pros is fully licensed by the State of Alabama and
                carries comprehensive general liability and workers&apos;
                compensation insurance. All our technicians hold EPA Section 608
                certification for refrigerant handling.
              </p>
              <p>
                We stay current with all local building codes and permit
                requirements across Madison County, Limestone County, and the
                surrounding areas.
              </p>
            </div>

            {/* Service Areas */}
            <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Areas We Serve
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              We proudly serve homeowners in <strong>Athens</strong>,{" "}
              <strong>Huntsville</strong>, <strong>Madison</strong>,{" "}
              <strong>Harvest</strong>, <strong>Meridianville</strong>,{" "}
              <strong>Hazel Green</strong>, <strong>New Market</strong>,{" "}
              <strong>Toney</strong>, and surrounding communities throughout
              North Alabama.
            </p>

            {/* CTA */}
            <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Ready to Work With a Team You Can Trust?
              </h3>
              <p className="mt-3 text-slate-600">
                Call us today or request a free estimate online. We look forward
                to earning your business.
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
