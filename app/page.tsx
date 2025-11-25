import UploadForm from "@/components/upload-form";

export default function Home() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mastercard-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/American_Express_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Apple_Pay_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Pay_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Square_Inc._logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/1.0.0/en/assets/global.svg",
    "https://www.authorize.net/content/dam/authorize/images/authorize-logo-blue.svg",
    "https://www.nmi.com/wp-content/themes/nmi/images/logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Global_Payments_Inc._logo.svg",
    "https://www.clover.com/assets/images/brand/clover-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Fiserv_logo.svg",
    "https://www.toasttab.com/hubfs/toast-logo.svg",
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
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow
