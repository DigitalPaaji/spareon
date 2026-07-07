"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductImageSlider = ({ images, name }) => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!hovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 900);

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || images.length <= 1) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActive((prev) => (prev + 1) % images.length);
      } else {
        setActive((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="relative z-10 mb-10 aspect-square flex flex-col items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[active]}
        alt={name}
        className="w-auto h-52 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 object-contain"
      />

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[#0A162B]"
                  : "w-2 bg-[#0A162B]/25"
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const BuhlerProductGrid = () => {
  const productData = {
    buhler: [
      { src: "/Images/Spareon/Buhler/1.png", name: "Silky Front Mouth", models: "DRPA" },
      { src: "/Images/Spareon/Buhler/2.png", name: "Silky Front Mouth", models: "DRPA" },
      { src: "/Images/Spareon/Buhler/3.png", name: "Silky Front Mouth", models: "DRPA" },
      { src: "/Images/Spareon/Buhler/4.png", name: "Husker Chute", models: "DRHE" },
      { src: "/Images/Spareon/Buhler/5.png", name: "Husker Chute", models: "DRHE" },
      { src: "/Images/Spareon/Buhler/6.png", name: "Husker Chute", models: "DRHE" },
      { src: "/Images/Spareon/Buhler/7.png", name: "Husker Retainer", models: "DRHE" },
      { src: "/Images/Spareon/Buhler/8.png", name: "Husker Retainer", models: "DRHE" },
      { src: "/Images/Spareon/Buhler/9.png", name: "Husker Retainer", models: "DRHE" },
      { src: "/Images/Spareon/Buhler/10.png", name: "Paddy Table Knife Phase Hinges", models: "Buhler Paddy Table" },
      { src: "/Images/Spareon/Buhler/11.png", name: "Paddy Table Knife Phase Hinges", models: "Buhler Paddy Table" },
      { src: "/Images/Spareon/Buhler/12.png", name: "Silky DRPA Bush", models: "DRPA" },
      { src: "/Images/Spareon/Buhler/13.png", name: "Silky Front Mouth", models: "DRPA" },
      { src: "/Images/Spareon/Buhler/14.png", name: "Silky DRPA Mixing Tube", models: "DRPA" },
      { src: "/Images/Spareon/Buhler/15.png", name: "Silky DRPA Mixing Tube", models: "DRPA" },
      // { src: "/Images/Spareon/Buhler/16.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },
      { src: "/Images/Spareon/Buhler/17.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },
      { src: "/Images/Spareon/Buhler/18.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },
      { src: "/Images/Spareon/Buhler/19.png", name: "Sizer Screen Frame", models: "Buhler Sizer" },
      { src: "/Images/Spareon/Buhler/20.png", name: "Sizer Cylinder", models: "Buhler Sizer" },
      { src: "/Images/Spareon/Buhler/21.png", name: "Whitener Base Star Hub", models: "Buhler Whitener" },
      { src: "/Images/Spareon/Buhler/22.png", name: "Whitener Bearing Bush", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/23.png", name: "Whitener Bearing Bush", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/24.png", name: "Whitener Bearing Bush", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/25.png", name: "Whitener Vertical Break", models: "BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/26.png", name: "Whitener Vertical Break", models: "BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/27.png", name: "Whitener BSPB Base Shout", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/28.png", name: "Whitener BSPB Base Shout", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/29.png", name: "Whitener BSPB Screw Feeder", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/30.png", name: "Whitener BSPB Screw Feeder", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/31.png", name: "Whitener Sieve Frame", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/32.png", name: "Whitener Sieve Frame", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/33.png", name: "Whitener Sieve Frame", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/34.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/35.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/36.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/37.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/38.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/39.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/40.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },
      { src: "/Images/Spareon/Buhler/41.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
      { src: "/Images/Spareon/Buhler/42.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
    ],
  };

  const groupedProducts = useMemo(() => {
    const grouped = {};

    productData.buhler.forEach((product) => {
      const key = `${product.name}-${product.models}`;

      if (!grouped[key]) {
        grouped[key] = {
          name: product.name,
          models: product.models,
          images: [],
        };
      }

      grouped[key].images.push(product.src);
    });

    return Object.values(grouped);
  }, []);

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

    groupedProducts.forEach(() => {
      let theme;
      do {
        theme = cardThemes[Math.floor(Math.random() * cardThemes.length)];
      } while (theme === lastTheme && cardThemes.length > 1);

      result.push(theme);
      lastTheme = theme;
    });

    return result;
  }, [groupedProducts]);

  return (
    <>
      <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={1080}
            src="/banner.webp"
            alt="Buhler Spare Parts"
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>

        <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
          <div>
            <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
              BUHLER
            </h1>

            <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>

            <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#56b1cf]">BUHLER</span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedProducts.map((product, index) => (
            <div
              key={`${product.name}-${product.models}`}
              className={`bg-linear-to-b ${randomizedThemes[index]} p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border relative overflow-hidden rounded-3xl`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16 blur-2xl" />

              <div className="mb-8 z-10 w-full">
                <span className="text-xs font-bold tracking-[0.2em] text-[#0A162B]/40 uppercase mb-2 block">
                  Buhler Spare Part
                </span>

                <h3 className="text-2xl font-bold text-[#0A162B] mb-2">
                  {product.name}
                </h3>

                {/* <p className="text-sm text-gray-700 mb-4 px-4 italic">
                  "{product.desc}"
                </p> */}
              </div>

              <ProductImageSlider images={product.images} name={product.name} />

              <div className="w-full">
                <p className="text-sm font-bold text-[#0A162B]/60 uppercase tracking-widest">
                  Compatible Models
                </p>
                <p className="text-sm font-medium text-[#0A162B]/80">
                  {product.models}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuhlerProductGrid;



// "use client";
// import React, { useMemo } from "react";
// import Image from 'next/image';
// import Link from 'next/link';

// const BuhlerProductGrid = () => {

// const productData = {
// buhler: [
//   { src: "/Images/Spareon/Buhler/1.png", name: "Silky Front Mouth", models: "DRPA" },
//   { src: "/Images/Spareon/Buhler/2.png", name: "Silky Front Mouth", models: "DRPA" },
//   { src: "/Images/Spareon/Buhler/3.png", name: "Silky Front Mouth", models: "DRPA" },

//   { src: "/Images/Spareon/Buhler/4.png", name: "Husker Chute", models: "DRHE" },
//   { src: "/Images/Spareon/Buhler/5.png", name: "Husker Chute", models: "DRHE" },
//   { src: "/Images/Spareon/Buhler/6.png", name: "Husker Chute", models: "DRHE" },

//   { src: "/Images/Spareon/Buhler/7.png", name: "Husker Retainer", models: "DRHE" },
//   { src: "/Images/Spareon/Buhler/8.png", name: "Husker Retainer", models: "DRHE" },
//   { src: "/Images/Spareon/Buhler/9.png", name: "Husker Retainer", models: "DRHE" },

//   { src: "/Images/Spareon/Buhler/10.png", name: "Paddy Table Knife Phase Hinges", models: "Buhler Paddy Table" },
//   { src: "/Images/Spareon/Buhler/11.png", name: "Paddy Table Knife Phase Hinges", models: "Buhler Paddy Table" },

//   { src: "/Images/Spareon/Buhler/12.png", name: "Silky DRPA Bush", models: "DRPA" },
//   { src: "/Images/Spareon/Buhler/13.png", name: "Silky Front Mouth", models: "DRPA" },
//   { src: "/Images/Spareon/Buhler/14.png", name: "Silky DRPA Mixing Tube", models: "DRPA" },
//   { src: "/Images/Spareon/Buhler/15.png", name: "Silky DRPA Mixing Tube", models: "DRPA" },

//   { src: "/Images/Spareon/Buhler/16.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },
//   { src: "/Images/Spareon/Buhler/17.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },
//   { src: "/Images/Spareon/Buhler/18.png", name: "Silky Milling Roll / Screw Feeder", models: "DRPA, DRPN" },

//   { src: "/Images/Spareon/Buhler/19.png", name: "Sizer Screen Frame", models: "Buhler Sizer" },
//   { src: "/Images/Spareon/Buhler/20.png", name: "Sizer Cylinder", models: "Buhler Sizer" },

//   { src: "/Images/Spareon/Buhler/21.png", name: "Whitener Base Star Hub", models: "Buhler Whitener" },

//   { src: "/Images/Spareon/Buhler/22.png", name: "Whitener Bearing Bush", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/23.png", name: "Whitener Bearing Bush", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/24.png", name: "Whitener Bearing Bush", models: "BSPB" },

//   { src: "/Images/Spareon/Buhler/25.png", name: "Whitener Vertical Break", models: "BSPB, DRWA" },
//   { src: "/Images/Spareon/Buhler/26.png", name: "Whitener Vertical Break", models: "BSPB, DRWA" },

//   { src: "/Images/Spareon/Buhler/27.png", name: "Whitener BSPB Base Shout", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/28.png", name: "Whitener BSPB Base Shout", models: "BSPB" },

//   { src: "/Images/Spareon/Buhler/29.png", name: "Whitener BSPB Screw Feeder", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/30.png", name: "Whitener BSPB Screw Feeder", models: "BSPB" },

//   { src: "/Images/Spareon/Buhler/31.png", name: "Whitener Sieve Frame", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/32.png", name: "Whitener Sieve Frame", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/33.png", name: "Whitener Sieve Frame", models: "BSPB" },

//   { src: "/Images/Spareon/Buhler/34.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
//   { src: "/Images/Spareon/Buhler/35.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
//   { src: "/Images/Spareon/Buhler/36.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
//   { src: "/Images/Spareon/Buhler/37.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },

//   { src: "/Images/Spareon/Buhler/38.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/39.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },
//   { src: "/Images/Spareon/Buhler/40.png", name: "Whitener BSPB Upper Ring Pipe", models: "BSPB" },

//   { src: "/Images/Spareon/Buhler/41.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
//   { src: "/Images/Spareon/Buhler/42.png", name: "Whitener / Silky Screen", models: "Silky: DRPA, DRPN, DRPG | Whitener: BSPB, DRWA" },
// ],
// };


//   const cardThemes = [
//     "from-blue-50 to-white border-blue-100",
//     "from-slate-50 to-white border-slate-200",
//     "from-cyan-50 to-white border-cyan-100",
//     "from-indigo-50 to-white border-indigo-100",
//     "from-sky-50 to-white border-sky-100",
//   ];

//   const randomizedThemes = useMemo(() => {
//     const result = [];
//     let lastTheme = null;
//     productData.buhler.forEach(() => {
//       let theme;
//       do {
//         theme = cardThemes[Math.floor(Math.random() * cardThemes.length)];
//       } while (theme === lastTheme && cardThemes.length > 1);
//       result.push(theme);
//       lastTheme = theme;
//     });
//     return result;
//   }, []);

//   return (
//     <>
//       {/* 1. Hero Section */}
//       <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
//         <div className="absolute inset-0 z-0">
//           <Image width={1920} height={1080} src="/banner.webp" alt="Buhler Spare Parts" className="w-full h-full object-cover opacity-40" priority />
//         </div>
//         <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
//           <div>
//             <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
//               BUHLER
//             </h1>
//             <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
//             <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
//               <Link href="/" className="hover:text-white transition-colors">Home</Link>
//               <span>/</span>
//               <span className="text-[#56b1cf]">BUHLER</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {productData.buhler.map((product, index) => (
//             <div 
//               key={index} 
//               className={`bg-linear-to-b ${randomizedThemes[index]} p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border relative overflow-hidden rounded-3xl`}
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16 blur-2xl" />
              
//               <div className="mb-8 z-10 w-full">
//                 <span className="text-xs font-bold tracking-[0.2em] text-[#0A162B]/40 uppercase mb-2 block">
//                   Buhler Spare Part
//                 </span>
//                 <h3 className="text-2xl font-bold text-[#0A162B] mb-2">{product.name}</h3>
//                 <p className="text-sm text-gray-700 mb-4 px-4 italic">"{product.desc}"</p>
//               </div>

//               <div className="relative z-10 mb-10 aspect-square flex items-center justify-center">
//                 <img 
//                   src={product.src} 
//                   alt={product.name} 
//                   className="w-auto h-52 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 object-contain"
//                 />
//               </div>
              
//               <div className="w-full">
//                 <p className="text-sm font-bold text-[#0A162B]/60 uppercase tracking-widest">Compatible Models</p>
//                 <p className="text-sm font-medium text-[#0A162B]/80">{product.models}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BuhlerProductGrid;