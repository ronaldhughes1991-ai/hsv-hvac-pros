import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — HSV HVAC Pros",
  description: "Terms of service for HSV HVAC Pros. Read our service agreement, warranty information, and policies.",
  alternates: { canonical: "https://www.hsvhvacpros.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: March 28, 2026</p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using the HSV HVAC Pros website and services, you agree to be bound
                by these Terms of Service. If you do not agree with any part of these terms, you
                should not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Services</h2>
              <p className="mt-3">
                HSV HVAC Pros provides residential HVAC repair, maintenance, and installation
                services in the North Alabama area. All services are subject to availability and
                may vary based on your location, equipment type, and specific needs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Estimates & Pricing</h2>
              <p className="mt-3">
                All estimates are provided free of charge and are valid for 30 days unless otherwise
                stated. Final pricing is based on the actual scope of work required and will be
                confirmed before any work begins. We do not charge overtime or after-hours fees for
                emergency service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Warranty & Guarantee</h2>
              <p className="mt-3">
                All repair work is backed by our satisfaction guarantee. Manufacturer warranties
                apply to all new equipment installations. Specific warranty terms will be provided
                in writing at the time of service or installation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Payment</h2>
              <p className="mt-3">
                Payment is due upon completion of service unless other arrangements have been made
                in advance. We accept cash, checks, and major credit cards. Financing options may
                be available for system installations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Cancellation</h2>
              <p className="mt-3">
                You may cancel or reschedule a service appointment at no charge by providing at
                least 24 hours&apos; notice. Same-day cancellations may be subject to a service fee.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
              <p className="mt-3">
                HSV HVAC Pros shall not be liable for any indirect, incidental, special, or
                consequential damages resulting from the use of our services or website. Our total
                liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Website Use</h2>
              <p className="mt-3">
                The content on this website is for informational purposes only and does not
                constitute professional HVAC advice. While we strive to keep information accurate
                and up to date, we make no warranties about the completeness or reliability of
                website content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Changes to Terms</h2>
              <p className="mt-3">
                We reserve the right to modify these terms at any time. Changes will be posted
                on this page with an updated date. Continued use of our services after changes
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Contact us at{" "}
                <a href="mailto:info@hsvhvacpros.com" className="text-blue-700 hover:underline">
                  info@hsvhvacpros.com
                </a>{" "}
                or call{" "}
                <a href="tel:+12565884712" className="text-blue-700 hover:underline">
                  (256) 588-4712
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
