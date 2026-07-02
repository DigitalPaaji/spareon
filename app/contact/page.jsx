"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
  ArrowRight,
  Upload,
  FileText,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SuccessPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
    <div
      className="absolute inset-0 bg-[#0B1A30]/60 backdrop-blur-sm"
      onClick={onClose}
    />

    <div className="relative bg-white p-10 max-w-md w-full mx-auto rounded-2xl shadow-2xl border-t-4 border-[#056483]">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 bg-gradient-to-br from-[#f4f7f9] to-[#dce6eb] rounded-full mb-6">
          <CheckCircle2 className="h-10 w-10 text-[#056483]" />
        </div>
        <h3 className="text-3xl font-light text-gray-900 mb-3">Thank You!</h3>
        <p className="text-gray-500 mb-8 leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-4 bg-[#056483] text-white font-medium tracking-wider uppercase text-sm hover:bg-[#3a88db] transition-colors duration-300 rounded-sm"
        >
          Close Window
        </button>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    Name: "",
    FirmName: "",
    Email: "",
    Phone: "",
    Subject: "",
    Product: "",
    Message: "",
  });

  const [productImages, setProductImages] = useState([]);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useGSAP(
    () => {
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
    },
    { scope: containerRef }
  );

  const handelInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProductImages(Array.from(e.target.files || []));
  };

  const handleGstChange = (e) => {
    setGstCertificate(e.target.files?.[0] || null);
  };

  const handelsubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const submitData = new FormData();

      submitData.append(
        "fields",
        JSON.stringify({
          ...formData,
          ProductImages:
            productImages.length > 0
              ? productImages.map((file) => file.name).join(", ")
              : "No image uploaded",
          GSTCertificate: gstCertificate
            ? gstCertificate.name
            : "No GST certificate uploaded",
        })
      );

      productImages.forEach((file) => {
        submitData.append("attachments", file);
      });

      if (gstCertificate) {
        submitData.append("attachments", gstCertificate);
      }

      const res = await fetch("/api/contact-popup", {
        method: "POST",
        body: submitData,
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error("Email failed");
      }

      setShowSuccess(true);

      setFormData({
        Name: "",
        FirmName: "",
        Email: "",
        Phone: "",
        Subject: "",
        Product: "",
        Message: "",
      });

      setProductImages([]);
      setGstCertificate(null);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="bg-white text-[#0B1A30] overflow-hidden font-sans min-h-screen"
      >
        <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
          <div className="absolute inset-0 z-0">
            <Image
              width={1920}
              height={1080}
              src="/banner.webp"
              alt="Contact Spareon India"
              className="w-full h-full object-cover opacity-40"
              priority
            />
          </div>

          <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
            <h1 className="fade-up text-3xl md:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
              Contact Us
            </h1>

            <div className="fade-up w-24 h-1 bg-gradient-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8" />

            <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#56b1cf]">Contact Us</span>
            </div>
          </div>
        </section>

        <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16 fade-up">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#056483] px-4 py-2 mb-4">
              Get in Touch
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-gray-900">
              We are here to{" "}
              <span className="relative italic font-medium text-[#056483]">
                Assist You
              </span>
            </h2>

            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions regarding our premium rice milling machinery
              spares? Reach out to our technical team for prompt support and
              inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="fade-up group p-8 bg-white border border-gray-100 shadow rounded-2xl">
              <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Head Office
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                C-163, Focal Point,
                <br />
                Patiala, Punjab - 147001
              </p>
            </div>

            <div className="fade-up group p-8 bg-white border border-gray-100 shadow rounded-2xl">
              <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Support
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
             

+91 74160-00071
                <br />
                Mon-Sat: 09:00 AM - 06:00 PM
              </p>
            </div>

            <div className="fade-up group p-8 bg-white border border-gray-100 shadow rounded-2xl">
              <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email Address
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
            

yeeson.precision@gmail.com
              
              </p>
            </div>
          </div>
        </section>

        <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 pb-24">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">
            <div className="fade-up w-full lg:w-5/12 bg-[#f4f7f9] p-8 lg:p-12 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-gray-900">
                  Send a Message
                </h2>

                <p className="text-gray-500 mb-10 text-sm">
                  Share your product requirement and upload product images if
                  available.
                </p>

                <form onSubmit={handelsubmit} className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">  <input
                    type="text"
                    name="Name"
                    required
                    value={formData.Name}
                    onChange={handelInput}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
                  />

                 <input
                    type="email"
                    name="Email"
                    required
                    value={formData.Email}
                    onChange={handelInput}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
                  />
  
</div>

  <div className="grid grid-cols-2 gap-4"> 
          <input
                    type="text"
                    name="FirmName"
                    required
                    value={formData.FirmName}
                    onChange={handelInput}
                    placeholder="Firm Name"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
                  />       
                  <input
                    type="text"
                    name="Phone"
                    required
                    value={formData.Phone}
                    onChange={handelInput}
                    placeholder="Your Phone Number"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
                  />
</div>
                  <input
                    type="text"
                    name="Subject"
                    required
                    value={formData.Subject}
                    onChange={handelInput}
                    placeholder="Subject"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
                  />

                  <input
                    type="text"
                    name="Product"
                    required
                    value={formData.Product}
                    onChange={handelInput}
                    placeholder="Which product are you enquiring about?"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
                  />
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                  <label className="block cursor-pointer rounded-xl border border-dashed border-gray-300 bg-white/60 p-5 hover:border-[#056483] transition">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Upload className="w-5 h-5 text-[#056483]" />
                      <span className="text-sm">Upload product pictures</span>
                    </div>

                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />

                    {productImages.length > 0 && (
                      <p className="mt-3 text-xs text-[#056483]">
                        {productImages.length} image(s) selected
                      </p>
                    )}
                  </label>

                  <label className="block cursor-pointer rounded-xl border border-dashed border-gray-300 bg-white/60 p-5 hover:border-[#056483] transition">
                    <div className="flex items-center gap-3 text-gray-600">
                      <FileText className="w-5 h-5 text-[#056483]" />
                      <span className="text-sm">Upload GST Certificate</span>
                    </div>

                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleGstChange}
                      className="hidden"
                    />

                    {gstCertificate && (
                      <p className="mt-3 text-xs text-[#056483]">
                        Selected: {gstCertificate.name}
                      </p>
                    )}
                  </label>
</div>
                  <textarea
                    name="Message"
                    required
                    value={formData.Message}
                    onChange={handelInput}
                    placeholder="Write your product requirement..."
                    rows="3"
                    className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] resize-none"
                  />

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center justify-center gap-3 w-full bg-[#056483] text-white px-8 py-4 font-medium tracking-widest uppercase hover:bg-[#0A162B] transition-all duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                      {!isSubmitting && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="fade-up w-full lg:w-7/12 min-h-full overflow-hidden relative shadow-lg group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4271.373247928821!2d76.42175519999999!3d30.373736199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102708e4b05f43%3A0x5cac00a43cd7b8f5!2sFocal%20Point%2C%20Patiala!5e1!3m2!1sen!2sin!4v1773475102579!5m2!1sen!2sin"
                className="w-full h-full object-cover"
                style={{ border: 0, minHeight: "100%" }}
                
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      {showSuccess && (
        <SuccessPopup
          message="Your message has been successfully sent. Our team will review your inquiry and get back to you shortly."
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
};

export default ContactPage;



// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   MapPin,
//   PhoneCall,
//   Mail,
//   CheckCircle2,
//   ArrowRight,
//   Upload,
// } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const SuccessPopup = ({ message, onClose }) => (
//   <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
//     <div
//       className="absolute inset-0 bg-[#0B1A30]/60 backdrop-blur-sm"
//       onClick={onClose}
//     />

//     <div className="relative bg-white p-10 max-w-md w-full mx-auto rounded-2xl shadow-2xl border-t-4 border-[#056483]">
//       <div className="text-center">
//         <div className="mx-auto flex items-center justify-center h-20 w-20 bg-gradient-to-br from-[#f4f7f9] to-[#dce6eb] rounded-full mb-6">
//           <CheckCircle2 className="h-10 w-10 text-[#056483]" />
//         </div>
//         <h3 className="text-3xl font-light text-gray-900 mb-3">Thank You!</h3>
//         <p className="text-gray-500 mb-8 leading-relaxed">{message}</p>
//         <button
//           onClick={onClose}
//           className="w-full py-4 bg-[#056483] text-white font-medium tracking-wider uppercase text-sm hover:bg-[#3a88db] transition-colors duration-300 rounded-sm"
//         >
//           Close Window
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const ContactPage = () => {
//   const containerRef = useRef(null);

//   const [formData, setFormData] = useState({
//     Name: "",
//     Email: "",
//     Phone: "",
//     Subject: "",
//     Product: "",
//     Message: "",
//   });

//   const [productImages, setProductImages] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   useGSAP(
//     () => {
//       const sections = gsap.utils.toArray(".animate-section");

//       sections.forEach((section) => {
//         const fadeElements = section.querySelectorAll(".fade-up");

//         if (fadeElements.length > 0) {
//           gsap.from(fadeElements, {
//             y: 40,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 85%",
//               once: true,
//             },
//           });
//         }
//       });
//     },
//     { scope: containerRef }
//   );

//   const handelInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setProductImages(Array.from(e.target.files || []));
//   };

// const handelsubmit = async (e) => {
//   e.preventDefault();

//   try {
//     setIsSubmitting(true);

//     const submitData = new FormData();

//     submitData.append(
//       "fields",
//       JSON.stringify({
//         ...formData,
//         ProductImages:
//           productImages.length > 0
//             ? productImages.map((file) => file.name).join(", ")
//             : "No image uploaded",
//       })
//     );

//     productImages.forEach((file) => {
//       submitData.append("attachments", file);
//     });

//     const res = await fetch("/api/contact-popup", {
//       method: "POST",
//       body: submitData,
//     });

//     const result = await res.json();

//     if (!result.success) {
//       throw new Error("Email failed");
//     }

//     setShowSuccess(true);

//     setFormData({
//       Name: "",
//       Email: "",
//       Phone: "",
//       Subject: "",
//       Product: "",
//       Message: "",
//     });

//     setProductImages([]);
//   } catch (error) {
//     alert("Something went wrong. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="bg-white text-[#0B1A30] overflow-hidden font-sans min-h-screen"
//       >
//         <section className="animate-section relative overflow-hidden py-50 bg-[#0A162B]">
//           <div className="absolute inset-0 z-0">
//             <Image
//               width={1920}
//               height={1080}
//               src="/banner.webp"
//               alt="Contact Spareon India"
//               className="w-full h-full object-cover opacity-40"
//               priority
//             />
//           </div>

//           <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
//             <h1 className="fade-up text-3xl md:text-5xl font-bold leading-tight mb-6 text-white uppercase tracking-wide">
//               Contact Us
//             </h1>

//             <div className="fade-up w-24 h-1 bg-gradient-to-r from-[#56b1cf] to-[#3a88db] rounded-full mb-8" />

//             <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
//               <Link href="/" className="hover:text-white transition-colors">
//                 Home
//               </Link>
//               <span>/</span>
//               <span className="text-[#56b1cf]">Contact Us</span>
//             </div>
//           </div>
//         </section>

//         <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
//           <div className="text-center mb-16 fade-up">
//             <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#056483] px-4 py-2 mb-4">
//               Get in Touch
//             </span>

//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-gray-900">
//               We are here to{" "}
//               <span className="relative italic font-medium text-[#056483]">
//                 Assist You
//               </span>
//             </h2>

//             <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
//               Have questions regarding our premium rice milling machinery
//               spares? Reach out to our technical team for prompt support and
//               inquiries.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             <div className="fade-up group p-8 bg-white border border-gray-100 shadow rounded-2xl">
//               <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6">
//                 <MapPin className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 Head Office
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 C-163, Focal Point,
//                 <br />
//                 Patiala, Punjab - 147001
//               </p>
//             </div>

//             <div className="fade-up group p-8 bg-white border border-gray-100 shadow rounded-2xl">
//               <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6">
//                 <PhoneCall className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 Contact Support
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 +91 9459 101 919
//                 <br />
//                 Mon-Sat: 09:00 AM - 06:00 PM
//               </p>
//             </div>

//             <div className="fade-up group p-8 bg-white border border-gray-100 shadow rounded-2xl">
//               <div className="w-14 h-14 bg-[#f4f7f9] text-[#056483] rounded-xl flex items-center justify-center mb-6">
//                 <Mail className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 Email Address
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 info@spareonindia.com
//                 <br />
//                 support@spareonindia.com
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 pb-24">
//           <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">
//             <div className="fade-up w-full lg:w-5/12 bg-[#f4f7f9] p-8 lg:p-12 rounded-3xl relative overflow-hidden">
//               <div className="relative z-10">
//                 <h2 className="text-2xl md:text-3xl font-medium mb-2 text-gray-900">
//                   Send a Message
//                 </h2>

//                 <p className="text-gray-500 mb-10 text-sm">
//                   Share your product requirement and upload product images if
//                   available.
//                 </p>

//                 <form onSubmit={handelsubmit} className="space-y-6">
//                   <input
//                     type="text"
//                     name="Name"
//                     required
//                     value={formData.Name}
//                     onChange={handelInput}
//                     placeholder="Your Name"
//                     className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
//                   />

//                   <input
//                     type="email"
//                     name="Email"
//                     required
//                     value={formData.Email}
//                     onChange={handelInput}
//                     placeholder="Your Email"
//                     className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
//                   />

//                   <input
//                     type="text"
//                     name="Phone"
//                     required
//                     value={formData.Phone}
//                     onChange={handelInput}
//                     placeholder="Your Phone Number"
//                     className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
//                   />

//                   <input
//                     type="text"
//                     name="Subject"
//                     required
//                     value={formData.Subject}
//                     onChange={handelInput}
//                     placeholder="Subject"
//                     className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
//                   />

//                   <input
//                     type="text"
//                     name="Product"
//                     required
//                     value={formData.Product}
//                     onChange={handelInput}
//                     placeholder="Which product are you enquiring about?"
//                     className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483]"
//                   />

//                   <label className="block cursor-pointer rounded-xl border border-dashed border-gray-300 bg-white/60 p-5 hover:border-[#056483] transition">
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <Upload className="w-5 h-5 text-[#056483]" />
//                       <span className="text-sm">
//                         Upload product pictures
//                       </span>
//                     </div>

//                     <input
//                       type="file"
//                       multiple
//                       accept="image/*"
//                       onChange={handleImageChange}
//                       className="hidden"
//                     />

//                     {productImages.length > 0 && (
//                       <p className="mt-3 text-xs text-[#056483]">
//                         {productImages.length} image(s) selected
//                       </p>
//                     )}
//                   </label>

//                   <textarea
//                     name="Message"
//                     required
//                     value={formData.Message}
//                     onChange={handelInput}
//                     placeholder="Write your product requirement..."
//                     rows="3"
//                     className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-800 focus:outline-none focus:border-[#056483] resize-none"
//                   />

//                   <div className="pt-6">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="group flex items-center justify-center gap-3 w-full bg-[#056483] text-white px-8 py-4 font-medium tracking-widest uppercase hover:bg-[#0A162B] transition-all duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? "Sending..." : "Submit Message"}
//                       {!isSubmitting && (
//                         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="fade-up w-full lg:w-7/12 min-h-[400px] lg:min-h-full overflow-hidden relative shadow-lg group">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4271.373247928821!2d76.42175519999999!3d30.373736199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102708e4b05f43%3A0x5cac00a43cd7b8f5!2sFocal%20Point%2C%20Patiala!5e1!3m2!1sen!2sin!4v1773475102579!5m2!1sen!2sin"
//                 className="w-full h-full object-cover"
//                 style={{ border: 0, minHeight: "100%" }}
//                 allowFullScreen=""
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </section>
//       </div>

//       {showSuccess && (
//         <SuccessPopup
//           message="Your message has been successfully sent. Our team will review your inquiry and get back to you shortly."
//           onClose={() => setShowSuccess(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ContactPage;
