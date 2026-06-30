"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Search, 
  ChevronRight, 
  Quote, 
  Check, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon 
} from "lucide-react";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import blogData from "../../../components/blogs.json";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetailPage({ params }) {
  const containerRef = useRef(null);
  
  // Unwrap params using React.use() for Next.js 15 compatibility in Client Components
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

  const blogs = blogData?.blogs || [];
  const blog = blogs.find((item) => item.slug === slug);
  const randomBlogs = [...blogs]
  .sort(() => 0.5 - Math.random()) 
  .slice(0, 4);

  if (!blog) {
    notFound();
  }

  useGSAP(
    () => {
      const fadeElements = gsap.utils.toArray(".fade-up");
      if (fadeElements.length > 0) {
        gsap.from(fadeElements, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-white text-[#0B1A30] overflow-visible font-sans">
      
      {/* Hero Section */}
<section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
  {/* Background Overlay Image */}
  <div className="absolute inset-0 z-0">
    <Image
      width={1920}
      height={1080}
      src="/banner.webp"
      alt="Blog Background"
      className="w-full h-full object-cover opacity-20"
      priority
    />
  </div>

  <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
    <div className="max-w-4xl">
      {/* Breadcrumbs */}
      <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blogs" className="hover:text-white transition-colors">Our Blog</Link>
        <span>/</span>
        <span className="text-[#56b1cf] truncate">Article</span>
      </div>

      {/* Decorative Line */}
      <div className="fade-up w-24 h-1 bg-linear-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-6"></div>

      {/* Title - Aligned Left for readability */}
      <h1 className="fade-up text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
        {blog.title}
      </h1>
    </div>
  </div>
</section>

      {/* Main Content & Sidebar Grid */}
      <section className="px-4 md:px-12 lg:px-24 xl:px-40 py-24 bg-white">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Content Area (Left) */}
          <div className="lg:col-span-8 space-y-10 fade-up">
            
            {/* Primary Article Image */}
            <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-xl shadow-sm">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Inline Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-6">
              <span className="flex items-center gap-2 font-medium text-gray-800">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                  <User className="w-5 h-5 absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-500" />
                </div>
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#056483]" /> {blog.publishedAt}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#056483]" /> {blog.category}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#056483]" /> 2 Comments
              </span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed text-gray-700 mb-8 font-light">
                {blog.description}
              </p>

              {blog.sections?.map((section, index) => (
                <div key={index} className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0A162B] mb-5">
                    {section.heading}
                  </h3>
                  
                  {section.paragraphs?.map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}

                  {/* Insert a mock Blockquote styling for visual variety (like the image) */}
                  {index === 0 && (
                    <blockquote className="my-8 bg-[#fdf5f3] border-l-4 border-[#e96b46] p-8 rounded-r-xl">
                      <div className="flex items-start gap-4">
                        <Quote className="w-10 h-10 text-[#e96b46] opacity-50 shrink-0" />
                        <div>
                          <p className="text-xl italic font-medium text-gray-800 mb-4">
                            "Navigating the complexities of industry standards requires a compassionate advocate who understands your unique situation."
                          </p>
                          <p className="font-semibold text-[#0A162B]">— {blog.author}</p>
                        </div>
                      </div>
                    </blockquote>
                  )}

                  {section.points?.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {section.points.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-[#056483] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Tags and Share Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-y border-gray-100">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#0A162B]">Tags:</span>
                <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 cursor-pointer transition">#Industry</span>
                <span className="text-sm px-3 py-1 bg-[#e96b46] text-white rounded-full hover:bg-[#d65a36] cursor-pointer transition">#{blog.category.replace(/\s+/g, '')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#0A162B]">Share:</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#056483] hover:text-white transition text-gray-600"><FaFacebook className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#056483] hover:text-white transition text-gray-600"><BsTwitter className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#056483] hover:text-white transition text-gray-600"><LiaLinkedin className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#056483] hover:text-white transition text-gray-600"><LinkIcon className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* Mock Comments Section */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-[#0A162B] mb-8">Comments (2)</h3>
              <div className="space-y-6">
                <CommentCard name="Matthew Larson" date="15 March, 2026" />
                <CommentCard name="Ben Ducket" date="16 March, 2026" />
              </div>
            </div>

            {/* Leave a Comment Form */}
         
          </div>

          {/* Sidebar Area (Right) */}
          <aside className="lg:sticky top-0 lg:col-span-4 space-y-10 fade-up">
            
       




{/* Recent Blogs Widget */}
<div className="">
  <h4 className="text-xl font-bold text-[#0A162B] mb-6">Our Recent Blogs</h4>
  <div className="space-y-6 bg-[#f4f7f967] rounded-xl p-8">
    {randomBlogs.map((b) => (
      <Link 
        href={`/blogs/${b.slug}`} 
        key={b.slug} // Using slug as a unique key
        className="flex items-center gap-4 group"
      >
        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
          <Image 
            src={b.image} 
            alt={b.title} 
            fill 
            className="object-cover" 
          />
        </div>
        <div>
          <span className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <Calendar className="w-3 h-3" /> {b.publishedAt}
          </span>
          <h5 className="text-sm font-semibold text-[#0A162B] group-hover:text-[#e96b46] transition-colors line-clamp-2">
            {b.title}
          </h5>
        </div>
      </Link>
    ))}
  </div>
  
  {/* Optional: Add a 'View All' button if the list gets too long */}
  <div className="mt-8">
    <Link 
      href="/blogs" 
      className="block text-center text-sm font-semibold text-[#e96b46] hover:underline"
    >
      View All Blogs →
    </Link>
  </div>
</div>
               <div className="pt-10">
              <h3 className="text-2xl font-bold text-[#0A162B] mb-6">Leave A Comment</h3>
              <form className="bg-[#f4f7f9] p-8 rounded-xl space-y-6">
                <p className="text-gray-600 mb-4">Provide clear contact information, including phone number, email, and address.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#056483]" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#056483]" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#056483]" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#056483]" />
                </div>
                <textarea placeholder="Write your message here..." rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#056483]"></textarea>
                <button type="button" className="bg-[#e96b46] hover:bg-[#d65a36] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Post Comment
                </button>
              </form>
            </div>

            {/* Popular Tags Widget */}
       <div className="bg-[#f4f7f9] rounded-xl p-8">
  <h4 className="text-xl font-bold text-[#0A162B] mb-6">Explore More</h4>
  <div className="flex flex-wrap gap-2">
    {[
      { name: "About Us", link: "/about" },
      { name: "Contact", link: "/contact" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Satake", link: "/brands/satake" },
      { name: "Buhler", link: "/brands/buhler" },
      { name: "Services", link: "/services" }
    ].map((item, i) => (
      <Link 
        href={item.link} 
        key={item.name} 
        className={`text-sm px-4 py-2 rounded-md transition-colors ${i === 0 ? 'bg-[#e96b46] text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>

          </aside>
        </div>
      </section>
    </div>
  );
}

const CommentCard = ({ name, date }) => (
  <div className="bg-[#f4f7f9] p-6 rounded-xl border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
          <User className="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <h5 className="font-bold text-[#0A162B] text-lg">{name}</h5>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
      <button className="text-sm font-semibold text-[#0A162B] flex items-center gap-1 hover:text-[#e96b46] transition">
        <ChevronRight className="w-4 h-4 rotate-180" /> Reply
      </button>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm">
      In the realm of our industry, our proficiency transcends the mere understanding of basic practices; it delves into the nuanced artistry of technical expertise. We are architects of innovation, sculpting compelling narratives that resonate with clients and audiences.
    </p>
  </div>
);