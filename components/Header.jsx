"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const socialLinks = [
    { name: "Facebook", href: "/", icon: <FaFacebookF /> },
    { name: "Instagram", href: "/", icon: <FaInstagram /> },
    { name: "YouTube", href: "/", icon: <FaYoutube /> },
  ];

  const closeMenu = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="absolute top-0 z-50 w-full ">
      {/* Top Contact Bar - Hidden on small screens */}
      <div className="hidden lg:block px-4 md:px-12 xl:px-40 relative overflow-hidden p-bg text-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-16 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />

        {/* Main Content */}
        <div className="relative mx-auto flex container items-center justify-between py-3">
          {/* Contact Information */}
          <div className="flex items-center gap-5 text-sm">
            <a
              href="tel:+917416000071"
              className="group flex items-center gap-2 text-white/85 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20">
                <IoCallOutline className="text-base" />
              </span>
              <span className="whitespace-nowrap">
                +91 74160-00071, +91 99961-00671
              </span>
            </a>

            {/* Separator */}
            <span className="h-4 w-px bg-white/20" />

            <a
              href="mailto:yeeson.precision@gmail.com"
              className="group flex items-center gap-2 text-white/85 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20">
                <IoIosMail className="text-base" />
              </span>
              <span>yeeson.precision@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60">Follow us</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#06384a]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between py-4 px-4 md:px-12 xl:px-40">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group relative flex shrink-0 items-center "
          aria-label="Spareon Home"
        >
          <img
            src="/logo2.webp"
            alt="Spareon spare parts and accessories"
            className="h-full w-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 xl:flex">
          <Link
            href="/"
            className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
          >
            <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
            Home
            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
          </Link>

          <Link
            href="/about"
            className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
          >
            <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
            About Us
            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
          </Link>

          {/* Desktop Dropdown (Hover) */}
          <div
            className="relative"
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <button className="group relative flex items-center gap-1.5 px-3 py-3 text-sm font-medium uppercase tracking-[0.11em] text-white transition-colors duration-300 hover:text-[#66bfe2]">
              <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#ef233c] transition-all duration-300 group-hover:scale-100" />
              Brands
              <FaChevronDown
                className={`text-xs text-white/70 transition-transform duration-300 group-hover:text-[#66bfe2] ${
                  isDesktopDropdownOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
            </button>

            {/* Dropdown Menu Box */}
            <div
              className={`absolute top-full left-0 pt-4 w-48 transition-all duration-300 z-50 ${
                isDesktopDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden p-1.5">
                <Link
                  href="/satake"
                  className="px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-[#66bfe2] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Satake
                </Link>
                <Link
                  href="/buhler"
                  className="px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-[#66bfe2] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Bühler
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/blogs"
            className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
          >
            <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
            Blog
            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
          </Link>

          <Link
            href="/contact"
            className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
          >
            <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
            Contact
            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="group relative border-2 border-[#0a7599] flex items-center gap-3 overflow-hidden rounded-full p-bg px-6 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,56,74,0.22)] transition-all duration-300 hover:shadow-[0_18px_35px_rgba(6,56,74,0.3)]"
          >
            <span className="absolute inset-0 translate-x-[-105%] bg-linear-to-r from-[#0a7599] to-[#056483] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">Get a Quote</span>
            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/90 group-hover:text-black/90 transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight className="text-xs " />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button - Custom Animated Hamburger */}
        <div className="xl:hidden relative z-80">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="relative inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-all duration-200 group"
            aria-expanded={isSidebarOpen}
          >
            <span className="sr-only">Open main menu</span>

            {/* Animated Hamburger Icon */}
            <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
              <span
                className={`w-5 h-0.5 bg-white transform transition-all duration-300 ${
                  isSidebarOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isSidebarOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white transform transition-all duration-300 ${
                  isSidebarOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#06384a]/70 z-60 xl:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-70 transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between py-4 px-2 border-b border-slate-100">
          <Link href="/" onClick={closeMenu}>
            <img
              src="/logo3.png"
              alt="Logo"
              className="h-16 w-auto object-cover"
            />
          </Link>
          {/* <button
            onClick={closeMenu}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-[#ef233c] transition-colors"
          >
            <FaTimes size={20} />
          </button> */}
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 overflow-y-auto py-2 px-4 flex flex-col">
          <Link
            href="/"
            onClick={closeMenu}
            className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
          >
            About Us
          </Link>

          {/* Mobile Accordion Dropdown */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="w-full flex items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
            >
              Brands
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isMobileDropdownOpen ? "rotate-180 text-[#66bfe2]" : ""
                }`}
              />
            </button>
            <div
              className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileDropdownOpen
                  ? "max-h-48 opacity-100 mb-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/satake"
                onClick={closeMenu}
                className="pl-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-[#66bfe2] transition-colors"
              >
                Satake
              </Link>
              <Link
                href="/buhler"
                onClick={closeMenu}
                className="pl-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-[#66bfe2] transition-colors"
              >
                Bühler
              </Link>
            </div>
          </div>

          <Link
            href="/blogs"
            onClick={closeMenu}
            className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#06384a] to-[#0c5b77] px-5 py-3.5 text-sm font-semibold text-white shadow-lg"
          >
            Request a Quote
            <FaArrowRight className="text-xs" />
          </Link>

          {/* Mobile Social Links */}
          <div className="mt-8 flex items-center justify-center gap-3 border-t border-slate-100 pt-6 pb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#66bfe2] hover:bg-[#66bfe2] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





// "use client";

// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaBars,
//   FaTimes,
//   FaArrowRight,
//   FaChevronDown,
// } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { IoCallOutline } from "react-icons/io5";
// import Link from "next/link";
// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

//   const socialLinks = [
//     { name: "Facebook", href: "#", icon: <FaFacebookF /> },
//     { name: "Instagram", href: "#", icon: <FaInstagram /> },
//     { name: "YouTube", href: "#", icon: <FaYoutube /> },
//   ];

//   const closeMenu = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <header className="absolute top-0 z-50 w-full px-4 md:px-12 lg:px-24 xl:px-40">
//       {/* Top Contact Bar */}
//  {/* Top Contact Bar - Hidden on small screens */}
// <div className="hidden lg:block relative overflow-hidden p-bg text-white">
//   {/* Decorative background */}
//   <div className="pointer-events-none absolute -left-16 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
//   <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />

//   {/* Main Content */}
//   <div className="relative mx-auto flex container items-center justify-between py-3">
    
//     {/* Contact Information */}
//     <div className="flex items-center gap-5 text-sm">
//       <a
//         href="tel:+917416000071"
//         className="group flex items-center gap-2 text-white/85 transition-colors duration-300 hover:text-white"
//       >
//         <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20">
//           <IoCallOutline className="text-base" />
//         </span>
//         <span className="whitespace-nowrap">
//           +91 74160-00071, +91 99961-00671
//         </span>
//       </a>

//       {/* Separator */}
//       <span className="h-4 w-px bg-white/20" />

//       <a
//         href="mailto:yeeson.precision@gmail.com"
//         className="group flex items-center gap-2 text-white/85 transition-colors duration-300 hover:text-white"
//       >
//         <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20">
//           <IoIosMail className="text-base" />
//         </span>
//         <span>yeeson.precision@gmail.com</span>
//       </a>
//     </div>

//     {/* Social Links */}
//     <div className="flex items-center gap-3">
//       <span className="text-xs text-white/60">Follow us</span>
//       <div className="flex items-center gap-2">
//         {socialLinks.map((social) => (
//           <a
//             key={social.name}
//             href={social.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={social.name}
//             className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#06384a]"
//           >
//             {social.icon}
//           </a>
//         ))}
//       </div>
//     </div>
    
//   </div>
// </div>

//       {/* Main Navigation */}
      
//     <div className="flex items-center justify-between py-4">
//   {/* Logo */}
//   <Link
//     href="#home"
//     onClick={closeMenu}
//     className="group relative flex shrink-0 items-center"
//     aria-label="Spareon Home"
//   >
//     <img
//       src="/logo.webp"
//       alt="Spareon spare parts and accessories"
//       className="h-16 w-auto object-cover"
//     />
//   </Link>

//   {/* Desktop Navigation */}
//   <nav className="hidden items-center gap-3 lg:flex">
//     <Link
//       href="#home"
//       className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
//     >
//       <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
//       Home
//       <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
//     </Link>

//     <Link
//       href="#aboutus"
//       className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
//     >
//       <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
//       About Us
//       <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
//     </Link>

//     {/* Desktop Dropdown (Hover) */}
//     <div
//       className="relative"
//       onMouseEnter={() => setIsDesktopDropdownOpen(true)}
//       onMouseLeave={() => setIsDesktopDropdownOpen(false)}
//     >
//       <button className="group relative flex items-center gap-1.5 px-3 py-3 text-sm font-medium uppercase tracking-[0.11em] text-white transition-colors duration-300 hover:text-[#66bfe2]">
//         <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#ef233c] transition-all duration-300 group-hover:scale-100" />
//         Brands
//         <FaChevronDown
//           className={`text-xs text-white/70 transition-transform duration-300 group-hover:text-[#66bfe2] ${
//             isDesktopDropdownOpen ? "rotate-180" : ""
//           }`}
//         />
//         <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
//       </button>

//       {/* Dropdown Menu Box */}
//       <div
//         className={`absolute top-full left-0 pt-4 w-48 transition-all duration-300 z-50 ${
//           isDesktopDropdownOpen
//             ? "opacity-100 visible translate-y-0"
//             : "opacity-0 invisible -translate-y-2"
//         }`}
//       >
//         <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden p-1.5">
//           <Link
//             href="#satake"
//             className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#66bfe2] hover:bg-slate-50 rounded-lg transition-colors"
//           >
//             Satake
//           </Link>
//           <Link
//             href="#buhler"
//             className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#66bfe2] hover:bg-slate-50 rounded-lg transition-colors"
//           >
//             Bühler
//           </Link>
//         </div>
//       </div>
//     </div>

//     <Link
//       href="#blog"
//       className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
//     >
//       <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
//       Blog
//       <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
//     </Link>

//     <Link
//       href="#contact"
//       className="group relative flex items-center gap-2 px-3 py-3 text-sm font-medium uppercase text-white transition-colors duration-300 hover:text-[#66bfe2]"
//     >
//       <span className="h-1.5 w-1.5 scale-0 rounded-full bg-[#66bfe2] transition-all duration-300 group-hover:scale-100" />
//       Contact
//       <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#66bfe2] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
//     </Link>
//   </nav>

//   {/* Desktop CTA */}
//   <div className="hidden lg:block">
//     <Link
//       href="#contact"
//       className="group relative border-2 border-[#056483] flex items-center gap-3 overflow-hidden rounded-full p-bg px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,56,74,0.22)] transition-all duration-300 hover:shadow-[0_18px_35px_rgba(6,56,74,0.3)]"
//     >
//       <span className="absolute inset-0 translate-x-[-105%] bg-linear-to-r from-[#66bfe2] to-[#056483] transition-transform duration-500 group-hover:translate-x-0" />
//       <span className="relative z-10">Get a Quote</span>
//       <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
//         <FaArrowRight className="text-xs" />
//       </span>
//     </Link>
//   </div>

//   {/* Mobile Menu Button - Transparent Background with Slanting Animation */}
//   <button
//     type="button"
//     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//     aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
//     aria-expanded={isSidebarOpen}
//     className="relative z-[80] flex h-10 w-10 items-center justify-center text-white transition-colors duration-300 hover:text-[#66bfe2] lg:hidden focus:outline-none"
//   >
//     {/* Hamburger Icon */}
//     <span
//       className={`absolute transition-all duration-300 ${
//         isSidebarOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
//       }`}
//     >
//       <FaBars className="text-[26px]" />
//     </span>
    
//     {/* Cross Icon */}
//     <span
//       className={`absolute transition-all duration-300 ${
//         isSidebarOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
//       }`}
//     >
//       <FaTimes className="text-[28px]" />
//     </span>
//   </button>
// </div>

//       {/* Mobile Sidebar Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-[#06384a]/70 z-60 lg:hidden backdrop-blur-sm transition-opacity"
//           onClick={closeMenu}
//         />
//       )}

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between py-4 px-2 border-b border-slate-100">
//           <a href="#home" onClick={closeMenu}>
//             <img
//               src="/logo.webp"
//               alt="Logo"
//               className="h-16 w-auto object-cover"
//             />
//           </a>
//           <button
//             onClick={closeMenu}
//             className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-[#ef233c] transition-colors"
//           >
//             <FaTimes size={20} />
//           </button>
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex-1 overflow-y-auto py-2 px-4 flex flex-col">
//           <a
//             href="#home"
//             onClick={closeMenu}
//             className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
//           >
//             Home
//           </a>
//           <a
//             href="#aboutus"
//             onClick={closeMenu}
//             className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
//           >
//             About Us
//           </a>

//           {/* Mobile Accordion Dropdown */}
//           <div className="border-b border-slate-100">
//             <button
//               onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//               className="w-full flex items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
//             >
//               Brands
//               <FaChevronDown
//                 className={`transform transition-transform duration-300 ${
//                   isMobileDropdownOpen ? "rotate-180 text-[#66bfe2]" : ""
//                 }`}
//               />
//             </button>
//             <div
//               className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
//                 isMobileDropdownOpen
//                   ? "max-h-48 opacity-100 mb-2"
//                   : "max-h-0 opacity-0"
//               }`}
//             >
//               <a
//                 href="#satake"
//                 onClick={closeMenu}
//                 className="pl-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-[#66bfe2] transition-colors"
//               >
//                 Satake
//               </a>
//               <a
//                 href="#buhler"
//                 onClick={closeMenu}
//                 className="pl-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-[#66bfe2] transition-colors"
//               >
//                 Bühler
//               </a>
//             </div>
//           </div>

//           <a
//             href="#blog"
//             onClick={closeMenu}
//             className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
//           >
//             Blog
//           </a>
//           <a
//             href="#contact"
//             onClick={closeMenu}
//             className="py-4 border-b border-slate-100 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-colors hover:text-[#66bfe2]"
//           >
//             Contact
//           </a>

//           {/* Mobile CTA */}
//           <a
//             href="#contact"
//             onClick={closeMenu}
//             className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#06384a] to-[#66bfe2] px-5 py-3.5 text-sm font-semibold text-white shadow-lg"
//           >
//             Request a Quote
//             <FaArrowRight className="text-xs" />
//           </a>

//           {/* Mobile Social Links */}
//           <div className="mt-8 flex items-center justify-center gap-3 border-t border-slate-100 pt-6 pb-6">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.name}
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#66bfe2] hover:bg-[#66bfe2] hover:text-white"
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;