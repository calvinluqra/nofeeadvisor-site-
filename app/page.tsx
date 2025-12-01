"use client";

import UploadForm from "@/components/upload-form";
import LogoBanner from "@/components/logo-banner";

export default function Home() {
  const openModal = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement | null;
    dialog?.showModal();
  };

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
            Upload your statement → get competing bids → keep <span className="text-yellow-300 font-bold">100% of your revenue</span>
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
            <h3 className="text-2xl font-bold mb-4">Slash Fees to 0%</h3>
            <p className="text-gray-600">Legally reduce fees to zero or near-zero.</p>
          </div>
          <div className="p-10 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Keep 100% Revenue</h3>
            <p className="text-gray-600">No more losing 2–4% per sale.</p>
          </div>
          <div className="p-10 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
            <p className="text-gray-600">Works for any industry.</p>
          </div>
        </div>
      </section>

      <LogoBanner />

      {/* TESTIMONIALS + CLICK-TO-ZOOM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16">Real Merchants, Real Savings</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-black text-green-600 mb-2">$38,400</p>
              <p className="text-xl italic mb-4">saved per year</p>
              <p className="font-medium">— Marco R., Chicago Italian Restaurant</p>
              <div className="mt-6">
                <img src="/statements/marcotest.jpeg" alt="Marco statement" className="w-full rounded-lg shadow-md cursor-pointer" onClick={() => openModal("stmt1")} />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-black text-green-600 mb-2">$19,200</p>
              <p className="text-xl italic mb-4">saved per year</p>
              <p className="font-medium">— Sarah L., California E-commerce</p>
              <div className="mt-6">
                <img src="/statements/sarah-before-after.jpg" alt="Sarah statement" className="w-full rounded-lg shadow-md cursor-pointer" onClick={() => openModal("stmt2")} />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-black text-green-600 mb-2">$62,000</p>
              <p className="text-xl italic mb-4">saved per year</p>
              <p className="font-medium">— Dr. Patel, Texas Dental Group</p>
              <div className="mt-6">
                <img src="/statements/patel-before-after.jpg" alt="Patel statement" className="w-full rounded-lg shadow-md cursor-pointer" onClick={() => openModal("stmt3")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Overpaying?</h2>
          <p className="text-xl text-gray-600 mb-12">Upload now — bids in 24 hours.</p>
          <div className="bg-gray-50 rounded-lg shadow-md p-10 border"><UploadForm /></div>
        </div>
      </section>

      {/* ZOOM MODALS */}
      <dialog id="stmt1" className="p-0 bg-black/90 max-w-5xl rounded-xl"><form method="dialog"><button className="float-right text-white text-6xl pr-6 pt-4">×</button></form><img src="/statements/marco-before-after.jpg" className="w-full rounded-xl"/></dialog>
      <dialog id="stmt2" className="p-0 bg-black/90 max-w-5xl rounded-xl"><form method="dialog"><button className="float-right text-white text-6xl pr-6 pt-4">×</button></form><img src="/statements/sarah-before-after.jpg" className="w-full rounded-xl"/></dialog>
      <dialog id="stmt3" className="p-0 bg-black/90 max-w-5xl rounded-xl"><form method="dialog"><button className="float-right text-white text-6xl pr-6 pt-4">×</button></form><img src="/statements/patel-before-after.jpg" className="w-full rounded-xl"/></dialog>

      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2025 No Fee Advisor • All rights reserved</p>
      </footer>
    </main>
  );
}
