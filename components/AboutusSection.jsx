import Link from 'next/link'
import React from 'react'

const AboutusSection = () => {
  return (
    <div className=' container mx-auto px-4 my-24 grid lg:grid-cols-2 gap-14 items-center' >

 <div className='flex flex-col gap-4' >
<b className='text-3xl font-sans'>
  Welcome to
<span className='p-text'> SPAREON INDIA</span>
</b>
<p className='text-gray-700 text-justify'>
  Spareon India is the authorized channel partner of Taiwan-based Spareon Taiwan, a renowned
manufacturer of high-quality spare parts for advanced rice milling machinery. All Spareon
products are engineered and manufactured in Taiwan using modern technology, precision
engineering, and stringent quality control systems to ensure consistent performance,
durability, and long service life
</p>

<Link href={"/about"}  className='text-white p-bg w-fit p-2 font-medium group relative flex gap-3 items-center  '>
Know More About Us

  <svg
    class="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>

</Link>
 
{/* <button
  type="submit"
  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2  group"
>
Know More About Us
   <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg> 
</button> */}


{/* <button
  className="   relative inline-flex items-center justify-center  py-3 overflow-hidden font-medium p-text transition duration-300 ease-out border-2 border-indigo-600 rounded- shadow-md group"
>
  <span
    className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full p-bg group-hover:translate-x-0 ease"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </span>
  <span
    className="absolute  flex items-center justify-center w-full h-full p-text transition-all duration-300 transform group-hover:translate-x-full ease"
    >Know More About Us</span
  >
  <span class="relative invisible">Explore</span>
</button> */}


 </div>

<div>


<img src="aboutus1.png" alt="" />



</div>


    </div>
  )
}

export default AboutusSection