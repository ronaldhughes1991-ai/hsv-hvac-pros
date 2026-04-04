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
  {
    question: "How much does a new HVAC system cost in North Alabama?",
    answer:
      "A complete HVAC system replacement in North Alabama typically costs $5,500–$12,000 depending on system type, home size, and efficiency rating. A basic single-stage AC and furnace runs $5,500–$7,500. A mid-range heat pump system costs $7,000–$9,500. High-efficiency variable-speed systems can run $9,500–$12,000 or more. We provide free in-home estimates with itemized pricing — no hidden fees.",
  },
  {
    question: "How much does a furnace tune-up cost?",
    answer:
      "A professional furnace tune-up in the Huntsville area costs $89–$149. This includes a full safety inspection, burner cleaning, heat exchanger check, filter replacement, thermostat calibration, and carbon monoxide testing. Annual maintenance can prevent costly breakdowns and extends your system's lifespan by 3–5 years.",
  },
  {
    question: "Is a heat pump or furnace better for North Alabama?",
    answer:
      "For most North Alabama homes, a heat pump is the better choice. Our winters are mild enough (average lows of 30–35°F) that modern heat pumps operate efficiently year-round. Heat pumps also cool your home in summer, so you get both heating and cooling in one system. A gas furnace paired with an AC unit may be preferred for older homes with existing gas lines or if you prefer heated air above 110°F.",
  },
  {
    question: "What is the average cost of an emergency HVAC call?",
    answer:
      "Emergency HVAC service calls in North Alabama typically cost $150–$350 for the diagnosis and basic repair. At HSV HVAC Pros, we do not charge overtime or after-hours fees — you pay the same rate at 2 AM on a Saturday as you would at 2 PM on a Tuesday. Complex emergency repairs like compressor or heat exchanger replacement may cost $400–$1,200 depending on parts.",
  },
  {
    question: "How long does an HVAC system last in Alabama?",
    answer:
      "In Alabama's demanding climate, an air conditioning system typically lasts 12–15 years, while a furnace can last 15–20 years with proper maintenance. Heat pumps average 10–15 years because they run year-round. Regular maintenance twice a year is the single biggest factor in extending equipment life. Systems in poorly insulated homes or those that are oversized tend to fail sooner.",
  },
  {
    question: "Should I repair or replace my air conditioner?",
    answer:
      "Use the $5,000 rule as a starting point: multiply the age of your unit by the cost of the repair. If the result exceeds $5,000, replacement is usually the better investment. Other signs it's time to replace include the system using R-22 refrigerant (phased out and expensive), needing repairs more than twice per year, or energy bills increasing more than 20% with no other explanation.",
  },
  {
    question: "What HVAC system is most energy efficient for Alabama homes?",
    answer:
      "For North Alabama, a dual-fuel heat pump system (electric heat pump plus gas furnace backup) offers the best efficiency. Look for 16+ SEER2 rating for cooling and 9+ HSPF2 for heating. Variable-speed or inverter-driven compressors like the Carrier Infinity or Trane XV can cut energy costs by 30–40% compared to basic single-stage units. The upfront cost is higher ($9,000–$12,000) but pays back in 4–6 years through lower utility bills.",
  },
  {
    question: "Do I need a permit for HVAC installation in Huntsville?",
    answer:
      "Yes. Huntsville, Madison, and most North Alabama municipalities require a mechanical permit for new HVAC installations and major replacements. The permit ensures the work meets local building codes and includes an inspection. Our licensed technicians handle all permit paperwork as part of the installation — you don't need to visit the permit office yourself.",
  },
  {
    question: "How can I lower my energy bill in the summer in Alabama?",
    answer:
      "The biggest impact comes from three things: set your thermostat to 78°F when home and higher when away (every degree below 78 adds 3–5% to cooling costs), get annual AC maintenance (a dirty system uses 15–20% more energy), and seal ductwork leaks which waste 20–30% of conditioned air in the average home. Other tips include using ceiling fans, closing blinds on south- and west-facing windows, and replacing air filters monthly in summer.",
  },
  {
    question: "What size HVAC system do I need for my home?",
    answer:
      "HVAC sizing depends on square footage, insulation, window area, ceiling height, and local climate. As a rough guide for North Alabama: 1,200–1,500 sq ft needs a 2.5-ton system, 1,500–2,000 sq ft needs 3 tons, 2,000–2,500 sq ft needs 3.5–4 tons, and 2,500+ sq ft typically needs 4–5 tons. A proper Manual J load calculation is essential — an oversized system short-cycles and wastes energy, while an undersized system can't keep up in peak summer heat. We provide free sizing calculations with every installation estimate.",
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

    </section>
  );
}
