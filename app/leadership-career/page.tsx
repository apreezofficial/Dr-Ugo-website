import Header from "@/app/components/Header";
import LeadershipCareer from "@/app/components/LeadershipCareer";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";

export default function LeadershipCareerPage() {
  return (
    <div>
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
