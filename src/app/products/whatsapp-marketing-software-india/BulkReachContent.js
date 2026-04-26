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

export default function BulkReachContent() {
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
          <div className="hero-badge">Official Meta WhatsApp API • Built for Indian Businesses</div>
          <h1>Turn WhatsApp Into Your <em>Most Powerful</em> Revenue Channel</h1>
          <p className="hero-sub">
            BulkReach by Urbanzi helps businesses send bulk campaigns, automate Facebook &amp; Instagram leads,
            manage customer chats, and close more sales — all from one powerful WhatsApp dashboard.
          </p>
          <div className="hero-actions">
            <button onClick={() => openModal("BulkReach Free Trial")} className="btn btn-primary">
              Start Free Trial →
            </button>
            <button onClick={() => openModal("BulkReach Demo")} className="btn btn-secondary">
              Book Live Demo
            </button>
          </div>
          <p className="hero-note">7-day free trial • No credit card required • Fast setup</p>

          <div className="trust-row">
            <div className="trust-item"><div className="trust-dot"></div>Official Meta API</div>
            <div className="trust-item"><div className="trust-dot"></div>Built for Indian Businesses</div>
            <div className="trust-item"><div className="trust-dot"></div>No Coding Required</div>
            <div className="trust-item"><div className="trust-dot"></div>INR Pricing</div>
          </div>
        </div>
      </section>

      {/* ════════════ PROBLEM ════════════ */}
      <section className="problem">
        <div className="container">
          <div className="section-label">The Problem</div>
          <div className="problem-grid">
            <div className="problem-text fade-up">
              <h3>Your Leads Are Interested Right Now. Not Tomorrow.</h3>
              <p>
                When someone fills your Facebook or Instagram form, their intent is highest in that moment.
                If your team responds hours later — the customer loses urgency, a competitor reaches first,
                and your ad spend gets wasted.
              </p>
              <p>Most businesses use WhatsApp. Very few use it properly.</p>
              <ul className="pain-list">
                <li>Leads come in but teams reply hours later</li>
                <li>Follow-up gets forgotten or missed</li>
                <li>Customers move to competitors who respond faster</li>
                <li>No system to track reads, replies, or conversions</li>
              </ul>
            </div>
            <div className="solution-box fade-up">
              <h4>BulkReach Fixes This</h4>
              <ul className="solution-list">
                <li>Send thousands of WhatsApp messages in minutes</li>
                <li>Auto-reply to Facebook &amp; Instagram leads instantly</li>
                <li>Manage all customer chats in one shared inbox</li>
                <li>Track reads, replies, failures, and conversions</li>
                <li>Build repeatable campaigns that scale your revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ USP ════════════ */}
      <section className="usp">
        <div className="container">
          <div className="section-label">Why BulkReach</div>
          <h2>Why Businesses Choose BulkReach Over Other Tools</h2>
          <p className="section-desc">
            Many tools help you send messages. BulkReach is built to help you close business.
          </p>

          <div className="usp-grid">
            <div className="usp-card fade-up">
              <div className="usp-icon">⚡</div>
              <h3>Instant Lead Response</h3>
              <p>Every Meta lead receives a WhatsApp message in under 10 seconds. Strike while interest is hot.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">📈</div>
              <h3>Built for Sales, Not Just Messaging</h3>
              <p>Designed to increase enquiries, bookings, and conversions — not just message delivery counts.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">💬</div>
              <h3>Shared Team Inbox</h3>
              <p>Your entire sales team manages all WhatsApp conversations together from one clean dashboard.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">🤖</div>
              <h3>No-Code Automation</h3>
              <p>Set follow-up workflows once. Let them run daily without any technical skill required.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">🇮🇳</div>
              <h3>India-Friendly Pricing</h3>
              <p>Transparent monthly pricing in INR. No hidden charges. No dollar conversions. No surprises.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">🔒</div>
              <h3>Official Meta API Platform</h3>
              <p>Secure, compliant, and scalable. Built on official Meta WhatsApp Business systems for long-term reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-label features-intro">Core Features</div>
          <h2>Everything You Need to Convert WhatsApp Into Revenue</h2>
          <p className="section-desc">
            From bulk campaigns to lead automation and live chat — one platform, all the tools.
          </p>

          {/* Feature 1 — Bulk Campaigns */}
          <div className="feature-block fade-up">
            <div className="feature-text">
              <div className="feature-tag">📣 Bulk Campaigns</div>
              <h3>Send Thousands of Personalised WhatsApp Messages in Minutes</h3>
              <p>
                Launch campaigns to your entire contact list with personalised messages, images, and CTAs.
                Schedule for the right time and track every result in real-time.
              </p>
              <ul className="feature-list">
                <li>CSV contact import with variable personalisation</li>
                <li>Send text, images, documents, and video messages</li>
                <li>Scheduled campaign delivery at optimal times</li>
                <li>Real-time delivery analytics and read tracking</li>
                <li>Campaign ROI and reply rate reporting</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar">
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                </div>
                <div className="mock-stat-row">
                  <div className="mock-stat">
                    <div className="mock-stat-label">Sent</div>
                    <div className="mock-stat-val green">12,450</div>
                  </div>
                  <div className="mock-stat">
                    <div className="mock-stat-label">Delivered</div>
                    <div className="mock-stat-val">11,980</div>
                  </div>
                </div>
                <div className="mock-stat-row">
                  <div className="mock-stat">
                    <div className="mock-stat-label">Read</div>
                    <div className="mock-stat-val green">8,340</div>
                  </div>
                  <div className="mock-stat">
                    <div className="mock-stat-label">Replied</div>
                    <div className="mock-stat-val">1,250</div>
                  </div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar"></div>
                  <div style={{flex: 1}}><div className="mock-line w80" style={{marginBottom:"6px"}}></div><div className="mock-line w50"></div></div>
                  <div className="mock-badge sent">Sent</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#128c7e,#25d366)"}}></div>
                  <div style={{flex: 1}}><div className="mock-line w60" style={{marginBottom:"6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge read">Read</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 — Meta Lead Automation */}
          <div className="feature-block reverse fade-up">
            <div className="feature-text">
              <div className="feature-tag">🤖 Meta Lead Automation</div>
              <h3>Connect Facebook &amp; Instagram Leads to WhatsApp Automatically</h3>
              <p>
                When someone fills your Meta lead form, BulkReach instantly saves the contact, sends a
                WhatsApp message, and notifies your sales team — all in under 10 seconds.
              </p>
              <ul className="feature-list">
                <li>Connect Facebook &amp; Instagram lead forms directly</li>
                <li>Lead contact saved to CRM automatically</li>
                <li>Instant WhatsApp message sent to the prospect</li>
                <li>Sales team notified immediately</li>
                <li>Automated follow-up workflow triggered</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar">
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                </div>
                <div style={{background:"rgba(37,211,102,0.06)", border:"1px solid rgba(37,211,102,0.15)", borderRadius:"10px", padding:"16px", marginBottom:"12px"}}>
                  <div style={{fontSize:"0.7rem", color:"var(--brand-glow)", marginBottom:"6px", fontWeight:"600"}}>NEW META LEAD</div>
                  <div className="mock-line w80" style={{marginBottom:"6px"}}></div>
                  <div className="mock-line w50"></div>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px", justifyContent:"center"}}>
                  <div style={{width:"2px", height:"20px", background:"var(--brand-glow)", borderRadius:"2px"}}></div>
                  <div style={{fontSize:"0.7rem", color:"var(--gray-1)"}}>Auto-triggered in &lt;10 seconds</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar"></div>
                  <div style={{flex:1}}><div className="mock-line w60" style={{marginBottom:"6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge sent">WA Sent</div>
                </div>
                <div className="mock-row" style={{marginTop:"8px"}}>
                  <div style={{fontSize:"0.72rem", color:"var(--gray-1)"}}>Team notified • Contact saved • Workflow active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 — Shared Inbox */}
          <div className="feature-block fade-up">
            <div className="feature-text">
              <div className="feature-tag">💬 Live WhatsApp Inbox</div>
              <h3>Handle All Customer Replies in One Shared Team Inbox</h3>
              <p>
                No more scattered phones or missed messages. Your entire sales team manages every
                WhatsApp conversation from a single, organised dashboard with full history.
              </p>
              <ul className="feature-list">
                <li>Shared inbox accessible by your whole team</li>
                <li>Unread message alerts and priority sorting</li>
                <li>Reply with text, images, documents, and files</li>
                <li>Full contact history and conversation timeline</li>
                <li>Team assignment and workflow management</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar">
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar"></div>
                  <div style={{flex:1}}><div className="mock-line w60" style={{marginBottom:"6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge replied">Replied</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#128c7e,#25d366)"}}></div>
                  <div style={{flex:1}}><div className="mock-line w80" style={{marginBottom:"6px"}}></div><div className="mock-line w50"></div></div>
                  <div className="mock-badge pending">Unread</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#7E57C2,#5E35B1)"}}></div>
                  <div style={{flex:1}}><div className="mock-line w60" style={{marginBottom:"6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge read">Read</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#26A69A,#00897B)"}}></div>
                  <div style={{flex:1}}><div className="mock-line w80" style={{marginBottom:"6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge replied">Replied</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 — Analytics */}
          <div className="feature-block reverse fade-up">
            <div className="feature-text">
              <div className="feature-tag">📊 Reporting & Analytics</div>
              <h3>Know Exactly What Is Working Across Every Campaign</h3>
              <p>
                Track every message from sent to converted. Understand your best-performing campaigns,
                lead sources, and reply rates with clean, actionable reports.
              </p>
              <ul className="feature-list">
                <li>Sent, delivered, read, and failed message tracking</li>
                <li>Campaign reply rate and conversion metrics</li>
                <li>Cost estimates and campaign ROI</li>
                <li>Lead source reporting by Meta ad or form</li>
                <li>Exportable reports for team reviews</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar">
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                  <div className="mock-dot"></div>
                </div>
                <div style={{background:"rgba(255,255,255,0.02)", padding:"16px", borderRadius:"10px", marginBottom:"12px"}}>
                  <div style={{fontSize:"0.68rem", color:"var(--gray-1)", marginBottom:"4px"}}>THIS MONTH CAMPAIGNS</div>
                  <div style={{fontFamily:"var(--font-display)", fontSize:"1.8rem", fontWeight:"700", color:"var(--white-pure)"}}>14 Active</div>
                  <div style={{fontSize:"0.72rem", color:"var(--brand-glow)", marginTop:"4px"}}>↑ 68% avg read rate</div>
                </div>
                <div style={{display:"flex", gap:"8px", height:"60px", alignItems:"flex-end"}}>
                  <div style={{flex:1, background:"var(--brand-dark)", borderRadius:"4px 4px 0 0", height:"35%"}}></div>
                  <div style={{flex:1, background:"var(--brand-dark)", borderRadius:"4px 4px 0 0", height:"55%"}}></div>
                  <div style={{flex:1, background:"var(--brand-dark)", borderRadius:"4px 4px 0 0", height:"45%"}}></div>
                  <div style={{flex:1, background:"var(--brand-dark)", borderRadius:"4px 4px 0 0", height:"70%"}}></div>
                  <div style={{flex:1, background:"var(--brand-dark)", borderRadius:"4px 4px 0 0", height:"60%"}}></div>
                  <div style={{flex:1, background:"var(--brand-dark)", borderRadius:"4px 4px 0 0", height:"85%"}}></div>
                  <div style={{flex:1, background:"var(--brand-glow)", borderRadius:"4px 4px 0 0", height:"100%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ INDUSTRIES ════════════ */}
      <section className="industries">
        <div className="container">
          <div className="section-label">Industries</div>
          <h2>Perfect for Businesses That Rely on Leads</h2>
          <p className="section-desc">
            BulkReach is built for any business where fast follow-up and WhatsApp communication drives growth.
          </p>

          <div className="industry-grid">
            {[
              { icon: "🏠", name: "Real Estate Agencies" },
              { icon: "🎓", name: "Coaching Institutes" },
              { icon: "🛍️", name: "E-commerce Brands" },
              { icon: "🏥", name: "Clinics & Hospitals" },
              { icon: "🛡️", name: "Insurance Teams" },
              { icon: "✈️", name: "Travel Companies" },
              { icon: "🚗", name: "Car Dealers" },
              { icon: "📣", name: "Marketing Agencies" },
            ].map((industry) => (
              <div key={industry.name} className="industry-card fade-up">
                <div className="industry-icon">{industry.icon}</div>
                <div className="industry-name">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section className="how" id="how">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2>Start Sending Campaigns in 3 Simple Steps</h2>
          <p className="section-desc">
            No technical knowledge needed. We help you set up and go live quickly.
          </p>

          <div className="steps">
            <div className="step fade-up">
              <h3>Connect Your WhatsApp Business Account</h3>
              <p>We guide you through connecting your official Meta WhatsApp Business account. Setup is straightforward with our onboarding support.</p>
            </div>
            <div className="step fade-up">
              <h3>Import Contacts or Connect Meta Leads</h3>
              <p>Upload your contacts via CSV or connect your Facebook and Instagram lead ad forms directly to BulkReach.</p>
            </div>
            <div className="step fade-up">
              <h3>Launch Campaigns and Automations</h3>
              <p>Send bulk campaigns, activate lead automation workflows, and start managing all replies from your shared inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ PLANS ════════════ */}
      <section className="plans" id="plans">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h2>Transparent Pricing That Grows With You</h2>
          <p className="section-desc">
            Simple INR pricing. No hidden charges. No dollar conversions. Cancel anytime.
          </p>

          <div className="plans-grid">
            {/* Starter */}
            <div className="plan-card fade-up">
              <div className="plan-icon">🌱</div>
              <div className="plan-name">Starter</div>
              <div className="plan-price">₹1,999<span>/month</span></div>
              <div className="plan-desc">Best for small businesses starting WhatsApp growth.</div>
              <ul className="plan-features">
                <li>2,000 Contacts</li>
                <li>10,000 Messages / month</li>
                <li>10 Templates</li>
                <li>Bulk Campaigns</li>
                <li>Basic Inbox</li>
                <li>Email Support</li>
                <li>1 User</li>
              </ul>
              <button onClick={() => openModal("BulkReach Starter")} className="plan-btn">
                Start Starter Plan
              </button>
            </div>

            {/* Growth */}
            <div className="plan-card popular fade-up">
              <div className="plan-popular-tag">Recommended</div>
              <div className="plan-icon">🚀</div>
              <div className="plan-name">Growth</div>
              <div className="plan-price">₹4,999<span>/month</span></div>
              <div className="plan-desc">Best for serious growth-focused businesses.</div>
              <ul className="plan-features">
                <li>15,000 Contacts</li>
                <li>75,000 Messages / month</li>
                <li>Unlimited Templates</li>
                <li>Full Shared Inbox</li>
                <li>Scheduling</li>
                <li>Meta Lead Ads Automation</li>
                <li>Up to 5 Workflows</li>
                <li>Reports Export</li>
                <li>WhatsApp Support</li>
                <li>3 Users</li>
              </ul>
              <button onClick={() => openModal("BulkReach Growth")} className="plan-btn">
                Choose Growth
              </button>
            </div>

            {/* Pro */}
            <div className="plan-card fade-up">
              <div className="plan-icon">🏢</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">₹9,999<span>/month</span></div>
              <div className="plan-desc">Best for agencies and high-volume teams.</div>
              <ul className="plan-features">
                <li>Unlimited Contacts</li>
                <li>Unlimited Campaigns</li>
                <li>Unlimited Templates</li>
                <li>Unlimited Workflows</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
                <li>Team Access</li>
                <li>White Label Ready</li>
                <li>API Access</li>
                <li>Onboarding Call</li>
              </ul>
              <button onClick={() => openModal("BulkReach Pro")} className="plan-btn">
                Get Pro
              </button>
            </div>

            {/* Agency */}
            <div className="plan-card enterprise fade-up">
              <div className="plan-icon">🤝</div>
              <div className="plan-name">Agency</div>
              <div className="plan-price">Custom</div>
              <div className="plan-desc">For resellers and enterprise teams with multiple clients.</div>
              <ul className="plan-features">
                <li>White-label setup</li>
                <li>Multiple client accounts</li>
                <li>Multi-user access</li>
                <li>Dedicated account manager</li>
                <li>Custom onboarding</li>
                <li>Priority SLA support</li>
              </ul>
              <button onClick={() => openModal("BulkReach Agency")} className="plan-btn">
                Contact Sales
              </button>
            </div>
          </div>

          <p style={{textAlign:"center", marginTop:"32px", fontSize:"0.82rem", color:"var(--gray-1)"}}>
            Note: Meta charges message delivery fees separately. All plans include a 7-day free trial.
          </p>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="testimonials">
        <div className="container">
          <div className="section-label">What Businesses Say</div>
          <h2>Trusted by Growing Teams Across India</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                We started responding to Facebook leads instantly. The difference in conversions was huge —
                customers were still warm when we reached them.
              </p>
              <div className="testimonial-author">Real Estate Business Owner</div>
              <div className="testimonial-role">Delhi NCR</div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                Much easier than managing WhatsApp manually across three phones. Now our whole team
                works from one inbox and nothing gets missed.
              </p>
              <div className="testimonial-author">Coaching Institute Director</div>
              <div className="testimonial-role">Bangalore</div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                Finally one dashboard for campaigns, leads, and chats. We run five WhatsApp campaigns
                per month now with almost no manual effort.
              </p>
              <div className="testimonial-author">Marketing Agency Founder</div>
              <div className="testimonial-role">Mumbai</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-label" style={{textAlign:"center"}}>FAQ</div>
          <h2 style={{textAlign:"center"}}>Common Questions About BulkReach</h2>

          <div className="faq-list">
            <FaqItem
              question="What is WhatsApp marketing software?"
              answer="WhatsApp marketing software helps businesses run bulk campaigns, automate replies to leads, manage customer conversations, and track conversions — all through WhatsApp. BulkReach is built specifically for this purpose."
            />
            <FaqItem
              question="Do I need a WhatsApp API account?"
              answer="Yes. BulkReach works through the official Meta WhatsApp Business API. We guide you through the process of connecting your account during onboarding — it's straightforward with our support."
            />
            <FaqItem
              question="Are Meta messaging charges included in the plan price?"
              answer="No. Meta charges message delivery fees separately based on conversation types. Your BulkReach plan covers the platform, features, and support. We provide cost estimates within the dashboard so you always know what to expect."
            />
            <FaqItem
              question="Can I use BulkReach for Facebook and Instagram leads?"
              answer="Yes. Meta Lead Ads automation is a core BulkReach feature. You can connect your Facebook and Instagram lead forms so that every new lead automatically receives a WhatsApp message within seconds."
            />
            <FaqItem
              question="Is there a free trial available?"
              answer="Yes. BulkReach includes a 7-day free trial. You get access to your chosen plan with full features so you can evaluate it with real campaigns before committing."
            />
            <FaqItem
              question="Can agencies use BulkReach for multiple clients?"
              answer="Yes. We have dedicated Agency and white-label plans for resellers managing multiple client accounts. Contact our sales team for custom pricing and setup."
            />
            <FaqItem
              question="How quickly can I get started?"
              answer="Most businesses can go live within one to two business days. Our onboarding team handles the WhatsApp API connection and walks you through your first campaign setup."
            />
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="final-cta" id="start">
        <div className="cta-box">
          <div className="section-label">Ready to Grow?</div>
          <h2>Stop Losing Leads to Slow Follow-Up</h2>
          <p>Your customers already use WhatsApp. Turn it into your highest-converting sales channel today.</p>
          <div className="cta-actions">
            <button onClick={() => openModal("BulkReach Free Trial")} className="btn btn-primary" style={{fontSize:"1.05rem", padding:"18px 44px"}}>
              Start Free Trial →
            </button>
            <button onClick={() => openModal("BulkReach Demo")} className="btn btn-secondary" style={{fontSize:"1.05rem", padding:"18px 44px"}}>
              Book Free Demo
            </button>
          </div>
          <p style={{marginTop:"20px", fontSize:"0.8rem", color:"var(--gray-1)"}}>
            BulkReach by Urbanzi — Convert Conversations Into Customers.
          </p>
        </div>
      </section>
    </>
  );
}
