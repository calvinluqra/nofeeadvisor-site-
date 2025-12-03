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
      
                        {/* REAL-TIME SAVINGS CALCULATOR — FIXED OVERFLOW */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            See Your Savings <span className="text-indigo-600">Instantly</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Enter your monthly processing volume below
          </p>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Input Side */}
              <div className="text-center md:text-left">
                <label className="block text-2xl font-bold text-gray-800 mb-6">
                  Monthly Credit Card Volume
                </label>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-4xl font-black text-indigo-600">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    defaultValue="50,000"
                    id="volume-input"
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-center md:text-left w-full max-w-xs border-b-4 border-indigo-600 focus:outline-none focus:border-purple-600 transition-all bg-transparent"
                    placeholder="50,000"
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      let value = input.value.replace(/[^0-9]/g, "");
                      if (value === "") value = "0";

                      const formatted = Number(value).toLocaleString();
                      input.value = formatted;

                      const volume = Number(value) || 0;
                      const yearlyLoss = Math.round(volume * 12 * 0.029);
                      const resultEl = document.getElementById("savings-result");
                      if (resultEl) resultEl.textContent = yearlyLoss.toLocaleString();
                    }}
                  />
                </div>
                <p className="text-gray-500 mt-4 text-lg">per month</p>
              </div>

              {/* Result Side */}
              <div className="text-center md:text-right">
                <p className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                  You’re losing approximately
                </p>
                <p className="text-5xl md:text-6xl lg:text-7xl font-black text-red-600 break-all leading-tight">
                  $<span id="savings-result">17,400</span>
                </p>
                <p className="text-2xl font-bold text-gray-700 mt-4">per year</p>
                <p className="text-lg text-gray-600 mt-6 font-medium">
                  Upload your statement and keep <span className="text-green-600 font-black">100% of it</span>
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-lg text-gray-600">
            Most merchants save <span className="font-black text-green-600">$8,400 – $47,000/year</span>
          </p>
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
      <dialog id="stmt1" className="p-0 bg-black/90 max-w-5xl rounded-xl"><form method="dialog"><button className="float-right text-white text-6xl pr-6 pt-4">×</button></form><img src="/statements/marcotest.jpeg" className="w-full rounded-xl"/></dialog>
      <dialog id="stmt2" className="p-0 bg-black/90 max-w-5xl rounded-xl"><form method="dialog"><button className="float-right text-white text-6xl pr-6 pt-4">×</button></form><img src="/statements/sarah-before-after.jpg" className="w-full rounded-xl"/></dialog>
      <dialog id="stmt3" className="p-0 bg-black/90 max-w-5xl rounded-xl"><form method="dialog"><button className="float-right text-white text-6xl pr-6 pt-4">×</button></form><img src="/statements/patel-before-after.jpg" className="w-full rounded-xl"/></dialog>

    </main>
  );
}
