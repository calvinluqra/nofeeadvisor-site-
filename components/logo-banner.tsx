"use client";

const logos = [
  "/logos/visa.svg",
  "/logos/mastercard-alt.svg",
  "/logos/american-express.svg",
  "/logos/apple-pay.svg",
  "/logos/google-pay.svg",
  "/logos/paypal.svg",
  "/logos/stripe-logo.png",
  "/logos/square-logo.jpeg",
  "/logos/clover-new.png",
  "/logos/toast-logo.jpg",
  "/logos/nmi-v3.png",
  "/logos/authorizenet-logo.png",
  "/logos/qb-logo.png",
  "/logos/netsuite-logo.png",
  "/logos/tsys-logo.png",
  "/logos/firstdata-logo.png",
  "/logos/elavon-logo.png",
  "/logos/globalpayments-logo.svg",
  "/logos/fiserv-logo.png",
];

export default function LogoBanner() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-700 mb-10 font-medium">
          Works with all major processors & payment methods
        </p>

        <div className="relative overflow-hidden">
  <div className="flex animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
    {[...logos, ...logos].map((logo, i) => (
      <div key={i} className="flex-shrink-0 w-48 h-14 flex items-center justify-center mx-4">
        <img
          src={logo}
          alt=""
          className="h-12 max-w-full object-contain opacity-75 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
