import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverview />
    </div>
  );
}