import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Hidden from "./components/Hidden"; // Import the Hidden component

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
  verification: {
    google: "O4BN-dvYdydx5dzfEGsMbD-YYR7j7KflrkHaQBjRFFg",
  },
  openGraph: {
    images: [{ url: "https://drugookafor.com/dr-ugo-okafor-hero.png" }],
    url: "https://drugookafor.com",
    siteName: "Dr. Ugo Okafor - Official Website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Ugo Okafor",
  "url": "https://drugookafor.com",
  "image": "https://drugookafor.com/dr-ugo-okafor-hero.png",
  "sameAs": [
    "https://www.linkedin.com/in/dr-ugo-okafor-952467b/", // Example LinkedIn
    "https://twitter.com/DrUgoOkafor", // Example Twitter
    // Add other social media links as applicable
  ],
  "jobTitle": "Financial Expert, Leader",
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "University of Nigeria, Nsukka"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Harvard Business School"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Massachusetts Institute of Technology (MIT)"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Nigerian Law School"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Vanderbilt University"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${roboto.variable}`}>
        <Hidden /> {/* Render the Hidden component */}
        {children}
      </body>
    </html>
  );
}

