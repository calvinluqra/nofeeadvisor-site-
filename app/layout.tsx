import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Fee Advisor",
  description: "Stop overpaying on payment processing, insurance, cell phone bills, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {/* SHARED HEADER — appears on every page */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-black hover:text-indigo-600 transition">
              No Fee Advisor
            </a>

            <div className="relative group">
              <button className="text-lg font-medium flex items-center gap-2 hover:text-indigo-600 transition">
  More Savings Opportunities ▼
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

        {/* Page content */}
        <div className="min-h-screen">{children}</div>

        {/* SHARED FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
          <p>© 2025 No Fee Advisor • All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}
