"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import blogData from "./blogs.json"; // Adjust the path to your JSON file as needed

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    // eslint-disable-next-line react-hooks/purity
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const blogs = shuffleArray(
  (blogData?.blogs || []).filter((blog) => blog.isPublished)
)
  .slice(0, 4)
  .map((blog, index) => ({
    id: blog.id,
    title: blog.title,
    description: blog.excerpt,
    image: blog.image,
    category: blog.category,
    date: new Date(blog.publishedAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    href: `/blogs/${blog.slug}`,
    theme: index === 0 ? "light" : "dark",
  }));
  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(cards, {
        y: 70,
        opacity: 0,
        scale: 0.97,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards[0],
          start: "top 86%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 text-[#0B1A30]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#1762A7]/[0.05] blur-[130px]" />

      <div className="relative z-10 px-4 md:px-12 lg:px-24 xl:px-40 py-24">
        <div
          ref={headingRef}
          className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#1762A7]">
              Insights & Ideas
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl text-[#0B1A30]">
              Latest from
              <span className="block text-[#1762A7]/80">our journal.</span>
            </h2>
          </div>

          <div className="w-fit mb-2 lg:mb-4">
            <Link
              href="/blogs"
              className="group relative flex items-center gap-4 overflow-hidden rounded-r-full bg-gradient-to-r from-[#056483] to-[#063B73] pl-6 pr-1.5 py-1.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,123,235,0.3)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(16,123,235,0.45)]"
            >
              <span className="absolute inset-0 translate-x-[-105%] bg-gradient-to-r from-[#056483] to-[#063B73] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10 tracking-wide">View all blogs</span>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
                <FaArrowRight className="text-[10px] text-[#107BEB] ml-0.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {blogs.map((blog, index) => {
            const isLight = blog.theme === "light";

            return (
              <article
                key={blog.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="h-full"
              >
                <Link
                  href={blog.href}
                  className={`group flex h-full min-h-[320px] flex-col rounded-[14px] border p-4 transition-all duration-500 hover:-translate-y-2 ${
                    isLight
                      ? "border-[#1762A7]/10 bg-[#F4F7FA] text-[#0B1A30]"
                      : "border-[#1762A7]/30 bg-[#0B1A30] text-white hover:border-[#1762A7]/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`relative h-36 w-36 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-40 xl:h-36 xl:w-36 2xl:h-40 2xl:w-40 ${
                        isLight ? "bg-[#1762A7]/5" : "bg-white/[0.05]"
                      }`}
                    >
                      <img
                        src={`${blog.image}`}
                        alt={blog.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#0B1A30]/10" />
                    </div>

                    <div className="flex min-h-36 flex-1 flex-col items-end justify-between py-2 text-right sm:min-h-40 xl:min-h-36 2xl:min-h-40">
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          isLight ? "text-[#1762A7]" : "text-white"
                        }`}
                      >
                        {blog.category}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isLight ? "text-[#0B1A30]/65" : "text-white/65"
                        }`}
                      >
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-8 text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-2xl">
                    {blog.title}
                  </h3>

                  <div className="mt-auto flex items-start gap-4 pt-6">
                    <MdWaves
                      size={30}
                      className={`mt-0.5 shrink-0 ${
                        isLight ? "text-[#1762A7]" : "text-[#107BEB]"
                      }`}
                    />
                    <p
                      className={`w-full max-w-[400px] truncate text-sm leading-6 ${
                        isLight ? "text-[#0B1A30]/60" : "text-white/60"
                      }`}
                    >
                      “{blog.description}”
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { MdWaves } from "react-icons/md";
// import blogData from "./blogs.json"; // Adjust the path to your JSON file as needed

// gsap.registerPlugin(ScrollTrigger);

// const BlogSection = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const cardRefs = useRef([]);

//   // Filter, limit to 4, and map the JSON data to match the component's required structure
//   const blogs = (blogData?.blogs || [])
//     .filter((blog) => blog.isPublished)
//     .slice(0, 4)
//     .map((blog, index) => ({
//       id: blog.id,
//       title: blog.title,
//       description: blog.excerpt,
//       image: blog.image,
//       category: blog.category,
//       date: new Date(blog.publishedAt).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }),
//       href: `/blogs/${blog.slug}`,
//       // Replicate the theme pattern from your original code
//       theme: index === 0 ? "light" : "dark",
//     }));

//   useGSAP(
//     () => {
//       const cards = cardRefs.current.filter(Boolean);

//       gsap.from(headingRef.current, {
//         y: 40,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 82%",
//           once: true,
//         },
//       });

//       gsap.from(cards, {
//         y: 70,
//         opacity: 0,
//         scale: 0.97,
//         stagger: 0.12,
//         duration: 0.85,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cards[0],
//           start: "top 86%",
//           once: true,
//         },
//       });
//     },
//     {
//       scope: sectionRef,
//     }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden py-20 text-[#0B1A30]"
//     >
//       {/* Soft background glow - adjusted for the blue theme */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#1762A7]/[0.05] blur-[130px]" />

//       <div className="relative z-10 px-4 md:px-12 lg:px-24 xl:px-40 py-24">
//         {/* Header */}
//         <div
//           ref={headingRef}
//           className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
//         >
//           <div>
//             <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#1762A7]">
//               Insights & Ideas
//             </p>

//             <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl text-[#0B1A30]">
//               Latest from
//               <span className="block text-[#1762A7]/80">our journal.</span>
//             </h2>
//           </div>

//           {/* Updated Button from AboutusSection */}
//           <div className="w-fit mb-2 lg:mb-4">
//             <Link
//               href="/blogs"
//               className="group relative flex items-center gap-4 overflow-hidden rounded-r-full bg-gradient-to-r from-[#056483] to-[#063B73] pl-6 pr-1.5 py-1.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,123,235,0.3)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(16,123,235,0.45)]"
//             >
//               <span className="absolute inset-0 translate-x-[-105%] bg-gradient-to-r from-[#056483] to-[#063B73] transition-transform duration-500 group-hover:translate-x-0" />
//               <span className="relative z-10 tracking-wide">View all blogs</span>
//               <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
//                 <FaArrowRight className="text-[10px] text-[#107BEB] ml-0.5" />
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Blogs Grid */}
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
//           {blogs.map((blog, index) => {
//             const isLight = blog.theme === "light";

//             return (
//               <article
//                 key={blog.id}
//                 ref={(element) => {
//                   cardRefs.current[index] = element;
//                 }}
//                 className="h-full"
//               >
//                 <Link
//                   href={blog.href}
//                   className={`group flex h-full min-h-[320px] flex-col rounded-[14px] border p-4 transition-all duration-500 hover:-translate-y-2 ${
//                     isLight
//                       ? "border-[#1762A7]/10 bg-[#F4F7FA] text-[#0B1A30]"
//                       : "border-[#1762A7]/30 bg-[#0B1A30] text-white hover:border-[#1762A7]/60"
//                   }`}
//                 >
//                   {/* Top area */}
//                   <div className="flex items-center justify-between gap-4">
//                     <div
//                       className={`relative h-36 w-36 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-40 xl:h-36 xl:w-36 2xl:h-40 2xl:w-40 ${
//                         isLight ? "bg-[#1762A7]/5" : "bg-white/[0.05]"
//                       }`}
//                     >
//                       <img
//                         src={blog.image}
//                         alt={blog.title}
//                         loading="lazy"
//                         className="h-full w-full object-cover transition-transform duration-700"
//                       />

//                       <div className="absolute inset-0 bg-[#0B1A30]/10" />
//                     </div>

//                     <div className="flex min-h-36 flex-1 flex-col items-end justify-between py-2 text-right sm:min-h-40 xl:min-h-36 2xl:min-h-40">
//                       <span
//                         className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
//                           isLight ? "text-[#1762A7]" : "text-white"
//                         }`}
//                       >
//                         {blog.category}
//                       </span>

//                       <span
//                         className={`text-xs font-medium ${
//                           isLight ? "text-[#0B1A30]/65" : "text-white/65"
//                         }`}
//                       >
//                         {blog.date}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="mt-8 text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-2xl">
//                     {blog.title}
//                   </h3>

//                   {/* Bottom description */}
//                   <div className="mt-auto flex items-start gap-4 pt-6">
//                     <MdWaves
//                       size={30}
//                       className={`mt-0.5 shrink-0 ${
//                         isLight ? "text-[#1762A7]" : "text-[#107BEB]"
//                       }`}
//                     />

//                     <p
//                       className={`w-full max-w-[400px] truncate text-sm leading-6 ${
//                         isLight ? "text-[#0B1A30]/60" : "text-white/60"
//                       }`}
//                     >
//                       “{blog.description}”
//                     </p>
//                   </div>
//                 </Link>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;