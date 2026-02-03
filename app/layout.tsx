import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Dr. Ugo Okafor",
  description: "Portfolio website of Dr. Ugo Okafor",
  openGraph: {
    title: "Dr. Ugo Okafor",
    description: "Portfolio website of Dr. Ugo Okafor",
    images: [{ url: "https://drugookafor.com/dr-ugo-okafor-hero.png" }],
    url: "https://drugookafor.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
