import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { HeroCarousel } from "@/components/hero-carousel";
import { InquiryForm } from "@/components/inquiry-form";
import { OnlineClassSection } from "@/components/online-class-section";
import { programs, resources } from "@/lib/site-data";

const approach = [
  { title: "Check where you stand", copy: "Work out what you know, where you want to go and what the next exam asks of you." },
  { title: "Practise regularly", copy: "Build a steady study routine with subject practice, reflection and guided discussion." },
  { title: "Act on feedback", copy: "Turn your next question or mock exercise into a practical improvement plan." },
];

const about = [
  { title: "Mission", copy: "Help each aspirant understand the entry, the preparation ahead and the next practical step." },
  { title: "Teaching approach", copy: "Build subject knowledge through focused practice, reflection and useful feedback." },
  { title: "Candidate support", copy: "Give candidates and families clear guidance from their first questions through the preparation journey." },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <OnlineClassSection />

      <section className="section" id="programs">
        <div className="container">
          <div className="section-head">
            <h2>Programs</h2>
            <div className="section-head-aside">
              <p>Pick the exam you are preparing for. Each program covers the focus areas, a study outline and how to ask admissions about batches.</p>
              <Link className="text-link" href="/programs">View all programs <ArrowRight size={14} /></Link>
            </div>
          </div>
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
          <p className="fine-print">Content and availability depend on the current intake. Confirm details with admissions.</p>
        </div>
      </section>

      <section className="section section-alt" id="academy">
        <div className="container split-layout">
          <div>
            <h2>About Samagra</h2>
            <p className="muted-copy">Our mission is to give defence aspirants clear direction and practical preparation for their next step toward service.</p>
          </div>
          <ul className="plain-list">
            {about.map((item) => (
              <li key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark" id="method">
        <div className="container split-layout">
          <div>
            <h2>How we prepare</h2>
            <p className="on-dark">Good preparation is more than covering a syllabus. It means learning, applying and improving in a steady routine.</p>
            <Link className="button button-outline-light" href="/admissions">Talk to admissions <ArrowRight size={16} /></Link>
          </div>
          <ol className="method-steps">
            {approach.map((step, index) => (
              <li className="method-step" key={step.title}>
                <span className="step-num">{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="container">
          <div className="section-head">
            <h2>Preparation resources</h2>
            <div className="section-head-aside"><p>Study tips, and links to official exam notices.</p></div>
          </div>
          <div className="resource-list">
            {resources.map((resource) => {
              const external = resource.href.startsWith("http");
              return (
                <article className="resource-row" key={resource.title}>
                  <span className="resource-label">{resource.label}</span>
                  <div className="resource-content"><h3>{resource.title}</h3><p>{resource.copy}</p></div>
                  <Link
                    className="resource-action"
                    href={resource.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    aria-label={external ? `${resource.action} (opens in a new tab)` : resource.action}
                  >
                    {external ? <ArrowUpRight size={18} /> : <ArrowRight size={18} />}
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="fine-print">Exam dates, eligibility, vacancies and rules may change. Confirm them in the current official notification.</p>
        </div>
      </section>

      <section className="section section-accent" id="enquiry">
        <div className="container split-layout">
          <div>
            <h2>Ask about admissions</h2>
            <p className="on-accent">Tell us which exam you are preparing for and we will help you with the next step.</p>
          </div>
          <div className="form-panel"><InquiryForm compact /></div>
        </div>
      </section>
    </>
  );
}
