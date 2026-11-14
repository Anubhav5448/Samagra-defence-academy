"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUp } from "@/components/icons";
import { academyName, contact } from "@/lib/site-data";

function Mark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand${light ? " brand-light" : ""}`} aria-label={`${academyName} home`}>
      <svg className="brand-mark" viewBox="0 0 275 200" aria-hidden="true">
  {/* open book */}
  <path d="M10 18C50 10 100 14 137 32V190C100 168 50 162 10 172Z" fill="#0f4c4f" />
  <path d="M265 18C225 10 175 14 137 32V190C175 168 225 162 265 172Z" fill="#0f4c4f" />
  <path d="M24 34C60 28 104 32 130 46V168C104 154 58 150 24 156Z" fill="#fff" />
  <path d="M251 34C215 28 171 32 145 46V168C171 154 217 150 251 156Z" fill="#fff" />

  {/* bulb glass + neck */}
  <circle cx="137" cy="85" r="48" fill="#fff" stroke="#222" strokeWidth="6" />
  <path d="M108 118C113 128 114 134 114 142H160C160 134 161 128 166 118" fill="#fff" stroke="#222" strokeWidth="6" strokeLinejoin="round" />

  {/* bulb base */}
  <rect x="112" y="142" width="50" height="14" rx="3" fill="#222" />
  <rect x="121" y="158" width="32" height="10" rx="5" fill="#222" />

  {/* rays */}
  <g stroke="#f4c20d" strokeWidth="4" strokeLinecap="round">
    <path d="M111 70 102 65" />
    <path d="M122 59 117 50" />
    <path d="M137 55V45" />
    <path d="M152 59 157 50" />
    <path d="M163 70 172 65" />
  </g>

  {/* pencil */}
  <path d="M127 90 137 72 147 90Z" fill="#222" />
  <rect x="127" y="88" width="20" height="52" fill="#e03a2f" />
</svg>
      <span className="brand-copy">
        <strong>Samagra</strong>
        <small>DEFENCE ACADEMY</small>
      </span>
    </Link>
  );
}

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/#method", label: "How we prepare" },
  { href: "/#academy", label: "About" },
  { href: "/#resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>Coaching for NDA, SSB, CDS and AFCAT</span>
          <Link href="/admissions">Talk to admissions <ArrowRight size={14} /></Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <Mark />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav className={`main-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ))}
            <Link className="button button-dark nav-cta" href="/admissions" onClick={() => setMenuOpen(false)}>
              Enquire now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <Mark light />
          <p>Coaching for NDA, SSB, CDS and AFCAT.</p>
        </div>
        <div className="footer-links-col">
          <span className="footer-label">Explore</span>
          <Link href="/programs">Programs</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/#resources">Resources</Link>
        </div>
        <div className="footer-links-col">
          <span className="footer-label">Contact</span>
          <a href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <Link href="/contact">Contact page</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Samagra Defence Academy</span>
        <Link href="/#top" className="back-top">Back to top <ArrowUp size={14} /></Link>
      </div>
    </footer>
  );
}