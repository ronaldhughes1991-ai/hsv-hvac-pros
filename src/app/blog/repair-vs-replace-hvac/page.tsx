import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "Repair vs Replace: When Is It Time for a New HVAC System? | HSV HVAC Pros",
  description:
    "Should you repair or replace your HVAC system? Use the $5,000 rule, age thresholds, and our decision checklist to make the smart call. Huntsville area pricing.",
  alternates: {
    canonical: "https://www.hsvhvacpros.com/blog/repair-vs-replace-hvac",
  },
  openGraph: {
    title: "Repair vs Replace: When Is It Time for a New HVAC System?",
    description:
      "Should you repair or replace your HVAC system? Use the $5,000 rule, age thresholds, and our decision checklist to make the smart call. Huntsville area pricing.",
    url: "https://www.hsvhvacpros.com/blog/repair-vs-replace-hvac",
    type: "article",
  },
};

export default function RepairVsReplaceHvac() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            {
              name: "Repair vs Replace",
              href: "/blog/repair-vs-replace-hvac",
            },
          ]}
        />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            COMPARISON
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Repair vs Replace: When Is It Time for a{" "}
            <span className="text-blue-300">New HVAC System?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Every homeowner dreads the call: &ldquo;Your system needs a major
            repair.&rdquo; Here&apos;s how to decide whether to fix what you
            have or invest in a new, more efficient unit.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              The $5,000 Rule: A Simple Starting Point
            </h2>
            <p className="text-base leading-7 text-slate-700">
              One of the most widely used guidelines in the HVAC industry is the
              $5,000 rule. Here&apos;s how it works: multiply the age of your
              system (in years) by the cost of the proposed repair. If the result
              exceeds $5,000, replacement is usually the smarter financial move.
            </p>
            <p className="text-base leading-7 text-slate-700">
              For example, if your air conditioner is 10 years old and the
              technician quotes a $600 compressor capacitor and contactor repair,
              the calculation is 10 × $600 = $6,000. That number exceeds $5,000,
              which suggests the money may be better spent toward a new system.
              On the other hand, a 5-year-old unit needing a $300 capacitor
              replacement (5 × $300 = $1,500) is almost always worth repairing.
            </p>
            <p className="text-base leading-7 text-slate-700">
              This rule isn&apos;t absolute — it&apos;s a starting point. The
              licensed technicians in our network will always give you an honest
              assessment based on your system&apos;s overall condition, not just
              a single repair.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Age Thresholds: How Old Is Too Old?
            </h2>
            <p className="text-base leading-7 text-slate-700">
              Every HVAC system has a practical lifespan. Once your equipment
              passes these age milestones, the likelihood of expensive breakdowns
              increases significantly, and repair parts may become harder to
              source:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">✓</span>
                <span>
                  <strong>Central air conditioners:</strong> 15 to 20 years.
                  Most units begin losing efficiency noticeably after 12 to 15
                  years, and major component failures become common after 15.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">✓</span>
                <span>
                  <strong>Gas furnaces:</strong> 20 to 25 years. Furnaces are
                  durable, but heat exchangers can crack in aging units —
                  creating a carbon monoxide risk that makes replacement
                  non-negotiable.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">✓</span>
                <span>
                  <strong>Heat pumps:</strong> 12 to 15 years. Because heat
                  pumps run year-round (heating in winter, cooling in summer),
                  they accumulate wear faster than cooling-only systems.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">✓</span>
                <span>
                  <strong>Ductless mini-splits:</strong> 15 to 20 years with
                  proper maintenance, though indoor fan motors may need
                  replacement sooner.
                </span>
              </li>
            </ul>
            <p className="text-base leading-7 text-slate-700">
              If your system is within two to three years of these thresholds and
              facing a repair that costs more than $800 to $1,000, most Huntsville-area
              HVAC professionals will recommend considering replacement.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              The R-22 Refrigerant Problem
            </h2>
            <p className="text-base leading-7 text-slate-700">
              If your air conditioner or heat pump was manufactured before 2010,
              there&apos;s a strong chance it uses R-22 refrigerant (commonly
              known as Freon). The EPA phased out R-22 production in the United
              States in 2020, which means the remaining supply is limited and
              extremely expensive.
            </p>
            <p className="text-base leading-7 text-slate-700">
              What does this mean for you? If your R-22 system develops a
              refrigerant leak, a simple recharge that once cost $150 to $250 can
              now run $400 to $800 or more — and that&apos;s just for the
              refrigerant, not counting the leak repair itself. In many cases,
              the total cost to fix a significant leak in an R-22 system exceeds
              $1,000 to $1,500, pushing the math firmly toward replacement with a
              modern R-410A or R-454B system.
            </p>
            <p className="text-base leading-7 text-slate-700">
              When you call us, we connect you with technicians who will check
              your refrigerant type and give you straightforward pricing for both
              options — repairing the existing system or upgrading to a new one.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Common Repair Costs vs New System Pricing
            </h2>
            <p className="text-base leading-7 text-slate-700">
              Understanding what typical repairs cost in the Huntsville and North
              Alabama area helps you put a potential repair quote in context:
            </p>

            <h3 className="mt-12 text-xl font-bold text-slate-900">
              Common HVAC Repairs
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Capacitor replacement:</strong> $150 – $300
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Contactor replacement:</strong> $150 – $350
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Refrigerant recharge:</strong> $200 – $500 (R-410A) or
                  $400 – $800+ (R-22)
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Blower motor:</strong> $300 – $600
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Evaporator coil:</strong> $800 – $1,800
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Compressor:</strong> $1,200 – $2,500
                </span>
              </li>
            </ul>

            <h3 className="mt-12 text-xl font-bold text-slate-900">
              New System Installation
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Central AC + furnace combo:</strong> $5,500 – $12,000
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Heat pump system:</strong> $3,500 – $7,000
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-blue-600">•</span>
                <span>
                  <strong>Ductless mini-split (single zone):</strong> $3,000 –
                  $5,000
                </span>
              </li>
            </ul>
            <p className="text-base leading-7 text-slate-700">
              As a general rule, if a single repair exceeds 30% to 50% of the
              cost of a new system, replacement often delivers better long-term
              value — especially when you factor in improved efficiency, lower
              monthly bills, and a new warranty.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Warning Signs Your System Is Failing
            </h2>
            <p className="text-base leading-7 text-slate-700">
              Beyond a single major repair, there are patterns that indicate your
              HVAC system is approaching end-of-life. Watch for these red flags:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-red-500">⚠</span>
                <span>
                  <strong>Frequent repairs:</strong> If you&apos;ve called for
                  service three or more times in the past two years, your system
                  is telling you something.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-red-500">⚠</span>
                <span>
                  <strong>Rising energy bills:</strong> A steady increase in your
                  Huntsville Utilities or TVA electric bill — with no change in
                  usage habits — often signals declining system efficiency.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-red-500">⚠</span>
                <span>
                  <strong>Uneven temperatures:</strong> Hot and cold spots
                  throughout your home can indicate a system that&apos;s lost
                  capacity or has failing ductwork.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-red-500">⚠</span>
                <span>
                  <strong>Unusual noises:</strong> Grinding, banging, or
                  screeching sounds often indicate bearing failure, loose
                  components, or compressor issues.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-red-500">⚠</span>
                <span>
                  <strong>Excessive humidity:</strong> An aging system may
                  struggle to dehumidify your home properly, leaving rooms
                  feeling clammy even when the thermostat reads the right
                  temperature.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-14 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Your Repair-or-Replace Decision Checklist
            </h2>
            <p className="text-base leading-7 text-slate-700">
              Still on the fence? Run through this quick checklist. If you check
              three or more of these boxes, replacement is likely the better
              investment:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>System is 15+ years old (AC/heat pump) or 20+ years old (furnace)</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>Repair cost exceeds $1,200</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>The $5,000 rule math exceeds $5,000</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>System uses R-22 refrigerant</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>You&apos;ve needed two or more repairs in the past 12 months</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>Energy bills have increased 20%+ with no usage change</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-slate-300 text-xs text-blue-600">
                  ☐
                </span>
                <span>Your home has comfort problems (hot/cold spots, humidity issues)</span>
              </li>
            </ul>
          </div>

          <div className="mt-14 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Get an Honest Opinion from a Local Pro
            </h2>
            <p className="text-base leading-7 text-slate-700">
              The best way to make this decision is to have a qualified
              technician inspect your system in person. When you call HSV HVAC
              Pros, we connect you with vetted, licensed professionals in the
              Huntsville, Madison, and Athens area who will give you a
              straightforward assessment — not a high-pressure sales pitch. Our
              network technicians will explain exactly what&apos;s wrong, what it
              costs to fix, and whether replacement makes more sense for your
              situation.
            </p>
          </div>

          {/* Related Services */}
          <div className="mt-12 rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900">Related Services</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/services/ac-repair" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                  AC Repair Services in North Alabama &rarr;
                </a>
              </li>
              <li>
                <a href="/services/system-installation" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Explore System Installation Options &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* CTA box */}
          <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Not Sure Whether to Repair or Replace?
            </h3>
            <p className="mt-3 text-slate-600">
              Get a free, honest assessment from a licensed HVAC technician in
              our network. No pressure, no obligations.
            </p>
            <a
              href="tel:+12565884712"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-800"
            >
              Call (256) 588-4712
            </a>
          </div>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Repair vs Replace: When Is It Time for a New HVAC System?",
            description:
              "Should you repair or replace your HVAC system? Use the $5,000 rule, age thresholds, and our decision checklist to make the smart call.",
            author: {
              "@type": "Organization",
              name: "HSV HVAC Pros",
              url: "https://www.hsvhvacpros.com",
            },
            publisher: {
              "@type": "Organization",
              name: "HSV HVAC Pros",
              url: "https://www.hsvhvacpros.com",
            },
            datePublished: "2026-01-15",
            mainEntityOfPage:
              "https://www.hsvhvacpros.com/blog/repair-vs-replace-hvac",
          }),
        }}
      />
    </>
  );
}
