import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { ProgramDetail } from "@/lib/site-data";

export function ProgramDetailPage({ program }: { program: ProgramDetail }) {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <p className="hero-kicker">{program.eyebrow}</p>
          <h1>{program.name}</h1>
          <p className="subpage-lead">{program.description}</p>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/programs">Programs</Link><span>/</span><span>{program.name}</span></nav>
        </div>
      </section>

      <section className="section">
        <div className="container course-overview-layout">
          <div className="course-overview-copy">
            <h2>Preparation approach</h2>
            <p>{program.overview}</p>
            <p className="fine-print">Batch dates, class format, course coverage and availability are confirmed by admissions.</p>
            <Link className="button button-dark" href={`/admissions?program=${program.slug}`}>Ask about {program.name} <ArrowRight size={16} /></Link>
          </div>
          <aside className="course-focus-panel">
            <h2>Preparation focus</h2>
            <ul>{program.focus.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Study outline</h2>
          <ol className="steps-grid">
            {program.steps.map((step, index) => (
              <li className="step-item" key={step.title}>
                <span className="step-index">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container course-notice-inner">
          <div>
            <h2>Check current requirements</h2>
            <p>{program.officialNote}</p>
          </div>
          <div className="course-notice-links">
            {program.officialHref ? (
              <a className="button button-outline-light" href={program.officialHref} target="_blank" rel="noreferrer">{program.officialLabel} <ArrowUpRight size={16} /></a>
            ) : (
              <Link className="button button-outline-light" href="/admissions">Ask for guidance <ArrowRight size={16} /></Link>
            )}
            <Link className="button button-accent" href={`/admissions?program=${program.slug}`}>Talk to admissions <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
