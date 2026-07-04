"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const productData = {
  satake: [
    { src: "/products/satake1.webp", name: "SR Feeder 01" },
    { src: "/products/satake2.webp", name: "SR Feeder 1" },
    { src: "/products/satake3.webp", name: "SR Feeder 02" },
    { src: "/products/satake4.webp", name: "SR Feeder 2" },
    { src: "/products/satake5.webp", name: "Upper Cylinder 03" },
    { src: "/products/satake6.webp", name: "Upper Cylinder 3" },
    { src: "/products/satake7.webp", name: "Upper Cylinder 04" },
    { src: "/products/satake8.webp", name: "Upper Cylinder 4" },
    { src: "/products/satake9.webp", name: "Upper Cylinder 05" },
    { src: "/products/satake10.webp", name: "Upper Cylinder 5" },
    { src: "/products/satake11.webp", name: "Upper Cylinder 06" },
    { src: "/products/satake12.webp", name: "Break Holder 6" },
    { src: "/products/satake13.webp", name: "Upper Cylinder 07" },
    { src: "/products/satake14.webp", name: "Screw Roller 7" },
    { src: "/products/satake15.webp", name: "Upper Cylinder 08" },
    { src: "/products/satake16.webp", name: "Screw Roller 8" },
    { src: "/products/satake17.webp", name: "Upper Cylinder 09" },
    { src: "/products/satake18.webp", name: "Screw Roller 9" },
    { src: "/products/satake19.webp", name: "Screw Roller 010" },
    { src: "/products/satake20.webp", name: "Upper Cylinder 10" },
    { src: "/products/satake21.webp", name: "Screw Roller 011" },
    { src: "/products/satake22.webp", name: "Roller Pulley 11" },
    { src: "/products/satake23.webp", name: "Screw Roller 012" },
    { src: "/products/satake24.webp", name: "Roller Pulley 12" },
    { src: "/products/satake25.webp", name: "Base Ring 13" },
    { src: "/products/satake26.webp", name: "Base Ring 14" },
    { src: "/products/satake27.webp", name: "Husker Retainer 01" },
    { src: "/products/satake28.webp", name: "Husker Retainer 02" },
    { src: "/products/satake29.webp", name: "Husker Retainer 03" },
    { src: "/products/satake30.webp", name: "Knife Hinges 01" },
    { src: "/products/satake31.webp", name: "Knife Hinges 02" },
    { src: "/products/satake32.webp", name: "Screen 01" },
    { src: "/products/satake33.webp", name: "Screen 02" },
    { src: "/products/satake34.webp", name: "Screen 03" },
    { src: "/products/satake35.webp", name: "Screen 04" },
    { src: "/products/satake36.webp", name: "Screen 05" },
    { src: "/products/satake37.webp", name: "Screen 06" },
    { src: "/products/satake38.webp", name: "Screen 07" },
    { src: "/products/satake39.webp", name: "Screen 08" },
    { src: "/products/satake40.webp", name: "Break Holder 01" },
    { src: "/products/satake41.webp", name: "Break Holder 02" },
    { src: "/products/satake42.webp", name: "Break Holder 03" },
    { src: "/products/satake43.webp", name: "Front Housing" },
    { src: "/products/satake44.webp", name: "Inlet Sieve 01" },
    { src: "/products/satake45.webp", name: "Inlet Sieve 02" },
    { src: "/products/satake46.webp", name: "Rings Inlet 02" },
    { src: "/products/satake47.webp", name: "Rings Inlet" },
    { src: "/products/satake48.webp", name: "Star Plate" },
    { src: "/products/satake49.webp", name: "Sizer Cylinder" },
  ],

  buhler: [
    { src: "/products/1.png", name: "Front Mouth DRPA 01" },
    { src: "/products/2.png", name: "Front Mouth DRPA 02" },
    { src: "/products/3.png", name: "Front Mouth DRPA 03" },
    { src: "/products/4.png", name: "Husker Chute DRHE 01" },
    { src: "/products/5.png", name: "Husker Chute DRHE 02" },
    { src: "/products/6.png", name: "Husker Chute DRHE 03" },
    { src: "/products/7.png", name: "Husker Retainer 01" },
    { src: "/products/8.png", name: "Husker Retainer 02" },
    { src: "/products/9.png", name: "Husker Retainer 03" },
    { src: "/products/10.png", name: "Knife Hinges 01" },
    { src: "/products/11.png", name: "Knife Hinges 02" },
    { src: "/products/12.png", name: "DRPA Bush" },
    { src: "/products/13.png", name: "DRPA Front Mouth" },
    { src: "/products/14.png", name: "DRPA Mixing Tube 01" },
    { src: "/products/15.png", name: "DRPA Mixing Tube" },
    { src: "/products/16.png", name: "Milling Roll 01" },
    { src: "/products/17.png", name: "Milling Roll 02" },
    { src: "/products/18.png", name: "Milling Roll 03" },
    { src: "/products/19.png", name: "Sizer Frame 01" },
    { src: "/products/20.png", name: "Sizer Frame" },
    { src: "/products/21.png", name: "Base Star Hub" },
    { src: "/products/22.png", name: "Bearing Bush 01" },
    { src: "/products/23.png", name: "Bearing Bush 02" },
    { src: "/products/24.png", name: "Bearing Bush 03" },
    { src: "/products/25.png", name: "Vertical Break 01" },
    { src: "/products/26.png", name: "Vertical Break 02" },
    { src: "/products/27.png", name: "Base Shout 01" },
    { src: "/products/28.png", name: "Base Shout 02" },
    { src: "/products/29.png", name: "Screw Feeder 01" },
    { src: "/products/30.png", name: "Screw Feeder 02" },
    { src: "/products/31.png", name: "Sieve Frame 01" },
    { src: "/products/32.png", name: "Sieve Frame 02" },
    { src: "/products/33.png", name: "Sieve Frame 03" },
    { src: "/products/34.png", name: "Silky Screen 01" },
    { src: "/products/35.png", name: "Silky Screen 02" },
    { src: "/products/36.png", name: "Silky Screen 03" },
    { src: "/products/37.png", name: "Silky Screen 04" },
    { src: "/products/38.png", name: "SPPB Upper 01" },
    { src: "/products/39.png", name: "SPPB Upper 02" },
    { src: "/products/40.png", name: "SPPB Upper" },
  ],
};

// const productData = {
//   satake: [
//     { src: "/products/1.png", name: "Screw Feeder" },
//     { src: "/products/2.png", name: "Milling Roll" },
//     { src: "/products/3.png", name: "Screens" },
//     { src: "/products/4.png", name: "Rollers" },
//   ],
//   buhler: [
//     { src: "/products/5.png", name: "Star Plate" },
//     { src: "/products/6.png", name: "Sieve Frames" },
//     { src: "/products/7.webp", name: "Bearings" },
//     { src: "/products/8.webp", name: "Valves" },
//   ],
// };

const Products = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [activeTab, setActiveTab] = useState("satake");

  const currentImages = productData[activeTab];

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

  const ProductCard = ({ item }) => (
    <div className="relative flex w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0 flex-col items-center justify-center px-4 sm:px-6 py-4">
      <span className="absolute right-0 top-1/2 h-16 sm:h-20 w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="relative mb-4 sm:mb-6 flex h-24 sm:h-32 md:h-40 w-full items-center justify-center">
        <img
          src={item.src}
          alt={item.name}
          className="max-h-full max-w-full object-contain drop-shadow-[0_12px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      <h3 className="text-center text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide text-white/90">
        {item.name}
      </h3>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#02162b] px-4 py-16 text-white sm:py-20 md:px-12 md:py-24 lg:px-24 xl:px-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#103a68]/50 via-transparent to-transparent" />

      <div className="relative z-10 mb-10 flex flex-col items-center justify-center gap-6 text-center sm:mb-14 lg:mb-16 lg:flex-row lg:justify-between">
        <div ref={headingRef}>
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white drop-shadow-md sm:text-2xl md:text-[30px]">
            Featured Products
          </h2>
        </div>

        <div className="flex w-full max-w-[360px] items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 shadow-sm backdrop-blur-sm sm:w-fit">
          <button
            onClick={() => setActiveTab("satake")}
            className={`w-1/2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all sm:w-auto sm:px-8 sm:text-sm ${
              activeTab === "satake"
                ? "bg-gradient-to-r from-[#1762A7] to-[#063B73] text-white shadow-[0_5px_15px_rgba(23,98,167,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Satake
          </button>

          <button
            onClick={() => setActiveTab("buhler")}
            className={`w-1/2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all sm:w-auto sm:px-8 sm:text-sm ${
              activeTab === "buhler"
                ? "bg-gradient-to-r from-[#1762A7] to-[#063B73] text-white shadow-[0_5px_15px_rgba(23,98,167,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Buhler
          </button>
        </div>
      </div>

      <div
        key={activeTab}
        className="relative z-10 flex w-full overflow-hidden group"
      >
        <div className="flex shrink-0 animate-marquee px-2 group-hover:[animation-play-state:paused]">
          {currentImages.map((item, index) => (
            <ProductCard key={`track1-${activeTab}-${index}`} item={item} />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee px-2 group-hover:[animation-play-state:paused]"
        >
          {currentImages.map((item, index) => (
            <ProductCard key={`track2-${activeTab}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;