import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "HVAC Tips & Guides for North Alabama Homeowners | HSV HVAC Pros",
  description:
    "Expert HVAC tips, buying guides, and maintenance advice for Huntsville, Madison, and North Alabama homeowners. Stay comfortable and save money year-round.",
  alternates: { canonical: "https://hsvhvacpros.com/blog" },
};

const categoryColors: Record<string, string> = {
  comparisons: "bg-blue-100 text-blue-700",
  guides: "bg-green-100 text-green-700",
  maintenance: "bg-amber-100 text-amber-700",
  seasonal: "bg-orange-100 text-orange-700",
};

const categoryLabels: Record<string, string> = {
  comparisons: "Comparison",
  guides: "Guide",
  maintenance: "Maintenance",
  seasonal: "Seasonal",
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "HSV HVAC Pros Blog",
    description:
      "Expert HVAC tips, buying guides, and maintenance advice for North Alabama homeowners.",
    url: "https://hsvhvacpros.com/blog",
    publisher: {
      "@type": "Organization",
      name: "HSV HVAC Pros",
      url: "https://hsvhvacpros.com",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://hsvhvacpros.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      publisher: {
        "@type": "Organization",
        name: "HSV HVAC Pros",
      },
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-overlay grid-pattern bg-slate-900 text-white">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            HVAC BLOG
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            HVAC Tips &amp; Guides for{" "}
            <span className="text-blue-300">North Alabama Homeowners</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Practical advice on heating, cooling, and indoor comfort from local
            HVAC experts. Whether you&apos;re comparing systems, planning
            maintenance, or trying to lower your energy bills, we&apos;ve got
            you covered.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
              >
                <span
                  className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColors[post.category]}`}
                >
                  {categoryLabels[post.category]}
                </span>
                <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <p className="mt-4 text-xs text-slate-500">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
