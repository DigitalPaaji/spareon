"use client";

import { useEffect, useState } from "react";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Building2,
  FileText,
} from "lucide-react";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  // Add these inside ContactPopup component
const [formData, setFormData] = useState({
  Product: [], 
});

const productOptions = [
  { group: "Satake Products", items: ["SR Screw Feeder", "Silky Milling Roll", "SR Upper Cylinder", "Silky Screw Roller", "SR Inner Base Ring", "Husker Retainer", "Paddy Table Knife Phase Hinges", "Screen", "Silky Break Holder", "Silky Front Housing", "Silky Inlet Sieve", "Silky Rings Inlet", "Whitener Star Plate", "Sizer Cylinder"] },
  { group: "Buhler Products", items: ["Silky Front Mouth", "Husker Chute", "Husker Retainer", "Paddy Table Knife Phase Hinges", "Silky DRPA Bush", "Silky DRPA Mixing Tube", "Silky Milling Roll / Screw Feeder", "Sizer Screen Frame", "Sizer Cylinder", "Whitener Base Star Hub", "Whitener Bearing Bush", "Whitener Vertical Break", "Whitener BSPB Base Shout", "Whitener BSPB Screw Feeder", "Whitener Sieve Frame", "Whitener / Silky Screen", "Whitener BSPB Upper Ring Pipe"] }
];

const toggleProduct = (product) => {
  setFormData(prev => ({
    ...prev,
    Product: prev.Product.includes(product) 
      ? prev.Product.filter(p => p !== product) 
      : [...prev.Product, product]
  }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const submitData = new FormData();

   // In handleSubmit
submitData.append(
  "fields",
  JSON.stringify({
    FormType: "Popup Enquiry",
    FirstName: form.firstName.value,
    LastName: form.lastName.value,
    FirmName: form.firmName.value,
    Email: form.email.value,
    Phone: form.phone.value,
    Message: form.message.value,
    Product: formData.Product.join(", "), // Add this
    GSTCertificate: gstCertificate ? gstCertificate.name : "No GST certificate uploaded",
  })
);


    if (gstCertificate) {
      submitData.append("attachments", gstCertificate);
    }

    try {
      const res = await fetch("/api/contact-popup", {
        method: "POST",
        body: submitData,
      });

      const result = await res.json();

      if (!res.ok || !result.success) throw new Error("Failed");

      setSent(true);
      setGstCertificate(null);
      form.reset();

      setTimeout(() => {
        setOpen(false);
        setSent(false);
      }, 1800);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6">
      <div className="relative w-full max-w-md lg:max-w-4xl overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 sm:right-5 sm:top-5 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-[#0A162B] shadow hover:bg-[#e96b46] hover:text-white transition"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr]">
          <div className="hidden lg:flex bg-gradient-to-br from-[#056483] to-[#0A162B] px-8 py-10 text-white flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-white/15 px-4 py-2 text-base">
              Quick Enquiry
            </span>

            <h2 className="text-3xl font-semibold leading-tight">
              Need Premium Rice Mill Spare Parts?
            </h2>

            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Share your requirement and our team will contact you shortly.
            </p>

            <div className="mt-6 rounded-xl bg-white/10 p-4 text-base flex flex-wrap gap-2">
              <span>• SATAKE</span>
              <span>• BUHLER</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-4 sm:space-y-5">
            <div className="pr-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A162B]">
                Get In Touch
              </h3>
              <p className="mt-1 text-base text-gray-500">
                Fill the form and we&apos;ll get back to you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  name="firstName"
                  required
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border border-gray-200 py-3 sm:py-3.5 pl-11 pr-4 text-base sm:text-base outline-none focus:border-[#056483]"
                />
              </div>

              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 sm:py-3.5 text-base sm:text-base outline-none focus:border-[#056483]"
              />
            </div>

          
 <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 py-3 sm:py-3.5 pl-11 pr-4 text-base sm:text-base outline-none focus:border-[#056483]"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 py-3 sm:py-3.5 pl-11 pr-4 text-base sm:text-base outline-none focus:border-[#056483]"
              />
            </div>
</div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Building2 className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                name="firmName"
                required
                type="text"
                placeholder="Firm Name"
                className="w-full rounded-xl border border-gray-200 py-3 sm:py-3.5 pl-11 pr-4 text-base sm:text-base outline-none focus:border-[#056483]"
              />
            </div>
            
              <label className="block cursor-pointer rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 hover:border-[#056483] transition">
              <div className="flex items-center gap-3 text-gray-600">
                <FileText className="w-5 h-5 text-[#056483]" />
                <span className="text-base">
                  Upload GST Certificate
                </span>
              </div>

              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setGstCertificate(e.target.files?.[0] || null)}
                className="hidden"
              />

              {gstCertificate && (
                <p className="mt-2 text-xs text-[#056483] truncate">
                  Selected: {gstCertificate.name}
                </p>
              )}
            </label>
</div>

<div className="relative">
  <label className="block text-base font-medium text-gray-700 mb-1">
    Which products are you enquiring about?
  </label>
  
  {/* The Dropdown Trigger */}
  <button
    type="button"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    className="w-full flex items-center justify-between rounded-xl border border-gray-200 py-3.5 px-4 text-base sm:text-base text-gray-500 outline-none focus:border-[#056483] bg-white"
  >
    {formData.Product.length > 0 
      ? `${formData.Product.length} products selected` 
      : "Select products..."}
    <span className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
  </button>

  {/* The Floating List */}
  {isDropdownOpen && (
    <div className="absolute z-50 w-full mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-xl p-4 bg-white shadow-xl">
      {productOptions.map((cat) => (
        <div key={cat.group} className="mb-4">
          <h4 className="text-base font-bold text-[#056483] uppercase mb-2">{cat.group}</h4>
          {cat.items.map((item) => (
            <label key={item} className="flex items-center gap-2 py-1 cursor-pointer text-base text-gray-600 hover:text-[#056483]">
              <input
                type="checkbox"
                checked={formData.Product.includes(item)}
                onChange={() => toggleProduct(item)}
                className="rounded text-[#056483] focus:ring-[#056483] h-4 w-4"
              />
              {item}
            </label>
          ))}
        </div>
      ))}
    </div>
  )}
</div>


            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-base sm:text-base outline-none focus:border-[#056483]"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e96b46] px-6 py-3.5 text-base sm:text-base font-semibold text-white transition hover:bg-[#d65a36] disabled:opacity-60"
            >
              {loading ? "Sending..." : sent ? "Sent Successfully" : "Submit Enquiry"}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


