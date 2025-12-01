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
];

export default function LogoBanner() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-900 mb-10 font-medium text-lg">
          Works with all major processors & payment methods
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-14 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
