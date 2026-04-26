"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLeadModal } from "@/context/LeadContext";

/* ─── Animation Helpers ─── */
function Reveal({ children, className, style, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({ children, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-q${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="faq-answer-text">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Data ─── */
const OCCASIONS = [
  { icon: "💍", title: "Weddings", desc: "Luxury digital wedding invites with RSVP, maps, event schedule, countdown, story pages, and multi-function details." },
  { icon: "🎂", title: "Birthdays", desc: "Fun and stylish birthday invitations for kids, adults, milestone birthdays, and surprise parties." },
  { icon: "💎", title: "Engagements", desc: "Elegant engagement websites with event details, family introductions, and personal story sections." },
  { icon: "👶", title: "Baby Showers", desc: "Warm and joyful invites to celebrate growing families, complete with RSVP and gift wishlists." },
  { icon: "🏠", title: "Housewarming", desc: "Simple and classy invitations for griha pravesh and home celebration ceremonies." },
  { icon: "🎗️", title: "Corporate Events", desc: "Launches, networking events, company celebrations, and formal invitations with brand-aligned design." },
];

const FEATURES = [
  { icon: "🌐", title: "Custom Invitation Website", desc: "A live invitation link personalized for your event — looks like a premium website, not a template." },
  { icon: "💬", title: "WhatsApp Ready Sharing", desc: "Share your invite link instantly. Works perfectly in any WhatsApp message." },
  { icon: "✅", title: "RSVP Management", desc: "Guests confirm attendance through the invite. Track every response from your dashboard." },
  { icon: "⏳", title: "Countdown Timer", desc: "Build excitement before the big day with a live countdown your guests see every time." },
  { icon: "📍", title: "Venue Maps", desc: "One-tap navigation for guests directly from the invite. No more 'where do I go?' messages." },
  { icon: "🗓️", title: "Event Schedule", desc: "Display timings for all functions — mehendi, reception, wedding, and more." },
  { icon: "🖼️", title: "Photo & Story Sections", desc: "Add photos, your journey, childhood memories — make your invite emotional and personal." },
  { icon: "🍽️", title: "Dietary Tracking", desc: "Collect dietary preferences and attendance counts — especially useful for large events." },
  { icon: "👥", title: "Guest Dashboard", desc: "Track who opened, who confirmed, and who is pending — all in one organized dashboard." },
  { icon: "🔐", title: "Secure Admin Access", desc: "Your private dashboard. Only you can edit content, manage guests, and update details." },
];

const TESTIMONIALS = [
  { text: "We were amazed at how personal it felt. Our guests kept saying it was the most beautiful wedding invite they had ever received. Worth every rupee.", author: "Priya & Rahul", role: "Wedding Couple · Kochi, Kerala", initials: "PR", stars: 5 },
  { text: "Instead of calling 200 people for RSVP, we just shared the link on WhatsApp. Confirmations came in automatically. Saved us so much time and stress.", author: "Ananya M.", role: "Event Host · Bangalore, Karnataka", initials: "AM", stars: 5 },
  { text: "My daughter's birthday invite was stunning — not a template in sight. The countdown, the photos, the story section — guests were impressed before the party even started.", author: "Suresh K.", role: "Parent · Mumbai, Maharashtra", initials: "SK", stars: 5 },
];

const DASHBOARD_FEATURES = [
  { icon: "📊", text: "Live RSVP tracking in real time" },
  { icon: "👥", text: "Guest categories & management" },
  { icon: "💬", text: "WhatsApp invite tools built-in" },
  { icon: "🗓️", text: "Event schedule updates anytime" },
  { icon: "📈", text: "Analytics & open rate tracking" },
  { icon: "📱", text: "Works on any device, anywhere" },
];

const PAIN_POINTS = [
  "Generic PDF invites feel impersonal and cheap",
  "Chasing RSVP confirmations over phone calls is exhausting",
  "Sharing venue, timings & updates in separate messages causes confusion",
  "Printed cards don't reach everyone in time",
];

const SOLUTIONS = [
  "A unique invitation website built around your story",
  "RSVP tracking — know exactly who is coming",
  "Share via WhatsApp with one beautiful link",
  "Venue maps, schedules, countdowns all in one place",
  "Photos, stories, and personal touches guests remember",
];

const MARQUEE_ITEMS = ["Weddings", "Birthdays", "Engagements", "Housewarming", "Baby Showers", "Corporate Events", "Anniversaries", "Namakerana"];

/* ─── Main Component ─── */
export default function MomentryContent() {
  const { openModal } = useLeadModal();

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="hero">
        <div className="hero-bg-glow hero-glow-1" />
        <div className="hero-bg-glow hero-glow-2" />
        <div className="hero-bg-glow hero-glow-3" />

        <div className="hero-inner">
          {/* CENTERED HERO CONTENT */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Custom Digital Invitations · No Templates · Built for Your Story
            </div>

            <h1>
              Premium Digital<br />
              Invitations for<br />
              <em>Every Celebration</em>
            </h1>

            <p className="hero-sub">
              Custom invitation websites with RSVP, WhatsApp sharing, guest management and unforgettable first impressions.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">100+</span>
                <span className="hero-stat-label">Invites Created</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">1000+</span>
                <span className="hero-stat-label">Guests Managed</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">3–5</span>
                <span className="hero-stat-label">Days Delivery</span>
              </div>
            </div>

            <div className="hero-actions">
              <motion.button
                onClick={() => openModal("Momentry Custom Invite")}
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get My Custom Invite →
              </motion.button>
              <motion.button
                onClick={() => openModal("Momentry Demo")}
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Live Demo
              </motion.button>
            </div>

            <div className="trust-row">
              {["No Templates", "WhatsApp Sharing", "RSVP Included", "Mobile Optimized"].map(t => (
                <div key={t} className="trust-item">
                  <div className="trust-dot" />{t}
                </div>
              ))}
            </div>

            <p className="hero-note">Starting ₹100/day · Custom for your event · Unforgettable first impression</p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ MARQUEE ════════════ */}
      <div className="marquee-section">
        <span className="marquee-label">Trusted for</span>
        <div className="marquee-track-wrapper">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot">✦</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ PROBLEM → SOLUTION ════════════ */}
      <section className="problem">
        <div className="container">
          <Reveal>
            <div className="section-label">The Problem</div>
          </Reveal>
          <div className="problem-grid">
            <Reveal delay={0.1} className="problem-text">
              <h3>Your Celebration Deserves More Than a Generic Invite.</h3>
              <p>
                Most people share a plain WhatsApp message, a PDF someone designed in five minutes,
                or a template that looks exactly like everyone else&apos;s. It feels forgettable before
                the event even begins.
              </p>
              <p>Your guests&apos; first impression of your celebration is the invitation. Make it count.</p>
              <ul className="pain-list">
                {PAIN_POINTS.map(p => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>

            <Reveal delay={0.22} className="solution-box glass-card">
              <div className="solution-box-header">
                <div className="solution-box-icon">✨</div>
                <h4>Momentry Fixes This</h4>
              </div>
              <ul className="solution-list">
                {SOLUTIONS.map(s => <li key={s}>{s}</li>)}
              </ul>
              <motion.button
                onClick={() => openModal("Momentry Custom Invite")}
                className="btn btn-primary solution-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started →
              </motion.button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ OCCASIONS ════════════ */}
      <section className="occasions">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ textAlign: 'center' }}>Occasions</div>
            <h2>Perfect for All Celebrations</h2>
            <p className="section-desc" style={{ margin: '0 auto 40px' }}>
              Whatever the occasion — we design each invite uniquely for your story.
            </p>
          </Reveal>
          <StaggerGrid className="occasions-grid">
            {OCCASIONS.map(o => (
              <StaggerItem key={o.title}>
                <motion.div
                  className="occasion-card glass-card"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="occasion-icon">{o.icon}</div>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════ LIVE DEMO ════════════ */}
      <section className="demo">
        <div className="container">
          <div className="section-label">Live Client Invitation</div>
          <div className="demo-inner">
            <Reveal delay={0.1} className="demo-text">
              <h3>See a Real Momentry Invitation — Built for a Real Client</h3>
              <p>
                This is a live wedding invitation website we created for one of our clients.
                Every detail — RSVP, countdown, venue map, event schedule, and personal story —
                is in one elegant, shareable link.
              </p>
              <p>
                Each project is custom-built. Your invitation will never look like anyone else&apos;s.
              </p>
              <a
                href="https://my-marriage-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                View Real Client Invitation → my-marriage-mocha.vercel.app
              </a>
              <p className="demo-disclaimer">
                This is a real example — not a mockup. Click the link to experience a Momentry invitation exactly as guests see it.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="demo-visual-wrap">
              <a
                href="https://my-marriage-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-video-link"
                style={{ display: 'block', width: '100%', maxWidth: '340px', margin: '0 auto' }}
              >
                <motion.div
                  className="demo-video-wrapper"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <video
                    src="/momentry-mockup/sajin-keerthana-wedding-mockup.webm"
                    autoPlay loop muted playsInline
                    className="demo-video"
                  />
                  <div className="video-overlay-hint">Click to View Live Site</div>
                </motion.div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ DASHBOARD TRUST SECTION ════════════ */}
      <section className="dashboard-section">
        <div className="dashboard-bg-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ textAlign: 'center' }}>Admin Dashboard</div>
            <h2 className="dashboard-heading">
              Beautiful Invitations in Front.<br />
              <em>Powerful Control</em> Behind the Scenes.
            </h2>
            <p className="section-desc" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
              Track RSVPs, manage guests, send invites, update schedules and monitor everything in real time.
            </p>
          </Reveal>

          <div className="dashboard-layout">
            <Reveal delay={0.1} className="dashboard-mockup-wrap">
              <div className="dashboard-browser-frame">
                <div className="dashboard-browser-bar">
                  <div className="dashboard-browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="dashboard-browser-url">momentry.urbanzi.in/admin</div>
                </div>
                <div className="dashboard-browser-screen">
                  <img
                    src="/momentry-mockup/momentry software dashbaord.webp"
                    alt="Momentry admin dashboard — RSVP tracking and guest management interface"
                    className="dashboard-img"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="dashboard-watermark">Urbanzi</div>
            </Reveal>

            <div className="dashboard-right">
              <StaggerGrid className="dashboard-features">
                {DASHBOARD_FEATURES.map(f => (
                  <StaggerItem key={f.text}>
                    <motion.div
                      className="dashboard-feature-item glass-card"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <span className="dashboard-feature-icon">{f.icon}</span>
                      <span className="dashboard-feature-text">{f.text}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
              <motion.button
                onClick={() => openModal("Momentry Dashboard Demo")}
                className="btn btn-primary dashboard-cta"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                See Dashboard in Action →
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section className="features" id="features">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ textAlign: 'center' }}>What&apos;s Included</div>
            <h2>Premium Features in Every Invitation</h2>
            <p className="section-desc" style={{ margin: '0 auto 40px' }}>
              Every Momentry invite is a complete guest experience — not just a design.
            </p>
          </Reveal>
          <StaggerGrid className="features-grid">
            {FEATURES.map(f => (
              <StaggerItem key={f.title}>
                <motion.div
                  className="feature-card glass-card"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <motion.button
              onClick={() => openModal("Momentry Custom Invite")}
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get My Custom Invite →
            </motion.button>
          </Reveal>
        </div>
      </section>

      {/* ════════════ PRICING ════════════ */}
      <section className="plans" id="plans">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ textAlign: 'center' }}>Pricing</div>
            <h2>Transparent Pricing — Starting at Just ₹100/Day</h2>
            <p className="section-desc" style={{ margin: '0 auto 16px' }}>
              One-time project pricing. No subscriptions. No surprises. All content editable via your backend.
            </p>
            <div className="pricing-trust-badge">
              <span>🔒</span> No subscriptions · One-time pricing · Fully editable after delivery
            </div>
          </Reveal>

          <div className="plans-grid plans-grid--two">
            <Reveal delay={0.1} className="plan-card-reveal">
              <motion.div
                className="plan-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="plan-icon">🌸</div>
                <div className="plan-name">Essential</div>
                <div className="plan-price">₹2,999<span> onwards</span></div>
                <div className="plan-per-day">From ₹100/day for a 30-day invite</div>
                <div className="plan-desc">
                  Everything you need — for any celebration, any size, any occasion.
                </div>
                <ul className="plan-features">
                  {["Custom invitation website (unique design)", "WhatsApp-ready sharing link", "RSVP collection & guest management", "Mobile responsive — perfect on every phone", "Multi-function event schedule", "Venue maps with one-tap navigation", "Countdown timer", "Photo & story sections", "Dietary & attendance tracking", "Multi-language support", "Cultural & traditional customization", "Hosted for your full event period"].map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => openModal("Momentry Essential")}
                  className="plan-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get My Custom Invite
                </motion.button>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2} className="plan-card-reveal">
              <motion.div
                className="plan-card popular"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="plan-popular-tag">Premium Experience</div>
                <div className="plan-icon">💍</div>
                <div className="plan-name">Premium</div>
                <div className="plan-price">₹4,999<span> onwards</span></div>
                <div className="plan-per-day">Price varies based on design complexity</div>
                <div className="plan-desc">
                  Everything in Essential, plus a curated media gallery and a bespoke premium design crafted by our UI/UX team.
                </div>
                <ul className="plan-features">
                  {["Everything in Essential", "Image & video gallery — Save the Date", "Curated media showcase for your story", "Premium custom UI/UX design by our designers", "Design priced based on complexity & customization", "Content & photos editable via backend"].map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="plan-note">
                  Premium design pricing is shared after understanding your vision and event requirements.
                </div>
                <motion.button
                  onClick={() => openModal("Momentry Premium")}
                  className="plan-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Premium Design
                </motion.button>
              </motion.div>
            </Reveal>
          </div>

          <Reveal>
            <p className="pricing-footer-note">
              Not sure which fits?{' '}
              <button onClick={() => openModal("Momentry Consultation")} className="pricing-talk-link">
                Talk to us
              </button>{' '}
              — we&apos;ll guide you based on your event and budget.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="testimonials">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ textAlign: 'center' }}>What Families Say</div>
            <h2>Why Families Love Momentry</h2>
          </Reveal>
          <StaggerGrid className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={i}>
                <div className="testimonial-card glass-card">
                  <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-author">{t.author}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="faq" id="faq">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ textAlign: 'center' }}>FAQ</div>
            <h2 style={{ textAlign: 'center' }}>Common Questions About Momentry</h2>
          </Reveal>

          <div className="faq-list">
            <FaqItem
              question="What exactly is a Momentry digital invitation?"
              answer="A Momentry invitation is a live website built specifically for your event. It includes your event details, RSVP form, venue map, schedule, countdown timer, and personal story — all accessible via a single shareable link."
            />
            <FaqItem
              question="How is this different from a template invitation?"
              answer="Momentry does not use templates. Every invitation is custom-designed from scratch based on your event type, family style, colors, theme, language, cultural requirements, and personal story. No two invitations ever look the same."
            />
            <FaqItem
              question="How do guests access the invitation?"
              answer="You receive a single link that you can share on WhatsApp, SMS, or email. Guests click the link and the invitation opens instantly on their phone — no app required, no download needed."
            />
            <FaqItem
              question="Can I collect RSVP through Momentry?"
              answer="Yes. Every Momentry invite includes a built-in RSVP form. Guests confirm attendance directly through the invite and you can see all responses in your guest dashboard in real time."
            />
            <FaqItem
              question="How long does it take to build my invitation?"
              answer="Most invitations are delivered within 3 to 5 business days after we receive your event details, content, and preferences. Premium packages may take slightly longer depending on customization requirements."
            />
            <FaqItem
              question="Can I include multiple events like mehendi, reception, and wedding?"
              answer="Yes. Our Premium package supports multi-event schedules. You can list all your functions — mehendi, sangeet, reception, wedding — with separate dates, timings, and venue details in one elegant invite."
            />
            <FaqItem
              question="Can the invitation be customized in regional languages?"
              answer="Yes. We support invitations in multiple languages including Malayalam, Hindi, Tamil, Telugu, Kannada, and other regional languages. Language preferences can be discussed during consultation."
            />
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="final-cta" id="start">
        <div className="cta-box">
          <div className="cta-glow" />
          <Reveal>
            <div className="section-label">Ready to Create?</div>
            <h2>Your Event Happens Once.<br />Make the First Impression Unforgettable.</h2>
            <p>Create a personalized invitation your guests will remember long after the celebration ends.</p>
            <div className="cta-actions">
              <motion.button
                onClick={() => openModal("Momentry Custom Invite")}
                className="btn btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: '1.05rem', padding: '18px 44px' }}
              >
                Start My Invite →
              </motion.button>
              <motion.button
                onClick={() => openModal("Momentry Consultation")}
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontSize: '1.05rem', padding: '18px 44px' }}
              >
                Talk to Us
              </motion.button>
            </div>
            <div className="cta-occasions">
              {["Weddings", "Birthdays", "Engagements", "Baby Showers", "Housewarming", "Corporate Events", "Custom Celebrations"].map(o => (
                <span key={o} className="cta-occasion-tag">{o}</span>
              ))}
            </div>
            <p className="cta-tagline">Momentry by Urbanzi — Invitations That Become Memories.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
