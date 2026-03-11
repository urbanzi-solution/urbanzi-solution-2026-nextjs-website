"use client";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex -mt-35 items-center">
      <div className="max-w-7xl mx-auto px-5 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Top Badge */}
            <div className="inline-block bg-white/10 text-gray-300 text-xs tracking-widest px-4 py-2 rounded-md mb-6 uppercase">
              One Platform. Complete Digital Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              
              <span className="block md:whitespace-nowrap">
                Empowering India's Digital Future with
              </span>

              <span className="block text-blue-400 italic font-medium">
                Urbanzi Solutions
              </span>

            </h1>

            {/* Paragraph */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              At Urbanzi, we help businesses grow with innovative and tailored
              digital solutions. From web development to branding we create
              seamless experiences that elevate your brand. Let's bring your
              vision to life with creativity and technology.
            </p>

          </div>


          {/* RIGHT BUTTONS */}
          <div className="flex lg:justify-end gap-6 mt-8 lg:mt-0">

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition">
              Let’s Start
            </button>

            <button className="bg-gray-200 text-black hover:bg-white px-6 py-3 rounded-full font-medium transition">
              Our Solutions
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}