"use client";

import { motion, useInView } from "framer-motion";
import { Globe, Heart, Star, Moon, Lightbulb, Shield } from "lucide-react";
import { useRef } from "react";

const OurMission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

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
          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-4xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-accent" />
                Our Mission
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We believe technology should serve faith, not replace it. Our mission is to create innovative,
                accessible digital tools that help Muslims maintain their spiritual connection, discover Islamic
                knowledge, and build stronger communities across the globe.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Cutting-edge technology meets Islamic wisdom to create meaningful digital experiences.",
            },
            {
              icon: Shield,
              title: "Faith-Conscious Design",
              description: "Every feature is crafted with Islamic principles and values at its core.",
            },
            {
              icon: Globe,
              title: "Global Accessibility",
              description: "Breaking barriers to ensure every Muslim, everywhere, can benefit from our tools.",
            },
          ].map((value, index) => (
            <motion.div key={value.title} variants={scaleVariants} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm border border-primary-foreground/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{value.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
