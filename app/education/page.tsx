import { Metadata } from "next";
import Header from "@/app/components/Header";
import Education from "@/app/components/Education";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Education - Dr. Ugo Okafor",
  description: "Details about Dr. Ugo Okafor's educational background.",
  alternates: {
    canonical: "https://drugookafor.com/education",
  },
  openGraph: {
    title: "Education - Dr. Ugo Okafor",
    description: "Details about Dr. Ugo Okafor's educational background.",
    url: "https://drugookafor.com/education",
    images: [{ url: "https://drugookafor.com/dr-ugo-okafor-hero.png" }],
  },
};

export default function EducationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drugookafor.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Education",
        "item": "https://drugookafor.com/education"
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <PageHero
          title="Education"
          subtitle="A look into the distinguished academic background of Dr. Ugo Okafor from world-renowned institutions."
        />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
