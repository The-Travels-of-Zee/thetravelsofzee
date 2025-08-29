"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Download } from "lucide-react";
import { useSwipeable } from "react-swipeable";

// Sample data - replace with your actual app data
const appsData = [
  {
    id: 1,
    name: "FarahGPT",
    description:
      "AI Islamic Assistant. For Muslims, by Muslims. In a digital world brimming with AI assistants, FarahGPT is an AI Islamic Assistant built for Muslims, ensuring answers that align with your faith and lifestyle.",
    visitLink: "https://farahgpt.com",
    screenshot: "/screenshots/farahgpt-screenshot.webp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.app.farahgpt",
    appStoreLink: "https://apps.apple.com/us/app/farahgpt/id6746275409",
    color: "#2a9d8f",
  },
  {
    id: 2,
    name: "Muslifie",
    description:
      "Your all-in-one travel app for Muslims who have difficulty finding halal food and prayer destinations. Connect with our community of travelers and local guides.",
    visitLink: "https://muslifie.com",
    screenshot: "/screenshots/muslifie-screenshot.webp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.app.muslifie",
    appStoreLink: "https://apps.apple.com/app/muslifie/id6746275409",
    color: "#d25f8f",
  },
];

const MobileAppShowcase = () => {
  const [currentApp, setCurrentApp] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalApps = appsData.length;

  const nextApp = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentApp((prev) => (prev + 1) % totalApps);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevApp = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentApp((prev) => (prev - 1 + totalApps) % totalApps);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextApp,
    onSwipedRight: prevApp,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentAppData = appsData[currentApp];

  // Animation variants
  const slideFromTop = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  const slideFromBottom = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24"
      role="region"
      aria-label="Mobile App Showcase"
    >
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Mobile Applications</h1>
        <motion.div
          className="mx-auto h-1.5 bg-gradient-to-r from-accent via-(--danger) to-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "220px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <p className="mt-4 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Discover our collection of innovative mobile apps designed to enhance your daily life and productivity
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Column - App Info */}
        <div className="lg:col-span-4 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${currentApp}`}
              variants={fadeInOut}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              <div>
                <h2
                  className="text-4xl sm:text-3xl lg:text-5xl font-black text-secondary mb-4"
                  style={{ color: currentAppData.color }}
                >
                  {currentAppData.name}
                </h2>
                <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">{currentAppData.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={currentAppData.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-secondary-foreground rounded-lg hover:opacity-90 bg-secondary transition-colors duration-200 font-medium"
                  style={{ backgroundColor: currentAppData.color }}
                  aria-label={`Visit ${currentAppData.name} website`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
              </div>

              {/* App Counter */}
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <span>
                  {currentApp + 1} of {totalApps}
                </span>
                <div className="flex gap-1">
                  {appsData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentApp ? "bg-primary" : "bg-border"
                      }`}
                      style={index === currentApp ? { backgroundColor: currentAppData.color } : {}}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Middle Column - Screenshot */}
        <div className="lg:col-span-4 order-1 lg:order-2" {...swipeHandlers}>
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`screenshot-${currentApp}`}
                variants={slideFromBottom}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Animated Glowing Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-[500px] sm:w-72 sm:h-[550px] lg:w-80 lg:h-[600px] rounded-3xl animate-pulse-glow bg-gradient-to-r from-secondary/50 via-accent/60 to-primary/50 blur-xl"></div>
                </div>

                {/* Secondary glow layer */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-70 h-[520px] sm:w-78 sm:h-[570px] lg:w-86 lg:h-[620px] rounded-3xl animate-pulse-glow-delayed bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/45 blur-2xl"></div>
                </div>

                {/* Phone Screenshot Container */}
                {currentAppData.screenshot ? (
                  <img
                    src={currentAppData.screenshot}
                    alt={`${currentAppData.name} app screenshot`}
                    loading="lazy"
                    className="relative w-64 sm:w-72 lg:w-80
               rounded-[48px] shadow-2xl object-cover"
                  />
                ) : (
                  <div
                    className="relative w-64 h-[500px] sm:w-72 sm:h-[550px] lg:w-80 lg:h-[600px]
               rounded-[48px] border-8 border-primary/10 shadow-2xl 
               overflow-hidden backdrop-blur-sm bg-gradient-to-br 
               from-secondary/20 to-accent/20 flex items-center justify-center"
                  >
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{currentAppData.name.charAt(0)}</span>
                      </div>
                      <p className="text-primary/70 font-medium">{currentAppData.name}</p>
                      <p className="text-sm text-foreground/60 mt-2">Screenshot Placeholder</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Touch indicator for mobile */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 lg:hidden">
              <p className="text-xs text-foreground/50 text-center">Swipe left or right to navigate</p>
            </div>
          </div>
        </div>

        {/* Right Column - Download Links and Navigation */}
        <div className="lg:col-span-4 order-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${currentApp}`}
              variants={fadeInOut}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Download className="w-6 h-6" />
                  Download Now
                </h3>

                <div className="space-y-4">
                  {/* App Store Button */}
                  <a
                    href={currentAppData.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-16 flex items-center justify-center rounded-lg bg-black hover:opacity-90 transition"
                  >
                    <img src="/stores/app-store.svg" alt="Download on the App Store" className="h-10" />
                  </a>

                  {/* Google Play Button */}
                  <a
                    href={currentAppData.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-16 flex items-center justify-center rounded-lg bg-black hover:opacity-90 transition"
                  >
                    <img src="/stores/google-play.svg" alt="Get it on Google Play" className="h-10" />
                  </a>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevApp}
                  disabled={isAnimating}
                  className="flex items-center justify-center w-12 h-12 text-primary-foreground rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: currentAppData.color }}
                  aria-label="Previous app"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextApp}
                  disabled={isAnimating}
                  className="flex items-center justify-center w-12 h-12 text-primary-foreground rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: currentAppData.color }}
                  aria-label="Next app"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Keyboard Navigation Hint */}
              <div className="text-center">
                <p className="text-xs text-foreground/50">Use arrow keys or swipe to navigate</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="sr-only">
        <button
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prevApp();
            if (e.key === "ArrowRight") nextApp();
          }}
          tabIndex={0}
        >
          Use left and right arrow keys to navigate between apps
        </button>
      </div>
    </section>
  );
};

export default MobileAppShowcase;
