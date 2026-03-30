import { RekadiStreetFoodReimagined } from "@/components/landing/rekadiStreetFoodReimagined";
import { ExploreMenuShowcase } from "@/components/landing/ExploreMenuShowcase";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HeroPromoBar } from "@/components/landing/HeroPromoBar";
import { Navbar } from "@/components/landing/Navbar";
export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-none flex-col bg-[var(--rk-surface)]">
      <Navbar />

      <main className="w-full min-w-0 flex-1">
        <HeroSection />
        <HeroPromoBar />
        <RekadiStreetFoodReimagined />
        <ExploreMenuShowcase />
      </main>

      <Footer />
    </div>
  );
}
