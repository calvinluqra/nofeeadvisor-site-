"use client";

import Marquee from "react-fast-marquee";

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-700 mb-10 font-medium">
          Works with all major processors & payment methods
        </p>

        <Marquee speed={45} pauseOnHover gradient={false}>
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-12 mx-10 object-contain opacity-70 hover:opacity-100 transition"
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
