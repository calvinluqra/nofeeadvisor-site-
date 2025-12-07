import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "react-cookie-consent";

export const metadata: Metadata = {
  title: "No Fee Advisor – Stop Overpaying Credit Card Fees",
  description: "Upload your statement → get zero-fee bids in 24 hours. Most merchants save $8,400–$47,000/year. Free analysis.",
  openGraph: {
    title: "No Fee Advisor – Keep 100% of Your Revenue",
    description: "Free analysis • Zero obligation • Most merchants save $8,400–$47,000/year",
    images: "https://nofeeadvisor-site.vercel.app/og-image.jpg",
    url: "https://nofeeadvisor-site.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {/* SHARED HEADER */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <img src="/logo.jpg" alt="No Fee Advisor" className="h-10 w-auto" />
              <span className="text-2xl font-black text-gray-900">No Fee Advisor</span>
            </a>

            <div className="relative group">
              <button className="text-lg font-medium flex items-center gap-2 hover:text-indigo-600 transition">
                More Savings Opportunities
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/" className="block px-6 py-4 hover:bg-indigo-50 font-medium text-indigo-600">
                  Payment Processing ← live now
                </a>
                <a href="/insurance" className="block px-6 py-4 hover:bg-gray-50">
                  Insurance → coming soon
                </a>
                <a href="/cellphone" className="block px-6 py-4 hover:bg-gray-50">
                  Cell Phone & Internet → coming soon
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="min-h-screen">{children}</div>

        {/* SHARED FOOTER — now compact and beautiful */}
        <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
          <p className="mb-4">© 2025 No Fee Advisor • All rights reserved</p>
          <p className="mt-4">
    <a href="/privacy" className="text-gray-400 hover:text-white underline">
      Privacy Policy
    </a>
    {" • "}
    Statements encrypted & deleted after 30 days
  </p>
          <p className="text-xs text-gray-500 mt-2">
  <a href="/privacy" className="hover:underline">Privacy Policy</a> • 
  <a href="/terms" className="hover:underline ml-2">Terms of Service</a>
</p>

          {/* AGENT / PROCESSOR CALL-TO-ACTION — tight spacing */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              Are you a payment processor, ISO, or agent?
              <a href="https://tally.so/r/5Bb4Lo" target="_blank" rel="noopener" className="text-indigo-400 hover:text-indigo-300 font-medium ml-2 underline">
                Join our network → get qualified merchant leads daily
              </a>
            </p>
          </div>
                  {/* COOKIE CONSENT BANNER — shows on every page */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="nofeeadvisor-consent"
          style={{ background: "#111", color: "#fff" }}
          buttonStyle={{ background: "#4f46e5", color: "#fff", fontSize: "14px" }}
          expires={365}
        >
          This site uses cookies for analytics.{" "}
          <a href="/privacy" className="underline hover:text-indigo-300">
            Learn more
          </a>
          .
        </CookieConsent>
        </footer>
      </body>
    </html>
  );
}
