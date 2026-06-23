import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProductType = () => {
  const brands = [
    {
      id: 1,
      name: "SATAKE",
      subtitle: "Rice Milling & Processing Parts",
      image:
        "https://japaneseknifecompany.com/wp-content/uploads/2025/04/satake-logo.webp",
      href: "#satake",
      product:"cat1.png"
    },
    {
      id: 2,
      name: "BÜHLER",
      subtitle: "Milling & Sorting Machine Parts",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Buhler_logo_RGB.png",
      href: "#buhler",
      product:"cat2.png" 

},
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#031d31]">
            Brands We Deal In
          </p>

          <h2 className="text-3xl  font-bold text-[#00263d] ">
           <span className="text-cyan-600"> Premium Machine </span> 
              Spare Parts
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            We provide quality spare parts and components for Satake and Bühler
            milling and processing machines.
          </p>
        </div>


      <div className="grid  lg:grid-cols-2 gap-14">
  {brands.map((brand) => (
    <a
      key={brand.id}
      href={brand.href}
      className=""
    >
   
        
        <img
          src={brand.product}
          alt={`${brand.name} product`}
          className=""
        />



    
    </a>
  ))}
</div>
      </div>






      
    </section>
  );
};

export default ProductType;