import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    {name:"Privacy Policy", href: "/privacy-policy"},

  ];

  const productLinks = [
    { name: "Satake Spare Parts", href: "/satake" },
    { name: "Bühler Spare Parts", href: "/buhler" },
    // { name: "Whitener Parts", href: "/products/whitener-parts" },
    // { name: "Silky Polisher Parts", href: "/products/silky-parts" },
    // { name: "Husker Spare Parts", href: "/products/husker-parts" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/p/191eHXKm4Q/",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
    },
  ]; 

  return (
    <footer className="px-4 md:px-12 lg:px-24 xl:px-40 pt-24 relative overflow-hidden bg-[#031d31] text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Contact CTA */}
      <div className="relative border-b border-white/10  pb-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Need reliable spare parts?
            </p>

            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
              Talk to our rice mill spare parts experts.
            </h2>
          </div>

          <div className="">
          <Link
            href="/contact"
            className="group w-fit relative border-2 border-[#0a7599] flex items-center gap-3 overflow-hidden rounded-full p-bg px-6 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(6,56,74,0.22)] transition-all duration-300 hover:shadow-[0_18px_35px_rgba(6,56,74,0.3)]"
          >
            <span className="absolute inset-0 translate-x-[-105%] bg-linear-to-r from-[#0a7599] to-[#056483] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">Contact us</span>
            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/90 group-hover:text-black/90 transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight className="text-xs " />
            </span>
          </Link>
        </div>
       
        </div>
      </div>

      {/* Footer content */}
      <div className="relative py-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_1.15fr]">
          
            
          <div>
            <Link href="/" className="inline-flex items-end">
             <img src="/logo2.webp" alt="" className="h-auto w-full" />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Premium rice mill spare parts for Satake and Bühler machinery,
              engineered for precision, durability and reliable performance.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#031d31]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <FooterHeading title="Quick Links" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <FooterHeading title="Our Products" />

            <ul className="mt-6 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400/70 transition-transform duration-300 group-hover:scale-150" />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading title="Contact Us" />

            <div className="mt-6 space-y-5">
              <ContactItem
                icon={FaEnvelope}
                label="Email"
                value="yeeson.precision@gmail.com"
                href="mailto:yeeson.precision@gmail.com"
              />

              <ContactItem
                icon={FaPhone}
                label="Phone"
                value="+91 74160-00071"
                href="tel:+917416000071"
              />

              <ContactItem
                icon={FaLocationDot}
                label="Location"
                value="Serving rice millers across India"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Spareon India. All rights reserved. Designed by <a target="_blank" href="https://digimagnifiko.com/" className="text-amber-300">DigiMagnifiko </a>
          </p>

          <div className="flex items-center gap-5 text-xs text-slate-500">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-cyan-300"
            >
              Privacy Policy
            </Link>


          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterHeading = ({ title }) => {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>

      <div className="mt-3 h-px w-8 bg-cyan-400" />
    </div>
  );
};

const ContactItem = ({ icon: Icon, label, value, href }) => {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-cyan-300">
        <Icon />
      </span>

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-sm leading-5 text-slate-300 transition-colors duration-300 group-hover:text-white">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group flex items-start gap-3">
        {content}
      </Link>
    );
  }

  return <div className="flex items-start gap-3">{content}</div>;
};

export default Footer;