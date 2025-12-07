// app/privacy/page.tsx  (or pages/privacy/page.tsx)
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
            nofeeadvisor.com (“we,” “us,” or “our”) respects your privacy. This policy covers data collected via our website{" "}
            <a href="https://www.nofeeadvisor.com" className="underline">www.nofeeadvisor.com</a>, 
            our contact/lead forms, and our agent network sign-up form hosted by Tally.so 
            (<a href="https://tally.so/r/5Bb4Lo" className="underline">https://tally.so/r/5Bb4Lo</a>).
          </p>
          <p className="font-medium mt-4">
            We do <strong>not</strong> sell or share your personal data for advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Data We Collect</h2>
          <p>
            We collect the following categories of personal data only when you voluntarily provide it through our contact/lead forms:
          </p>
          <div className="space-y-6">
            <div>
<ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Name (first and last)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name (if applicable)</li>
            <li>Any additional information you choose to include in your message</li>
          </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">B. Agent Network Sign-up Form (Tally.so)</h3>
              <p>We collect the information you voluntarily provide when applying to join our agent network, including:</p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Full name</li>
                <li>Business email and phone</li>
                <li>Any additional details you submit in form</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">C. Automatically collected data</h3>
              <p>Google Analytics (on our main site) and Tally.so cookies collect:</p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>IP address (anonymized where possible)</li>
                <li>Browser, device, approximate location, pages visited</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies & Tracking</h2>
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-50">
              <tr><th className="px-4 py-3 text-left">Provider</th><th className="px-4 py-3 text-left">Cookies</th><th className="px-4 py-3 text-left">Purpose</th><th className="px-4 py-3 text-left">Duration</th></tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="px-4 py-3">Google Analytics</td><td>_ga, _gid, _gat</td><td>Site usage analytics</td><td>1 min – 2 years</td></tr>
              <tr><td className="px-4 py-3">Tally.so</td><td>tally_session, tally_uid</td><td>Form functionality & analytics</td><td>Session – 1 year</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">4. How We Use Your Data</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Respond to inquiries</li>
            <li>Review and process agent network applications</li>
            <li>Improve the website and forms (analytics)</li>
            <li>Comply with legal and licensing obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Third-Party Recipients</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Google LLC (Analytics) – United States</li>
            <li>Tally.so (form provider) – United States</li>
            <li>Hosting and email providers</li>
          </ul>
          <p className="mt-4">All transfers to the US are protected by Standard Contractual Clauses.</p>
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
