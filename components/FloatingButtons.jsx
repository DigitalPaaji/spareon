"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-999 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919459101919?text=Hi%20Spareon%20India,%20I%20need%20information%20about%20your%20rice%20mill%20spare%20parts."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp className="text-3xl group-hover:rotate-12 transition-transform" />
      </a>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#056483] text-white shadow-xl transition-all duration-300 hover:bg-[#0A162B] hover:scale-110 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}