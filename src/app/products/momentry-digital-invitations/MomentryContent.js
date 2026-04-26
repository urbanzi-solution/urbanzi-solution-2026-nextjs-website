"use client";

import React, { useEffect, useState } from 'react';
import { useLeadModal } from "@/context/LeadContext";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {question}
      </button>
      <div className="faq-a">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function MomentryContent() {
  const { openModal } = useLeadModal();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Custom Digital Invitations • No Templates • Built for Your Story</div>
          <h1>Premium Digital Invitations for <em>Every Celebration</em></h1>
          <p className="hero-sub">
            Momentry by Urbanzi creates beautifully personalized digital invitation websites
            for weddings, birthdays, engagements, and every celebration that deserves more than a generic card.
          </p>
          <div className="hero-actions">
            <button onClick={() => openModal("Momentry Custom Invite")} className="btn btn-primary">
              Get My Custom Invite →
            </button>
            <button onClick={() => openModal("Momentry Consultation")} className="btn btn-secondary">
              Talk to Us First
            </button>
          </div>
          <p className="hero-note">Starting ₹100/day • Custom for your event • Unforgettable first impression</p>

          <div className="trust-row">
            <div className="trust-item"><div className="trust-dot"></div>No Templates</div>
            <div className="trust-item"><div className="trust-dot"></div>WhatsApp Sharing</div>
            <div className="trust-item"><div className="trust-dot"></div>RSVP Included</div>
            <div className="trust-item"><div className="trust-dot"></div>Mobile Optimized</div>
          </div>
        </div>
      </section>

      {/* ════════════ PROBLEM ════════════ */}
      <section className="problem">
        <div className="container">
          <div className="section-label">The Problem</div>
          <div className="problem-grid">
            <div className="problem-text fade-up">
              <h3>Your Celebration Deserves More Than a Generic Invite.</h3>
              <p>
                Most people share a plain WhatsApp message, a PDF someone designed in five minutes,
                or a template that looks exactly like everyone else's. It feels forgettable before
                the event even begins.
              </p>
              <p>Your guests' first impression of your celebration is the invitation. Make it count.</p>
              <ul className="pain-list">
                <li>Generic PDF invites feel impersonal and cheap</li>
                <li>Chasing RSVP confirmations over phone calls is exhausting</li>
                <li>Sharing venue maps, timings, and updates in separate messages causes confusion</li>
                <li>Printed cards don't reach everyone in time</li>
              </ul>
            </div>
            <div className="solution-box fade-up">
              <h4>Momentry Fixes This</h4>
              <ul className="solution-list">
                <li>A unique invitation website built around your story</li>
                <li>RSVP tracking — know exactly who is coming</li>
                <li>Share via WhatsApp with one link</li>
                <li>Venue maps, schedules, countdowns in one place</li>
                <li>Photos, stories, and personal touches that guests remember</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ USP ════════════ */}
      <section className="usp">
        <div className="container">
          <div className="section-label">Why Momentry</div>
          <h2>Why Families Choose Momentry Over Everything Else</h2>
          <p className="section-desc">
            Because every celebration is unique — and your invitation should be too.
          </p>

          <div className="usp-grid">
            <div className="usp-card fade-up">
              <div className="usp-icon">✨</div>
              <h3>No Templates. Ever.</h3>
              <p>Every invitation is designed from scratch based on your event, style, culture, and story. Nothing is copy-paste.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">💌</div>
              <h3>WhatsApp-Ready Sharing</h3>
              <p>One beautiful link your guests can open on any phone. No app downloads. No confusion. Instant delivery.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">📋</div>
              <h3>RSVP Without the Chase</h3>
              <p>Guests confirm attendance directly through the invite. You see who is coming in real time — no calling required.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">🗺️</div>
              <h3>Maps, Schedules & Countdowns</h3>
              <p>Every detail — venue navigation, event timings, and countdown — lives in one premium experience.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">📸</div>
              <h3>Photos & Personal Stories</h3>
              <p>Add your photos, your love story, family moments, or childhood memories. Make your invite emotional and memorable.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">📱</div>
              <h3>Stunning on Every Phone</h3>
              <p>Fully mobile-optimized. Looks beautiful on every screen, every device, the moment your guest opens the link.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ OCCASIONS ════════════ */}
      <section className="occasions">
        <div className="container">
          <div className="section-label">Occasions</div>
          <h2>Perfect for All Celebrations</h2>
          <p className="section-desc">
            Whatever the occasion — we design each invite uniquely for your story.
          </p>

          <div className="occasions-grid">
            <div className="occasion-card fade-up">
              <div className="occasion-icon">💍</div>
              <h3>Weddings</h3>
              <p>Luxury digital wedding invites with RSVP, maps, event schedule, countdown, story pages, and multi-function details.</p>
            </div>
            <div className="occasion-card fade-up">
              <div className="occasion-icon">🎂</div>
              <h3>Birthdays</h3>
              <p>Fun and stylish birthday invitations for kids, adults, milestone birthdays, and surprise parties.</p>
            </div>
            <div className="occasion-card fade-up">
              <div className="occasion-icon">💎</div>
              <h3>Engagements</h3>
              <p>Elegant engagement websites with event details, family introductions, and personal story sections.</p>
            </div>
            <div className="occasion-card fade-up">
              <div className="occasion-icon">👶</div>
              <h3>Baby Showers</h3>
              <p>Warm and joyful invites to celebrate growing families, complete with RSVP and gift wishlists.</p>
            </div>
            <div className="occasion-card fade-up">
              <div className="occasion-icon">🏠</div>
              <h3>Housewarming</h3>
              <p>Simple and classy invitations for griha pravesh and home celebration ceremonies.</p>
            </div>
            <div className="occasion-card fade-up">
              <div className="occasion-icon">🎗️</div>
              <h3>Corporate &amp; Private Events</h3>
              <p>Launches, networking events, company celebrations, and formal invitations with brand-aligned design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-label">What's Included</div>
          <h2>Premium Features in Every Invitation</h2>
          <p className="section-desc">
            Every Momentry invite is a complete guest experience — not just a design.
          </p>

          <div className="features-grid">
            {[
              { icon: "🌐", title: "Custom Invitation Website", desc: "A live invitation link personalized for your event — looks like a premium website, not a template." },
              { icon: "💬", title: "WhatsApp Ready Sharing", desc: "Share your invite link instantly with friends and family. Works perfectly in any WhatsApp message." },
              { icon: "✅", title: "RSVP Management", desc: "Guests confirm attendance through the invite. You track every response from a simple dashboard." },
              { icon: "⏳", title: "Countdown Timer", desc: "Build excitement before the big day with a live countdown your guests see every time they visit." },
              { icon: "📍", title: "Venue Maps", desc: "One-tap navigation for guests directly from the invite. No more \"where do I go?\" messages." },
              { icon: "🗓️", title: "Event Schedule", desc: "Display timings and details for all functions clearly — mehendi, reception, wedding, and more." },
              { icon: "🖼️", title: "Photo & Story Sections", desc: "Add photos, your journey together, childhood memories — make your invite emotional and personal." },
              { icon: "🍽️", title: "Dietary & Attendance Tracking", desc: "Collect dietary preferences and attendance counts — especially useful for weddings and large events." },
              { icon: "👥", title: "Guest Management Dashboard", desc: "Track who opened, who confirmed, and who is pending — all in one clean, organized dashboard." },
            ].map((f) => (
              <div key={f.title} className="feature-card fade-up">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ DEMO ════════════ */}
      <section className="demo">
        <div className="container">
          <div className="section-label">Live Client Invitation</div>
          <div className="demo-inner">
            <div className="demo-text fade-up">
              <h3>See a Real Momentry Invitation — Built for a Real Client</h3>
              <p>
                This is a live wedding invitation website we created for one of our clients.
                Every detail — RSVP, countdown, venue map, event schedule, and personal story —
                is in one elegant, shareable link.
              </p>
              <p>
                Each project is custom-built. Your invitation will never look like anyone else's.
              </p>
              <a
                href="https://my-marriage-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                View Live Client Invitation → my-marriage-mocha.vercel.app
              </a>
              <p style={{marginTop:"16px", fontSize:"0.82rem", color:"#888"}}>
                This is a real example — not a mockup. Click the link to experience a Momentry invitation exactly as guests see it.
              </p>
            </div>
            <div className="demo-visual fade-up">
              <div className="invite-mock">
                <div className="invite-mock-header">
                  <div className="invite-mock-title">Rahul &amp; Priya</div>
                  <div className="invite-mock-sub">Wedding Invitation • 12 December 2025</div>
                </div>
                <div className="invite-mock-body">
                  <div className="invite-mock-row">
                    <div className="invite-mock-icon">⏳</div>
                    <span>Countdown: 45 Days to Go</span>
                    <div className="invite-mock-badge">Live</div>
                  </div>
                  <div className="invite-mock-row">
                    <div className="invite-mock-icon">📍</div>
                    <span>The Leela Palace, Kochi</span>
                    <div className="invite-mock-badge">Map</div>
                  </div>
                  <div className="invite-mock-row">
                    <div className="invite-mock-icon">🗓️</div>
                    <span>Mehendi • Reception • Wedding</span>
                    <div className="invite-mock-badge">3 Events</div>
                  </div>
                  <div className="invite-mock-row">
                    <div className="invite-mock-icon">✅</div>
                    <span>RSVP — 84 Confirmed</span>
                    <div className="invite-mock-badge">Open</div>
                  </div>
                  <div className="invite-mock-row">
                    <div className="invite-mock-icon">📸</div>
                    <span>Our Story &amp; Gallery</span>
                    <div className="invite-mock-badge">View</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ PLANS ════════════ */}
      <section className="plans" id="plans">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h2>Transparent Pricing — Starting at Just ₹100 / Day</h2>
          <p className="section-desc">
            One-time project pricing. No subscriptions. No surprises. All content and photos are editable by you through your backend after delivery.
          </p>

          <div className="plans-grid plans-grid--two">
            {/* Essential */}
            <div className="plan-card fade-up">
              <div className="plan-icon">🌸</div>
              <div className="plan-name">Essential</div>
              <div className="plan-price">₹2,999<span> onwards</span></div>
              <div className="plan-per-day">From ₹100/day for a 30-day invite</div>
              <div className="plan-desc">
                Everything you need — for any celebration, any size, any occasion.
              </div>
              <ul className="plan-features">
                <li>Custom invitation website (unique design)</li>
                <li>WhatsApp-ready sharing link</li>
                <li>RSVP collection &amp; guest management</li>
                <li>Mobile responsive — perfect on every phone</li>
                <li>Multi-function event schedule</li>
                <li>Venue maps with one-tap navigation</li>
                <li>Countdown timer</li>
                <li>Photo &amp; story sections</li>
                <li>Dietary &amp; attendance tracking</li>
                <li>Multi-language support</li>
                <li>Cultural &amp; traditional customization</li>
                <li>Content &amp; photos editable via backend</li>
                <li>Hosted for your full event period</li>
              </ul>
              <button onClick={() => openModal("Momentry Essential")} className="plan-btn">
                Get My Custom Invite
              </button>
            </div>

            {/* Premium */}
            <div className="plan-card popular fade-up">
              <div className="plan-popular-tag">Premium Experience</div>
              <div className="plan-icon">💍</div>
              <div className="plan-name">Premium</div>
              <div className="plan-price">₹4,999<span> onwards</span></div>
              <div className="plan-per-day">Price varies based on design complexity</div>
              <div className="plan-desc">
                Everything in Essential, plus a curated media gallery and a bespoke premium design crafted by our UI/UX team.
              </div>
              <ul className="plan-features">
                <li>Everything in Essential</li>
                <li>Image &amp; video gallery — Save the Date</li>
                <li>Curated media showcase for your story</li>
                <li>Premium custom UI/UX design by our designers</li>
                <li>Design priced based on complexity &amp; customization</li>
                <li>Content &amp; photos editable via backend</li>
              </ul>
              <div className="plan-note">
                Premium design pricing is shared after understanding your vision and event requirements.
              </div>
              <button onClick={() => openModal("Momentry Premium")} className="plan-btn">
                Request Premium Design
              </button>
            </div>
          </div>

          <p style={{textAlign:"center", marginTop:"32px", fontSize:"0.82rem", color:"#888"}}>
            Not sure which fits? Talk to us — we'll guide you based on your event and budget.
          </p>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="testimonials">
        <div className="container">
          <div className="section-label">What Families Say</div>
          <h2>Why Families Love Momentry</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                We were amazed at how personal it felt. Our guests kept saying it was the most
                beautiful wedding invite they had ever received. Worth every rupee.
              </p>
              <div className="testimonial-author">Wedding Couple</div>
              <div className="testimonial-role">Kochi, Kerala</div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                Instead of calling 200 people for RSVP, we just shared the link on WhatsApp.
                Confirmations came in automatically. Saved us so much time and stress.
              </p>
              <div className="testimonial-author">Event Host</div>
              <div className="testimonial-role">Bangalore, Karnataka</div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                My daughter's birthday invite was stunning — not a template in sight. The countdown,
                the photos, the story section — guests were impressed before the party even started.
              </p>
              <div className="testimonial-author">Parent</div>
              <div className="testimonial-role">Mumbai, Maharashtra</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-label" style={{textAlign:"center"}}>FAQ</div>
          <h2 style={{textAlign:"center"}}>Common Questions About Momentry</h2>

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
              answer="Most invitations are delivered within 3 to 5 business days after we receive your event details, content, and preferences. Premium and Signature packages may take slightly longer depending on customization requirements."
            />
            <FaqItem
              question="Can I include multiple events like mehendi, reception, and wedding?"
              answer="Yes. Our Premium and Signature packages support multi-event schedules. You can list all your functions — mehendi, sangeet, reception, wedding — with separate dates, timings, and venue details in one elegant invite."
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
          <div className="section-label">Ready to Create?</div>
          <h2>Your Event Happens Once. Make the First Impression Unforgettable.</h2>
          <p>Create a personalized invitation your guests will remember long after the celebration ends.</p>
          <div className="cta-actions">
            <button onClick={() => openModal("Momentry Custom Invite")} className="btn btn-primary" style={{fontSize:"1.05rem", padding:"18px 44px"}}>
              Get My Custom Invite →
            </button>
            <button onClick={() => openModal("Momentry Consultation")} className="btn btn-secondary" style={{fontSize:"1.05rem", padding:"18px 44px"}}>
              Talk to Us First
            </button>
          </div>
          <div className="cta-occasions">
            {["Weddings", "Birthdays", "Engagements", "Baby Showers", "Housewarming", "Corporate Events", "Custom Celebrations"].map(o => (
              <span key={o} className="cta-occasion-tag">{o}</span>
            ))}
          </div>
          <p style={{marginTop:"24px", fontSize:"0.8rem", color:"#888"}}>
            Momentry by Urbanzi — Invitations That Become Memories.
          </p>
        </div>
      </section>
    </>
  );
}
