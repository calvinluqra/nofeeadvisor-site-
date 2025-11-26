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

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8 font-medium">
            Works with all major processors & payment methods
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Mastercard-logo.svg" alt="Mastercard" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/American_Express_logo.svg" alt="Amex" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Apple_Pay_logo.svg" alt="Apple Pay" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Pay_logo.svg" alt="Google Pay" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Square_Inc._logo.svg" alt="Square" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-12 w-auto" />
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
