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

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 40) {
      setActive((prev) =>
        diff > 0
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
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
              aria-label={`Show ${name} image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductGrid = () => {
  const productData = {
    satake: [
      {
        src: "/Images/Spareon/Satake/01.png",
        name: "SR Screw Feeder",
        models:
          "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/02.png",
        name: "SR Screw Feeder",
        models:
          "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/2.webp",
        name: "Silky Milling Roll",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
      },
      {
        src: "/Images/Spareon/Satake/03.png",
        name: "SR Screw Feeder",
        models:
          "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/3.png",
        name: "Silky Milling Roll",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
      },
      {
        src: "/Images/Spareon/Satake/04.png",
        name: "SR Upper Cylinder",
        models: "VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/4.png",
        name: "Silky Milling Roll",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
      },
      {
        src: "/Images/Spareon/Satake/05.png",
        name: "SR Upper Cylinder",
        models: "VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/5.png",
        name: "Silky Milling Roll",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
      },
      {
        src: "/Images/Spareon/Satake/06.png",
        name: "SR Upper Cylinder",
        models: "VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/6.png",
        name: "Silky Milling Roll",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
      },
      {
        src: "/Images/Spareon/Satake/07.png",
        name: "SR Upper Cylinder",
        models: "VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/7.png",
        name: "Silky Screw Roller",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100",
      },
      {
        src: "/Images/Spareon/Satake/08.png",
        name: "SR Upper Cylinder",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/8.png",
        name: "Silky Screw Roller",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100",
      },
      {
        src: "/Images/Spareon/Satake/09.png",
        name: "SR Upper Cylinder",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/9.png",
        name: "Silky Screw Roller",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100",
      },
      // {
      //   src: "/Images/Spareon/Satake/010.png",
      //   name: "SR Upper Cylinder",
      //   models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      // },
      {
        src: "/Images/Spareon/Satake/10.png",
        name: "SR Upper Cylinder",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
      },
      // {
      //   src: "/Images/Spareon/Satake/011.png",
      //   name: "Silky Screw Roller",
      //   models: "KB-40, KB-60, KB-75, KB-80, KB-100",
      // },
      {
        src: "/Images/Spareon/Satake/11.png",
        name: "SR Inner Base Ring",
        models: "VTA-3 SR, VTA-5, VTA-7 SR",
      },
      {
        src: "/Images/Spareon/Satake/012.webp",
        name: "Silky Screw Roller",
        models: "KB-40, KB-60, KB-75, KB-80, KB-100",
      },
      {
        src: "/Images/Spareon/Satake/13.png",
        name: "SR Inner Base Ring",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/014.png",
        name: "SR Inner Base Ring",
        models:
          "VTA-3 SR, VTA-5, VTA-7 SR, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/14.png",
        name: "SR Inner Base Ring",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/22.png",
        name: "SR Inner Base Ring",
        models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
      },
      {
        src: "/Images/Spareon/Satake/27.png",
        name: "Husker Retainer",
        models: "Satake Husker",
      },
      {
        src: "/Images/Spareon/Satake/28.png",
        name: "Husker Retainer",
        models: "Satake Husker",
      },
      {
        src: "/Images/Spareon/Satake/29.png",
        name: "Husker Retainer",
        models: "Satake Husker",
      },
      {
        src: "/Images/Spareon/Satake/30.png",
        name: "Paddy Table Knife Phase Hinges",
        models: "Satake Paddy Table",
      },
      {
        src: "/Images/Spareon/Satake/31.png",
        name: "Paddy Table Knife Phase Hinges",
        models: "Satake Paddy Table",
      },
      {
        src: "/Images/Spareon/Satake/32.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/33.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/34.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/35.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/36.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/37.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/38.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/39.png",
        name: "Screen",
        models:
          "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
      },
      {
        src: "/Images/Spareon/Satake/40.png",
        name: "Silky Break Holder",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/41.png",
        name: "Silky Break Holder",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/42.png",
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
        src: "/Images/Spareon/Satake/45.png",
        name: "Silky Inlet Sieve",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/46.png",
        name: "Silky Rings Inlet",
        models: "Satake Silky",
      },
      {
        src: "/Images/Spareon/Satake/47.png",
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
  };

  const groupedProducts = useMemo(() => {
    const grouped = {};

    productData.satake.forEach((product) => {
      const key = `${product.name}-${product.models}`;

      if (!grouped[key]) {
        grouped[key] = {
          name: product.name,
          models: product.models,
          desc: product.desc,
          images: [],
        };
      }

      grouped[key].images.push(product.src);
    });

    return Object.values(grouped);
  }, []);

  const cardThemes = [
    "from-blue-50 to-white border-blue-100",
    "from-slate-100 to-white border-slate-200",
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
            alt="Contact Spareon India"
            className="aspect-square w-full h-full object-cover opacity-40"
            priority
          />
        </div>

        <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
          <div>
            <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
              SATAKE
            </h1>

            <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>

            <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#56b1cf]">SATAKE</span>
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
                  Satake Spare Part
                </span>

                <h3 className="text-2xl font-bold text-[#0A162B] mb-2">
                  {product.name}
                </h3>

                {/* <p className="text-sm text-gray-700 mb-4 px-4 italic">
                  "{product.desc}"
                </p> */}
              </div>

              <ProductImageSlider images={product.images} name={product.name} />

              <div className="">
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

export default ProductGrid;






// "use client";
// import React, { useMemo } from "react";
// import Image from 'next/image';
// import Link from 'next/link';

// const ProductGrid = () => {

// const productData = {
// satake: [
//   {
//     src: "/Images/Spareon/Satake/01.png",
//     name: "SR Screw Feeder",
//     models: "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/02.png",
//     name: "SR Screw Feeder",
//     models: "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/2.webp",
//     name: "Silky Milling Roll",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
//   },
//   {
//     src: "/Images/Spareon/Satake/03.png",
//     name: "SR Screw Feeder",
//     models: "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/3.png",
//     name: "Silky Milling Roll",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
//   },
//   {
//     src: "/Images/Spareon/Satake/04.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-5, VTA-7 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/4.png",
//     name: "Silky Milling Roll",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
//   },
//   {
//     src: "/Images/Spareon/Satake/05.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-5, VTA-7 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/5.png",
//     name: "Silky Milling Roll",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
//   },
//   {
//     src: "/Images/Spareon/Satake/06.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-5, VTA-7 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/6.png",
//     name: "Silky Milling Roll",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
//   },
//   {
//     src: "/Images/Spareon/Satake/07.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-5, VTA-7 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/7.png",
//     name: "Silky Screw Roller",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100",
//   },
//   {
//     src: "/Images/Spareon/Satake/08.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/8.png",
//     name: "Silky Screw Roller",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100",
//   },
//   {
//     src: "/Images/Spareon/Satake/09.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/9.png",
//     name: "Silky Screw Roller",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100",
//   },
//   {
//     src: "/Images/Spareon/Satake/010.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/10.png",
//     name: "SR Upper Cylinder",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/011.png",
//     name: "Silky Screw Roller",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100",
//   },
//   {
//     src: "/Images/Spareon/Satake/11.png",
//     name: "SR Inner Base Ring",
//     models: "VTA-3 SR, VTA-5, VTA-7 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/012.webp",
//     name: "Silky Screw Roller",
//     models: "KB-40, KB-60, KB-75, KB-80, KB-100",
//   },
//   {
//     src: "/Images/Spareon/Satake/13.png",
//     name: "SR Inner Base Ring",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/014.png",
//     name: "SR Inner Base Ring",
//     models: "VTA-3 SR, VTA-5, VTA-7 SR, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/14.png",
//     name: "SR Inner Base Ring",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/22.png",
//     name: "SR Inner Base Ring",
//     models: "VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
//   },
//   {
//     src: "/Images/Spareon/Satake/27.png",
//     name: "Husker Retainer",
//     models: "Satake Husker",
//   },
//   {
//     src: "/Images/Spareon/Satake/28.png",
//     name: "Husker Retainer",
//     models: "Satake Husker",
//   },
//   {
//     src: "/Images/Spareon/Satake/29.png",
//     name: "Husker Retainer",
//     models: "Satake Husker",
//   },
//   {
//     src: "/Images/Spareon/Satake/30.png",
//     name: "Paddy Table Knife Phase Hinges",
//     models: "Satake Paddy Table",
//   },
//   {
//     src: "/Images/Spareon/Satake/31.png",
//     name: "Paddy Table Knife Phase Hinges",
//     models: "Satake Paddy Table",
//   },
//   {
//     src: "/Images/Spareon/Satake/32.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/33.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/34.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/35.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/36.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/37.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/38.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/39.png",
//     name: "Screen",
//     models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//   },
//   {
//     src: "/Images/Spareon/Satake/40.png",
//     name: "Silky Break Holder",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/41.png",
//     name: "Silky Break Holder",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/42.png",
//     name: "Silky Break Holder",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/43.png",
//     name: "Silky Front Housing",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/44.png",
//     name: "Silky Inlet Sieve",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/45.png",
//     name: "Silky Inlet Sieve",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/46.png",
//     name: "Silky Rings Inlet",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/47.png",
//     name: "Silky Rings Inlet",
//     models: "Satake Silky",
//   },
//   {
//     src: "/Images/Spareon/Satake/48.png",
//     name: "Whitener Star Plate",
//     models: "Satake Whitener",
//   },
//   {
//     src: "/Images/Spareon/Satake/49.png",
//     name: "Sizer Cylinder",
//     models: "Satake Sizer",
//   },
// ],
// };


//   const cardThemes = [
//     "from-blue-50 to-white border-blue-100",
//     "from-slate-100 to-white border-slate-200",
//     "from-cyan-50 to-white border-cyan-100",
//     "from-indigo-50 to-white border-indigo-100",
//     "from-sky-50 to-white border-sky-100",
//   ];

//   const randomizedThemes = useMemo(() => {
//     const result = [];
//     let lastTheme = null;
//     productData.satake.forEach(() => {
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
//   {/* 1. Hero Section */}
//  <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
//           <div className="absolute inset-0 z-0">
//             <Image
//               width={1920}
//               height={1080}
//               src="/banner.webp" // Replace with actual industrial/machinery contact banner
//               alt="Contact Spareon India"
//               className="aspect-square w-full h-full object-cover opacity-40"
//               priority
//             />
//           </div>
                 
//           <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
//             <div>
//               <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
//                 SATAKE
//               </h1>
//               <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
                     
//               <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
//                 <Link href="/" className="hover:text-white transition-colors">Home</Link>
//                 <span>/</span>
//                 <span className="text-[#56b1cf]">SATAKE</span>
//               </div>
//             </div>
//           </div>
//         </section>

//       <div className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {productData.satake.map((product, index) => (
//             <div 
//               key={index} 
//               className={`bg-linear-to-b ${randomizedThemes[index]} p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border relative overflow-hidden rounded-3xl`}
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16 blur-2xl" />
              
//               <div className="mb-8 z-10 w-full">
//                 <span className="text-xs font-bold tracking-[0.2em] text-[#0A162B]/40 uppercase mb-2 block">
//                   Satake Spare Part
//                 </span>
//                 <h3 className="text-2xl font-bold text-[#0A162B] mb-2">{product.name}</h3>
//                 <p className="text-sm text-gray-700 mb-4 px-4 italic">"{product.desc}"</p>
             
//               </div>

//               <div className="relative z-10 mb-10 aspect-square  flex items-center justify-center">
//                 <img 
//                   src={product.src} 
//                   alt={product.name} 
//                   className="w-auto h-52 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 object-contain"
//                 />
//               </div>
//                  <div className="">
//                   <p className="text-sm font-bold text-[#0A162B]/60 uppercase tracking-widest">Compatible Models</p>
//                   <p className="text-sm font-medium text-[#0A162B]/80">{product.models}</p>
//                 </div>
//               {/* <div className="flex gap-4 z-10">
//                 <button className="bg-[#0A162B] text-white px-8 py-3 font-semibold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20 rounded-xl">
//                   Learn More
//                 </button>
//                 <button className="text-[#0A162B] font-semibold px-8 py-3 bg-white border border-[#0A162B]/10 hover:bg-[#0A162B] hover:text-white transition-all rounded-xl">
//                   Inquire
//                 </button>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductGrid;

