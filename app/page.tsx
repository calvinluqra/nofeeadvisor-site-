import UploadForm from "@/components/upload-form";

export default function Home() {
  const logos = [
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/visa.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/mastercard.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/american-express.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/apple-pay.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/google-pay.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/stripe.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/square.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/paypal.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/shopify.svg",
    "https://raw.githubusercontent.com/iconpacks/iconpacks/master/credit-cards/svg/authorize-net.svg",
    "https://raw.githubusercontent.com/iconpacks/iconpacks/master/credit-cards/svg/nmi.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/global-payments.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/clover.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/fiserv.svg",
    "https://raw.githubusercontent.com/datatrans/payment-logos/master/svg/toast.svg",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-700">No Fee Advisor</h1>
        </div>
      </header>

      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">No Fee Advisor</h2>
          <p className="text-xl md:text-2xl opacity-95">
            I help businesses eliminate or drastically reduce credit-card & merchant processing fees
          </p>
        </div>
      </section>

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

      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8 font-medium">
            Works with all major processors & payment methods
          </p>
          <div className="relative">
            <div className="logo-track">
              {logos.concat(logos).map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="h-12 w-36 mx-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
        <style>
          {`
            .logo-track {
              display: flex;
              animation: scroll 45s linear infinite;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logo-track:hover {
              animation-play-state: paused;
            }
          `}
        </style>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Fee Analysis
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Upload your latest statement — I'll show you exactly how much you can save.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
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
