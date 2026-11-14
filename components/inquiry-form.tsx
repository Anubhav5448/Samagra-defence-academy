"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/site-data";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const program = String(form.get("program") || "Not sure yet");
    const message = String(form.get("message") || "No additional message").trim();
    const subject = encodeURIComponent(`Coaching enquiry — ${program}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nProgram: ${program}\n\nMessage: ${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }

  return (
    <form className={`inquiry-form${compact ? " inquiry-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" placeholder="Full name" required />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Mobile number" required />
        </label>
      </div>
      <label>
        I’m interested in <span aria-hidden="true">*</span>
        <select name="program" defaultValue="" required>
          <option value="" disabled>Select a program</option>
          <option>NDA &amp; NA preparation</option>
          <option>SSB interview preparation</option>
          <option>CDS preparation</option>
          <option>AFCAT preparation</option>
          <option>Not sure — help me choose</option>
        </select>
      </label>
      {!compact && (
        <label>
          How can we help?
          <textarea name="message" rows={3} placeholder="Your question or goal (optional)" />
        </label>
      )}
      <div className="form-submit-row">
        <button className="button button-dark" type="submit">Send enquiry</button>
        <small>This opens your email app with your details filled in.</small>
      </div>
      {prepared && <p className="form-feedback" role="status">Your email app should open with the enquiry ready to send.</p>}
    </form>
  );
}
