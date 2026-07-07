import React from 'react'
import blogData from "../../../components/blogs.json";
import BlogSection from './BlogSection';


export async function generateStaticParams() {
  const blogs = blogData?.blogs || [];

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const page = async ({params }) => {
   const { slug } = await params;

  return (
    <div>
<BlogSection slug={slug} />

    </div>
  )
}

export default page