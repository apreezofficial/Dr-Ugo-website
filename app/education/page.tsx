import Header from "@/app/components/Header";
import Education from "@/app/components/Education";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export default function EducationPage() {
  return (
    <div>
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
