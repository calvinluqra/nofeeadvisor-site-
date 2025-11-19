import UploadForm from "@/components/upload-form";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">No Fee Advisor</h1>
          <p className="text-2xl mb-8">
            I help businesses eliminate or drastically reduce credit-card & merchant processing fees
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Slash Fees to 0%</h3>
            <p>Legally reduce processing fees to zero or near-zero — instantly.</p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Keep 100% Revenue</h3>
            <p>No more losing 2–4% of every sale to banks.</p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
            <p>Works for any industry — same-day approvals.</p>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get Your Free Fee Analysis</h2>
        <UploadForm />
      </section>
    </main>
  );
}
