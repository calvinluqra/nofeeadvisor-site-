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
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            No Fee Advisor
          </h2>
          <p className="text-xl md:text-2xl opacity-95 mb-8">
            I help businesses eliminate or drastically reduce credit-card & merchant processing fees
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Slash Fees to 0%</h3>
            <p className="text-gray-600">Legally reduce processing fees to zero or near-zero — instantly.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep 100% Revenue</h3>
            <p className="text-gray-600">No more losing 2–4% of every sale to banks.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
            <p className="text-gray-600">Works for any industry — same-day approvals.</p>
          </div>
        </div>
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
