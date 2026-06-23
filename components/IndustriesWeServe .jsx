"use client";

import React from "react";
import {
  GiCow,
  GiFlour,
  GiGrain,
  GiSunflower,
  GiWheat,
} from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Rice Mills",
      icon: GiGrain,
    },
    {
      title: "Flour Mills",
      icon: GiFlour,
    },
    {
      title: "Pulses Processing",
      icon: GiSunflower,
    },
    {
      title: "Food Processing",
      icon: MdFoodBank,
    },
    {
      title: "Animal Feed",
      icon: GiCow,
    },
    {
      title: "Others",
      icon: HiOutlineDotsHorizontal,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/60 bg-[#031d31] text-white py-10">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,#031d31_0%,#031d31_42%,#03345f_72%,#062b50_100%)]" />

      <div className="pointer-events-none absolute left-[5%] top-[-80px] h-[230px] w-[500px] rotate-[-8deg] rounded-[50%] border border-cyan-300/10" />

      <div className="pointer-events-none absolute left-[15%] top-[-110px] h-[270px] w-[650px] rotate-[-7deg] rounded-[50%] border border-cyan-300/[0.07]" />

      {/* Subtle diagonal lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_5%,rgba(36,179,255,0.08)_32%,transparent_52%)]" />

      <div className="relative mx-auto flex min-h-[160px] max-w-[1600px] items-stretch">
        {/* Left content */}
        <div className="relative z-10 flex w-full flex-col justify-center px-5 py-7 lg:w-[70%] lg:px-12 xl:px-20">
          {/* Heading */}
          <h2 className="mb-6 text-center  text-3xl  font-sans font-bold uppercase tracking-[0.04em] text-white sm:text-base">
            Industries <span className="text-cyan-300">We Serve</span>
          </h2>

          {/* Industry items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group relative flex min-h-[80px]   flex-col items-center justify-center px-3 text-center"
                >
                  {/* Vertical divider */}
                  {index !== industries.length - 1 && (
                    <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent sm:block" />
                  )}

                  <div className="mb-2 flex h-12 w-12 items-center justify-center text-[30px] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:text-cyan-300">
                    <Icon />
                  </div>

                  <p className="text-[15px] font-medium leading-4 text-white/90 transition-colors duration-300 group-hover:text-cyan-200 sm:text-xs">
                    {industry.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right product visual */}
        <div className="relative hidden w-[30%] items-center justify-center overflow-hidden lg:flex">
          {/* Glow */}
          <div className="absolute bottom-[-60px] right-[5%] h-[190px] w-[330px] rounded-[50%] bg-cyan-400/20 blur-[45px]" />

          {/* Blue platform rings */}
          <div className="absolute bottom-5 right-[6%] h-[52px] w-[310px] rounded-[50%] border-2 border-cyan-300/60 shadow-[0_0_18px_rgba(34,211,238,0.75),inset_0_0_18px_rgba(34,211,238,0.25)]" />

          <div className="absolute bottom-[24px] right-[9%] h-[36px] w-[250px] rounded-[50%] border border-cyan-200/30" />

          {/* Replace with your transparent product image */}
          <img
            src="/banner2.png"
            alt="Industrial spare parts"
            className="relative z-10 h-[245px] w-full max-w-[390px] object-contain object-bottom drop-shadow-[0_18px_22px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* Mobile product image */}
      <div className="relative flex justify-center px-5 pb-7 lg:hidden">
        <div className="absolute bottom-5 h-10 w-64 rounded-[50%] border border-cyan-300/50 shadow-[0_0_18px_rgba(34,211,238,0.5)]" />

        <img
          src="/banner2.png"
          alt="Industrial spare parts"
          className="relative z-10 h-40 w-full max-w-xs object-contain drop-shadow-[0_15px_18px_rgba(0,0,0,0.45)]"
        />
      </div>
    </section>
  );
};

export default IndustriesWeServe;