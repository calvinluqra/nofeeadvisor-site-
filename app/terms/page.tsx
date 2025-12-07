// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NoFeeAdvisor",
  description: "Terms of Service for www.nofeeadvisor.com",
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last updated: December 06, 2025
      </p>

      <div className="prose prose-lg prose-gray max-w-none space-y-10">

        <section>
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using <a href="https://www.nofeeadvisor.com" className="underline">www.nofeeadvisor.com</a> 
            (the “Platform”), creating an account, uploading statements or documents, submitting bids, or otherwise using our services, 
            you agree to these Terms of Service (“Terms”). If you do not agree, you may not use the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. Changes will be posted here with a new “Last updated” date. 
            Your continued use after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Description of Service</h2>
          <p>
            NoFeeAdvisor operates a marketplace where:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Businesses (“Merchants”) upload merchant processing statements, insurance policies, cell phone bills, or similar documents</li>
            <li>Independent Sales Organizations (ISOs), payment processors, insurance agents/brokers, wireless carriers, or other service providers (“Bidders”) submit competitive pricing and bids</li>
            <li>We facilitate introductions and communication between Merchants and Bidders</li>
          </ul>
          <p className="mt-4">
            We are not a party to any agreement between Merchants and Bidders. We do not provide payment processing, insurance, or telecom services ourselves.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Eligibility</h2>
          <p>You must be at least 18 years old and legally authorized to act on behalf of your business or organization.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. 
            Notify us immediately of any unauthorized use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Merchant Responsibilities (Uploaders)</h2>
          <p>By uploading documents, you represent and warrant that:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>You own or have lawful rights to upload the documents</li>
            <li>The documents are accurate and not altered to mislead</li>
            <li>You authorize NoFeeAdvisor to share them with registered Bidders for bidding purposes only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Bidder Responsibilities</h2>
          <p>By submitting bids, you represent and warrant that:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>You are duly licensed (where required) to offer the services you bid on</li>
            <li>Your bids are genuine, accurate, and made in good faith</li>
            <li>You will not use uploaded documents for any purpose other than submitting a legitimate bid</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Upload false, altered, or fraudulent statements/documents</li>
            <li>Submit fake or predatory bids</li>
            <li>Use the Platform to spam, harass, or defame</li>
            <li>Attempt to reverse-engineer or interfere with the Platform</li>
            <li>Violate any applicable law or regulation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Intellectual Property</h2>
          <p>
            The Platform and its original content (excluding user-uploaded documents) are owned by NoFeeAdvisor 
            and protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Disclaimer of Warranties</h2>
          <p className="font-medium uppercase text-lg">
            THE PLATFORM IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND.
          </p>
          <p>We do not guarantee:</p>
          <ul className="list-disc pl-8 space-y-1">
            <li>The accuracy of bids or uploaded documents</li>
            <li>That any bid will result in a contract</li>
            <li>Continuous or error-free operation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. Limitation of Liability</h2>
          <p className="font-medium uppercase text-lg">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOFEEADVISOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE.
          </p>
          <p>Our total liability to you shall not exceed one hundred U.S. dollars ($100 USD).</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless NoFeeAdvisor and its affiliates from any claims, losses, 
            or damages arising from your breach of these Terms or your use of the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">13. Termination</h2>
          <p>
            We may suspend or terminate your access at any time, with or without cause or notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">14. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles. 
            Any dispute shall be resolved exclusively in the state or federal courts located in Delaware.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">15. Miscellaneous</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>These Terms constitute the entire agreement between you and NoFeeAdvisor.</li>
            <li>If any provision is unenforceable, the remainder remains in effect.</li>
            <li>Our failure to enforce a right does not waive it.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">16. Contact Us</h2>
          <p className="font-medium">
            Questions? Email: <a href="mailto:legal@nofeeadvisor.com" className="underline">legal@nofeeadvisor. com</a>
          </p>
        </section>

      </div>
    </div>
  );
}
