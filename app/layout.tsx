import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AMGP PLANES | Vehículos de Lujo Premium",
  description: "Importamos y vendemos los mejores vehículos premium de Europa a España y el mundo. Sin intermediarios. Sin límites.",
  openGraph: {
    title: "AMGP PLANES | Vehículos de Lujo Premium",
    description: "Vehículos de lujo. Sin intermediarios. Sin límites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-brand-black text-brand-silver font-inter antialiased">{children}</body>
    </html>
  );
}
