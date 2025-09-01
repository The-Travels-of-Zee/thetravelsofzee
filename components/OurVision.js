"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Heart,
  Users,
  Download,
  MapPin,
  Star,
  Compass,
  Moon,
  Lightbulb,
  Shield,
  Sparkles,
  Rocket,
} from "lucide-react";

const OurVision = () => {
  const [counters, setCounters] = useState({
    users: 0,
    countries: 0,
    downloads: 0,
    apps: 0,
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  // Counter animation
  useEffect(() => {
    if (isInView) {
      const targets = {
        users: 50000,
        countries: 160,
        downloads: 100000,
        apps: 2,
      };

      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounters((prev) => {
          const newCounters = {};
          let allComplete = true;

          Object.keys(targets).forEach((key) => {
            const target = targets[key];
            const current = prev[key];
            const increment = target / steps;

            if (current < target) {
              newCounters[key] = Math.min(current + increment, target);
              allComplete = false;
            } else {
              newCounters[key] = target;
            }
          });

          if (allComplete) {
            clearInterval(timer);
          }

          return { ...prev, ...newCounters };
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return Math.round(num).toLocaleString();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-14 lg:py-18 overflow-hidden bg-gradient-to-br from-primary via-secondary to-purple"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-info/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        {/* Floating Islamic patterns */}
        <div className="absolute top-20 left-20 opacity-10">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Star className="w-8 h-8 text-primary-foreground" />
          </motion.div>
        </div>
        <div className="absolute bottom-32 right-32 opacity-10">
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <Moon className="w-6 h-6 text-primary-foreground" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Vision Statement */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-4xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-accent" />
                Our Commitment in Action
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We are dedicated to turning faith-driven values into practical solutions. Through innovative digital
                tools, accessible resources, and global connections, we help Muslims strengthen their spiritual
                practice, nurture community bonds, and live their deen with confidence in a modern world.
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* Global Impact Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: Users,
              label: "Our Users",
              value: formatNumber(counters.users),
              color: "text-accent",
            },
            {
              icon: MapPin,
              label: "Countries Planned to Launch",
              value: Math.round(counters.countries),
              color: "text-info",
            },
            {
              icon: Download,
              label: "Total Downloads",
              value: formatNumber(counters.downloads),
              color: "text-background",
            },
            {
              icon: Star,
              label: "Apps Created",
              value: Math.round(counters.apps),
              color: "text-accent",
            },
          ].map((stat, index) => (
            <motion.div key={stat.label} variants={scaleVariants} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-xl backdrop-blur-sm border border-primary-foreground/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
