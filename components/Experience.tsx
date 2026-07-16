import { experience } from "@/data/experience";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-shell section-block">
      <Reveal><p className="section-kicker">02 — Experience</p></Reveal>
      <Reveal><h2 className="section-title">Engineering products.<br />Leading teams.<br />Improving systems.</h2></Reveal>
      <div className="timeline">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.05}>
            <article className="experience-card">
              <div className="experience-meta">
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <p>{item.role}{item.location ? ` · ${item.location}` : ""}</p>
              </div>
              <div className="experience-body">
                <p>{item.summary}</p>
                <ul>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
