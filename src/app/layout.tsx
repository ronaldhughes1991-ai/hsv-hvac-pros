import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hsvhvacpros.com"),
  title: "HSV HVAC Pros | HVAC Huntsville AL — AC Repair, Heating & Emergency Service",
  description:
    "Top-rated HVAC company in Athens & Huntsville, AL. Residential air conditioning repair, emergency furnace service North Alabama, heating maintenance. Serving Athens, Huntsville, Madison, and Harvest. Call (256) 588-4712 for a free estimate.",
  keywords: [
    "HVAC Huntsville AL",
    "HVAC Athens AL",
    "air conditioning repair Madison",
    "emergency furnace service North Alabama",
    "AC repair Huntsville Alabama",
    "heating maintenance North Alabama",
    "24/7 emergency HVAC Huntsville",
    "furnace repair Athens AL",
    "air conditioner service Harvest AL",
    "residential HVAC Madison AL",
  ],
  openGraph: {
    title: "HSV HVAC Pros | Huntsville's Trusted HVAC Experts",
    description:
      "Residential AC repair, heating maintenance & 24/7 emergency HVAC service in Athens, Huntsville & North Alabama. Licensed, insured & locally owned.",
    url: "https://www.hsvhvacpros.com",
    siteName: "HSV HVAC Pros",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HSV HVAC Pros — Trusted HVAC Experts in Huntsville & North Alabama",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSV HVAC Pros | HVAC Huntsville AL",
    description:
      "Top-rated residential HVAC company serving Athens, Huntsville & North Alabama. AC repair, heating, emergency service. Call (256) 588-4712.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hsvhvacpros.com",
  },
  other: {
    "geo.region": "US-AL",
    "geo.placename": "Huntsville",
    "geo.position": "34.7304;-86.5861",
    ICBM: "34.7304, -86.5861",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://cdn.callrail.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics 4 — replace G-LVTGGC0PKH with your measurement ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVTGGC0PKH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-LVTGGC0PKH');`,
          }}
        />
        {/* CallRail call tracking */}
        <script
          type="text/javascript"
          src="//cdn.callrail.com/companies/543263171/7f65ac3bae0f494510fa/12/swap.js"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "HSV HVAC Pros",
              image: "https://www.hsvhvacpros.com/logo.png",
              description:
                "Connecting North Alabama homeowners with vetted, licensed HVAC professionals for repair, installation, and maintenance.",
              url: "https://www.hsvhvacpros.com",
              telephone: "+1-256-588-4712",
              email: "info@hsvhvacpros.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Athens",
                addressRegion: "AL",
                postalCode: "35611",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "34.8029",
                longitude: "-86.9717",
              },
              areaServed: [
                { "@type": "City", name: "Huntsville", "@id": "https://en.wikipedia.org/wiki/Huntsville,_Alabama" },
                { "@type": "City", name: "Athens", "@id": "https://en.wikipedia.org/wiki/Athens,_Alabama" },
                { "@type": "City", name: "Madison", "@id": "https://en.wikipedia.org/wiki/Madison,_Alabama" },
                { "@type": "City", name: "Harvest", "@id": "https://en.wikipedia.org/wiki/Harvest,_Alabama" },
                { "@type": "City", name: "Meridianville" },
                { "@type": "City", name: "Hazel Green" },
                { "@type": "City", name: "New Market" },
                { "@type": "City", name: "Toney" },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "34.8029",
                  longitude: "-86.9717",
                },
                geoRadius: "30 mi",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "312",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Sarah M." },
                  datePublished: "2025-07-15",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody:
                    "Our AC went out on the hottest day of July. HSV HVAC Pros had a tech at our house within 45 minutes and had everything running by that afternoon. Fair price too.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James R." },
                  datePublished: "2025-11-20",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody:
                    "We've used them for furnace maintenance three years in a row. Always on time, always professional. They caught a cracked heat exchanger last winter that another company missed.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "David C." },
                  datePublished: "2026-01-08",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody:
                    "Called at 11 PM on a Saturday when our heat pump died. They answered immediately and had someone out within an hour. No overtime charge, just honest service.",
                },
              ],
              potentialAction: {
                "@type": "CommunicateAction",
                target: "https://www.hsvhvacpros.com/#contact",
                name: "Request a Free Estimate",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "HVAC Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AC Repair",
                      description: "Residential air conditioning repair in Athens, Huntsville & North Alabama.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Heating Maintenance",
                      description: "Furnace and heating system maintenance for North Alabama homeowners.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Emergency HVAC Service",
                      description: "24/7 emergency heating and cooling service in Huntsville AL.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "HVAC System Installation",
                      description: "Professional AC, furnace, and heat pump installation for North Alabama homes.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif", background: "#1e40af", color: "white" }}>
            <h1>HSV HVAC Pros</h1>
            <p>Trusted HVAC Service in Athens, Huntsville &amp; North Alabama</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem" }}>
              <a href="tel:+12565884712" style={{ color: "white" }}>(256) 588-4712</a>
            </p>
          </div>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
