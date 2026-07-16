import { Reveal } from "./Reveal";

const metrics = [
  ["6+", "Years building iOS"],
  ["60K+", "Daily active users"],
  ["25+", "Major features shipped"],
  ["30%", "Debugging time reduced"]
];

export function About() {
  return (
    <section id="about" className="section-shell section-block">
      <Reveal><p className="section-kicker">01 — About</p></Reveal>
      <div className="about-layout">
        <Reveal>
          <h2>I turn complex product ideas into <em>fast, stable and intuitive</em> mobile experiences.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="about-copy">
            <p>Over 6+ years, I have shipped consumer and enterprise products using Swift, SwiftUI, UIKit and Objective-C.</p>
            <p>My work spans architecture modernization, performance, testing, CI/CD, cloud integrations, feature experimentation and team leadership.</p>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div className="profile-panel">
          <div className="profile-placeholder" aria-label="Profile photo placeholder">
            <span>AN</span>
            <small>Add profile image at<br /><code>public/profile/aakif.jpg</code></small>
          </div>
          <div>
            <p className="profile-label">Engineering philosophy</p>
            <blockquote>“The best mobile experiences feel simple because the difficult engineering work stays invisible.”</blockquote>
          </div>
        </div>
      </Reveal>
      <div className="metric-grid">
        {metrics.map(([value, label], index) => (
          <Reveal key={label} delay={index * 0.06}>
            <article className="metric-card"><strong>{value}</strong><span>{label}</span></article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
