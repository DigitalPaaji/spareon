"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const PreLoader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(
    () => {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

      // 1. Reveal logo + Add a subtle scale/pulse effect
      tl.fromTo(
        logoRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0, scale: 0.8 },
        { 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          ease: "power3.inOut" 
        }
      )
      // 2. Hold for a moment, then fade out the entire container
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.5,
        onComplete: () => {
          gsap.set(containerRef.current, { display: "none" });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[#000510]"
    >
      <img 
        ref={logoRef}
        src="/logo2.webp" 
        alt="Spareon Logo" 
        className=" h-auto object-contain drop-shadow-lg" 
      />
    </div>
  );
};

export default PreLoader;