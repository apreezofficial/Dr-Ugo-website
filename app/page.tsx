import Header from "./components/Header";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import LeadershipCareer from "./components/LeadershipCareer";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Biography />
      <LeadershipCareer />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
