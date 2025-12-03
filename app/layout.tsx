import type { Metadata } from "next";
import "./globals.css";

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

        <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
          <p>© 2025 No Fee Advisor • All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}
