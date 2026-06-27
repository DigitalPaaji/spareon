"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// --- Success Popup Component ---
const SuccessPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
    <div className="absolute inset-0 bg-[#0B1A30]/60 backdrop-blur-sm" onClick={onClose}></div>
    
    <div className="relative bg-white p-10 max-w-md w-full mx-auto transform transition-all animate-fadeInScale rounded-2xl shadow-2xl border-t-4 border-[#056483]">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 bg-gradient-to-br from-[#f4f7f9] to-[#dce6eb] rounded-full mb-6 shadow-inner">
          <CheckCircle2 className="h-10 w-10 text-[#056483]" />
        </div>
        <h3 className="text-3xl font-light text-gray-900 mb-3">Thank You!</h3>
        <p className="text-gray-500 mb-8 leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-4 bg-[#056483] text-white font-medium tracking-wider uppercase text-sm hover:bg-[#3a88db] transition-colors duration-300 rounded-sm"
        >
          Close Window
        </button>
      </div>
    </div>
  </div>
);

// --- Main Contact Page Component ---
const ContactPage = () => {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // GSAP Animation Logic
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

  const handelInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://sendmail.digitalpaaji.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formdata: formData,
            sendto: ["info@spareonindia.com"], // Updated to Spareon email
            subject: "Website Query",
          }),
        }
      );
      setShowSuccess(true);
      setIsSubmitting(false);
      setFormData({ Name: "", Email: "", Phone: "", Subject: "", Message: "" });
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div ref={containerRef} className="bg-white text-[#0B1A30] overflow-hidden font-sans min-h-screen">
        
        {/* --- Hero Section --- */}
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
                Contact Us
              </h1>
              <div className="fade-up w-24 h-1 bg-gradient-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
              
              <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#56b1cf]">Contact Us</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Redesigned Contact Details Section --- */}
        <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16 fade-up">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#056483] px-4 py-2 mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-gray-900">
              We are here to <span className="relative italic font-medium text-[#056483]">Assist You</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions regarding our premium rice milling machinery spares? Reach out to our technical team for prompt support and inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Location Card */}
            <div className="fade-up group p-8 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(5,100,131,0.1)] hover:-translate-y-2 rounded-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-[#f4f7f9] transition-colors duration-500"></div>
              <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#056483] group-hover:text-white transition-all duration-500">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Head Office</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                C-163, Focal Point,<br />
                Patiala, Punjab - 147001
              </p>
            </div>

            {/* Phone Card */}
            <div className="fade-up group p-8 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(5,100,131,0.1)] hover:-translate-y-2 rounded-2xl transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: "100ms" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-[#f4f7f9] transition-colors duration-500"></div>
              <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#056483] group-hover:text-white transition-all duration-500">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Support</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                +91 9459 101 919<br />
                Mon-Sat: 09:00 AM - 06:00 PM
              </p>
            </div>

            {/* Email Card */}
            <div className="fade-up group p-8 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(5,100,131,0.1)] hover:-translate-y-2 rounded-2xl transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: "200ms" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-10 group-hover:bg-[#f4f7f9] transition-colors duration-500"></div>
              <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#056483] group-hover:text-white transition-all duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Address</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                info@spareonindia.com<br />
                support@spareonindia.com
              </p>
            </div>

          </div>
        </section>

        {/* --- Form & Map Layout --- */}
        <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 pb-24">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">
            
            {/* Form Section */}
            <div className="fade-up w-full lg:w-5/12 bg-[#f4f7f9] p-10 lg:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#dce6eb] rounded-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-gray-900">
                  Send a Message
                </h2>
                <p className="text-gray-500 mb-10 text-sm">
                  Fill out the form below and our technical experts will get back to you shortly.
                </p>

                <form onSubmit={handelsubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="Name"
                      required
                      value={formData.Name}
                      onChange={handelInput}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="Email"
                      required
                      value={formData.Email}
                      onChange={handelInput}
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="Phone"
                      required
                      value={formData.Phone}
                      onChange={handelInput}
                      placeholder="Your Phone Number"
                      className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="Subject"
                      required
                      value={formData.Subject}
                      onChange={handelInput}
                      placeholder="Subject"
                      className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div className="relative pt-2">
                    <textarea
                      name="Message"
                      required
                      value={formData.Message}
                      onChange={handelInput}
                      placeholder="How can we help you?"
                      rows="3"
                      className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] transition-colors placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center justify-center gap-3 w-full bg-[#056483] text-white px-8 py-4 font-medium tracking-widest uppercase hover:bg-[#0A162B] transition-all duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="fade-up w-full lg:w-7/12 min-h-[400px] lg:min-h-full overflow-hidden relative shadow-lg group">
              <div className="absolute inset-0 bg-[#056483]/10 pointer-events-none z-10 "></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4271.373247928821!2d76.42175519999999!3d30.373736199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102708e4b05f43%3A0x5cac00a43cd7b8f5!2sFocal%20Point%2C%20Patiala!5e1!3m2!1sen!2sin!4v1773475102579!5m2!1sen!2sin"
                className="w-full h-full object-cover "
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </section>

      </div>

      {showSuccess && (
        <SuccessPopup
          message="Your message has been successfully sent. Our team will review your inquiry and get back to you shortly."
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* Tiny extra style for popup animation */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default ContactPage;