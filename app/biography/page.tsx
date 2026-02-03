import { Metadata } from "next";
import Header from "@/app/components/Header";
import Biography from "@/app/components/Biography";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Biography - Dr. Ugo Okafor",
  description: "Learn about the life and journey of Dr. Ugo Okafor.",
  alternates: {
    canonical: "https://drugookafor.com/biography",
  },
  openGraph: {
    title: "Biography - Dr. Ugo Okafor",
    description: "Learn about the life and journey of Dr. Ugo Okafor.",
    url: "https://drugookafor.com/biography",
  },
};

export default function BiographyPage() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          title="Biography"
          subtitle="Delve into the life and professional journey of Dr. Ugo Okafor, a leader in finance and investment."
        />
        <Biography />
      </main>
      <Footer />
    </div>
  );
}
