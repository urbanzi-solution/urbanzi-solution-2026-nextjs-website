"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null); // Clear status when user starts typing again
  };

  const getISTTime = () => {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Intl.DateTimeFormat("en-IN", options).format(new Date());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyjizOY4VSCcdrsMx_J9z6Oy34IjgBNyKMB4sZwY2K6R5bedDx_Hn0DlziiErSdJDXP/exec";
    
    // Create form data object to send
    const dataToSend = new FormData();
    dataToSend.append("FirstName", formData.firstName);
    dataToSend.append("LastName", formData.lastName);
    dataToSend.append("Email", formData.email);
    dataToSend.append("Phone", formData.phone);
    dataToSend.append("Message", formData.message);
    dataToSend.append("Timestamp", getISTTime());

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: dataToSend,
        mode: "no-cors", // Important for Google Apps Script
      });

      setLoading(false);
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error!", error.message);
      setLoading(false);
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-32 px-6 overflow-hidden">
      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Get in <span className="text-blue-400">Touch</span>
            <br />
            <span className="text-white/90">with Us!</span>
          </h2>

          <div className="w-24 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 mb-8 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-2">
            Have a question or a project in mind? We&apos;d love to hear from you. 
            Our team usually responds within 24 hours.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* IMAGE CONTAINER */}
          <motion.div
            className="relative lg:pr-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <Image
                src="/contact.webp"
                alt="Rocket Launch Illustration"
                width={800}
                height={800}
                className="rounded-3xl border border-white/10 relative z-10 w-full h-auto shadow-2xl transition duration-500 hover:scale-[1.01]"
                priority
              />
            </div>
          </motion.div>

          {/* FORM CONTAINER */}
          <motion.div
            className="relative lg:pl-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative z-10 bg-[#0b1220]/60 border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-7 backdrop-blur-2xl overflow-hidden"
            >
              {/* Subtle reflective corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="contact-input-premium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="contact-input-premium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="contact-input-premium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 7012050812"
                  required  
                  className="contact-input-premium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  className="contact-input-premium resize-none"
                />
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-400 px-1">
                <input type="checkbox" required className="mt-1.5 h-4 w-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500 accent-blue-500 cursor-pointer" />
                <p className="leading-tight">
                  I agree to Urbanzi&apos;s <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors">privacy policy</a>.
                </p>
              </div>

              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-2xl text-sm flex items-center gap-3"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-sm flex items-center gap-3"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <button
                disabled={loading}
                className="group relative w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <svg className="w-5 h-5 group-hover:translate-x-1 font-bold transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* CONTACT INFO */}
        <motion.div
          className="text-center mt-20 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <p className="text-gray-500 font-medium tracking-widest uppercase text-xs mb-8">Direct Channels</p>
          <div className="flex justify-center gap-12 md:gap-20 flex-wrap items-center">
            <a href="mailto:contact@urbanzi.in" className="flex items-center gap-3 text-lg md:text-xl font-medium text-white/70 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              contact@urbanzi.in
            </a>
            <a href="tel:+917012050812" className="flex items-center gap-3 text-lg md:text-xl font-medium text-white/70 hover:text-blue-400 transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              +91 7012050812
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-input-premium {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 0.875rem 1.25rem;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }
        .contact-input-premium:focus {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        .contact-input-premium::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
