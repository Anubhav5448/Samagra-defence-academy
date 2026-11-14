import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  { n: "01", title: "Tell us your goal", text: "Share the exam or entry you have in mind, along with any questions you want to discuss." },
  { n: "02", title: "Talk to admissions", text: "Speak with admissions about your current preparation, the available coaching and next steps." },
  { n: "03", title: "Review your route", text: "Go through the suggested study path, batch details and the official eligibility information for your entry." },
];

export default function AdmissionsPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <h1>Admissions</h1>
          <p className="subpage-lead">Tell us which exam you are preparing for. We will explain the preparation route and what to check next.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Admissions</span></nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How admissions works</h2>
          <ol className="steps-grid">
            {steps.map((step) => (
              <li key={step.n} className="step-item">
                <span className="step-index">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-layout">
          <h2>Check the official notice</h2>
          <div>
            <p className="on-dark">Age limits, education requirements, subjects and other eligibility conditions vary by exam, entry, branch and notification. Some entries also have separate selection stages. Check the current official notice for your chosen exam before you apply.</p>
            <div className="notice-links">
              <a href="https://upsc.gov.in/" target="_blank" rel="noreferrer">UPSC official website <ArrowUpRight size={16} /></a>
              <a href="https://afcat.cdac.in/" target="_blank" rel="noreferrer">AFCAT official portal <ArrowUpRight size={16} /></a>
            </div>
            <p className="fine-print on-dark">Samagra coaching is preparatory support, not an official recruiting or examination authority.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="enquiry">
        <div className="container split-layout">
          <div>
            <h2>Send an enquiry</h2>
            <p className="muted-copy">Share a few details and your email app will open with an enquiry for the admissions desk.</p>
          </div>
          <div className="form-panel"><InquiryForm /></div>
        </div>
      </section>
    </>
  );
}
