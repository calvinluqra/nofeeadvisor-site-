import UploadForm from "@/components/upload-form";
import LogoBanner from "@/components/logo-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">No Fee Advisor</h1>
        </div>
      </header>

            <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Stop Losing Thousands<br />to Credit Card Fees
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Upload your merchant statement → get competing bids from top processors → 
            keep <span className="text-yellow-300 font-bold">100% of your revenue</span>
          </p>

          <div className="text-6xl md:text-8xl font-black text-yellow-300 mb-10">
            Most merchants save $8,400 – $47,000 per year
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto -mt-4">
            <UploadForm />
          </div>

          <div className="mt-8 text-lg md:text-xl font-medium">
            Free analysis • No obligation • Results in 24–48 hours
          </div>
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
      <section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-black mb-12">
      Merchants Already Saving Real Money
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-3xl font-black text-green-600 mb-2">$38,400</p>
        <p className="text-lg italic mb-4">saved per year</p>
        <p className="font-medium">“Went from 3.7% to 0.0% fees. Best decision we ever made.”</p>
        <p className="mt-4 text-gray-600">— Marco R., Italian Restaurant, Chicago</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-3xl font-black text-green-600 mb-2">$19,200</p>
        <p className="text-lg italic mb-4">saved per year</p>
        <p className="font-medium">“Got 4 bids in 24 hours and switched the next day.”</p>
        <p class="mt-4 text-gray-600">— Sarah L., E-commerce Store, California</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-3xl font-black text-green-600 mb-2">$62,000</p>
        <p className="text-lg italic mb-4">saved per year</p>
        <p className="font-medium">“Thought zero fees were impossible until we tried this.”</p>
        <p class="mt-4 text-gray-600">— Dr. Patel, Dental Group, Texas</p>
      </div>
    </div>
  </div>
</section>

      <LogoBanner />

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Ready to Stop Overpaying?
</h2>
<p className="text-xl text-gray-600 mb-12">
  Upload your statement now — most merchants hear back with bids in under 24 hours.
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
