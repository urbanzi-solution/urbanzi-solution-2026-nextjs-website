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

export default function GymContent() {
  const { openModal } = useLeadModal();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
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
          <div className="hero-badge">Built for Gyms. Trusted by Trainers.</div>
          <h1>Your Gym Deserves Software That <em>Actually Works</em></h1>
          <p className="hero-sub">
            A fully branded gym management app — with your logo, your name, and everything your gym needs. 
            Works on phones, tablets, and laptops. No downloads. No waiting.
          </p>
          <div className="hero-actions">
            <button onClick={(e) => { e.preventDefault(); openModal("Gym Application Trial"); }} className="btn btn-primary">Start 30-Day Free Trial →</button>
            <a href="#features" className="btn btn-secondary">See All Features</a>
          </div>
          <p className="hero-note">No credit card required. No commitments. Cancel anytime.</p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Custom Branded</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">PWA</div>
              <div className="stat-label">Works on Any Device</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Support Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ USP ════════════ */}
      <section className="usp" id="usp">
        <div className="container">
          <div className="section-label">Why Choose Us</div>
          <h2>Custom Gym Software Without the Custom Price Tag</h2>
          <p className="section-desc">
            Getting software built from scratch takes months and costs a fortune. Our gym app is ready to use 
            today — and we customise it to fit your gym perfectly.
          </p>

          <div className="usp-grid">
            <div className="usp-card fade-up">
              <div className="usp-icon">🏷️</div>
              <h3>Your Brand, Your App</h3>
              <p>Every gym gets a unique product with their own logo, business name, and identity. Your members will see your brand — not ours.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">📱</div>
              <h3>Runs Everywhere</h3>
              <p>Built as a Progressive Web App. Open it on any phone, tablet, or laptop — Android, iOS, Windows, Mac. No app store downloads needed.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">🔧</div>
              <h3>Need Extra Features? Just Ask</h3>
              <p>Want something specific for your gym? We build it into your app. Get a custom-ready product without waiting months for development.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">🛡️</div>
              <h3>Free Updates &amp; Bug Fixes</h3>
              <p>Every plan includes ongoing updates and a dedicated support team. If something breaks, we fix it — no extra charges.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">💰</div>
              <h3>Try Before You Pay</h3>
              <p>Get a full 30-day free trial. No credit card, no deposit, no hidden commitments. If you like it, choose a monthly or yearly plan.</p>
            </div>
            <div className="usp-card fade-up">
              <div className="usp-icon">⚡</div>
              <h3>Ready From Day One</h3>
              <p>No lengthy setup or training. Our app is designed to be simple enough that your team can start using it the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-label">Features</div>
          <h2>Everything Your Gym Needs to Run Smoothly</h2>
          <p className="section-desc">
            From member management to financial reports — every tool a gym owner or trainer needs, all in one place.
          </p>

          {/* Feature 1 */}
          <div className="feature-block fade-up">
            <div className="feature-text">
              <h3>Member Management Made Simple</h3>
              <p>
                See every member&apos;s status at a glance. Filter your member list by active plans, 
                pending fees, expiry dates, or even blacklisted members. Click on any profile to see their 
                full details — and contact them instantly.
              </p>
              <ul className="feature-list">
                <li>Filter members by plan, expiry (today, tomorrow, 2 days, 3 days, or custom range)</li>
                <li>View member profile with plan history and transaction records</li>
                <li>One-tap call or WhatsApp directly from the member profile</li>
                <li>Renew plans, add pending balance, or edit plans in seconds</li>
                <li>Track member attendance with daily records</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar"><div className="mock-dot"></div><div className="mock-dot"></div><div className="mock-dot"></div></div>
                <div className="mock-row">
                  <div className="mock-avatar"></div>
                  <div style={{flex: 1}}><div className="mock-line w60" style={{marginBottom: "6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge active">Active</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#FF6D00,#FF8F00)"}}></div>
                  <div style={{flex: 1}}><div className="mock-line w80" style={{marginBottom: "6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge expiring">Expiring</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#ef5350,#e53935)"}}></div>
                  <div style={{flex: 1}}><div className="mock-line w60" style={{marginBottom: "6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge expired">Expired</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#42A5F5,#1E88E5)"}}></div>
                  <div style={{flex: 1}}><div className="mock-line w80" style={{marginBottom: "6px"}}></div><div className="mock-line w40"></div></div>
                  <div className="mock-badge active">Active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-block reverse fade-up">
            <div className="feature-text">
              <h3>Trainer &amp; PT Session Tracking</h3>
              <p>
                Keep your training team organised. Track trainer attendance, manage personal training sessions, 
                and monitor which members are assigned to which trainers — all from one dashboard.
              </p>
              <ul className="feature-list">
                <li>Daily trainer attendance tracking</li>
                <li>Personal training session logs and PT member assignments</li>
                <li>Track PT session progress for every member</li>
                <li>Easy plan creation and management</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar"><div className="mock-dot"></div><div className="mock-dot"></div><div className="mock-dot"></div></div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
                  <div style={{background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "10px"}}>
                    <div style={{fontSize: "0.7rem", color: "var(--gray-1)", marginBottom: "8px"}}>TRAINERS TODAY</div>
                    <div style={{fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: "700", color: "var(--brand-glow)"}}>8/10</div>
                  </div>
                  <div style={{background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "10px"}}>
                    <div style={{fontSize: "0.7rem", color: "var(--gray-1)", marginBottom: "8px"}}>PT SESSIONS</div>
                    <div style={{fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: "700", color: "var(--accent)"}}>14</div>
                  </div>
                </div>
                <div className="mock-row" style={{marginTop: "12px"}}>
                  <div className="mock-avatar" style={{background: "linear-gradient(135deg,#7E57C2,#5E35B1)"}}></div>
                  <div style={{flex: 1}}><div className="mock-line w60"></div></div>
                  <div className="mock-badge active">Present</div>
                </div>
                <div className="mock-row">
                  <div className="mock-avatar" style={{background:"linear-gradient(135deg,#26A69A,#00897B)"}}></div>
                  <div style={{flex: 1}}><div className="mock-line w80"></div></div>
                  <div className="mock-badge active">Present</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-block fade-up">
            <div className="feature-text">
              <h3>Financial Reports &amp; Transaction History</h3>
              <p>
                Know exactly where your money is going. Track every transaction, view detailed reports, 
                and download financial data whenever you need it. No more guesswork with your gym&apos;s finances.
              </p>
              <ul className="feature-list">
                <li>Complete transaction history with date-wise filters</li>
                <li>Downloadable financial reports (PDF &amp; Excel)</li>
                <li>Revenue tracking, pending payments, and collection summaries</li>
                <li>Clean, easy-to-read report dashboard</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-ui">
                <div className="mock-bar"><div className="mock-dot"></div><div className="mock-dot"></div><div className="mock-dot"></div></div>
                <div style={{background:"rgba(255,255,255,0.02)", padding:"16px", borderRadius:"10px", marginBottom:"12px"}}>
                  <div style={{fontSize:"0.7rem", color:"var(--gray-1)", marginBottom:"4px"}}>THIS MONTH REVENUE</div>
                  <div style={{fontFamily:"var(--font-display)", fontSize:"1.8rem", fontWeight:"700", color:"var(--white-pure)"}}>₹2,45,800</div>
                  <div style={{fontSize:"0.72rem", color:"var(--brand-glow)", marginTop:"4px"}}>↑ 12% from last month</div>
                </div>
                <div style={{display:"flex", gap:"8px", height:"60px", alignItems:"flex-end"}}>
                  <div style={{flex: 1, background: "var(--brand)", borderRadius: "4px 4px 0 0", height: "30%"}}></div>
                  <div style={{flex: 1, background: "var(--brand)", borderRadius: "4px 4px 0 0", height: "50%"}}></div>
                  <div style={{flex: 1, background: "var(--brand)", borderRadius: "4px 4px 0 0", height: "40%"}}></div>
                  <div style={{flex: 1, background: "var(--brand)", borderRadius: "4px 4px 0 0", height: "65%"}}></div>
                  <div style={{flex: 1, background: "var(--brand)", borderRadius: "4px 4px 0 0", height: "55%"}}></div>
                  <div style={{flex: 1, background: "var(--brand)", borderRadius: "4px 4px 0 0", height: "80%"}}></div>
                  <div style={{flex: 1, background: "var(--brand-glow)", borderRadius: "4px 4px 0 0", height: "100%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ PLANS ════════════ */}
      <section className="plans" id="plans">
        <div className="container">
          <div className="section-label">Plans</div>
          <h2>Pick the Plan That Fits Your Gym</h2>
          <p className="section-desc">
            Start with the basics or go all-in. Every plan comes with a 30-day free trial, 
            dedicated support, and regular updates. Pay monthly or yearly — your choice.
          </p>

          <div className="plans-grid">
            <div className="plan-card fade-up">
              <div className="plan-name">Starter</div>
              <div className="plan-desc">All the essentials to manage your gym digitally from day one.</div>
              <ul className="plan-features">
                <li>Member management &amp; profiles</li>
                <li>Trainer management &amp; attendance</li>
                <li>Plan creation &amp; renewal</li>
                <li>Transaction tracking</li>
                <li>Financial reports &amp; downloads</li>
                <li>Member attendance (manual)</li>
                <li>WhatsApp &amp; call from profile</li>
                <li className="disabled">Fingerprint attendance</li>
                <li className="disabled">Member self-service login</li>
                <li className="disabled">Online plan top-up</li>
              </ul>
              <button onClick={(e) => { e.preventDefault(); openModal("Gym Starter Trial"); }} className="plan-btn w-full">Start Free Trial</button>
            </div>

            <div className="plan-card popular fade-up">
              <div className="plan-popular-tag">Most Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-desc">Automate attendance with biometric integration for real accuracy.</div>
              <ul className="plan-features">
                <li>Everything in Starter</li>
                <li>Fingerprint machine integration</li>
                <li>Biometric member attendance</li>
                <li>Biometric trainer attendance</li>
                <li>Automated attendance reports</li>
                <li>Hardware setup support</li>
                <li className="disabled">Member self-service login</li>
                <li className="disabled">Online plan top-up</li>
              </ul>
              <button onClick={(e) => { e.preventDefault(); openModal("Gym Pro Trial"); }} className="plan-btn w-full">Start Free Trial</button>
            </div>

            <div className="plan-card fade-up">
              <div className="plan-name">Growth</div>
              <div className="plan-desc">Give your members their own login to view plans, payments, and more.</div>
              <ul className="plan-features">
                <li>Everything in Pro</li>
                <li>Member self-service portal</li>
                <li>Members view active plans</li>
                <li>Members view payment history</li>
                <li>Members view attendance records</li>
                <li>Member notifications &amp; alerts</li>
                <li className="disabled">Online plan top-up</li>
              </ul>
              <button onClick={(e) => { e.preventDefault(); openModal("Gym Growth Trial"); }} className="plan-btn w-full">Start Free Trial</button>
            </div>

            <div className="plan-card fade-up">
              <div className="plan-name">Elite</div>
              <div className="plan-desc">Full automation — online payments and smart access control for your gym.</div>
              <ul className="plan-features">
                <li>Everything in Growth</li>
                <li>Online plan top-up by members</li>
                <li>Magnetic door lock integration</li>
                <li>Active-members-only entry access</li>
                <li>Automated access management</li>
                <li>Priority support &amp; onboarding</li>
              </ul>
              <button onClick={(e) => { e.preventDefault(); openModal("Gym Elite Trial"); }} className="plan-btn w-full">Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section className="how" id="how">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2>Up and Running in 4 Simple Steps</h2>
          <p className="section-desc">No technical skills needed. We handle everything so you can focus on running your gym.</p>

          <div className="steps">
            <div className="step fade-up">
              <h3>Book Your Free Trial</h3>
              <p>Fill out the form and tell us about your gym. No credit card, no deposit — just your details.</p>
            </div>
            <div className="step fade-up">
              <h3>We Set Up Your App</h3>
              <p>We build your custom-branded gym app with your logo, name, and chosen plan features. Ready within days.</p>
            </div>
            <div className="step fade-up">
              <h3>Try It for 30 Days</h3>
              <p>Use every feature freely for a full month. Train your staff, add your members, run your gym.</p>
            </div>
            <div className="step fade-up">
              <h3>Choose Your Plan</h3>
              <p>Loved it? Pick a monthly or yearly plan. Want more features? We customise it for you. Simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ DEVICE SECTION ════════════ */}
      <section className="device-section">
        <div className="container">
          <div className="section-label">Works Everywhere</div>
          <h2>One App. Every Device.</h2>
          <p className="section-desc" style={{margin: "0 auto 0"}}>
            Built as a Progressive Web App — no app store downloads, no compatibility issues. 
            Just open it in any browser and start managing your gym.
          </p>
          <div className="device-grid">
            <div className="device-item fade-up"><div className="device-icon">📱</div><div className="device-label">Android</div></div>
            <div className="device-item fade-up"><div className="device-icon">🍎</div><div className="device-label">iPhone</div></div>
            <div className="device-item fade-up"><div className="device-icon">📟</div><div className="device-label">Tablet</div></div>
            <div className="device-item fade-up"><div className="device-icon">💻</div><div className="device-label">Laptop</div></div>
            <div className="device-item fade-up"><div className="device-icon">🖥️</div><div className="device-label">Desktop</div></div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-label" style={{textAlign: "center"}}>FAQ</div>
          <h2 style={{textAlign: "center"}}>Got Questions? We Have Answers.</h2>

          <div className="faq-list">
            <FaqItem 
              question="Is the free trial really free? No hidden charges?"
              answer="Yes, completely free. You get full access to your chosen plan for 30 days. No credit card is required, no security deposit, and no automatic billing. You only pay if you decide to continue after the trial."
            />
            <FaqItem 
              question="Do I need to install anything?"
              answer="No. Our app is a Progressive Web App (PWA), which means it runs directly in your browser. You can also add it to your home screen for quick access — it works and feels like a native app, without the need for any downloads."
            />
            <FaqItem 
              question="Will the app have my gym's name and logo?"
              answer="Absolutely. Every gym gets a completely custom-branded version of the app. Your logo, your gym name, and your identity — your members and staff will only see your brand, not ours."
            />
            <FaqItem 
              question="Can I request custom features that are not in any plan?"
              answer="Yes, that's one of our biggest strengths. If your gym needs a specific feature or workflow, we will customise the app for you. You get tailor-made software without the time and cost of building something from scratch."
            />
            <FaqItem 
              question="What happens after the free trial ends?"
              answer="After 30 days, you choose to continue with a monthly or yearly subscription — whichever suits you. If you decide it's not the right fit, you simply walk away. No penalties, no obligations."
            />
            <FaqItem 
              question="Is support included in every plan?"
              answer="Yes. Every plan includes our dedicated support team and future updates. If you find a bug or need help, we are just a message away — and all bug fixes are covered at no extra cost."
            />
            <FaqItem 
              question="Can I upgrade my plan later?"
              answer="Of course. You can start with Starter and move to Pro, Growth, or Elite whenever you are ready. Upgrading is seamless and we handle the transition for you."
            />
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="final-cta" id="start">
        <div className="cta-box">
          <div className="section-label">Ready to Get Started?</div>
          <h2>Start Your Free 30-Day Trial Today</h2>
          <p>No credit card. No commitments. Just a better way to manage your gym.</p>
          <button onClick={(e) => { e.preventDefault(); openModal("Gym Application Trial"); }} className="btn btn-primary" style={{fontSize: "1.05rem", padding: "18px 44px"}}>
            Book Your Free Trial Now →
          </button>
          <p style={{marginTop: "16px", fontSize: "0.8rem", color: "var(--gray-1)"}}>
            We will set up your custom-branded app and have it ready for you within days.
          </p>
        </div>
      </section>
    </>
  );
}
