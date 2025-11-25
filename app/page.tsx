import UploadForm from "@/components/upload-form";
import LogoBanner from "@/components/logo-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header / Logo */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
          <h1 className="text-2xl font-bold text-indigo-700">No Fee Advisor</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            No Fee Advisor
          </h2>
          <p className="text-xl md:text-2xl opacity-95 mb-8">
            Dozens of payment processors bidding for your business all in one place! Ensure the lowest price with one upload and let the providers compete.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload your statement</h3>
            <p className="text-gray-600">Your costs are analyzed and dozens of processors submit their bid. Ensuring you have the lowest price!</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive an offer within 24 Hours!</h3>
            <p className="text-gray-600">Best pricing offer is e-mailed directly to you - no commitments.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our network will not be beat!</h3>
            <p className="text-gray-600">If you receieve lower pricing elsewhere - No Fee Advisor will beat or match!</p>
          </div>
        </div>
      </section>
            {/* Perfect 15-logo banner — no files, no cache, no missing logos */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8 font-medium">
            Works with all major processors & payment methods
          </p>
          <div className="relative">
            <div className="flex animate-scroll whitespace-nowrap hover:pause">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mastercard-logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/American_Express_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/f/f4/Apple_Pay_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Pay_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                "https://upload.wikimedia.org/wikipedia/commons/9/9f/Square_Inc._logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
                "https://cdn.shopify.com/shopifycloud/checkout-web/assets/1.0.0/en/assets/global.svg",
                "https://www.authorize.net/content/dam/authorize/images/authorize-logo-blue.svg",
                "https://www.nmi.com/wp-content/themes/nmi/images/logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/5/5b/Global_Payments_Inc._logo.svg",
                "https://www.clover.com/assets/images/brand/clover-logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/4d/Fiserv_logo.svg",
                "https://www.toasttab.com/hubfs/toast-logo.svg",
              ].flatMap(url => [url, url]).map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Payment processor"
                  className="h-12 w-36 mx-12 object-contain flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-scroll { animation: scroll 50s linear infinite; }
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .hover\\:pause:hover { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) { .animate-scroll { animation: none; } }
        `}</style>
      </section>

      {/* CTA + Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Fee Analysis
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Upload your latest statement — I’ll show you exactly how much you can save.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
            <UploadForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2025 No Fee Advisor • All rights reserved</p>
      </footer>
    </main>
  );
}
