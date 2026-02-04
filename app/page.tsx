import { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import LeadershipCareer from "./components/LeadershipCareer";
import Education from "./components/Education";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dr. Ugo Okafor - Official Website",
  description:
    "Welcome to the official website of Dr. Ugo Okafor. Explore his work, biography, and career.",
  alternates: {
    canonical: "https://drugookafor.com",
  },
  openGraph: {
    title: "Dr. Ugo Okafor - Official Website",
    description: "Welcome to the official website of Dr. Ugo Okafor. Explore his work, biography, and career.",
    url: "https://drugookafor.com",
    images: [{ url: "https://drugookafor.com/dr-ugo-okafor-hero.png" }],
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Biography id="biography" />
      <LeadershipCareer id="leadership-career" />
      <Education id="education" />
      <Footer />
    </div>
  );
}
