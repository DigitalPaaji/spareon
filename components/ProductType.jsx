import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProductType = () => {
  const brands = [
    {
      id: 1,
      name: "SATAKE",
      subtitle: "Rice Milling & Processing Parts",
  href: "/satake",
      product:"/Images/satake.webp"
    },
    {
      id: 2,
      name: "BÜHLER",
      subtitle: "Milling & Sorting Machine Parts",
  href: "/buhler",
      product:"/Images/buhler.webp" 
},
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#031d31]">
            Brands We Deal In
          </p>

          <h2 className="text-3xl lg:text-4xl  font-bold text-[#0B1A30] ">
           <span className="text-cyan-600"> Premium Machine </span> 
              Spare Parts
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            We provide quality spare parts and components for Satake and Bühler
            milling and processing machines.
          </p>
        </div>


      <div className="grid grid-cols-1 lg:grid-cols-1 gap-14">
  {brands.map((brand) => (
    <Link
      key={brand.id}
      href={brand.href}
      className=""
    >
   
        
        <img
          src={brand.product}
          alt={`${brand.name} product`}
          className="mx-auto"
        />



    
    </Link>
  ))}
</div>
      </div>






      
    </section>
  );
};

export default ProductType;