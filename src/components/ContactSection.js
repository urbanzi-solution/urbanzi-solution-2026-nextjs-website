"use client"

import Image from "next/image"
import { useState } from "react"

export default function ContactSection() {

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Message sent successfully!")
    }, 1500)
  }

  return (

    <section className="bg-black text-white py-20 md:py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-16 md:mb-20">

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">

            Get in Touch

            <br />

            <span className="bg-white bg-clip-text text-transparent">
              with Us!
            </span>

          </h2>

          <div className="w-20 md:w-24 h-[3px] bg-white mx-auto mt-6 mb-6 rounded-full"></div>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed px-2">
            We're excited to connect with you! Whether you're interested in starting a project,
            learning more about our services, or just want to chat, we're here to help.
            Fill out the form below and our team will get back to you soon.
          </p>

        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* IMAGE */}

          <div className="relative max-w-sm sm:max-w-md mx-auto">

            <div className="absolute -inset-4 blur-2xl rounded-3xl"></div>

            <Image
              src="/contact.webp"
              alt="Rocket Launch"
              width={600}
              height={600}
              className="rounded-2xl border border-white/10 relative z-10 w-full h-auto"
            />

          </div>


          {/* FORM */}

          <div className="max-w-md w-full mx-auto">

            <form
              onSubmit={handleSubmit}
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl space-y-6 backdrop-blur-sm"
            >

              {/* NAME */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    First name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    required
                    className="contact-input"
                  />

                </div>

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Last name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="contact-input"
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="contact-input"
                />

              </div>


              {/* PHONE */}

              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="contact-input"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="contact-input resize-none"
                ></textarea>

              </div>


              {/* POLICY */}

              <div className="flex items-start gap-3 text-sm text-gray-400">

                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-blue-500"
                />

                <p>
                  You agree to our{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    privacy policy
                  </a>
                </p>

              </div>


              {/* BUTTON */}

              <button
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold bg-blue-400 text-black hover:scale-[1.02] transition active:scale-[0.98]"
              >

                {loading ? "Sending..." : "Send message"}

              </button>

            </form>

          </div>

        </div>


        {/* CONTACT INFO */}

        <div className="text-center mt-14 md:mt-16 text-gray-400 text-sm">

          <p className="mb-4">
            Or reach out to us directly:
          </p>

          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">

            <a
              href="mailto:contact@urbanzi.in"
              className="hover:text-blue-500"
            >
              contact@urbanzi.in
            </a>

            <a
              href="tel:+919876543210"
              className="hover:text-blue-500"
            >
              +91 98765 43210
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}
