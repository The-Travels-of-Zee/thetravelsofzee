import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thetravelsofzee.com/"),
  title: "The Travels of Zee",
  description:
    "A Full-Spectrum Software Development Company Delivering Cutting-Edge Solutions Across AI, Web, Mobile, Cloud, and Enterprise Systems",
  openGraph: {
    title: "The Travels of Zee",
    description:
      "A Full-Spectrum Software Development Company Delivering Cutting-Edge Solutions Across AI, Web, Mobile, Cloud, and Enterprise Systems",
    url: "./",
    siteName: "The Travels of Zee",
    images: ["/favicons/web-app-manifest-512x512.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "The Travels of Zee",
    description:
      "A Full-Spectrum Software Development Company Delivering Cutting-Edge Solutions Across AI, Web, Mobile, Cloud, and Enterprise Systems",
    card: "summary_large_image",
    images: ["/favicons/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicons/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicons/web-app-manifest-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicons/web-app-manifest-512x512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
