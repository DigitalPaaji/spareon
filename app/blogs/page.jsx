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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {gridPosts.map((post) => (
      <Link
        key={post.id}
        href={`/blogs/${post.slug}`}
        className="block group"
      >
        <article className="flex flex-col h-full border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(5,100,131,0.08)] transition-all duration-500 overflow-hidden bg-white">
          
          {/* Image Container */}
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#056483] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-sm">
              {post.category}
            </div>
          </div>

          {/* Content Container */}
          <div className="p-7 flex flex-col flex-grow">
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-gray-500 mb-4 font-medium uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#056483]" />
                {post.publishedAt}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#056483]" />
                {post.readingTime}
              </div>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight group-hover:text-[#056483] transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>

            <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <User className="w-3 h-3" /> {post.author}
              </span>

              <span className="inline-flex items-center gap-2 text-[#056483] font-semibold tracking-wider uppercase text-xs">
                Read More
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    ))}
  </div>
</section>

    </div>
  );
};

export default BlogPage;