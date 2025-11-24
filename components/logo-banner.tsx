"use client";

export default function LogoBanner() {
  const logos = [
    { name: "First Data", url: "https://www.svgrepo.com/show/534596/first-data.svg" },
    { name: "Fiserv", url: "https://www.svgrepo.com/show/534595/fiserv.svg" },
    { name: "TSYS", url: "https://logos-world.net/wp-content/uploads/2021/02/TSYS-Logo.png" },
    { name: "Authorize.net", url: "https://www.svgrepo.com/show/534594/authorize-net.svg" },
    { name: "NMI Gateway", url: "https://www.svgrepo.com/show/534593/nmi-gateway.svg" },
    { name: "Worldpay", url: "https://www.svgrepo.com/show/534592/worldpay.svg" },
    { name: "Global Payments", url: "https://www.svgrepo.com/show/534591/global-payments.svg" },
    { name: "Elavon", url: "https://logos-world.net/wp-content/uploads/2021/02/Elavon-Logo.png" },
    { name: "American Express", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/American_Express_logo.svg" },
    { name: "Visa", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
    { name: "Mastercard", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mastercard-logo.svg" },
    { name: "Apple Pay", url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Apple_Pay_logo.svg" },
    { name: "Samsung Pay", url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Samsung_Pay_Logo.svg" },
    { name: "Google Pay", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Pay_logo.svg" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "Square", url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Square_Inc._logo.svg" },
    { name: "PayPal", url: "https://www.svgrepo.com/show/303956/paypal.svg" },
    { name: "Shopify", url: "https://www.svgrepo.com/show/354019/shopify.svg" },
    { name: "Clover", url: "https://www.svgrepo.com/show/534590/clover.svg" },
    { name: "Toast", url: "https://www.svgrepo.com/show/534589/toast.svg" },
  ];

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-600 mb-8 font-medium">
          Works with all major processors & payment methods
        </p>
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                alt={logo.name}
                className="h-10 mx-8 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll { animation: none; }
        }
      `}</style>
    </section>
  );
}
