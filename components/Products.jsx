"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const productData = {
satake: [
      {
        src: "/Images/Spareon/Satake/01.png",
        name: "SR Screw Feeder",
        models: "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/2.webp",
        name: "Silky Milling Roll",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
      },
      {
        src: "/Images/Spareon/Satake/04.png",
        name: "SR Upper Cylinder",
        models: "VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/08.png",
        name: "SR Upper Cylinder",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/7.png",
        name: "Silky Screw Roller",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100",
      },
      {
        src: "/Images/Spareon/Satake/11.png",
        name: "SR Inner Base Ring",
        models: "VTA-3 SR, VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/13.png",
        name: "SR Inner Base Ring",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/014.png",
        name: "SR Inner Base Ring",
        models: "VTA-3 SR, VTA-5, VTA-7 SR, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/27.png",
        name: "Husker Retainer",
        models: "Satake Husker",
      },
      {
        src: "/Images/Spareon/Satake/30.png",
        name: "Paddy Table Knife Phase Hinges",
        models: "Satake Paddy Table",
      },
      {
        src: "/Images/Spareon/Satake/32.png",
        name: "Screen",
        models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/40.png",
        name: "Silky Break Holder",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/43.png",
        name: "Silky Front Housing",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/44.png",
        name: "Silky Inlet Sieve",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/46.png",
        name: "Silky Rings Inlet",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/48.png",
        name: "Whitener Star Plate",
        models: "Satake Whitener",
      },
      {
        src: "/Images/Spareon/Satake/49.png",
        name: "Sizer Cylinder",
        models: "Satake Sizer",
      },
    ],

buhler: [
  { src: "/Images/Spareon/Buhler/1.png", name: "Silky Front Mouth", models: "DRPA" },
  { src: "/Images/Spareon/Buhler/4.png", name: "Husker Chute", models: "DRHE" },
  { src: "/Images/Spareon/Buhler/7.png", name: "Husker Retainer", models: "DRHE" },
  { src: "/Images/Spareon/Buhler/10.png", name: "Paddy Table Knife Phase Hinges", models: "Buhler Paddy Table" },
  { src: "/Images/Spareon/Buhler/12.png", name: "Silky DRPA Bush", models: "DRPA" },
  { src: "/Images/Spareon/Buhler/14.png", name: "Silky DRPA Mixing Tube", models: "DRPA" },
  { src: "/Images/Spareon/Buhler/17.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },
  { src: "/Images/Spareon/Buhler/19.png", name: "Sizer Screen Frame", models: "Buhler Sizer" },
  { src: "/Images/Spareon/Buhler/20.png", name: "Sizer Cylinder", models: "Buhler Sizer" },
  { src: "/Images/Spareon/Buhler/21.png", name: "Whitener Base Star Hub", models: "Buhler Whitener" },
  { src: "/Images/Spareon/Buhler/22.png", name: "Whitener Bearing Bush", models: "BSPB" },
  { src: "/Images/Spareon/Buhler/25.png", name: "Whitener Vertical Break", models: "BSPB, DRWA" },
  { src: "/Images/Spareon/Buhler/27.png", name: "Whitener BSPB Base Shout", models: "BSPB" },
  { src: "/Images/Spareon/Buhler/29.png", name: "Whitener BSPB Screw Feeder", models: "BSPB" },
  { src: "/Images/Spareon/Buhler/31.png", name: "Whitener Sieve Frame", models: "BSPB" },
  { src: "/Images/Spareon/Buhler/34.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
  { src: "/Images/Spareon/Buhler/38.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },
]
};

// const productData = {
//   satake: [
//     { src: "/Images/Spareon/Buhler/1.png", name: "Screw Feeder" },
//     { src: "/Images/Spareon/Buhler/2.png", name: "Milling Roll" },
//     { src: "/Images/Spareon/Buhler/3.png", name: "Screens" },
//     { src: "/Images/Spareon/Buhler/4.png", name: "Rollers" },
//   ],
//   buhler: [
//     { src: "/Images/Spareon/Buhler/5.png", name: "Star Plate" },
//     { src: "/Images/Spareon/Buhler/6.png", name: "Sieve Frames" },
//     { src: "/Images/Spareon/Buhler/7.webp", name: "Bearings" },
//     { src: "/Images/Spareon/Buhler/8.webp", name: "Valves" },
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