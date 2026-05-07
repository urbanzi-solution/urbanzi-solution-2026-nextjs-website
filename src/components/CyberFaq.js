"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a Vulnerability Assessment and Penetration Test (VAPT)?",
    a: "A VAPT is a two-phase security evaluation. The vulnerability assessment systematically identifies weaknesses in your systems. The penetration test then simulates a real attack to exploit those vulnerabilities — giving you a true picture of what a hacker could do. Together, they are the most thorough way to understand your security posture.",
  },
  {
    q: "How often should a business conduct a security audit?",
    a: "For most businesses, a full security audit annually is the minimum. However, you should also run assessments after major changes — a new app launch, infrastructure migration, or significant system update. High-risk sectors like finance and healthcare benefit from quarterly reviews.",
  },
  {
    q: "Will the penetration test disrupt our live systems?",
    a: "No. We agree on a clear scope and testing window with you before any work begins. Testing is conducted in a controlled manner designed to minimise disruption. For sensitive systems, we can test in staging environments or during off-peak hours.",
  },
  {
    q: "Do you provide a report after the assessment?",
    a: "Yes — every engagement includes a detailed report with an executive summary, full technical findings, severity ratings (critical, high, medium, low), root cause analysis, and step-by-step remediation guidance. We also walk your team through the findings in a follow-up call.",
  },
  {
    q: "Is my business too small to need cybersecurity?",
    a: "No. Attackers actively target small and mid-sized businesses precisely because they assume they are less protected. In India, SMBs account for the majority of reported cyber incidents. A breach can result in financial loss, reputational damage, and legal liability — regardless of company size.",
  },
  {
    q: "What is the difference between a firewall and a cybersecurity audit?",
    a: "A firewall is a single technical control — it filters traffic based on rules. A cybersecurity audit is a comprehensive evaluation of your entire security posture: configurations, access controls, code, policies, processes, and human behaviours. Firewalls are part of security; audits tell you whether your overall security is working.",
  },
  {
    q: "Do you help with GDPR or IT Act compliance?",
    a: "Yes. We assess your current data handling practices against GDPR, India's IT Act 2000, and DPDP Act requirements — and provide a compliance gap report with actionable remediation steps. We do not provide legal advice, but we work alongside your legal team on technical compliance.",
  },
];

export default function CyberFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white pt-10 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-14">
          Frequently Asked{" "}
          <span className="text-emerald-400 italic">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-white/12 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base md:text-lg font-medium">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-emerald-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-white/65 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
