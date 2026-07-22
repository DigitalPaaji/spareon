"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { 
  Shield, 
  Leaf, 
  Users
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import AboutusSection from "@/components/AboutusSection";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);

  // GSAP Animation Logic for all sections
  useGSAP(() => {
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
    <div ref={containerRef} className="bg-white text-[#0B1A30] overflow-hidden font-sans">
      
      {/* 1. Hero Section */}
    <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
             <div className="absolute inset-0 z-0">
               <Image
                 width={1920}
                 height={1080}
                 src="/banner.webp" // Replace with actual industrial/machinery contact banner
                 alt="Contact Spareon India"
                 className="w-full h-full object-cover opacity-40"
                 priority
               />
             </div>
             
             <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
               <div>
                 <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
                   About Us
                 </h1>
                 <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
                 
                 <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
                   <Link href="/" className="hover:text-white transition-colors">Home</Link>
                   <span>/</span>
                   <span className="text-[#56b1cf]">About Us</span>
                 </div>
               </div>
             </div>
           </section>

      {/* 6. Philosophy Section */}
      <PhilosophySection />

<AboutusSection/>

      
 {/* 4. Capabilities Section */}
      <CapabilitiesSection />

      {/* 2. Introduction Section */}
      {/* <section className="animate-section w-full px-6 lg:px-16 xl:px-24 2xl:px-40 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          <div className="order-1 lg:order-1">
            <h2 className="fade-up text-sm font-medium text-gray-600 tracking-wider mb-4">
           About Spareon India
            </h2>

            <h3 className="fade-up text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight relative">
             Authorized Channel Partner Delivering Premium Rice Mill Spare Parts
              <span className="block w-16 h-0.5 bg-black absolute -bottom-3 left-0"></span>
            </h3>

            <p className="fade-up text-gray-600 mb-6 text-base leading-relaxed">
              Established to fill a significant gap in the Indian industrial sector, Spareon was 
              created to be a truly sustainable, high-quality, and transparent manufacturing 
              partner for emerging and established engineering brands.
            </p>

            <p className="fade-up text-gray-600 mb-6 text-base leading-relaxed">
Spareon India is the authorized channel partner of Taiwan-based Spareon Taiwan, a renowned manufacturer of premium-quality spare parts for advanced rice milling machinery. Every component is manufactured in Taiwan using modern technology, precision engineering, and strict quality control standards to ensure exceptional durability, accuracy, and long-lasting performance. </p>

            <p className="fade-up text-gray-600 mb-6 text-base leading-relaxed">
    We specialize in supplying high-performance spare parts for leading rice milling brands such as Satake and Buhler, serving modern rice mills across India. Our extensive product range is designed to support high-capacity milling operations while reducing machine downtime, maintenance costs, and operational interruptions.</p>
          </div>

          <div className="fade-up order-2 lg:order-2 w-full flex justify-center">
            <div className="relative w-full aspect-auto overflow-hidden rounded-2xl">
              <Image
                src="/about2.webp" // Replace with machinery/factory image
                alt="Spareon manufacturing facility"
                width={1200} height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section> */}



     

      {/* 5. Vision & Mission Section */}
      <VisionMissionSection />



    </div>
  );
};

// ------------------------------------------------------------------
// Sub-Components
// ------------------------------------------------------------------

const CapabilitiesSection = () => {
const capabilities = [
  {
    id: "01",
    title: "Premium Spare Parts",
    items: [
      "Taiwan Manufactured",
      "High Precision Components",
      "Long Service Life",
    ],
  },
  {
    id: "02",
    title: "Authorized Partnership",
    items: [
      "Official Spareon Taiwan Channel Partner",
      "Genuine Spare Parts",
      "Trusted Supply Network",
    ],
  },
  {
    id: "03",
    title: "Product Expertise",
    items: [
      "Satake Machinery",
      "Buhler Machinery",
      "Rice Mill Solutions",
    ],
  },
  {
    id: "04",
    title: "Quality Assurance",
    items: [
      "Precision Engineering",
      "Strict Quality Control",
      "Reliable Performance",
    ],
  },
  {
    id: "05",
    title: "Fast Delivery",
    items: [
      "Ready Stock in India",
      "Quick Dispatch",
      "Dedicated Customer Support",
    ],
  },
];

  return (
    <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 font-sans antialiased bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-4">
          Our{" "}
          <span className="relative italic font-medium text-[#056483]">
          Expertise
          </span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Delivering dependable rice mill spare parts backed by quality, precision, and reliability.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row fade-up">
        {/* LEFT SIDEBAR */}
        <div classNa0me="xl:w-1/2 bg-[#f4f7f9] p-10 xl:p-14 flex flex-col justify-between relative overflow-hidden rounded-t-3xl xl:rounded-tr-none xl:rounded-l-3xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dce6eb] rounded-full -mr-10 -mt-10 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c8dbe4] rounded-full -mb-20 -ml-20 opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 relative z-10">
            {capabilities.map((cap) => (
              <div key={cap.id} className="group">
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-4">
                  {cap.title}
                </h3>
                <ul className="space-y-1 text-gray-600">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-gray-400">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="xl:w-1/2 px-4 mt-10 xl:mt-0">
          <div className="relative z-10 space-y-4">
            <div className="relative">
              <Image
                src="/Images/Spareon/2.jpeg" // Replace with machinery/spare part image
                alt="Main manufacturing unit"
                width={800}
                height={600}
                className="w-full hidden xl:block h-[400px] object-cover rounded-tl-4xl rounded-br-4xl"
                priority
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-end">
              <div className="w-full">
                <div className="relative">
                  <Image
                    src="/Images/Spareon/1.jpg" // Replace with detail image
                    alt="Industrial product detail 1"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-tl-4xl rounded-br-4xl"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative">
                  <Image
                    src="/blog1.webp" // Replace with detail image
                    alt="Industrial product detail 2"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-tl-4xl rounded-br-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-right">
              <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
                industrial <span className="text-gray-300 mx-2">/</span> components
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionMissionSection = () => {
  const missionPoints = [
    {
      number: "01",
      title: "Our Vision",
      description:
        "To become the most trusted supplier of premium rice mill spare parts by delivering innovative products, superior quality, and dependable service that improve the efficiency and productivity of modern rice milling businesses."
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "To provide genuine, precision-engineered spare parts for Satake and Buhler machinery while maintaining ready stock availability, professional customer support, and long-term partnerships built on quality, reliability, and trust."
    }
  ];

  return (
    <section className="animate-section relative">
      <Image 
        width={1920} 
        height={1080} 
        src="/aboutbg1.webp" // Ensure this bg fits an industrial theme
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" 
        alt="Background" 
      />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-white/90">
        <div className="max-w-3xl mb-16 fade-up">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-gray-400">—</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#056483] pb-2">
              core philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
        Vision & Mission
          </h2>
          <p className="text-lg capitalize text-gray-500 italic font-light border-l-4 border-gray-300 pl-6">
            Strong Parts. Stronger Performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-28 fade-up">
          {missionPoints.map((point, index) => (
            <div key={index} className="group relative p-6">
              <div className="text-6xl font-bold mb-4 text-gray-200 transition-colors">
                {point.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
const philosophyPoints = [
  {
    icon: Shield,
    image: "/premium.png",
    title: "Premium Quality",
    description:
      "Manufactured in Taiwan using advanced technology and strict quality control for maximum durability and precision.",
  },
  {
    icon: Users,
    image: "/partnerships.png",
    title: "Reliable Partnership",
    description:
      "Authorized channel partner providing genuine spare parts with ready stock availability and dependable support.",
  },
  {
    icon: Leaf,
    image: "/customer.png",
    title: "Customer Commitment",
    description:
      "Dedicated to helping rice millers reduce downtime, improve productivity, and maintain uninterrupted operations.",
  },
];
  
  return (
    <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#056483] px-4 py-2 mb-4">
            Our Philosophy
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-4">
       Why Choose        <span className="relative italic font-medium text-[#056483]">Spareon</span>
      {" "}  India  </h2>
          
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Every product we supply is driven by quality, reliability, and customer commitment.   </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 fade-up">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="relative text-center p-8 border border-gray-200 hover:border-[#056483] transition-all duration-500 group bg-white hover:-translate-y-2 rounded-2xl"
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${point.bgColor} rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative w-20 h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 overflow-hidden border-2 border-gray-100 group-hover:border-[#056483]/20">
                    <Image
                      src={point.image}
                      alt={point.title}
                      width={50}
                      height={50}
                      className="object-contain w-10 h-10 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 group-hover:text-[#056483] transition-colors duration-300">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm px-4">
                  {point.description}
                </p>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#056483] group-hover:w-16 transition-all duration-500" />
                
                <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                  <Icon className="w-32 h-32 text-gray-800" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;