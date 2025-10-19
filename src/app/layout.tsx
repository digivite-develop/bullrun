import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bullrun SiZi 2025",
  description: "Pioneering the Next Era of Memeic Finance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
