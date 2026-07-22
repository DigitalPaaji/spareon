"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import productsData from "./product.json";

import "swiper/css";
import "swiper/css/free-mode";

// 1. Extracted Card Component for better performance and cleaner code
const ProductCard = ({ product }) => {
  const imageSrc =
    product?.images?.[0] ||
    product?.image ||
    "https://s.alicdn.com/@sc04/kf/Ha00062bcdd074ea092071fe1f6bab3f6J/Emery-Roller-for-Rice-Mill-Sand-Stone-Roll-Mnml-Mnms-Satake-Milling-Spare-Parts-Machine.jpg";

  return (
    <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-600/30 hover:shadow-[0_15px_40px_rgba(8,145,178,0.12)]">
      {/* Image Container */}
      <div className="relative flex h-[180px] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 sm:h-[220px]">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_100%)]" />
        
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-4 drop-shadow-sm transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Hover overlay badge */}
        <div className="absolute bottom-3 left-3 z-20 translate-y-8 rounded-full bg-cyan-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View Details
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center px-2 pb-2 pt-4 text-center">
        <p className="line-clamp-2 text-sm font-bold leading-relaxed text-[#00263d] transition-colors duration-300 group-hover:text-cyan-600 sm:text-base">
          {product.name}
        </p>
      </div>
    </div>
  );
};

const OurProducts = () => {
  // Grab up to the first 2 categories
  const displayCategories = (productsData?.categories || []).slice(0, 2);

  return (
    <section className="overflow-hidden bg-[#f7fafc] py-16 sm:py-24">
      <div className="mx-auto max-w-[1600px]">
        
        {/* Section Header */}
        <div className="mb-14 px-4 text-center sm:mb-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            Spare Parts Collection
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#00263d] sm:text-4xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">Products</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-600/20" />
        </div>

        {/* Dynamically render categories */}
        {displayCategories.map((category, index) => {
          // Determine direction based on index (0 = left, 1 = right)
          const isReverse = index % 2 !== 0;
          
          // Ensure we have enough products to loop smoothly (triple the array if needed)
          const baseProducts = category?.products || [];
          const loopingProducts = [...baseProducts, ...baseProducts, ...baseProducts];

          return (
            <div key={category.id || index} className="mb-12 last:mb-0">
              
              {/* Category Header Bar */}
              <div className="mb-6 flex items-center gap-4 px-4 sm:px-8">
                {isReverse && <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />}
                
                <h3 className="shrink-0 text-xl font-bold tracking-wide text-[#00263d] sm:text-2xl">
                  {category.name} Products
                </h3>
                
                {!isReverse && <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />}
              </div>

              {/* Swiper Carousel */}
              <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={{
                  enabled: true,
                  momentum: false,
                }}
                grabCursor={true}
                allowTouchMove={true}
                speed={6000} // Linear scroll speed
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: isReverse,
                }}
                breakpoints={{
                  0: { slidesPerView: 1.4, spaceBetween: 16 },
                  480: { slidesPerView: 2.2, spaceBetween: 16 },
                  768: { slidesPerView: 3.2, spaceBetween: 20 },
                  1024: { slidesPerView: 4.5, spaceBetween: 24 },
                  1280: { slidesPerView: 5.5, spaceBetween: 24 },
                  1536: { slidesPerView: 6.5, spaceBetween: 24 },
                }}
                className="product-marquee px-4 sm:px-8"
              >
                {loopingProducts.map((product, pIndex) => (
                  <SwiperSlide key={`${product.id || 'prod'}-${index}-${pIndex}`}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </div>

      {/* Global CSS to enforce the smooth linear infinite scroll */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .product-marquee .swiper-wrapper {
            transition-timing-function: linear !important;
            align-items: stretch;
          }
          .product-marquee .swiper-slide {
            height: auto; 
          }
        `
      }} />
    </section>
  );
};

export default OurProducts;