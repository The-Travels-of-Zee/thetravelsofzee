import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-br from-info/30 via-accent/20 to-danger/30 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <img className="w-48 md:w-56 lg:w-64 invert-[20%]" src="/favicons/full-logo-black.png" alt="logo" />
            <p className="font-normal text-lg md:text-xl text-primary max-w-[320px] mt-5">
              Our team has experience delivering solutions for people/industries.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary text-background hover:bg-primary/60 transition-all flex items-center justify-center"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-poppins font-semibold text-xl text-secondary">Quick Links</p>
            <div className="mt-4 flex flex-col gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-normal text-lg text-primary hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="font-poppins font-semibold text-xl text-secondary">Address</p>
            <p className="font-normal text-lg md:text-xl text-primary mt-6 max-w-[250px]">
              28 Wenlock Road, London, England N17GU, GB
            </p>
            <p className="font-normal text-lg md:text-xl text-primary mt-6 max-w-[250px]">info@thetravelsofzee.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-danger/40 pt-6 text-center md:text-left">
          <p className="font-normal text-sm md:text-base text-primary/70">
            © {new Date().getFullYear()} The Travels of Zee. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
