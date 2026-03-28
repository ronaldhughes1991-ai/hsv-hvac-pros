import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
    url: "https://hsvhvacpros.com",
    siteName: "HSV HVAC Pros",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hsvhvacpros.com",
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
              image: "https://hsvhvacpros.com/logo.png",
              description:
                "Professional residential HVAC repair, installation, and maintenance services in Athens, Huntsville & North Alabama.",
              url: "https://hsvhvacpros.com",
              telephone: "256-588-4712",
              email: "info@hsvhvacpros.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "YOUR_ATHENS_STREET_ADDRESS",
                addressLocality: "Athens",
                addressRegion: "AL",
                postalCode: "YOUR_ZIP_CODE",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "YOUR_LATITUDE",
                longitude: "YOUR_LONGITUDE",
              },
              areaServed: [
                { "@type": "City", name: "Huntsville" },
                { "@type": "City", name: "Athens" },
                { "@type": "City", name: "Madison" },
                { "@type": "City", name: "Harvest" },
              ],
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
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
