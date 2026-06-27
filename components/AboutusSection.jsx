"use client";

import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { FaPlay, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";

// Import GSAP dependencies
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutusSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Ref for the main container to scope GSAP animations
  const containerRef = useRef(null);

  // GSAP Animation Logic
  useGSAP(() => {
    // Create a timeline that triggers when the section enters the viewport
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Triggers when the top of the container hits 80% of the viewport height
        once: true,       // Only play the animation once
      }
    });

    // Staggered animation for the text column (Heading, Paragraph, Button)
    tl.from(".gsap-fade-up", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // 0.2 seconds delay between each element
      ease: "power3.out",
    })
    // Animation for the video banner (Slides in from the right slightly)
    .from(".gsap-fade-left", {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6"); // Starts 0.6 seconds before the previous animation ends for a smooth overlap

  }, { scope: containerRef }); // Scope ensures GSAP only targets elements inside this component

  return (
    <section ref={containerRef} className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start pr-0 lg:pr-8">
          
          {/* Main Heading */}
          <h2 className="gsap-fade-up text-[26px] md:text-[32px] font-bold text-[#0B1A30] tracking-wide uppercase mb-4">
            WELCOME TO <span className="text-[#1762A7]">SPAREON INDIA</span>
          </h2>

          {/* Description */}
          <p className="gsap-fade-up text-gray-600 text-[15px] md:text-base leading-[1.8] mb-8">
            We are the authorized channel partner of Taiwan-based Spareon Taiwan, a renowned 
            manufacturer of high-quality spare parts for advanced rice milling machinery. Our products 
            are engineered with precision, manufactured in Taiwan, and trusted by rice millers 
            across India.
          </p>

          {/* Simple Navy Button */}
          <div className="gsap-fade-up w-fit">
            <Link
              href="#contact"
              className="group relative flex items-center gap-4 overflow-hidden rounded-r-full bg-gradient-to-r from-[#056483] to-[#063B73] pl-6 pr-1.5 py-1.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,123,235,0.3)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(16,123,235,0.45)]"
            >
              {/* Hover Sweep Effect */}
              <span className="absolute inset-0 translate-x-[-105%] bg-linear-to-r from-[#056483] to-[#063B73] transition-transform duration-500 group-hover:translate-x-0" />
              
              {/* Button Text */}
              <span className="relative z-10 tracking-wide">Know More About Us</span>
              
              {/* White Circle Icon Container */}
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
                {/* Play Icon (matches the triangle in the image) */}
                <FaArrowRight className="text-[10px] text-[#107BEB] ml-0.5" />
              </span>
            </Link>
          </div>

        </div>

        {/* Right Column: Video Thumbnail Banner */}
        <div 
          className="gsap-fade-left relative group cursor-pointer rounded-md overflow-hidden shadow-2xl bg-[#0A162B] flex items-center h-[280px] md:h-[400px] w-full"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Background Image (Update src with your machinery image) */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/about.webp')" }} 
          />
          
          {/* Deep dark blue gradient overlay fading from right to left */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0A162B]/10 via-[#0A162B]/80 to-[#0A162B] z-0" />

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full px-6 md:px-12 h-full gap-6 sm:gap-0">
            
            {/* Play Button - Positioned left-ish on desktop */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 shrink-0 sm:ml-8 lg:ml-16">
              <FaPlay className="text-[#1762A7] text-xl ml-1" />
            </div>

            {/* Text Block & Arrow - Positioned right */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex flex-col text-center">
                <span className="text-white font-bold text-lg md:text-[19px] tracking-wide">
                  WATCH OUR INTRO
                </span>
                <span className="text-gray-300 font-light mt-1">
                  Engineering Excellence in<br className="hidden sm:block" /> Every Part
                </span>
              </div>
              <FaChevronRight className="text-gray-500 font-light text-lg hidden sm:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 transition-opacity duration-300">
          
          {/* Close Button */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 md:top-10 cursor-pointer md:right-10 text-white/70 hover:text-white transition-colors z-[101] p-2"
            aria-label="Close video"
          >
            <RxCross2 size={36} />
          </button>

          {/* Video Container */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 animate-in fade-in zoom-in-95 duration-300">
            {/* Replace the src below with your actual YouTube or video URL */}
            <iframe
              className="w-full h-full"
              src="/video.mp4"
              title="About Spareon India Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutusSection;