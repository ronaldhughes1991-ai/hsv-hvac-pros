import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — HSV HVAC Pros",
  description: "Privacy policy for HSV HVAC Pros. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.hsvhvacpros.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: March 28, 2026</p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
              <p className="mt-3">
                When you use our website, submit a contact form, or call us, we may collect personal
                information including your name, phone number, email address, home address, and details
                about your HVAC service needs. We also collect standard website usage data through
                cookies and analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">How We Use Your Information</h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Respond to service inquiries and provide estimates</li>
                <li>Schedule and perform HVAC services</li>
                <li>Communicate with you about your service</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Call Tracking</h2>
              <p className="mt-3">
                We use CallRail to track phone calls for the purpose of measuring advertising
                effectiveness and improving customer service. Phone calls may be recorded for quality
                assurance purposes. By calling our business, you consent to call recording.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Cookies & Analytics</h2>
              <p className="mt-3">
                Our website uses cookies and similar technologies to analyze website traffic and
                usage patterns. This data helps us understand how visitors interact with our site
                so we can improve the user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Information Sharing</h2>
              <p className="mt-3">
                We do not sell, trade, or rent your personal information to third parties. We may
                share information with trusted service providers who assist us in operating our
                business (such as our CRM, call tracking, and analytics providers), subject to
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Data Security</h2>
              <p className="mt-3">
                We implement reasonable security measures to protect your personal information.
                However, no method of electronic transmission or storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Your Rights</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal information
                by contacting us at{" "}
                <a href="mailto:info@hsvhvacpros.com" className="text-blue-700 hover:underline">
                  info@hsvhvacpros.com
                </a>{" "}
                or calling{" "}
                <a href="tel:+12565884712" className="text-blue-700 hover:underline">
                  (256) 588-4712
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Changes to This Policy</h2>
              <p className="mt-3">
                We may update this privacy policy from time to time. Changes will be posted on this
                page with an updated &quot;last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact Us</h2>
              <p className="mt-3">
                If you have questions about this privacy policy, please contact us at{" "}
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
