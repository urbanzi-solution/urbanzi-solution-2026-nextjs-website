"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useLeadModal } from "@/context/LeadContext";

export default function LeadCaptureModal() {
  const { isModalOpen, closeModal, source } = useLeadModal();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
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

    const scriptURL = "https://script.google.com/macros/s/AKfycbxcRHbzsPEJ9FtZ9tQVIzZxFT__NnWyA1QhYpljPfIFmqymwvIrIWFkBGDJdnqNcpgAuw/exec";
    
    const dataToSend = new FormData();
    dataToSend.append("Name", formData.name);
    dataToSend.append("Phone", formData.phone);
    dataToSend.append("Company", formData.company || "N/A");
    dataToSend.append("Source", source || "General Contact");
    dataToSend.append("Timestamp", getISTTime());

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: dataToSend,
        mode: "no-cors",
      });

      setLoading(false);
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        company: "",
      });
      // Optionally close modal after success
      setTimeout(() => {
        closeModal();
        setStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error!", error.message);
      setLoading(false);
      setStatus("error");
    }
  };

  if (!isModalOpen && !status) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#0b1220] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Request a Callback</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/5 rounded-full text-gray-400 transition"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-8">
              Leave your details and our experts will get back to you within 24 hours.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Success!</h3>
                <p className="text-gray-400">Our team will call you back shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none focus:border-blue-500/50 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 7012050812"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none focus:border-blue-500/50 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Urbanzi Solutions"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none focus:border-blue-500/50 transition"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Schedule Callback"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
