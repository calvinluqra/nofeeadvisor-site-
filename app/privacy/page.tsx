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

      <div className="prose prose-lg prose-gray max-w-none space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
          <p>
            nofeeadvisor.com (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
            <a href="https://www.nofeeadvisor.com" className="underline">
              www.nofeeadvisor.com
            </a>{" "}
            (the “Website”), submit contact/lead forms, or interact with our analytics and tracking technologies.
          </p>
          <p className="font-medium mt-4">
            We do <strong>not</strong> sell or share your personal data for advertising or cross-context behavioral advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Personal Data We Collect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">A. Information you provide directly</h3>
              <ul className="list-disc pl-8 mt-3 space-y-1">
                <li>Name (first and last)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (if applicable)</li>
                <li>Any message or additional details you submit via contact/lead forms</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">B. Information collected automatically</h3>
              <p className="mt-3">
                When you visit the Website, we (and our third-party analytics provider Google Analytics) automatically collect:
              </p>
              <ul className="list-disc pl-8 mt-3 space-y-1">
                <li>IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring site, pages visited, time spent on pages</li>
                <li>Approximate geographic location (country/region level)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies & Tracking Technologies</h2>
          <p>We use the following cookies:</p>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Cookie / Identifier</th>
                  <th className="px-4 py-3 text-left">Provider</th>
                  <th className="px-4 py-3 text-left">Purpose</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">_ga, _gid, _gat</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">Analytics – understand how visitors use the site</td>
                  <td className="px-4 py-3">2 years / 24 hours / 1 minute</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            You can disable cookies in your browser settings or use tools like Google Analytics Opt-out Browser Add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">4. How We Use Your Information</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Improve the Website (via Google Analytics insights)</li>
            <li>Detect security incidents and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4">
            <strong>Legal bases (GDPR):</strong> Legitimate interests (analytics, site improvement, customer service) and performance of a contract / pre-contractual steps.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Disclosure & Third-Party Recipients</h2>
          <p>We share data only with:</p>
          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Google LLC (Google Analytics) – United States (Standard Contractual Clauses in place)</li>
            <li>Web hosting and email service providers (strictly for operational purposes)</li>
            <li>Legal authorities when required</li>
          </ul>
          <p className="mt-4">
            We do <strong>not</strong> sell or share personal data for advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">6. International Data Transfers</h2>
          <p>
            Data may be transferred to and processed in the United States (Google Analytics). We use EU-approved Standard Contractual Clauses and supplementary measures where required.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">7. Data Retention</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Contact form submissions: maximum 24 months</li>
            <li>Google Analytics data: up to 26 months (automatically anonymized/deleted)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">8. Your Privacy Rights</h2>
          <p>You may have the right to:</p>
          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Access, correct, or delete your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent (where applicable)</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="mt-4">
            California residents: We do <strong>not</strong> “sell” or “share” personal information as defined by CCPA/CPRA. You may still submit access/deletion requests.
          </p>
          <p className="mt-4">
            To exercise any right → email{" "}
            <a href="mailto:privacy@nofeeadvisor.com" className="underline font-medium">
              privacy@nofeeadvisor.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">9. Security</h2>
          <p>We implement appropriate technical and organizational measures (HTTPS, secure hosting, limited access) to protect your data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">10. Children’s Privacy</h2>
          <p>The Website is not directed to individuals under 16. We do not knowingly collect data from children under 16.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">11. Changes</h2>
          <p>We may update this policy. Changes will be posted here with a new “Last updated” date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">12. Contact Us</h2>
          <p className="font-medium">
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
