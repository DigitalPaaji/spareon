"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// Updated to include names for the text below the images
const productData = {
  satake: [
    { src: "/products/1.png", name: "Screw Feeder" },
    { src: "/products/2.png", name: "Milling Roll" },
    { src: "/products/3.png", name: "Screens" },
    { src: "/products/4.png", name: "Rollers" },
  ],
  buhler: [
    { src: "/products/5.png", name: "Star Plate" },
    { src: "/products/6.png", name: "Sieve Frames" },
    { src: "/products/7.webp", name: "Bearings" },
    { src: "/products/8.webp", name: "Valves" },
  ],
};

const Products = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [activeTab, setActiveTab] = useState("satake");

  const currentImages = productData[activeTab];

  // Subtle entrance animation for the header
  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-12 lg:px-24 xl:px-40 py-24 overflow-hidden bg-[#02162b] text-white"
    >
      {/* Spotlight radial gradient matching the image's lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#103a68]/50 via-transparent to-transparent" />

      {/* Header Container - Centered to match the image */}
      <div className="relative z-10 mb-16 flex justify-between items-center gap-8">
        
        {/* Text Section */}
        <div ref={headingRef} className="flex flex-col items-center text-center">
          <h2 className="text-[24px] md:text-[30px] font-bold text-white tracking-[0.15em] uppercase drop-shadow-md">
            Featured Products
          </h2>
        </div>

        {/* Tab System - Centered and styling tweaked for the deep blue background */}
        <div className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 shadow-sm backdrop-blur-sm">
          <button
            onClick={() => setActiveTab("satake")}
            className={`px-8 py-2.5 text-sm font-bold tracking-wide rounded-full transition-all uppercase ${
              activeTab === "satake"
                ? "bg-gradient-to-r from-[#1762A7] to-[#063B73] text-white shadow-[0_5px_15px_rgba(23,98,167,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Satake
          </button>

          <button
            onClick={() => setActiveTab("buhler")}
            className={`px-8 py-2.5 text-sm font-bold tracking-wide rounded-full transition-all uppercase ${
              activeTab === "buhler"
                ? "bg-gradient-to-r from-[#1762A7] to-[#063B73] text-white shadow-[0_5px_15px_rgba(23,98,167,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Buhler
          </button>
        </div>
      </div>

      {/* Main Slider Container */}
      <div key={activeTab} className="relative z-10 group flex w-full overflow-hidden">
        
        {/* Track 1 */}
        <div className="flex shrink-0 animate-marquee gap-0 px-3 group-hover:[animation-play-state:paused]">
          {currentImages.map((item, index) => (
            <div
              key={`track1-${activeTab}-${index}`}
              className="relative w-[260px] md:w-[300px] flex flex-col items-center justify-center px-6 py-4"
            >
              {/* Vertical divider matching the image */}
              <span className="absolute right-0 top-1/2 h-20 w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Image Container */}
              <div className="h-32 md:h-40 w-full mb-6 relative flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_12px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Product Label */}
              <h3 className="text-white/90 text-sm md:text-[15px] font-semibold tracking-wide text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee gap-0 px-3 group-hover:[animation-play-state:paused]"
        >
          {currentImages.map((item, index) => (
            <div
              key={`track2-${activeTab}-${index}`}
              className="relative w-[260px] md:w-[300px] flex flex-col items-center justify-center px-6 py-4"
            >
              <span className="absolute right-0 top-1/2 h-20 w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              <div className="h-32 md:h-40 w-full mb-6 relative flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_12px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <h3 className="text-white/90 text-sm md:text-[15px] font-semibold tracking-wide text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;