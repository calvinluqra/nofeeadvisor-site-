"use client";

const logos = [
  "/logos/visa.svg",
  "/logos/mastercard.svg",
  "/logos/american-express.svg",
  "/logos/apple-pay.svg",
  "/logos/google-pay.svg",
  "/logos/stripe.svg",
  "/logos/square.svg",
  "/logos/paypal.svg",
  "/logos/shopify.svg",
  "/logos/authorize-net.png",
  "/logos/nmi.png",
  "/logos/clover.png",
  "/logos/fiserv.png",
  "/logos/toast.png",
  "/logos/global-payments.svg",
];

export default function LogoBanner() {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-900 mb-10 font-medium">
          Works with all major processors & payment methods
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <img
              key={logo}
              src={logo}
              alt=""
              className="h-12 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
