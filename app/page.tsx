import UploadForm from "@/components/upload-form";

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
      <LogoBanner />

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
