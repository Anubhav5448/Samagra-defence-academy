import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <h1>Programs</h1>
          <p className="subpage-lead">Coaching for NDA &amp; NA, SSB interview, CDS and AFCAT. Each program page covers the preparation focus, a study outline and how to ask admissions about availability.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Programs</span></nav>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.id}>
                <span className="card-eyebrow">{program.eyebrow}</span>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <ul className="tag-list">{program.focus.map((focus) => <li key={focus}>{focus}</li>)}</ul>
                <Link className="card-link" href={program.href}>View program <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
          <div className="cta-band">
            <h2>Not sure which program fits?</h2>
            <Link className="button button-dark" href="/admissions">Talk to admissions <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
