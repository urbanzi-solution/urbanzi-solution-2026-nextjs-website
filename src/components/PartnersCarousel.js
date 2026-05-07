"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PARTNERS from "@/data/partners.json";

/*
  To add / edit partners, update src/data/partners.json.
  Fields:
    name     — display name
    url      — website that opens on click
    logo     — path inside /public (e.g. "/clients/logo.webp"), or null to show initials
    initials — 2-letter fallback shown when logo is null
    color    — accent hex
    bg       — card background  (rgba)
    border   — card border      (rgba)
*/

/* repeat enough times so the marquee always looks full regardless of partner count */
const REPEATS = Math.max(4, Math.ceil(12 / PARTNERS.length));
const TRACK = Array.from({ length: REPEATS * 2 }, () => PARTNERS).flat();

export default function PartnersCarousel() {
  const trackRef = useRef(null);

  return (
    <section className="partners-section">
      <div className="partners-container">
        {/* Header */}
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="partners-badge">OUR PARTNERS</span>
          <h2 className="partners-title">
            Companies We Partner <br />
            <span className="partners-title-em">& Grow Alongside</span>
          </h2>
          <p className="partners-desc">
            We collaborate with trusted companies and technology leaders to bring the best solutions to every project.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="partners-track-outer">
          <div className="partners-fade-left" />
          <div className="partners-fade-right" />

          <div
            className="partners-track-wrapper"
            onMouseEnter={() => trackRef.current && (trackRef.current.style.animationPlayState = "paused")}
            onMouseLeave={() => trackRef.current && (trackRef.current.style.animationPlayState = "running")}
          >
            <div className="partners-track" ref={trackRef}>
              {TRACK.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                  style={{
                    "--p-color": p.color,
                    "--p-bg": p.bg,
                    "--p-border": p.border,
                  }}
                  aria-label={`Visit ${p.name}`}
                >
                  <div className="partner-logo-wrap">
                    {p.logo ? (
                      <Image
                        src={p.logo}
                        alt={`${p.name} logo`}
                        width={56}
                        height={56}
                        className="partner-logo-img"
                      />
                    ) : (
                      <span className="partner-logo-initials">{p.initials}</span>
                    )}
                  </div>

                  <span className="partner-name">{p.name}</span>
                  <span className="partner-visit">Visit ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .partners-section {
          background: #000002;
          padding: 80px 0 96px;
          overflow: hidden;
        }
        .partners-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .partners-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .partners-badge {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 600;
          color: #9ca3af;
          background: #111827;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          padding: 6px 18px;
          margin-bottom: 20px;
        }
        .partners-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 16px;
        }
        .partners-title-em {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }
        .partners-desc {
          color: #6b7280;
          font-size: 1rem;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* track */
        .partners-track-outer {
          position: relative;
          overflow: hidden;
        }
        .partners-fade-left,
        .partners-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 140px;
          z-index: 2;
          pointer-events: none;
        }
        .partners-fade-left  { left:  0; background: linear-gradient(to right, #000002, transparent); }
        .partners-fade-right { right: 0; background: linear-gradient(to left,  #000002, transparent); }
        .partners-track-wrapper { overflow: hidden; padding: 16px 0; }
        .partners-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: partnersScroll 28s linear infinite;
        }
        @keyframes partnersScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* card */
        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 200px;
          padding: 32px 20px 24px;
          border-radius: 20px;
          background: var(--p-bg, rgba(255,255,255,0.04));
          border: 1px solid var(--p-border, rgba(255,255,255,0.08));
          text-decoration: none;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .partner-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--p-color, #3b82f6) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .partner-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border-color: var(--p-color, rgba(255,255,255,0.2));
        }
        .partner-card:hover::before { opacity: 0.07; }

        /* logo area */
        .partner-logo-wrap {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          background: var(--p-bg, rgba(255,255,255,0.06));
          border: 1px solid var(--p-border, rgba(255,255,255,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .partner-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 6px;
        }
        .partner-logo-initials {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--p-color, #fff);
          letter-spacing: -0.5px;
          font-family: system-ui, sans-serif;
        }

        .partner-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: #e5e7eb;
          text-align: center;
          line-height: 1.3;
          position: relative;
        }
        .partner-visit {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--p-color, #6b7280);
          opacity: 0;
          transition: opacity 0.2s ease;
          position: relative;
        }
        .partner-card:hover .partner-visit { opacity: 1; }

        @media (max-width: 640px) {
          .partners-section { padding: 56px 0 72px; }
          .partner-card { width: 165px; padding: 24px 16px 20px; }
        }
      `}</style>
    </section>
  );
}
