"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { topNavbar } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
            : "bg-white/10 backdrop-blur-md border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-1">
              <img
                src="/favicons/full-logo-black.png"
                className={`w-52 h-full ${scrolled ? "" : "invert"}`}
                alt="Website-Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center space-x-8">
              {topNavbar.links.map(({ title, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                    scrolled ? "text-gray-700 hover:text-emerald-600" : "text-secondary-foreground hover:text-white"
                  }`}
                >
                  {title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* <button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"
                }`}
              >
                Login
              </button> */}
              <span className="text-secondary-foreground font-medium">{topNavbar.subtitle}</span>
              <Link href="/contact-us">
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/80 text-white rounded-lg font-medium transition-all duration-300 transform cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl">
                  {topNavbar?.cta || "Talk to Us"}
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pl-6 pr-3 py-4 border-b border-gray-200">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <img src="/favicons/full-logo-black.png" className="w-40 h-full" alt="Website-Logo" />
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 space-y-4">
            {topNavbar.links.map(({ title, href, icon }, index) => {
              const Icon = icon;
              return (
                <Link
                  key={index}
                  href={href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-4 p-4 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 ${
                    isOpen ? "animate-slideIn" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{title}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu CTA */}
          <div className="p-6 space-y-4 border-t border-gray-200 mt-auto">
            {/* <button className="w-full p-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors duration-300 font-medium">
              <User size={20} className="inline mr-3" />
              Login
            </button> */}
            <Link href="/contact-us" onClick={closeMenu}>
              <button className="w-full p-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-medium hover:from/90 hover:to-primary/80 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg">
                {topNavbar?.cta || "Talk to Us"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
