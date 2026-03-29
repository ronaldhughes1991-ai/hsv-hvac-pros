const faqs = [
  {
    question: "How much does AC repair cost in Huntsville, AL?",
    answer:
      "AC repair costs in Huntsville typically range from $150 to $600 depending on the issue. Simple fixes like capacitor replacement or refrigerant recharge are on the lower end, while compressor or evaporator coil repairs cost more. We provide upfront pricing before starting any work — no surprises.",
  },
  {
    question: "How often should I service my HVAC system?",
    answer:
      "We recommend professional HVAC maintenance twice a year — once in spring for your AC and once in fall for your heating system. Regular maintenance prevents breakdowns, extends equipment life by up to 5 years, and can lower your energy bills by 15–20%.",
  },
  {
    question: "Do you offer 24/7 emergency HVAC service?",
    answer:
      "Yes. HSV HVAC Pros provides 24/7 emergency heating and air conditioning repair across Huntsville, Athens, Madison, and all of North Alabama. We charge the same fair rate regardless of when you call — no overtime or after-hours fees.",
  },
  {
    question: "When should I replace my HVAC system instead of repairing it?",
    answer:
      "Consider replacement if your system is over 15 years old, requires frequent repairs, uses R-22 (Freon) refrigerant, or your energy bills are steadily increasing. As a general rule, if a repair costs more than 50% of a new system, replacement is the better investment.",
  },
  {
    question: "What areas do you serve in Alabama?",
    answer:
      "We serve homeowners throughout North Alabama including Huntsville, Athens, Madison, Harvest, Meridianville, Hazel Green, New Market, and Toney. If you're within about 30 miles of Huntsville, we can help.",
  },
  {
    question: "How quickly can you get to my home?",
    answer:
      "Our average response time is under 1 hour. Our technicians are strategically located across North Alabama so we can reach you quickly. For emergencies, we dispatch immediately.",
  },
  {
    question: "Do you provide free estimates for new HVAC systems?",
    answer:
      "Yes, we provide free in-home consultations and estimates for new HVAC system installations. We'll evaluate your home's size, insulation, ductwork, and comfort needs to recommend the right system — then give you a transparent, itemized quote with no hidden costs.",
  },
  {
    question: "What brands of HVAC equipment do you service and install?",
    answer:
      "We service and install all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, Daikin, and more. Our technicians are trained on both residential and light commercial systems.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Common questions from homeowners across Huntsville &amp; North Alabama.
          </p>
        </div>

        <dl className="mt-12 space-y-8">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-200 p-6"
            >
              <dt className="text-base font-bold text-slate-900">
                {faq.question}
              </dt>
              <dd className="mt-3 text-sm leading-7 text-slate-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
