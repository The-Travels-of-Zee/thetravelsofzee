import { BookOpen, Home, MessageCircleHeartIcon, Rocket, Star } from "lucide-react";
import { FaFacebook, FaLinkedinIn, FaEnvelope, FaBehance } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const topNavbar = {
  cta: "Let's Talk",
  subtitle: "Believe in our mission?",
  disableWidthAnimation: false,
  hideAppStore: true,
  hideGooglePlay: true,
  links: [
    { href: "/", title: "Home", icon: Home },
    { href: "#projects", title: "Projects", icon: Star },
    { href: "#blog", title: "Blogs", icon: BookOpen },
    { href: "/contact-us", title: "Contact", icon: MessageCircleHeartIcon },
  ],
};

export const appsData = [
  {
    id: 1,
    name: "Muslifie",
    description:
      "Your all-in-one travel app for Muslims who have difficulty finding halal food and prayer destinations. Connect with our community of travelers and local guides.",
    visitLink: "https://muslifie.com",
    screenshot: "/screenshots/muslifie-screenshot.webp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.app.muslifie&pcampaignid=web_share",
    appStoreLink: "https://apps.apple.com/pk/app/muslifie/id6749224199",
    color: "#d25f8f",
  },
  {
    id: 2,
    name: "FarahGPT",
    description:
      "AI Islamic Assistant. For Muslims, by Muslims. In a digital world brimming with AI assistants, FarahGPT is an AI Islamic Assistant built for Muslims, ensuring answers that align with your faith and lifestyle.",
    visitLink: "https://farahgpt.com",
    screenshot: "/screenshots/farahgpt-screenshot.webp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.app.farahgpt",
    appStoreLink: "https://apps.apple.com/us/app/farahgpt/id6746275409",
    color: "#2a9d8f",
  },
];

// data/dummyBlogData.js
export const muslifieBlogPost = [
  {
    id: 1,
    link: "https://muslifie.com/blog/top-halal-friendly-accommodations-in-madrid",
    title: "Top Halal Friendly Accommodations in Madrid",
    subtitle: "Explore the vibrant heart of Spain while enjoying Muslim-friendly stays and halal food nearby",
    image: "/images/blog/halal-muslim-friendly-accomodations-in-madrid-130939.webp",
    category: "Hotels",
    featured: true,
    date: "2024-10-06",
    readTime: 9,
    tags: ["Madrid", "Halal Travel", "Muslim-Friendly", "Spain", "Halal Hotels"],
  },
  {
    id: 2,
    link: "https://muslifie.com/blog/discovering-italy-the-halal-way",
    title: "Discovering Italy the Halal Way",
    subtitle: "Explore Muslim-friendly dining, attractions, and cities across Italy",
    image: "/images/blog/discovering-italy-the-halal-way-173471.webp",
    category: "Guides",
    featured: false,
    date: "2024-07-22",
    readTime: 6,
    tags: ["Italy", "Halal Travel", "Muslim-Friendly", "Halal Tourism"],
  },
  {
    id: 3,
    link: "https://muslifie.com/blog/your-ultimate-guide-to-muslim-friendly-holiday-to-kyoto-japan",
    title: "Your Ultimate Guide to Muslim-Friendly Holiday to Kyoto, Japan",
    subtitle: "Discover halal food, mosques, and accommodations for Muslim travelers in Kyoto",
    image: "/images/blog/your-ultimate-guide-to-muslim-friendly-holiday-to-kyoto-japan-285169.webp",
    category: "Travel Tips",
    featured: false,
    date: "2024-12-19",
    readTime: 8,
    tags: ["Kyoto", "Halal Travel", "Muslim-Friendly", "Japan", "Halal Food"],
  },
];

export const footerLinks = [
  // { name: "About Us", href: "/about" },
  // { name: "Portfolio", href: "/portfolio" },
  // { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const socialLinks = [
  { name: "facebook", icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61561092740301" },
  { name: "behance", icon: <FaBehance />, href: "https://www.behance.net/thetravelsofzee/" },
  { name: "linkedIn", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/the-travels-of-zee/" },
  {
    name: "instagram",
    icon: <PiInstagramLogoFill />,
    href: "https://www.instagram.com/thetravelsofzee?igsh=djF0bmtkbzlvcjJ3&utm_source=qr",
  },
  { name: "email", icon: <FaEnvelope />, href: "mailto:info@thetravelsofzee.com" },
];

export const privacyPolicy = `
**Last Updated: May 21, 2025**

At **The Travels of Zee**, your privacy matters to us. We only collect your email address when you voluntarily provide it through our **contact form**.

## What We Collect

- **Email Address** — when you reach out through our contact form.

## How We Use It

- To send you updates, travel stories, and occasional newsletters.  
- To respond to your inquiries or messages.

## What We Don’t Do

- We **do not sell**, share, or rent your email to third parties.  
- We **do not track** or store any personal data beyond your email address.

## Your Choices
  
If you’d like your email removed from our records, just contact us directly.

---

### **Contact Us**

If you have any questions about this policy, please reach out via our _[contact form](/contact-s)_.
`;
