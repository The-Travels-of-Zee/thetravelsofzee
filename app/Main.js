// Example usage in a Next.js page
import HeroSection from "@/components/HeroSection";
import MobileAppShowcase from "../components/MobileAppShowcase";
import ContactForm from "@/components/ContactForm";
import BlogSection from "@/components/BlogsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <MobileAppShowcase />
      <BlogSection />
      <ContactForm />
    </main>
  );
}

// If you want to customize the app data, you can create a separate data file
// components/data/appsData.js
export const customAppsData = [
  {
    id: 1,
    name: "Your App Name",
    description: "Your app description here...",
    visitLink: "https://yourapp.com",
    screenshot: "/images/app-screenshots/app1.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.yourapp",
    appStoreLink: "https://apps.apple.com/app/your-app/id123456789",
  },
  // Add more apps...
];

// Then modify the MobileAppShowcase component to accept props:
// const MobileAppShowcase = ({ appsData = defaultAppsData }) => {
//   // rest of the component logic
// };
