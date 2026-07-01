"use client";
import React, { useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';

const BuhlerProductGrid = () => {
const productData = {
  buhler: [
    {
      src: "/products/1.png",
      name: "Silky DRPA Bush",
      models: "DRPA Silky Series",
      desc: "Precision-engineered bush manufactured from premium-grade material to ensure smooth shaft rotation, reduced friction, and long-lasting performance in Bühler silky machines."
    },
    {
      src: "/products/2.png",
      name: "Whitener BSPB Upper Ring Pipe",
      models: "BSPB Whitener Series",
      desc: "High-quality upper ring pipe designed for efficient grain flow and consistent whitening performance while providing excellent wear resistance and durability."
    },
    {
      src: "/products/3.png",
      name: "Silky Spare Parts",
      models: "Bühler Silky Series",
      desc: "Complete range of precision-manufactured spare parts for Bühler silky machines, ensuring reliable operation, easy installation, and extended machine life."
    },
    {
      src: "/products/4.png",
      name: "Sizer Spare Parts",
      models: "Bühler Sizer Machines",
      desc: "Premium-quality sizing machine components engineered for accurate grain grading, smooth operation, and consistent milling performance."
    },
    {
      src: "/products/5.png",
      name: "Paddy Table Knife Phase Hinges",
      models: "Bühler Paddy Table",
      desc: "Heavy-duty knife phase hinges manufactured for precise adjustment, stable movement, and long service life in Bühler paddy table machines."
    },
    {
      src: "/products/6.png",
      name: "DRPA Front Mouth",
      models: "DRPA Silky Series",
      desc: "Precision-engineered front mouth assembly designed to provide smooth grain entry into silky polishing machines while ensuring efficient processing."
    },
    {
      src: "/products/satake2.webp",
      name: "Whitener DRPA Mixing Tube",
      models: "DRPA Whitener Series",
      desc: "Durable mixing tube designed for uniform grain distribution inside the whitening chamber, improving milling consistency and product quality."
    },
    {
      src: "/products/satake3.webp",
      name: "Base Star Hub Cylinder & Screen Frame",
      models: "Bühler Whitener Series",
      desc: "Complete hub cylinder and screen frame assembly providing structural stability, secure screen mounting, and efficient milling performance."
    },
    {
      src: "/products/satake1.webp",
      name: "Silky DRPA/DRPN Milling Roll (Screw Feeder)",
      models: "DRPA, DRPN",
      desc: "Heavy-duty stainless steel milling roll and screw feeder designed for smooth grain feeding, precise polishing, corrosion resistance, and long operational life."
    },
    {
      src: "/products/satake10.webp",
      name: "Whitener BSPB Screw Feeder",
      models: "BSPB Whitener",
      desc: "High-precision screw feeder manufactured for uniform grain feeding, reliable machine performance, and consistent rice whitening results."
    },
    {
      src: "/products/satake11.webp",
      name: "Whitener BSPB Base Chute",
      models: "BSPB Whitener",
      desc: "Robust base chute designed for smooth grain discharge and uninterrupted material flow during continuous milling operations."
    },
    {
      src: "/products/satake13.webp",
      name: "Whitener & Silky Screens",
      models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA",
      desc: "Premium stainless steel screens manufactured with precision perforations for efficient grain separation, polishing, and extended service life."
    },
    {
      src: "/products/satake3.webp",
      name: "Whitener BSPB/DRWA Vertical Break",
      models: "BSPB, DRWA",
      desc: "Heavy-duty vertical break component designed to ensure smooth material flow and enhance milling efficiency inside Bühler whitener machines."
    },
    {
      src: "/products/satake6.webp",
      name: "Whitener Sieve Frame",
      models: "BSPB Whitener",
      desc: "Precision-machined sieve frame engineered to securely hold screens in place while maintaining accurate alignment and consistent milling performance."
    },
    {
      src: "/products/satake7.webp",
      name: "Husker Retainer",
      models: "DRHE",
      desc: "Durable retainer component designed to securely position internal husker assemblies for stable machine operation and reduced maintenance."
    },
    {
      src: "/products/satake9.webp",
      name: "Husker Chute",
      models: "DRHE",
      desc: "Heavy-duty discharge chute designed to provide smooth grain flow through Bühler husker machines while minimizing grain loss."
    },
    {
      src: "/products/satake8.webp",
      name: "Whitener Bearing Bush",
      models: "BSPB Whitener",
      desc: "High-precision bearing bush manufactured to reduce friction, support rotating shafts, and deliver long-lasting, reliable performance in Bühler whitening machines."
    },
  ],
};

  const cardThemes = [
    "from-blue-50 to-white border-blue-100",
    "from-slate-50 to-white border-slate-200",
    "from-cyan-50 to-white border-cyan-100",
    "from-indigo-50 to-white border-indigo-100",
    "from-sky-50 to-white border-sky-100",
  ];

  const randomizedThemes = useMemo(() => {
    const result = [];
    let lastTheme = null;
    productData.buhler.forEach(() => {
      let theme;
      do {
        theme = cardThemes[Math.floor(Math.random() * cardThemes.length)];
      } while (theme === lastTheme && cardThemes.length > 1);
      result.push(theme);
      lastTheme = theme;
    });
    return result;
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
        <div className="absolute inset-0 z-0">
          <Image width={1920} height={1080} src="/banner.webp" alt="Buhler Spare Parts" className="w-full h-full object-cover opacity-40" priority />
        </div>
        <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
          <div>
            <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
              BUHLER
            </h1>
            <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
            <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#56b1cf]">BUHLER</span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productData.buhler.map((product, index) => (
            <div 
              key={index} 
              className={`bg-linear-to-b ${randomizedThemes[index]} p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border relative overflow-hidden rounded-3xl`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <div className="mb-8 z-10 w-full">
                <span className="text-xs font-bold tracking-[0.2em] text-[#0A162B]/40 uppercase mb-2 block">
                  Buhler Spare Part
                </span>
                <h3 className="text-2xl font-bold text-[#0A162B] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-4 px-4 italic">"{product.desc}"</p>
              </div>

              <div className="relative z-10 mb-10 aspect-square flex items-center justify-center">
                <img 
                  src={product.src} 
                  alt={product.name} 
                  className="w-auto h-52 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 object-contain"
                />
              </div>
              
              <div className="w-full">
                <p className="text-sm font-bold text-[#0A162B]/60 uppercase tracking-widest">Compatible Models</p>
                <p className="text-sm font-medium text-[#0A162B]/80">{product.models}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuhlerProductGrid;