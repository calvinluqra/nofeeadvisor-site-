import UploadForm from "@/components/upload-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">No Fee Advisor</h1>
        </div>
      </header>

      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">No Fee Advisor</h2>
          <p className="text-xl md:text-2xl">
            I help businesses eliminate or drastically reduce credit-card & merchant processing fees
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="p-10 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Slash Fees to 0%</h3>
            <p className="text-gray-600">Legally reduce processing fees to zero or near-zero — instantly.</p>
          </div>
          <div className="p-10 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep 100% Revenue</h3>
            <p className="text-gray-600">No more losing 2–4% of every sale to banks.</p>
          </div>
          <div className="p-10 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
            <p className="text-gray-600">Works for any industry — same-day approvals.</p>
          </div>
        </div>
      </section>

            <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-900 mb-8 font-medium">
            Works with all major processors & payment methods
          </p>
          <div className="flex flex-wrap justify-center gap-12 py-4">
            <img src="/logos/visa.svg" alt="Visa" className="h-12 w-auto" />
            <img src="/logos/mastercard.svg" alt="Mastercard" className="h-12 w-auto" />
            <img src="/logos/american-express.svg" alt="Amex" className="h-12 w-auto" />
            <img src="/logos/apple-pay.svg" alt="Apple Pay" className="h-12 w-auto" />
            <img src="/logos/google-pay.svg" alt="Google Pay" className="h-12 w-auto" />
            <img src="/logos/stripe.svg" alt="Stripe" className="h-12 w-auto" />
            <img src="/logos/square.svg" alt="Square" className="h-12 w-auto" />
            <img src="/logos/paypal.svg" alt="PayPal" className="h-12 w-auto" />
            <img src="/logos/authorize-net.png" alt="Authorize.net" className="h-12 w-auto" />
            <img src="/logos/nmi.png" alt="NMI" className="h-12 w-auto" />
            <img src="/logos/clover.png" alt="Clover" className="h-12 w-auto" />
            <img src="/logos/fiserv.png" alt="Fiserv" className="h-12 w-auto" />
            <img src="/logos/toast.png" alt="Toast" className="h-12 w-auto" />
            <img src="/logos/shopify.svg" alt="Shopify" className="h-12 w-auto" />
            <img src="/logos/global-payments.svg" alt="Global Payments" className="h-12 w-auto" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Fee Analysis
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Upload your latest statement — I'll show you exactly how much you can save.
          </p>
          <div className="bg-gray-50 rounded-lg shadow-md p-10 border">
            <UploadForm />
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>&copy; 2025 No Fee Advisor • All rights reserved</p>
      </footer>
    </main>
  );
}
