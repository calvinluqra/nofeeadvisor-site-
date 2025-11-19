import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Fee Advisor",
  description: "Eliminate credit card processing fees",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
