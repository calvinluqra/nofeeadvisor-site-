"use client";

const logos = [
  "/logos/visa.svg",
  "/logos/mastercard-alt.svg",
  "/logos/american-express.svg",
  "/logos/apple-pay.svg",
  "/logos/google-pay.svg",
  "/logos/stripe-logo.png",
  "/logos/square-logo.jpeg",
  "/logos/paypal.svg",
  "/logos/shopify-logo.png",
  "/logos/toast-logo.jpg",
  "/logos/authorizenet-logo.png",
  "/logos/nmi-logo.png",
  "/logos/clover-logo.png",
  "/logos/fiserv-logo.svg.png",
  "/logos/globalpayments-logo.svg",
  "/logos/tsys-logo.svg.png",
  "/logos/firstdata-logo.jpg",
];

export default function LogoBanner() {
  return (
  <section className="py-16 bg-gray-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-gray-900 mb-10 font-medium text-lg">
        Works with all major processors & payment methods
      </p>

      <div className="relative">
        <div className="flex animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
          {/* This line now uses the full current logos array – works for any number */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-14 mx-12 object-contain flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);
}
