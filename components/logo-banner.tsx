"use client";

export default function LogoBanner() {
  const logos = [
    "/logos/american-express.svg",
    "/logos/apple-pay.svg",
    "/logos/authorize-logo.png",
    "/logos/clover-logo.png",
    "/logos/elavon-logo.png",
    "/logos/fiserv-logo.svg.png",
    "/logos/firstdata-logo.jpg",
    "/logos/globalpayments-logo.svg",
    "/logos/google-pay.svg",
    "/logos/mastercard-alt.svg",
    "/logos/nmi-logo.png",
    "/logos/paypal.svg",
    "/logos/samsung-pay.svg",
    "/logos/shopify-logo.png",
    "/logos/square-logo.jpeg",
    "/logos/stripe-logo.png",
    "/logos/toast-logo.png",
    "/logos/tsys-logo.svg.png",
    "/logos/visa.svg",
    "/logos/worldpay-logo.webp",
    // Add more if you have extras, e.g. "/logos/extra-logo.svg",
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
                alt=""
                className="h-12 w-auto mx-10 flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 70s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .animate-scroll { animation: none; } }
      `}</style>
    </section>
  );
}
