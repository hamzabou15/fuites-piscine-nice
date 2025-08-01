import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import PlumbingIntro from "@/components/home/LeakPoolIntro";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/Testimonials";
import StatsCard from "@/components/StatsCard";
import KeyPointsSection from "@/components/recherche-fuite-piscine-nice/KeyPointSection";
import SchemaLocalBusiness from "@/components/SEO/LocalBusiness";

export const metadata = {
  title: "Recherche fuite piscine à Nice – Expert technicien local sans casse",
  description:
    "Technicien spécialisé en recherche de fuite piscine sur Nice. Intervention rapide, sans destruction. Fuite piscine liner, coque ou canalisation – rapport complet en 48h.",
  keywords:
    "recherche fuite piscine Nice, fuite piscine sur Nice, technicien fuite piscine Nice, détection fuite piscine, fuite liner, fuite coque piscine, fuite canalisation",
  robots: "index, follow",
  canonical: "https://fuitepiscinenice-expert.fr",
  openGraph: {
    title: "Recherche de fuite piscine à Nice – Intervention sans destruction",
    description:
      "Technicien expert en détection de fuite piscine sur Nice : liner, coque, canalisation. Localisation rapide, rapport détaillé avec photos. Sans vidange.",
    url: "https://fuitepiscinenice-expert.fr",
    siteName: "Fuite Piscine Nice Expert",
    images: [
      {
        url: "https://fuitepiscinenice-expert.fr/images/og-fuite-piscine.jpg",
        width: 1200,
        height: 630,
        alt: "Technicien recherche fuite piscine Nice",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuite piscine sur Nice – Recherche sans casse par expert",
    description:
      "Technicien spécialisé en recherche fuite piscine à Nice. Intervention sans vidange, rapport photo sous 48h, détection liner, coque et canalisation.",
    images: ["https://fuitepiscinenice-expert.fr/images/og-fuite-piscine.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SchemaLocalBusiness />
      <main className="font-sans bg-white text-[#1b1e3f]">
        {/* Hero principal avec image et stats */}
        <Hero />
        <section className="bg-white">
          <PlumbingIntro />
        </section>
        <ServiceSection />
        <ProjectSection />
        <InfoSection />
        <ContactSection />
        <StatsCard />
        <Testimonials />
        <KeyPointsSection />
      </main>
    </>
  );
}
