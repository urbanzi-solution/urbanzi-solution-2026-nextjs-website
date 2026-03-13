"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const postVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
};

const posts = [
  {
    date: "Oct 20, 2025",
    img: "/img7.webp",
    tag: "Tools",
    tagColor: "bg-purple-900 text-purple-300",
    title: "Why Every Kerala Business Needs a Mobile App in 2025",
    desc: "Customers in Kerala are searching on mobile. Here's why having your own app puts you ahead of the competition.",
  },
  {
    date: "Oct 20, 2025",
    img: "/img3.webp",
    tag: "Business",
    tagColor: "bg-green-900 text-green-300",
    title: "How SEO Helped Trivandrum Businesses Get More Customers",
    desc: "Real results from local SEO strategies that brought more traffic and leads to businesses right here in Kerala.",
  },
  {
    date: "Oct 20, 2025",
    img: "/post3.webp",
    tag: "Ideas",
    tagColor: "bg-cyan-900 text-cyan-300",
    title: "Top Digital Marketing Strategies for Small Businesses in Kerala",
    desc: "From social media to Google Ads — the digital marketing moves that are actually working for Kerala businesses today.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-8 lg:py-15 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease }}
        >
          <span className="text-[10px] md:text-xs tracking-widest px-3 md:px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">
            DIGITAL GROWTH TIPS FOR KERALA BUSINESSES
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 md:mt-8 leading-tight">
            Latest Post and{" "}
            <span className="text-blue-400 italic">Insights</span>
          </h2>

          <p className="text-neutral-400 mt-4 md:mt-6 max-w-3xl text-sm md:text-base">
            Stay ahead with expert insights, emerging industry trends, and practical growth strategies designed to elevate your digital presence and accelerate business success.
          </p>
        </motion.div>

        {/* Top Divider */}
        <motion.div
          className="border-t border-neutral-800 mt-12 md:mt-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ originX: 0 }}
        />

        {/* Posts */}
        {posts.map((post, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={postVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`group relative ${i < posts.length - 1 ? "border-b border-neutral-800" : ""}`}
          >
            <div className="absolute inset-0 bg-neutral-900 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 items-start">

              <div className="col-span-12 md:col-span-2 text-neutral-400 text-sm">
                {post.date}
              </div>

              <div className="col-span-12 md:col-span-4">
                <img
                  src={post.img}
                  alt="Post"
                  className="w-full h-52 md:h-64 object-cover"
                />
              </div>

              <div className="col-span-12 md:col-span-6">
                <span className={`text-xs px-3 py-1 rounded-full ${post.tagColor}`}>
                  {post.tag}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-5 leading-snug">
                  {post.title}
                </h3>

                <p className="text-neutral-400 mt-3 md:mt-4 text-sm md:text-base">
                  {post.desc}
                </p>

                <button className="mt-5 md:mt-6 text-sm">
                  Read more
                </button>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
