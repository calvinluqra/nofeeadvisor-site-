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
  "/logos/nmi-v3.png",
  "/logos/clover-logo.png",
  "/logos/fiserv-logo.png",
  "/logos/globalpayments-logo.svg",
  "/logos/tsys-logo.png",
  "/logos/firstdata-logo.png",
];

export default function LogoBanner() {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-900 mb-10 font-medium text-lg">
          Works with all major processors & payment methods
        </p>

        <div className="relative overflow-hidden">
          <div className="logo-marquee">
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
        .logo-marquee {
          display: flex;
          animation: scroll 80s linear infinite;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );   // ← THIS WAS MISSING BEFORE
}
