"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutus" },
    { name: "Satake", href: "#satake" },
    { name: "Bühler", href: "#buhler" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <FaYoutube />,
    },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      {/* Top Contact Bar */}
      <div className="relative overflow-hidden p-bg text-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-16 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative mx-auto flex container flex-col items-center justify-between gap-3 px-4 py-2.5  md:flex-row ">
          {/* Contact Information */}
          <div className="flex w-full flex-col items-center gap-2 text-[12px] sm:flex-row sm:justify-center sm:gap-5 sm:text-sm md:w-auto md:justify-start">
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

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

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
          <div className="hidden items-center gap-3 md:flex">
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
      <div className="">
        <div className="mx-auto flex container items-center justify-between px-4 py-3">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group relative flex shrink-0 items-center"
            aria-label="Spareon Home"
          >
            <img
              src="/logo.webp"
              alt="Spareon spare parts and accessories"
              className="h-12 w-auto object-contain invert sm:h-14 lg:h-[68px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-2 px-3 py-3 text-[13px] font-bold uppercase tracking-[0.11em] text-white transition-colors duration-300 hover:text-[#0784b5]"
              >
                <span
                  className={`h-1.5 w-1.5 scale-0 rounded-full transition-all duration-300 group-hover:scale-100 ${
                    index === 2 || index === 3
                      ? "bg-[#ef233c]"
                      : "bg-[#0784b5]"
                  }`}
                />

                {link.name}

                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0784b5] to-[#ef233c] transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full p-bg px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,56,74,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(6,56,74,0.3)]"
            >
              <span className="absolute inset-0 translate-x-[-105%] bg-gradient-to-r from-[#0784b5] to-[#056483] transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10">Get a Quote</span>

              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight className="text-xs" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            aria-label={
              isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#06384a] text-lg text-white shadow-lg transition-all duration-300 hover:bg-[#0784b5] lg:hidden"
          >
            <span
              className={`absolute transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <FaBars />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            >
              <FaTimes />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden bg-white transition-all duration-500 ease-in-out lg:hidden ${
            isMobileMenuOpen
              ? "max-h-[650px] border-t border-slate-200 opacity-100"
              : "max-h-0 border-t border-transparent opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
            <nav className="flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.11em] text-slate-700 transition-all duration-300 hover:pl-2 hover:text-[#0784b5] ${
                    index !== links.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px] text-slate-500 transition-all duration-300 group-hover:bg-[#06384a] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {link.name}
                  </span>

                  <FaArrowRight className="-translate-x-2 text-xs text-[#ef233c] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#06384a] to-[#0784b5] px-5 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              Request a Quote
              <FaArrowRight className="text-xs" />
            </a>

            {/* Mobile Social Links */}
            <div className="mt-5 flex items-center justify-center gap-3 border-t border-slate-100 pt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#0784b5] hover:bg-[#0784b5] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>



    </header>
  );
};

export default Header;