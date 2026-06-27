"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  ChevronRight,
  Tag
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Mock Data for the Blog
const featuredPost = {
  title: "The Evolution of Rice Milling: Maximizing Yield with Advanced Satake Machinery",
  excerpt: "Discover how modern milling technologies and high-precision spare parts are revolutionizing the rice processing industry, significantly reducing breakage and increasing overall yield for commercial mills.",
  date: "June 24, 2026",
  author: "Technical Team",
  category: "Industry Insights",
  image: "/blog-featured.webp", // Replace with your featured blog image
  slug: "#"
};

const blogPosts = [
  {
    id: 1,
    title: "Essential Maintenance Tips for Your Whitener Machines",
    excerpt: "Routine maintenance is critical for whitener machines. Learn the top 5 daily checks to ensure consistent performance and prolong the life of your abrasive rolls.",
    date: "June 15, 2026",
    author: "Maintenance Dept",
    category: "Maintenance",
    image: "/blog1.webp",
    slug: "#"
  },
  {
    id: 2,
    title: "Why Taiwan-Manufactured Spares Outperform the Competition",
    excerpt: "An inside look at the precision engineering, metallurgy, and strict quality control processes that make Taiwan the global leader in rice milling spare parts.",
    date: "June 02, 2026",
    author: "Quality Control",
    category: "Manufacturing",
    image: "/blog2.webp",
    slug: "#"
  },
  {
    id: 3,
    title: "Understanding Polyurethane vs. Rubber Husker Rolls",
    excerpt: "A comprehensive comparison of different husker roll materials, helping you choose the right composition for your specific paddy variety and milling environment.",
    date: "May 28, 2026",
    author: "Product Dev",
    category: "Product Guide",
    image: "/about2.webp",
    slug: "#"
  },
  {
    id: 4,
    title: "How to Identify Genuine Buhler Replacement Parts",
    excerpt: "Counterfeit parts can cause catastrophic machine failure. Here is your definitive guide to identifying genuine, authorized replacement components.",
    date: "May 14, 2026",
    author: "Technical Team",
    category: "Industry Insights",
    image: "/s7.webp",
    slug: "#"
  },
  {
    id: 5,
    title: "Optimizing the Paddy Separator for Maximum Efficiency",
    excerpt: "Fine-tuning your paddy separator can drastically improve the purity of your brown rice output. Learn the optimal tray angle and stroke adjustments.",
    date: "May 05, 2026",
    author: "Engineering",
    category: "Optimization",
    image: "/about3.webp",
    slug: "#"
  },
  {
    id: 6,
    title: "The Role of Silky Polishers in Premium Export Rice",
    excerpt: "Export markets demand a flawless, glossy finish. Explore how advanced silky polishers achieve this without compromising grain integrity.",
    date: "April 22, 2026",
    author: "Market Insights",
    category: "Export Markets",
    image: "/banner.webp",
    slug: "#"
  }
];

const BlogPage = () => {
  const containerRef = useRef(null);

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
            src="/banner.webp" // Replace with an industrial machinery banner
            alt="Spareon India Blog"
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
          <div>
            <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
              Knowledge Hub
            </h1>
            <div className="fade-up w-24 h-1 bg-gradient-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8"></div>
            
            <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#56b1cf]">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Featured Post Section --- */}
      <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
        <div className="fade-up mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900">
            Featured <span className="italic font-medium text-[#056483]">Article</span>
          </h2>
        </div>

        <div className="fade-up group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col lg:flex-row hover:shadow-[0_10px_40px_rgba(5,100,131,0.08)] transition-all duration-500">
          
          {/* Featured Image */}
          <div className="w-full lg:w-3/5 h-[300px] lg:h-[500px] relative overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Category Badge */}
            <div className="absolute top-6 left-6 bg-[#056483] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-md flex items-center gap-2">
              <Tag className="w-3 h-3" />
              {featuredPost.category}
            </div>
          </div>

          {/* Featured Content */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#056483]" />
                {featuredPost.date}
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#056483]" />
                {featuredPost.author}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-6 leading-tight group-hover:text-[#056483] transition-colors">
              <Link href={featuredPost.slug}>
                {featuredPost.title}
              </Link>
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {featuredPost.excerpt}
            </p>

            <Link 
              href={featuredPost.slug}
              className="inline-flex items-center gap-3 text-[#056483] font-semibold tracking-wider uppercase text-sm hover:text-[#3a88db] transition-colors w-max"
            >
              Read Full Article 
              <span className="w-8 h-8 rounded-full bg-[#f4f7f9] flex items-center justify-center group-hover:bg-[#056483] group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 3. Recent Posts Grid Section --- */}
      <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 pb-24">
        <div className="fade-up mb-10 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 gap-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900">
            Latest <span className="italic font-medium text-[#056483]">News & Insights</span>
          </h2>
          
          {/* Optional Categories Filter (Visual only for layout) */}
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide text-sm font-medium text-gray-500 uppercase tracking-wider">
            <button className="text-[#056483] border-b-2 border-[#056483] pb-1 whitespace-nowrap">All</button>
            <button className="hover:text-[#056483] transition-colors pb-1 whitespace-nowrap">Maintenance</button>
            <button className="hover:text-[#056483] transition-colors pb-1 whitespace-nowrap">Industry Insights</button>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="fade-up group bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(5,100,131,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#056483] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#056483]" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-[#056483] transition-colors">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </span>
                  
                  <Link 
                    href={post.slug}
                    className="w-10 h-10 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#056483] group-hover:bg-[#056483] group-hover:text-white transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="fade-up mt-16 text-center">
          <button className="bg-transparent border-2 border-[#056483] text-[#056483] px-10 py-3 rounded-sm font-bold tracking-widest uppercase hover:bg-[#056483] hover:text-white transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;