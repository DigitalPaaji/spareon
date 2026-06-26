"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaAward,
  FaBoxOpen,
  FaBullseye,
  FaCogs,
  FaHandshake,
  FaShieldAlt,
  FaTags,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Whychooseus = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: FaAward,
      title: "Authorized Channel Partner",
      description: "Authorized partner of Satake and Bühler.",
    },
    {
      icon: FaCogs,
      title: "Premium Quality Spare Parts",
      description: "Manufactured using advanced technology.",
    },
    {
      icon: FaBoxOpen,
      title: "Specialized Spare Parts",
      description: "Parts for Bühler and Satake machines.",
    },
    {
      icon: FaTruckFast,
      title: "Ready Stock Availability",
      description: "Available in India for faster delivery.",
    },
    {
      icon: FaShieldAlt,
      title: "Reliable Performance",
      description: "For modern high-capacity rice mills.",
    },
    {
      icon: FaHandshake,
      title: "Strong Focus on Quality",
      description: "Quality, durability and precision.",
    },
    {
      icon: FaTags,
      title: "Competitive Pricing",
      description: "Reliable solutions at fair pricing.",
    },
    {
      icon: FaBullseye,
      title: "Trusted Industry Partner",
      description: "Serving rice millers across India.",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true, // Animates only once when scrolled into view
        },
      });

      // Animate the heading
      tl.from(".heading-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Stagger animate the feature items
      tl.from(
        ".feature-item",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4" // Overlap animation with the heading slightly
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#031d31] text-white px-4 md:px-12 lg:px-24 xl:px-40 py-24"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-[100px] w-full sm:h-[150px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 10 1440 400"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            fill="#dceef7"
            d="M2,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,128C1120,107,1280,117,1360,122.7L1440,128L1440,0L0,0Z,"
          />
          {/* White front layer (sits higher, revealing the smooth blue curve underneath) */}
          <path
            fill="#ffffff"
            d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_0%,rgba(23,154,222,0.35),transparent_38%)]" />

      <div className="pointer-events-none absolute left-[35%] top-0 h-full w-[45%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent" />

      <div className="relative">
        <div className="flex flex-col justify-center">
          <h2 className="heading-anim py-16 text-center text-3xl text-white font-sans font-bold">
            Why Choose <span className="text-cyan-300">Spareon India?</span>
          </h2>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="feature-item group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[30px] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:text-cyan-300">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="font-semibold leading-4 text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;