"use client";

export default function RunningHeadline() {
  const text = "Make your company standout from the competition.";

  return (
    <div className="w-full overflow-hidden bg-black py-8 md:py-10">
      <div className="flex w-max animate-marquee-left">
        {[...Array(6)].map((_, i) => (
          <h1
            key={i}
            className="whitespace-nowrap leading-none text-[clamp(48px,8vw,120px)] font-bold text-white italic pr-20"
          >
            {text}
          </h1>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          animation: marqueeLeft 15s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
