// Example usage in a Next.js page
import HeroSection from "@/components/HeroSection";
import MobileAppShowcase from "../components/MobileAppShowcase";
import ContactForm from "@/components/ContactForm";
import BlogSection from "@/components/BlogsSection";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <OurMission />
      <MobileAppShowcase />
      <OurVision />
      <BlogSection />
      {/* <ContactForm /> */}
    </main>
  );
}
