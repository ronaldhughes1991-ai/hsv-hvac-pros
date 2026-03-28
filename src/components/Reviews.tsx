const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Huntsville, AL",
    rating: 5,
    text: "Our AC went out on the hottest day of July. HSV HVAC Pros had a tech at our house within 45 minutes and had everything running by that afternoon. Fair price too — they showed me the issue before doing any work.",
    service: "AC Repair",
  },
  {
    id: 2,
    name: "James & Tina R.",
    location: "Madison, AL",
    rating: 5,
    text: "We've used them for furnace maintenance three years in a row. Always on time, always professional. They caught a cracked heat exchanger last winter that another company missed. Could have been dangerous.",
    service: "Heating Maintenance",
  },
  {
    id: 3,
    name: "David C.",
    location: "Athens, AL",
    rating: 5,
    text: "Called at 11 PM on a Saturday when our heat pump died. They answered immediately and had someone out within an hour. No overtime charge, just honest service. These guys are the real deal.",
    service: "Emergency Service",
  },
  {
    id: 4,
    name: "Michelle T.",
    location: "Harvest, AL",
    rating: 5,
    text: "Got three quotes for a new HVAC system — HSV HVAC Pros was the most transparent about costs and the only company that took time to explain every option. Installation was flawless.",
    service: "System Installation",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-slate-300"}`}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="reviews-heading"
      data-theme="cooling"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Don&apos;t Take Our Word For It
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hear from homeowners across North Alabama who trust us with their
            comfort.
          </p>

          {/* Aggregate rating */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.9 / 5</span>
            <span className="text-sm text-slate-500">from 312 reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
          {reviews.map((r) => (
            <blockquote
              key={r.id}
              id={`review-${r.id}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <StarRating rating={r.rating} />
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {r.service}
                </span>
              </div>

              <p className="mt-4 flex-1 text-base leading-7 text-slate-700">
                &ldquo;{r.text}&rdquo;
              </p>

              <footer className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
