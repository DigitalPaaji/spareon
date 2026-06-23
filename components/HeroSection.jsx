"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaCogs,
  FaRegCheckCircle,
  FaNetworkWired,
  FaUserTie,
  FaChevronLeft,
  FaChevronRight,
  FaMicrochip,
  FaTractor,
} from "react-icons/fa";

// Define our slide data
const slideData = [
  {
    id: 1,
    subtitle: "PREMIUM PRODUCTS FOR",
    titlePrefix: "SATAKE ",
    highlightText: "&",
    titleSuffix: " BUHLER",
    description: "Engineering robust, high-performance parts for industrial machinery that demand uncompromising strength.",
    image: "/2.webp",
    features: [
      { id: 1, icon: <FaCogs size={22} />, title: "Precision\nManufacturing" },
      { id: 2, icon: <FaRegCheckCircle size={22} />, title: "Superior\nQuality" },
      { id: 3, icon: <FaNetworkWired size={22} />, title: "High-Performance\nComponents" },
      { id: 4, icon: <FaUserTie size={22} />, title: "Trusted by\nLeaders" },
    ],
  },
  {
    id: 2,
    subtitle: "ADVANCED TECHNOLOGY",
    titlePrefix: "NEXT-GEN ",
    highlightText: "MILLING",
    titleSuffix: " SOLUTIONS",
    description: "Maximize your yield and minimize downtime with our next-generation precision components.",
    image: "/png1.webp",
    features: [
      { id: 5, icon: <FaMicrochip size={22} />, title: "Smart\nIntegration" },
      { id: 6, icon: <FaRegCheckCircle size={22} />, title: "Zero\nDowntime" },
      { id: 7, icon: <FaTractor size={22} />, title: "Heavy Duty\nOperations" },
      { id: 8, icon: <FaUserTie size={22} />, title: "Global\nSupport" },
    ],
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); // 7 seconds per slide
    return () => clearInterval(timer);
  }, []);

  // GSAP Entry Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text stagger entry
      tl.from(".gsap-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      })
      // Features stagger entry
      .from(
        ".gsap-feature",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Image slide-in
      .from(
        imageRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.8"
      );

      // Continuous subtle floating animation for the image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

    }, sliderRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const slide = slideData[currentSlide];

  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden z-0">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right bg-no-repeat -z-20"
        style={{ backgroundImage: "url('/banner2.webp')" }} 
      />
      
      {/* Dark Overlay for Readability (keeps the premium vibe while showing the image underneath) */}
      <div className="absolute inset-0 bg-[#000510]/80 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#023159]/50 via-[#00192D]/70 to-[#00101d]/90 -z-10" />

      {/* Main Content Wrapper */}
      <div 
        key={currentSlide} 
        ref={sliderRef}
        className="w-full  flex flex-col lg:flex-row items-center justify-between z-10 gap-12 lg:gap-8"
      >
        {/* Left Side: Typography & Features */}
        <div className="w-full lg:w-[55%] pl-4 md:pl-12 lg:pl-24 xl:pl-40 flex flex-col justify-center text-left">
          
          {/* Subtitle Badge */}
          <div className="gsap-text inline-flex items-center w-max px-3 py-1.5 mb-6 rounded-full bg-[#25B8D9]/10 border border-[#25B8D9]/30">
            <span className="text-[#25B8D9] text-xs font-bold tracking-[0.25em] uppercase">
              {slide.subtitle}
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="gsap-text text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            {slide.titlePrefix}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#25B8D9] to-cyan-200">
              {slide.highlightText}
            </span>
            <br className="hidden md:block" />
            {slide.titleSuffix}
          </h1>

          {/* Description */}
          <p className="gsap-text text-gray-300 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
            {slide.description}
          </p>

          {/* Features Section */}
          <div className="flex flex-wrap items-stretch justify-start gap-3 sm:gap-4 w-full">
            {slide.features.map((feature) => (
              <div 
                key={feature.id}
                className="gsap-feature group flex items-center gap-3 w-[47%] sm:w-[45%] md:w-auto bg-white/5 border border-white/10 hover:border-[#25B8D9]/40 hover:bg-white/10 transition-all duration-300 rounded-xl p-3 backdrop-blur-sm"
              >
                <div className="text-[#25B8D9] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {feature.icon}
                </div>
                <span className="text-white/90 text-[11px] md:text-sm font-medium whitespace-pre-line leading-snug">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
      <div className="w-full lg:w-[45%] pr-4 md:pr-12 lg:pr-24 xl:pr-40 flex justify-center lg:justify-end items-center relative mt-4 lg:mt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#25B8D9]/20 blur-[120px] rounded-full -z-10" />
          
          <img 
            ref={imageRef}
            src={slide.image}
            alt={slide.subtitle} 
            className="w-full max-w-[450px] lg:max-w-none lg:w-[115%] xl:w-[120%]  h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] z-10"
          />
        </div>
      </div>

      {/* Navigation Controls (Arrows) */}
      <div className="absolute z-30 right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 hidden md:flex">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur-md transition-all duration-300 hover:bg-[#25B8D9] hover:text-white hover:border-[#25B8D9] hover:scale-105"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={16} className="-ml-1" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur-md transition-all duration-300 hover:bg-[#25B8D9] hover:text-white hover:border-[#25B8D9] hover:scale-105"
          aria-label="Next Slide"
        >
          <FaChevronRight size={16} className="-mr-1" />
        </button>
      </div>

      {/* Navigation Indicators (Dots) */}
      <div className="absolute bottom-12 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slideData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full h-2 ${
              currentSlide === idx 
                ? "w-3 h-3 bg-[#095d70]" 
                : "w-3 h-3 bg-[#095d705d] hover:bg-black/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Sweeping Curves */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full block h-[50px] md:h-[80px] lg:h-[110px]" 
          preserveAspectRatio="none"
        >
          <path d="M0 120 V 60 Q 500 -20 1440 80 V 120 Z" fill="#054A70" />
          <path d="M0 120 V 85 Q 500 0 1440 95 V 120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;