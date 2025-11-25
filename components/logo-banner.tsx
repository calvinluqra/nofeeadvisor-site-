"use client";

export default function LogoBanner() {
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
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-600 mb-8 font-medium">
          Works with all major processors & payment methods
        </p>
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap hover:pause">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Payment processor"
                className="h-12 w-36 mx-12 object-contain flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll { animation: scroll 50s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .hover\\:pause:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .animate-scroll { animation: none; } }
      `}</style>
    </section>
  );
}
