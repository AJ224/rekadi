import { RekadiStreetFoodReimagined } from "@/components/landing/rekadiStreetFoodReimagined";
import { ExploreMenuShowcase } from "@/components/landing/ExploreMenuShowcase";
import { ExcellenceShowcase } from "@/components/landing/ExcellenceShowcase";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HeroPromoBar } from "@/components/landing/HeroPromoBar";
import { Navbar } from "@/components/landing/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--rk-surface)]">
      <Navbar />

      <main>
        <HeroSection />
        <HeroPromoBar />
        <RekadiStreetFoodReimagined />
        <ExploreMenuShowcase />
        <ExcellenceShowcase />
      </main>

      <Footer />
    </div>
  );
}
