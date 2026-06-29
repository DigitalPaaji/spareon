"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  ChevronRight,
  Tag,
  Clock
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// 1. Import your JSON file (adjust the relative path based on your folder structure)
import blogData from "../../components/blogs.json";

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const containerRef = useRef(null);

  // 2. Extract and separate the blogs dynamically
const allBlogs = blogData?.blogs || [];

const publishedBlogs = allBlogs.filter(
  (post) => post.isPublished === true
);

const featuredPost =
  publishedBlogs.find((post) => post.isFeatured === true) || publishedBlogs[0];

// Show all blogs in grid
const gridPosts = publishedBlogs;

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

  return (
    <div ref={containerRef} className="bg-[#f8fafc] text-[#0B1A30] overflow-hidden font-sans min-h-screen">
      
      {/* --- 1. Hero Section --- */}
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
                   Knowledge Hub
                 </h1>
                 <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
                 
                 <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
                   <Link href="/" className="hover:text-white transition-colors">Home</Link>
                   <span>/</span>
                   <span className="text-[#56b1cf]"> Knowledge Hub</span>
                 </div>
               </div>
             </div>
           </section>

{/* --- 3. All Blogs List Section --- */}
<section className="animate-section px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-white">
  <div className="space-y-10">
    {gridPosts.map((post, index) => {
      const isReverse = index % 2 !== 0;

      return (
        <Link
          key={post.id}
          href={`/blogs/${post.slug}`}
          className="block"
        >
          <article
            className={`group grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(5,100,131,0.08)] transition-all duration-500 ${
              isReverse ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-4 relative h-[260px] md:h-[360px] lg:h-full min-h-[360px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />

              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#056483] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-sm">
                {post.category}
              </div>
            </div>

            <div className="lg:col-span-8 p-7 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-5 font-medium uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#056483]" />
                  {post.publishedAt}
                </div>

                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#056483]" />
                  {post.readingTime}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-5 leading-tight group-hover:text-[#056483] transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {post.author}
                </span>

                <span className="inline-flex items-center gap-3 text-[#056483] font-semibold tracking-wider uppercase text-sm">
                  Read More
                  <span className="w-10 h-10 rounded-full bg-[#f4f7f9] flex items-center justify-center group-hover:bg-[#056483] group-hover:text-white transition-all duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </span>
              </div>
            </div>
          </article>
        </Link>
      );
    })}
  </div>
</section>

    </div>
  );
};

export default BlogPage;