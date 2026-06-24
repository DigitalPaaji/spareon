"use client";

import React from "react";
import {
  FaGlobe,
  FaTruckFast,
  FaGears,
  FaShieldHalved,
  FaCheckDouble,
  FaHeadset,
  FaScrewdriverWrench,
  FaHandshake,
} from "react-icons/fa6";

const OurStrengths = () => {
  const strengths = [
    {
      id: 1,
      title: "International Quality",
      description:
        "Premium products manufactured in Taiwan to meet strict global standards.",
      icon: FaGlobe,
    },
    {
      id: 2,
      title: "Robust Supply Chain",
      description:
        "Strong stocking and distribution network throughout India.",
      icon: FaTruckFast,
    },
    {
      id: 3,
      title: "Industry Expertise",
      description:
        "Deep understanding of professional rice milling machinery.",
      icon: FaGears,
    },
    {
      id: 4,
      title: "High Durability",
      description:
        "Long-lasting components engineered for demanding operations.",
      icon: FaShieldHalved,
    },
    {
      id: 5,
      title: "Proven Reliability",
      description:
        "Consistent product performance you can depend on every day.",
      icon: FaCheckDouble,
    },
    {
      id: 6,
      title: "Dedicated Support",
      description:
        "Responsive technical assistance for professional rice millers.",
      icon: FaHeadset,
    },
    {
      id: 7,
      title: "Specialized Focus",
      description:
        "Focused expertise in Bühler and Satake machinery parts.",
      icon: FaScrewdriverWrench,
    },
    {
      id: 8,
      title: "Long-Term Partnerships",
      description:
        "Committed to trusted and lasting customer relationships.",
      icon: FaHandshake,
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 md:px-12 lg:px-24 xl:px-40 py-24">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_42%)]" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-600">
            Why Choose Us
          </p>

          <h2 className="text-2xl font-bold uppercase tracking-[0.04em] text-[#173451] sm:text-3xl">
            Our Core <span className="text-cyan-600">Strengths</span>
          </h2>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden lg:block">
          {/* Connecting wave */}
          <svg
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 h-[95px] w-full"
            aria-hidden="true"
          >
            <path
              d="M0 54
                 C70 54, 95 36, 170 36
                 C245 36, 280 70, 360 70
                 C440 70, 470 38, 540 38
                 C610 38, 655 67, 720 67
                 C790 67, 820 34, 900 34
                 C980 34, 1010 67, 1080 67
                 C1155 67, 1195 39, 1265 39
                 C1335 39, 1370 55, 1440 55"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="2"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-8">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group flex flex-col items-center px-3 text-center"
                >
                  {/* Icon circle */}
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-sky-300 bg-white text-[27px] text-sky-600 shadow-[0_6px_20px_rgba(14,165,233,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_15px_35px_rgba(6,182,212,0.24)]">
                    <Icon />
                  </div>

                  <h3 className="mt-6 min-h-[40px] text-sm font-bold leading-5 text-[#173451]">
                    {item.title}
                  </h3>

                  <p className="max-w-[165px] text-sm leading-[1.65] text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet and mobile layout */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:hidden">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative flex items-start gap-5 sm:flex-col sm:items-center sm:text-center"
              >
                {/* Mobile connecting line */}
                {index !== strengths.length - 1 && (
                  <span className="absolute left-[31px] top-[68px] h-[calc(100%+20px)] w-px bg-gradient-to-b from-sky-300 to-transparent sm:hidden" />
                )}

                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-sky-300 bg-white text-2xl text-sky-600 shadow-sm transition-all duration-500 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#173451]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom navy line */}
      {/* <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#173451]" /> */}
    </section>
  );
};

export default OurStrengths;