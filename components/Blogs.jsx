import React from "react";
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
    <section className="relative overflow-hidden bg-[#f7fafc] py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#031d31]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-600" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-600">
                Knowledge & Insights
              </p>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#00263d] sm:text-4xl lg:text-5xl">
              Latest from Our{" "}
              <span className="text-cyan-600">Blog</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore maintenance tips, product knowledge and useful insights
              for professional rice milling operations.
            </p>
          </div>

          <a
            href="/blogs"
            className="group inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00263d]"
          >
            View all articles

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00263d] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-600">
              <FaArrowRight />
            </span>
          </a>
        </div>

        {/* Blogs */}
        <div className="grid gap-6 lg:grid-cols-2">
          {blogs.map((blog, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={blog.id || blog.slug}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-600/25 hover:shadow-[0_30px_80px_rgba(0,38,61,0.13)] ${
                  isFeatured ? "lg:row-span-3" : ""
                }`}
              >
                <a
                  href={`/blogs/${blog.slug}`}
                  className={
                    isFeatured
                      ? "flex h-full min-h-[500px] flex-col"
                      : "grid min-h-[220px] grid-cols-1 sm:grid-cols-[42%_58%]"
                  }
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isFeatured
                        ? "min-h-[300px] flex-1"
                        : "min-h-[220px]"
                    }`}
                  >
                    <img
                      src={"https://image.made-in-china.com/2f0j00QvcRgoCMZsqh/Satake-Series-Vertical-Rice-Whitener-Emery-Roller.webp"}
                      alt={blog.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031d31]/60 via-transparent to-transparent" />

                    {/*  */}
                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00263d] shadow-sm backdrop-blur-md">
                      {blog.category}
                    </span>

                    {isFeatured && (
                      <span className="absolute bottom-5 left-5 rounded-full bg-cyan-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        Featured Article
                      </span>
                    )}
                  </div>

                  {/*   */}
                  <div
                    className={`relative flex flex-col justify-between ${
                      isFeatured ? "p-7 sm:p-8" : "p-5 sm:p-6"
                    }`}
                  >
                    {/*   */}
                    <span className="pointer-events-none absolute right-5 top-2 text-7xl font-bold text-[#00263d]/[0.035]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      {/*  */}
                      <div className="mb-4 flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-400">
                        <span className="flex items-center gap-2">
                          <FaCalendarDays className="text-cyan-600" />
                          {formatDate(blog.publishedAt)}
                        </span>

                        <span className="flex items-center gap-2">
                          <FaClock className="text-cyan-600" />
                          {blog.readingTime}
                        </span>
                      </div>

                      <h3
                        className={`font-bold leading-tight text-[#00263d] transition-colors duration-300 group-hover:text-cyan-600 ${
                          isFeatured
                            ? "text-2xl sm:text-3xl"
                            : "text-lg sm:text-xl"
                        }`}
                      >
                        {blog.title}
                      </h3>

                      <p
                        className={`mt-3 text-slate-500 ${
                          isFeatured
                            ? "text-sm leading-7 sm:text-base"
                            : "line-clamp-2 text-sm leading-6"
                        }`}
                      >
                        {blog.excerpt || blog.description}
                      </p>
                    </div>

                    {/* Read  */}
                    <div className="relative z-10 mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#00263d]">
                        Read article
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00263d] text-xs text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-rotate-45 group-hover:bg-cyan-600">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {blogs.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-sm text-slate-500">
              No published blogs are available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;