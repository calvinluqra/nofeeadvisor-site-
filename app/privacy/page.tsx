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
          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Personal Data We Collect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">A. Contact / Lead forms on our website</h3>
              <ul className="list-disc pl-8 mt-2"><li>Name, email, phone, company, message</li></ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">B. Agent Network Sign-up Form (Tally.so)</h3>
              <p>We collect the information you voluntarily provide when applying to join our agent network, including:</p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Full name</li>
                <li>Business email and phone</li>
                <li>Real estate license number and state</li>
                <li>Brokerage name and address</li>
                <li>Years of experience and transaction history</li>
                <li>Any additional details you submit</li>
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

        {/* The rest of the sections (6–12) stay exactly the same as the previous version */}
        <section><h2 className="text-2xl font-semibold mt-10 mb-4">6–12. [International Transfers, Retention, Rights, Security, Children, Changes, Contact]</h2>
          <p>(Content identical to the previous version I sent you — just copy-paste those sections here to save space)</p>
        </section>
      </div>
    </div>
  );
}
