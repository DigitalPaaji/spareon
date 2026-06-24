"use client";

import React from "react";
import Link from "next/link";
import blogData from "./blogs.json";
import {
  FaArrowRight,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";

const BlogSection = () => {
  const blogs = (blogData?.blogs || [])
    .filter((blog) => blog.isPublished !== false)
    .slice(0, 4);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f7fafc] px-4 md:px-12 lg:px-24 xl:px-40 py-24">
      {/* Background decoration (optional, kept subtle) */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#1762A7]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0B1A30]/5 blur-[120px]" />

      <div className="relative mx-auto w-full">
        
        {/* Heading Section */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl flex flex-col items-start">
            
            {/* Main Heading */}
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#0B1A30] tracking-wide uppercase mb-4">
              LATEST FROM OUR <span className="text-[#1762A7]">BLOG</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-[15px] md:text-base leading-[1.8] max-w-xl">
              Explore maintenance tips, product knowledge, and useful insights
              for professional rice milling operations.
            </p>
          </div>

          {/* Styled Button matching your reference */}
          <div className="w-fit">
            <Link
              href="/blogs"
              className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#056483] to-[#063B73] pl-6 pr-1.5 py-1.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,123,235,0.3)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(16,123,235,0.45)]"
            >
              {/* Hover Sweep Effect */}
              <span className="absolute inset-0 translate-x-[-105%] bg-gradient-to-r from-[#056483] to-[#063B73] transition-transform duration-500 group-hover:translate-x-0" />
              
              {/* Button Text */}
              <span className="relative z-10 tracking-wide uppercase text-[11px] md:text-xs">View all articles</span>
              
              {/* White Circle Icon Container */}
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
                <FaArrowRight className="text-[10px] text-[#107BEB] ml-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {blogs.map((blog, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={blog.id || blog.slug}
                className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1762A7]/30 hover:shadow-xl ${
                  isFeatured ? "lg:row-span-3" : ""
                }`}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className={
                    isFeatured
                      ? "flex h-full min-h-[500px] flex-col"
                      : "grid min-h-[220px] grid-cols-1 sm:grid-cols-[42%_58%]"
                  }
                >
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isFeatured ? "min-h-[300px] flex-1" : "min-h-[220px]"
                    }`}
                  >
                    {/* Image - SCALING REMOVED AS REQUESTED */}
                    <img
                      src={blog.image || "https://image.made-in-china.com/2f0j00QvcRgoCMZsqh/Satake-Series-Vertical-Rice-Whitener-Emery-Roller.webp"}
                      alt={blog.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30]/80 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B1A30] shadow-sm backdrop-blur-md">
                      {blog.category}
                    </span>

                    {/* Featured Badge */}
                    {isFeatured && (
                      <span className="absolute bottom-5 left-5 rounded-full bg-[#1762A7] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
                        Featured Article
                      </span>
                    )}
                  </div>

                  {/* Content Section */}
                  <div
                    className={`relative flex flex-col justify-between ${
                      isFeatured ? "p-7 sm:p-8" : "p-5 sm:p-6"
                    }`}
                  >
                    {/* Background faint number */}
                    <span className="pointer-events-none absolute right-5 top-2 text-7xl font-bold text-[#0B1A30]/5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      {/* Meta Info */}
                      <div className="mb-4 flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-500">
                        <span className="flex items-center gap-2">
                          <FaCalendarDays className="text-[#1762A7]" />
                          {formatDate(blog.publishedAt)}
                        </span>

                        <span className="flex items-center gap-2">
                          <FaClock className="text-[#1762A7]" />
                          {blog.readingTime || "5 min read"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-bold leading-tight text-[#0B1A30] transition-colors duration-300 group-hover:text-[#1762A7] ${
                          isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                        }`}
                      >
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p
                        className={`mt-3 text-gray-600 ${
                          isFeatured
                            ? "text-sm leading-7 sm:text-base"
                            : "line-clamp-2 text-sm leading-6"
                        }`}
                      >
                        {blog.excerpt || blog.description}
                      </p>
                    </div>

                    {/* Read Article Link Area */}
                    <div className="relative z-10 mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#0B1A30]">
                        Read article
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1A30] text-xs text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#1762A7]">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Fallback Empty State */}
        {blogs.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <p className="text-sm text-slate-500 font-medium">
              No published blogs are currently available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;