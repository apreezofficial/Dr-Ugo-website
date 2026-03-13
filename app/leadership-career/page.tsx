import { Metadata } from "next";
import Header from "@/app/components/Header";
import LeadershipCareer from "@/app/components/LeadershipCareer";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Leadership & Career - Dr. Ugo Okafor",
  description:
    "An overview of Dr. Ugo Okafor's leadership roles and career milestones.",
  alternates: {
    canonical: "https://drugookafor.com/leadership-career",
  },
  openGraph: {
    title: "Leadership & Career - Dr. Ugo Okafor",
    description: "An overview of Dr. Ugo Okafor's leadership roles and career milestones.",
    url: "https://drugookafor.com/leadership-career",
    images: [{ url: "https://drugookafor.com/dr-ugo-okafor-hero.png" }],
  },
};

export default function LeadershipCareerPage() {
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
        "name": "Leadership & Career",
        "item": "https://drugookafor.com/leadership-career"
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
          title="Leadership & Career"
          subtitle="Explore the extensive leadership experience and career milestones of Dr. Ugo Okafor."
        />
        <LeadershipCareer />
      </main>
      <Footer />
    </div>
  );
}
