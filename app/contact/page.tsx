import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "@/components/icons";
import { InquiryForm } from "@/components/inquiry-form";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <h1>Contact</h1>
          <p className="subpage-lead">Talk with admissions about exams, preparation and next steps.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
        </div>
      </section>

      <section className="section">
        <div className="container contact-details-grid">
          <article className="contact-detail">
            <span className="contact-icon"><Phone size={20} /></span>
            <h3>Call admissions</h3>
            <a href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a>
          </article>
          <article className="contact-detail">
            <span className="contact-icon"><Mail size={20} /></span>
            <h3>Email</h3>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </article>
          <article className="contact-detail">
            <span className="contact-icon"><MapPin size={20} /></span>
            <h3>Address</h3>
            <p>{contact.address}</p>
          </article>
          <article className="contact-detail">
            <span className="contact-icon"><Clock size={20} /></span>
            <h3>Office hours</h3>
            <p>{contact.hours}</p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-layout">
          <div>
            <h2>Send an enquiry</h2>
            <p className="muted-copy">Use this form to start a conversation with the admissions desk.</p>
          </div>
          <div className="form-panel"><InquiryForm /></div>
        </div>
      </section>
    </>
  );
}
