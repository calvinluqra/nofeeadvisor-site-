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

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Stop Losing Thousands<br />to Credit Card Fees
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Upload your merchant statement → get competing bids from top processors → keep <span className="text-yellow-300 font-bold">100% of your revenue</span>
          </p>
          <div className="text-6xl md:text-8xl font-black text-yellow-300 mb-10">
            Most merchants save $8,400 – $47,000 per year
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto -mt-4">
            <UploadForm />
          </div>
          <div className="mt-8 text-lg md:text-xl font-medium">
            Free analysis • No obligation • Results in 24–48 hours
          </div>
        </div>
      </section>

      {/* BENEFITS */}
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
       
