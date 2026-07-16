import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <footer id="contact" className="section-shell contact-section">
      <Reveal>
        <p className="section-kicker">05 — Contact</p>
        <h2>Let’s build something<br /><em>people remember.</em></h2>
        <p className="contact-copy">Open to ambitious iOS products, engineering leadership and meaningful collaborations.</p>
        <a className="contact-email" href="mailto:m.aakif.nadeem@gmail.com">m.aakif.nadeem@gmail.com <ArrowUpRight /></a>
        <div className="social-links">
          <a href="https://github.com/AakifNadeem" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-aakif-nadeem" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="mailto:m.aakif.nadeem@gmail.com"><Mail size={18} /> Email</a>
        </div>
        <div className="footer-line"><span>AN</span><p>Designed and engineered with care · Lahore, Pakistan</p></div>
      </Reveal>
    </footer>
  );
}
