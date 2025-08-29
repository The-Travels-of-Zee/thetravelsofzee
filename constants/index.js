import { BookOpen, Home, Rocket, Star } from "lucide-react";
import { FaFacebook, FaLinkedinIn, FaEnvelope, FaBehance } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const topNavbar = {
  cta: "Get in Touch",
  disableWidthAnimation: false,
  hideAppStore: true,
  hideGooglePlay: true,
  links: [
    { href: "/", title: "Home", icon: Home },
    { href: "#projects", title: "Projects", icon: Star },
    { href: "#blog", title: "Blogs", icon: BookOpen },
  ],
};

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
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const socialLinks = [
  { name: "facebook", icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61561092740301" },
  { name: "behance", icon: <FaBehance />, href: "https://www.behance.net/thetravelsofzee/" },
  { name: "linkedIn", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/the-travels-of-zee/" },
  { name: "instagram", icon: <PiInstagramLogoFill />, href: "https://www.instagram.com/thetravelsofzeeuk/" },
  { name: "email", icon: <FaEnvelope />, href: "mailto:info@thetravelsofzee.com" },
];
