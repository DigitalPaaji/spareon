"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Settings, 
  Award, 
  MapPin, 
  Target, 
  ChevronRight, 
  ArrowRight,
  Globe
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);

  // GSAP Animation Logic for all sections
  useGSAP(() => {
    // Select all sections to create individual scroll triggers
    const sections = gsap.utils.toArray(".animate-section");

    sections.forEach((section) => {
      const fadeElements = section.querySelectorAll(".fade-up");
      
      if (fadeElements.length > 0) {
        gsap.from(fadeElements, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-[#0B1A30] overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="animate-section relative overflow-hidden py-[200px] bg-[#0A162B]">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={1080}
            src="/about.webp" // Replace with your factory/machinery hero image
            alt="Spareon India Manufacturing"
            className="w-full h-full object-cover opacity-40"
            priority
          />
          {/* <div className="absolute inset-0 bg-linear-to-r from-[#0A162B]/30 via-[#0A162B]/30 to-[#0A162B]/20"></div> */}
        </div>
        
          <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
        

            <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
             About Us</h1>

            <div className="fade-up w-24 h-1 bg-linear-to-r from-[#056483] to-[#063B73] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="animate-section py-16 md:py-24 px-6 md:px-12 lg:px-24 xl:px-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-6">
              <Target className="w-4 h-4 text-[#1762A7]" />
              <span className="text-sm font-bold tracking-wide text-gray-700 uppercase">Our Mission</span>
            </div>
            
            <h2 className="fade-up text-[28px] md:text-[36px] font-bold mb-6 tracking-wide uppercase text-[#0B1A30]">
              Who We Are
            </h2>
            
            <div className="fade-up space-y-5 text-gray-600 leading-[1.8]">
              <p>
                Spareon India was established to bridge the gap between premium international manufacturing and the growing demands of the Indian rice milling industry. We recognized the need for highly durable, precision-engineered parts that minimize downtime and maximize yield.
              </p>
              <p>
                As the authorized channel partner of Spareon Taiwan, we bring decades of advanced manufacturing expertise directly to your facility. Every component we supply is crafted with meticulous attention to detail in Taiwan, ensuring global standards of quality.
              </p>
              <p>
                We believe that the efficiency of your mill depends on the reliability of its smallest parts. Our commitment is to provide ready-stock availability, competitive pricing, and unparalleled quality to keep your operations running smoothly.
              </p>
            </div>
          </div>
          
          <div className="fade-up relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <Image
              width={800}
              height={800}
              src="/team1.webp" // Replace with image of machinery/parts
              alt="Spareon India Precision Machinery"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1A30]/50 to-transparent" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: "100%", label: "Premium Quality", icon: <Award className="w-8 h-8" /> },
            { number: "Pan India", label: "Delivery Network", icon: <MapPin className="w-8 h-8" /> },
            { number: "Taiwan", label: "Manufactured In", icon: <Globe className="w-8 h-8" /> },
          ].map((stat, idx) => (
            <div key={idx} className="fade-up text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(23,98,167,0.1)] transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 bg-blue-50 text-[#1762A7] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1762A7] group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-[#0B1A30] mb-2 tracking-tight">{stat.number}</div>
              <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="animate-section py-16 md:py-24 bg-gray-50 border-y border-gray-200/60 px-6 md:px-12 lg:px-24 xl:px-40">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#1762A7]" />
            <span className="text-sm font-bold tracking-wide text-gray-700 uppercase">Core Principles</span>
          </div>
          
          <h2 className="fade-up text-[28px] md:text-[36px] font-bold mb-6 tracking-wide uppercase text-[#0B1A30]">
            The Spareon Advantage
          </h2>
          
          <p className="fade-up text-gray-600 max-w-2xl mx-auto leading-[1.8]">
            We don't just supply parts; we provide reliability. Our products are the backbone of high-capacity milling operations, built upon three fundamental pillars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Precision Engineering",
              description: "Manufactured using state-of-the-art technology in Taiwan to ensure exact specifications and perfect compatibility with Satake and Bühler machines.",
            },
            {
              icon: <ShieldCheck className="w-7 h-7" />,
              title: "Premium Durability",
              description: "Built to withstand the rigorous demands of modern rice milling. High-grade materials mean less wear and tear and an extended operational lifespan.",
            },
            {
              icon: <Target className="w-7 h-7" />,
              title: "Ready Availability",
              description: "We maintain robust inventory levels within India to ensure rapid fulfillment, minimizing your machine downtime and keeping production lines moving.",
            }
          ].map((value, idx) => (
            <div key={idx} className="fade-up bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#056483] to-[#063B73] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-white">
                  {value.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-[#0B1A30]">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Styled like the video thumbnail in your code */}
      <section className="animate-section py-20 md:py-28 px-6 md:px-12 lg:px-24 xl:px-40 relative">
        <div className="absolute inset-0 bg-[#0A162B] z-0">
          {/* Subtle grid pattern or texture could go here */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_5%,rgba(36,179,255,0.05)_32%,transparent_52%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            
            <h3 className="fade-up text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wide">
              Upgrade Your Milling <br/> <span className="text-cyan-400">Efficiency Today</span>
            </h3>
            
            <p className="fade-up text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
              Contact us to discover how our specialized spare parts can enhance the performance and longevity of your processing machinery.
            </p>
            
            <div className="fade-up flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-10 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(6,182,212,0.3)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(6,182,212,0.5)]"
              >
                <span className="absolute inset-0 translate-x-[-105%] bg-gradient-to-r from-blue-700 to-cyan-600 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative z-10 tracking-widest uppercase">Contact Sales</span>
                <ChevronRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;