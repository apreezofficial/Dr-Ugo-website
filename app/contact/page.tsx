import Header from "@/app/components/Header";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          title="Contact"
          subtitle="Get in touch with Dr. Ugo Okafor. Please fill out the form below to send a message."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
