"use client";

import Link from "next/link";
import { FocusEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons";

const slides = [
  {
    eyebrow: "For aspirants",
    title: "Serving the nation starts with the preparation you do today.",
    copy: "Whether you are aiming for the NDA, CDS, AFCAT or the SSB interview, steady and guided preparation is how the goal becomes real.",
  },
  {
    eyebrow: "For parents and guardians",
    title: "Your child's ambition deserves the right guidance.",
    copy: "Classes at the academy, recordings on YouTube and straight answers from admissions, so your family knows what the preparation involves and what comes next.",
  },
  {
    eyebrow: "Every day counts",
    title: "Discipline is built one day at a time.",
    copy: "Show up, practise, review and repeat. Talk to us about a study plan that starts from where you are now.",
  },
  {
    eyebrow: "Recorded classes",
    title: "Missed a class? One day never has to set you back.",
    copy: "Classes are recorded and uploaded to YouTube, so you can catch up or revise a topic whenever you need to.",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  function leaveFocus(event: FocusEvent<HTMLElement>) {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setPaused(false);
  }

  return (
    <section
      className="hero"
      id="top"
      aria-label="Samagra Defence Academy highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={leaveFocus}
    >
      <div className="container hero-content">
        <div className="hero-copy" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1 key={activeSlide} className="hero-slide-title">{slide.title}</h1>
          <p className="hero-description">{slide.copy}</p>
          <div className="hero-learning-tags" aria-label="Class formats">
            <span>Classroom classes</span><span>Recorded on YouTube</span><span>Guided preparation</span>
          </div>
          <div className="hero-actions">
            <Link className="button button-accent" href="/programs">Explore programs <ArrowRight size={16} /></Link>
            <Link className="hero-link" href="/admissions">Ask about classes</Link>
          </div>
          <div className="hero-carousel-controls" aria-label="Carousel controls">
            <button type="button" className="carousel-arrow" aria-label="Previous slide" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)}><ArrowLeft size={16} /></button>
            <div className="carousel-dots">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  type="button"
                  className={`carousel-dot${index === activeSlide ? " is-active" : ""}`}
                  aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <button type="button" className="carousel-arrow" aria-label="Next slide" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}