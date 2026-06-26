"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const PreLoader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(
    () => {
      // Lock scrolling while loading
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(containerRef.current, { display: "none" });
          document.body.style.overflow = "auto";
        },
      });

      // 1. Reveal logo smoothly from left to right using a polygon clip-path
      tl.fromTo(
        logoRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0.3 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, duration: 1.1, ease: "power3.inOut" }
      )
      // 2. Slide the whole dark background up and away
      .to(bgRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut",
      }, "+=0.15"); // Tiny pause after the logo is fully revealed
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative z-[9999]">
      <div ref={bgRef} className="fixed inset-0 flex items-center justify-center bg-[#000510]">
        <img 
          ref={logoRef}
          src="/logo.webp" 
          alt="Spareon Logo" 
          className="w-64 md:w-80 h-auto object-contain drop-shadow-lg" 
        />
      </div>
    </div>
  );
};

export default PreLoader;