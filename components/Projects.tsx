"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="section-shell section-block">
      <p className="section-kicker">03 — Selected work</p>
      <div className="work-heading">
        <h2>Products designed to be used,<br />not merely viewed.</h2>
        <p>Selected projects across social, art, events, health, media, real estate and enterprise technology.</p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            className={`project-row ${index % 2 === 1 ? "project-row-reverse" : ""} ${project.featured ? "project-featured" : ""}`}
            style={{ "--project-accent": project.accent } as React.CSSProperties}
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-copy">
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer">View on the App Store <ExternalLink size={16} /></a>}
            </div>
            <motion.div className={`project-media ${!project.image ? "project-placeholder" : ""}`} whileHover={{ rotateX: 1.5, rotateY: -1.5, scale: 1.012 }} transition={{ type: "spring", stiffness: 180, damping: 20 }}>
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.image} alt={`${project.title} application presentation`} loading="lazy" />
              ) : (
                <div className="fadfed-placeholder"><span>FadFed showcase</span><strong>Primary project image coming next</strong><p>Reserved for the live product presentation.</p></div>
              )}
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
