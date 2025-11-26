import UploadForm from "@/components/upload-form";

export default function Home() {
  const logos = [
    "/logos/american-express.svg",
    "/logos/apple-pay.svg",
    "/logos/authorize-net.png",
    "/logos/clover.png",
    "/logos/elavon.png",
    "/logos/fiserv.png",
    "/logos/first-data.png",
    "/logos/global-payments.svg",
    "/logos/google-pay.svg",
    "/logos/mastercard.svg",
    "/logos/nmi.png",
    "/logos/paypal.svg",
    "/logos/samsung-pay.png",
    "/logos/shopify.svg",
    "/logos/square.svg",
    "/logos/stripe.svg",
    "/logos/toast.png",
    "/logos/tsys.png",
    "/logos/visa.svg",
    "/logos/worldpay.png",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-700">No Fee Advisor</h1>
        </div>
      </header>

      <section className="bg-gradient-to-br from-indigo-600 to-cyan-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-extrabold mb-6">No Fee Advisor</h2>
          <p className="text-2xl">I help businesses eliminate or drastically reduce credit-card fees</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="p-10 rounded-2xl shadow-lg border text-center">
            <h3 className="text-2xl font-bold mb-4">Slash Fees to 0%</h3>
            <p className="text-gray-600">Legally reduce processing fees to zero or near-zero.</p>
          </div>
          <div className="p-10 rounded-2xl shadow-lg border text-center">
            <h3 className="text-2xl font-bold mb-4">Keep 100% Revenue</h3>
            <p className="text-gray-600">No more losing 2–4% of every sale.</p>
          </div>
          <div className="p-10 rounded-2xl shadow-lg border text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
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
            <div className="flex animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
              {logos.concat(logos).map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt=""
                  className="h-12 w-36 mx-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Get Your Free Fee Analysis</h2>
          <p className="text-xl text-gray-600 mb-12">
            Upload your latest statement — I'll show you exactly how much you can save.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-10 border">
            <UploadForm />
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2025 No Fee Advisor • All rights reserved</p>
      </footer>
    </main>
  );
}
