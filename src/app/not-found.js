"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Mail, ArrowRight, Ghost } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] bg-black text-white flex items-center justify-center px-6 py-24 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute w-[80vw] max-w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute w-[60vw] max-w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full -bottom-20 -right-20"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Ghost size={64} className="text-blue-400 opacity-80" />
            </motion.div>
          </div>
        </motion.div>

        {/* 404 Number */}
        <motion.h1 
          className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter mb-4 bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          404
        </motion.h1>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
            Oops! You've drifted into <span className="text-blue-400">deep space.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed">
            The page you're looking for was either moved, deleted, or never existed in this dimension. Let's get you back on track.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="group flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-blue-600 font-bold hover:bg-blue-500 transition-all hover:scale-105"
          >
            <Home size={20} />
            Back to Home
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 px-8 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-bold hover:bg-white/10 transition-all hover:border-white/20"
          >
            <Mail size={20} />
            Contact Support
          </Link>
        </motion.div>

        {/* Decorative Grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

      </div>
    </div>
  )
}
