"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Download,
  Plus,
} from "lucide-react";
import { socialLinks } from "@/constants";
import Link from "next/link";
import { FaCrown } from "react-icons/fa";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const slideUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple to-primary">
        <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-info/30"></div>
        <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center bg-[url('/images/desert.webp')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-info/60 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-secondary/70 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Image/Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-4xl aspect-square opacity-10"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/30 via-info/20 to-secondary/30 blur-3xl animate-pulse-slow"></div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideUpVariants}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-tight">
              <span className="block">Building The Apps</span>
              <span className="block bg-warning bg-clip-text text-transparent animate-gradient-x">
                of Tomorrow, Today!
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-8"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl text-secondary-foreground max-w-4xl mx-auto leading-relaxed font-light"
            >
              For Muslims, By Muslims
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="#projects">
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-warning text-accent-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] justify-center"
              >
                <span>Follow Us</span>
                <Plus className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            {/* <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 min-w-[200px] justify-center"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Download Our Apps</span>
            </motion.button> */}
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 text-secondary-foreground"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warning fill-current" />
                <span className="text-sm sm:text-base">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCrown className="w-5 h-5 text-warning fill-current" />
                <span className="text-sm sm:text-base">Award Winning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <motion.div variants={fadeInUp} className="flex gap-4 sm:gap-6">
              {socialLinks.map(({ icon, href, name }, index) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex items-center justify-center w-12 h-12 bg-secondary-foreground/10 text-secondary-foreground rounded-full backdrop-blur-sm hover:bg-secondary-foreground/20 hover:scale-110 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-secondary-foreground">
          <span className="text-sm font-light">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-secondary-foreground rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-secondary-foreground rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
