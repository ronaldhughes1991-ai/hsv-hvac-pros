type BreadcrumbItem = {
  name: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-4xl px-5 pt-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              )}
              {i === allItems.length - 1 ? (
                <span className="font-medium text-white" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allItems.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: `https://www.hsvhvacpros.com${item.href === "/" ? "" : item.href}`,
            })),
          }),
        }}
      />
    </>
  );
}
