// app/privacy/page.tsx   (or pages/privacy/page.tsx)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NoFeeAdvisor",
  description: "Privacy Policy for www.nofeeadvisor.com",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last updated: December 06, 2025
      </p>

      <div className="prose prose-lg prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
          <p>
            nofeeadvisor.com (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
            <a href="https://www.nofeeadvisor.com" className="underline">
              www.nofeeadvisor.com
            </a>{" "}
            (the “Website”) and submit information through contact or lead forms.
          </p>
          <p className="font-medium mt-4">
            We do <strong>not</strong> sell or share your personal data for advertising or marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Data We Collect</h2>
          <p>
            We collect the following categories of personal data only when you voluntarily provide it through our contact/lead forms:
          </p>
          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Name (first and last)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name (if applicable)</li>
            <li>Any additional information you choose to include in your message</li>
          </ul>
          <p className="mt-4">
            We do <strong>not</strong> use cookies, analytics tools (e.g., Google Analytics), tracking pixels, chat widgets, user accounts, or payment processors on this Website at this time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Your Information</h2>
          <p>We use the information you submit only to:</p>
          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Respond to your inquiry or request</li>
            <li>Provide the services or information you requested</li>
            <li>Communicate with you about your inquiry</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4">
            <strong>Legal bases under GDPR (where applicable):</strong><br />
            • Performance of a contract or steps prior to entering a contract (Art. 6(1)(b))<br />
            • Legitimate interests (Art. 6(1)(f)) – responding to inquiries and providing customer service
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Disclosure of Your Information</h2>
          <p>
            We do <strong>not</strong> sell, trade, or share your personal data with third parties for marketing or advertising purposes.
          </p>
          <p className="mt-4">
            We may share your information only in these limited cases:
          </p>
          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Service providers who help us operate the Website or respond to inquiries (e.g., web hosting, email delivery services) – bound by strict confidentiality</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">5. International Data Transfers</h2>
          <p>
            Your information may be transferred to — and maintained on — computers located outside your country (including in the United States), where data protection laws may differ. By submitting information, you consent to this transfer.
          </p>
          <p className="mt-4">
            Where required (e.g., under GDPR), we use appropriate safeguards such as Standard Contractual Clauses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Data Retention</h2>
          <p>
            We keep your personal data only as long as necessary to respond to your inquiry and for a reasonable follow-up period (maximum 24 months). After that, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">7. Your Privacy Rights</h2>
          <p>Depending on where you live, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Access, correction, or deletion</li>
            <li>Restriction of processing or objection</li>
            <li>Data portability</li>
            <li>Withdraw consent (where processing is consent-based)</li>
            <li>Opt-out of “sale” or “sharing” (CCPA/CPRA – not applicable here)</li>
            <li>Non-discrimination for exercising your rights</li>
          </ul>
          <p className="mt-4">
            <strong>California residents:</strong> We do <strong>not</strong> sell or share personal data as defined under CCPA/CPRA.
          </p>
          <p className="mt-4">
            To exercise any right, contact us at{" "}
            <a href="mailto:privacy@nofeeadvisor.com" className="underline font-medium">
              privacy@nofeeadvisor.com
            </a>
            . We will respond within the timeframe required by applicable law (usually 30–45 days).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">8. Security</h2>
          <p>
            We use appropriate technical and organizational measures (e.g., encryption in transit, secure hosting) to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">9. Children’s Privacy</h2>
          <p>
            Our Website is not intended for individuals under 16 years of age. We do not knowingly collect personal data from children under 16.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy from time to time. The new version will be posted on this page with an updated “Last updated” date. We encourage you to review it periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">11. Contact Us</h2>
          <p>
            If you have questions or requests about this privacy policy or your personal data, please contact us at:
          </p>
          <p className="mt-4 font-medium">
            Email:{" "}
            <a href="mailto:privacy@nofeeadvisor.com" className="underline">
              privacy@nofeeadvisor.com
            </a>
            <br />
            Website: <a href="https://www.nofeeadvisor.com" className="underline">www.nofeeadvisor.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
