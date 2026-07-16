import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="section-shell section-block">
      <Reveal><p className="section-kicker">04 — Capabilities</p></Reveal>
      <Reveal><h2 className="section-title">Native craft, product thinking<br />and engineering systems.</h2></Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <article className="skill-group">
              <h3>{group.title}</h3>
              <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
