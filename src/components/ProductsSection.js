"use client";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="bg-black px-6 text-white py-20">
      <div className="max-w-6xl mx-auto space-y-5">

        {/* ===== CARD 1 ===== */}
        <div className="group bg-gradient-to-r from-[#111] to-[#0a0a0a] 
          rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10
          border border-white/5
          transition-all duration-500
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:border-white/20
        ">
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
              HRMS
            </h2>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
              Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
          </div>

          <div className="flex-1">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/hrms.webp"
                alt="HRMS"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
          </div>
        </div>

        {/* ===== CARD 2 ===== */}
        <div className="group bg-gradient-to-r from-[#111] to-[#0a0a0a] 
          rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10
          border border-white/5
          transition-all duration-500
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:border-white/20
        ">
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
              GYM
            </h2>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>

          <div className="flex-1">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/gym.webp"
                alt="Gym"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
          </div>
        </div>

        {/* ===== CARD 3 ===== */}
        <div className="group bg-gradient-to-r from-[#111] to-[#0a0a0a] 
          rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10
          border border-white/5
          transition-all duration-500
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:border-white/20
        ">
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
              WHATSAPP AUTOMATION
            </h2>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
              adipiscing nec, ultricies sed, dolor.
            </p>
          </div>

          <div className="flex-1">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/whatsapp.webp"
                alt="WhatsApp Automation"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}