"use client";
import React, { useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';

const ProductGrid = () => {

const productData = {
  satake: [
    { src: "/Images/Spareon/Satake/01.png", name: "Satake Whitener SR Screw Feeder 01" },
    { src: "/Images/Spareon/Satake/02.png", name: "Satake Whitener SR Screw Feeder 1" },
    { src: "/Images/Spareon/Satake/2.webp", name: "Satake Whitener SR Screw Feeder 02" },
    { src: "/Images/Spareon/Satake/04.png", name: "Satake Whitener SR Screw Feeder 2" },
    { src: "/Images/Spareon/Satake/05.png", name: "Satake Whitener SR Upper Cylinder 03" },
    { src: "/Images/Spareon/Satake/06.png", name: "Satake Whitener SR Upper Cylinder 3" },
    { src: "/Images/Spareon/Satake/6.png", name: "Satake Whitener SR Upper Cylinder 4" },
    { src: "/Images/Spareon/Satake/07.png", name: "Satake Whitener SR Upper Cylinder 04" },
    { src: "/Images/Spareon/Satake/9.png", name: "Satake Whitener SR Upper Cylinder 05" },
    { src: "/Images/Spareon/Satake/010.png", name: "Satake Whitener SR Upper Cylinder 5" },
    { src: "/Images/Spareon/Satake/09.png", name: "Satake Whitener SR Upper Cylinder 06" },
    { src: "/Images/Spareon/Satake/1.png", name: "Satake Silky Break Holder 6" },
    { src: "/Images/Spareon/Satake/01.png", name: "Satake Whitener SR Upper Cylinder 07" },
    { src: "/Images/Spareon/Satake/11.png", name: "Satake Silky Screw Roller 7" },

    { src: "/Images/Spareon/Satake/10.png", name: "Satake Whitener SR Upper Cylinder 08" },
    { src: "/Images/Spareon/Satake/9.png", name: "Satake Silky Screw Roller 8" },
    { src: "/Images/Spareon/Satake/10.png", name: "Satake Whitener SR Upper Cylinder 09" },
    { src: "/Images/Spareon/Satake/9.png", name: "Satake Silky Screw Roller 9" },
    { src: "/Images/Spareon/Satake/010.png", name: "Satake Silky Screw Roller 010" },
    { src: "/Images/Spareon/Satake/10.png", name: "Satake Whitener SR Upper Cylinder 10" },
    { src: "/Images/Spareon/Satake/012.png", name: "Satake Silky Screw Roller 011" },
    { src: "/Images/Spareon/Satake/22.png", name: "Satake Silky Roller Pulley 11" },
    { src: "/Images/Spareon/Satake/011.png", name: "Satake Silky Screw Roller 012" },
    { src: "/Images/Spareon/Satake/13.png", name: "Satake Silky Roller Pulley 12" },
    { src: "/Images/Spareon/Satake/014.png", name: "Satake Whitener Base Ring 13" },
    { src: "/Images/Spareon/Satake/014.png", name: "Satake Whitener Base Ring 14" },
    { src: "/Images/Spareon/Satake/27.png", name: "Satake Husker Retainer 01" },
    { src: "/Images/Spareon/Satake/28.png", name: "Satake Husker Retainer 02" },

    { src: "/Images/Spareon/Satake/29.png", name: "Satake Husker Retainer 03" },
    { src: "/Images/Spareon/Satake/30.png", name: "Satake Paddy Table Knife Phase Hinges 01" },
    { src: "/Images/Spareon/Satake/31.png", name: "Satake Paddy Table Knife Phase Hinges 02" },
    { src: "/Images/Spareon/Satake/32.png", name: "Satake Screen 01" },
    { src: "/Images/Spareon/Satake/33.png", name: "Satake Screen 02" },
    { src: "/Images/Spareon/Satake/34.png", name: "Satake Screen 03" },
    { src: "/Images/Spareon/Satake/35.png", name: "Satake Screen 04" },
    { src: "/Images/Spareon/Satake/36.png", name: "Satake Screen 05" },
    { src: "/Images/Spareon/Satake/37.png", name: "Satake Screen 06" },
    { src: "/Images/Spareon/Satake/38.png", name: "Satake Screen 07" },
    { src: "/Images/Spareon/Satake/39.png", name: "Satake Screen 08" },
    { src: "/Images/Spareon/Satake/40.png", name: "Satake Silky Break Holder 01" },
    { src: "/Images/Spareon/Satake/41.png", name: "Satake Silky Break Holder 02" },
    { src: "/Images/Spareon/Satake/42.png", name: "Satake Silky Break Holder 03" },

    { src: "/Images/Spareon/Satake/43.png", name: "Satake Silky Front Housing" },
    { src: "/Images/Spareon/Satake/44.png", name: "Satake Silky Inlet Sieve 01" },
    { src: "/Images/Spareon/Satake/45.png", name: "Satake Silky Inlet Sieve 02" },
    { src: "/Images/Spareon/Satake/46.png", name: "Satake Silky Rings Inlet 02" },
    { src: "/Images/Spareon/Satake/47.png", name: "Satake Silky Rings Inlet" },
    { src: "/Images/Spareon/Satake/48.png", name: "Satake Whitener Star Plate" },
    { src: "/Images/Spareon/Satake/49.png", name: "Satake Sizer Cylinder" },
  ],
};

  // const productData = {
//   satake: [
//     {
//       src: "/Images/stake/1.webp",
//       name: "SR Screw Feeder",
//       models: "VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//       desc: "Precision-engineered screw feeder designed for smooth and uniform grain feeding inside Satake Whitener machines. Manufactured from premium stainless steel for reliable performance, reduced wear, and long service life."
//     },
//     {
//       src: "/Images/stake/2.webp",
//       name: "SR Upper Cylinder",
//       models: "VTA-5, VTA-7 SR, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 GMT, VTA-16 SR",
//       desc: "High-quality upper cylinder that ensures efficient grain movement and consistent whitening performance. Built with precision machining for durability and heavy-duty milling applications."
//     },
//     {
//       src: "/Images/stake/3.webp",
//       name: "SR Inner Base Ring",
//       models: "VTA-3 SR, VTA-5, VTA-7 SR, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB/GMT, VTA-16 SR",
//       desc: "Precisely manufactured inner base ring that supports proper alignment of internal machine components, ensuring stable operation and extended equipment life."
//     },
//     {
//       src: "/Images/stake/4.webp",
//       name: "Silky Screw Roller (Milling Roll)",
//       models: "KB-40, KB-60, KB-75, KB-80, KB-100, 2/4 TOKI",
//       desc: "Heavy-duty stainless steel milling roll designed for smooth polishing, accurate grain processing, corrosion resistance, and long-lasting performance."
//     },
//     {
//       src: "/Images/stake/5.webp",
//       name: "Silky Front Housing",
//       models: "Satake Silky Series",
//       desc: "Durable front housing manufactured to protect internal machine components while ensuring smooth and reliable operation of Satake silky polishing machines."
//     },
//     {
//       src: "/Images/stake/6.webp",
//       name: "Paddy Table Knife Phase Hinges",
//       models: "Satake Paddy Table",
//       desc: "Precision-engineered knife phase hinges that provide accurate adjustment, stable movement, and dependable long-term performance in paddy table machines."
//     },
//     {
//       src: "/Images/stake/7.webp",
//       name: "Silky Inlet Sieve",
//       models: "Satake Silky Series",
//       desc: "Premium inlet sieve designed to regulate grain entry into the polishing chamber while ensuring efficient material flow and removal of unwanted particles."
//     },
//     {
//       src: "/Images/stake/8.webp",
//       name: "Whitener Star Plate",
//       models: "VTA Whitener Series",
//       desc: "High-precision star plate manufactured for efficient grain movement and consistent whitening performance with superior wear resistance."
//     },
//     {
//       src: "/Images/stake/9.webp",
//       name: "Silky Rings Inlet",
//       models: "Satake Silky Series",
//       desc: "Robust inlet ring engineered to improve grain feeding efficiency while maintaining smooth machine operation during polishing."
//     },
//     {
//       src: "/Images/stake/10.webp",
//       name: "Whitener & Silky Screens",
//       models: "Silky: KB-35, KB-40/60, KB-75/80, KB-100 | Whitener: VTA-3, VTA-5, VTA-7 SR, VTA-9, VTA-10, VTA-12 GMT, VTA-12 SR, VTA-15 AB, VTA-15 GMT, VTA-16 SR, VTA-20",
//       desc: "Premium-quality stainless steel screens manufactured with precision perforations for superior grain separation, polishing efficiency, and extended operational life."
//     },
//     {
//       src: "/Images/stake/11.webp",
//       name: "Silky Break Holder",
//       models: "Satake Silky Series",
//       desc: "Heavy-duty break holder designed to securely support polishing assemblies while reducing vibration and ensuring stable machine performance."
//     },
//     {
//       src: "/Images/stake/1.webp",
//       name: "Sizer Cylinder",
//       models: "Satake Sizer Machines",
//       desc: "Precision-machined sizing cylinder engineered for accurate grain grading and consistent separation with high wear resistance."
//     },
//     {
//       src: "/Images/stake/2.webp",
//       name: "Husker Retainer",
//       models: "Satake Husker Series",
//       desc: "Reliable retainer component designed to securely hold internal husker assemblies in place, ensuring smooth operation and improved machine durability."
//     },
//   ],
// };

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
    productData.satake.forEach(() => {
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
            <Image
              width={1920}
              height={1080}
              src="/banner.webp" // Replace with actual industrial/machinery contact banner
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
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#56b1cf]">SATAKE</span>
              </div>
            </div>
          </div>
        </section>

      <div className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.satake.map((product, index) => (
            <div 
              key={index} 
              className={`bg-linear-to-b ${randomizedThemes[index]} p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border relative overflow-hidden rounded-3xl`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <div className="mb-8 z-10 w-full">
                <span className="text-xs font-bold tracking-[0.2em] text-[#0A162B]/40 uppercase mb-2 block">
                  Satake Spare Part
                </span>
                <h3 className="text-2xl font-bold text-[#0A162B] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-4 px-4 italic">"{product.desc}"</p>
             
              </div>

              <div className="relative z-10 mb-10 aspect-square  flex items-center justify-center">
                <img 
                  src={product.src} 
                  alt={product.name} 
                  className="w-auto h-52 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 object-contain"
                />
              </div>
                 <div className="">
                  <p className="text-sm font-bold text-[#0A162B]/60 uppercase tracking-widest">Compatible Models</p>
                  <p className="text-sm font-medium text-[#0A162B]/80">{product.models}</p>
                </div>
              {/* <div className="flex gap-4 z-10">
                <button className="bg-[#0A162B] text-white px-8 py-3 font-semibold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20 rounded-xl">
                  Learn More
                </button>
                <button className="text-[#0A162B] font-semibold px-8 py-3 bg-white border border-[#0A162B]/10 hover:bg-[#0A162B] hover:text-white transition-all rounded-xl">
                  Inquire
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;


// "use client";
// import Link from 'next/link';
// import Image from 'next/image';

// export default function BrandPage() {


//   return (
//     <main className=" bg-white">
//       {/* Hero Section */}
//      {/* 1. Hero Section */}
//         <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
//                  <div className="absolute inset-0 z-0">
//                    <Image
//                      width={1920}
//                      height={1080}
//                      src="/banner.webp" // Replace with actual industrial/machinery contact banner
//                      alt="Contact Spareon India"
//                      className="w-full h-full object-cover opacity-40"
//                      priority
//                    />
//                  </div>
                 
//                  <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
//                    <div>
//                      <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
//                        SATAKE
//                      </h1>
//                      <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
                     
//                      <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
//                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
//                        <span>/</span>
//                        <span className="text-[#56b1cf]">SATAKE</span>
//                      </div>
//                    </div>
//                  </div>
//                </section>
// <section className=''>

// </section>

//     </main>
//   );
// }